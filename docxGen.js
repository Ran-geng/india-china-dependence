/* =====================================================================
 * docxGen.js — 纯前端、零依赖的 .docx 文档生成器
 * 原理：.docx 本质是 ZIP 包（此处用 STORE 不压缩，Word/LibreOffice 均可打开）。
 * 仅用浏览器原生能力（TextEncoder / Blob / URL.createObjectURL），
 * 不依赖任何 CDN 或第三方库，断网环境也可用。
 *
 * 用法：
 *   IndiaDocx.generateDocx({
 *     fileName: "报告.docx",
 *     title: "标题",
 *     meta: "副标题/落款（可选）",
 *     sections: [
 *       { type:"heading", text:"一、xxx" },
 *       { type:"para",    text:"正文……" },
 *       { type:"bullet",  text:"要点……" }
 *     ]
 *   });
 * ===================================================================== */
(function (global) {
  "use strict";

  /* ---------- CRC32（查表法） ---------- */
  const CRC_TABLE = (function () {
    const t = new Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      t[n] = (c >>> 0);
    }
    return t;
  })();
  function crc32(bytes) {
    let c = 0xFFFFFFFF;
    for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }
  const utf8 = (s) => new TextEncoder().encode(String(s));

  /* ---------- XML 转义 ---------- */
  function escapeXml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }

  const EA_FONT = '<w:rFonts w:ascii="宋体" w:hAnsi="宋体" w:eastAsia="宋体" w:cs="宋体"/>';

  function run(text, o) {
    o = o || {};
    let rPr = "<w:rPr>" + EA_FONT;
    if (o.bold) rPr += "<w:b/><w:bCs/>";
    if (o.size) rPr += `<w:sz w:val="${o.size}"/><w:szCs w:val="${o.size}"/>`;
    if (o.color) rPr += `<w:color w:val="${o.color}"/>`;
    rPr += "</w:rPr>";
    return `<w:r>${rPr}<w:t xml:space="preserve">${escapeXml(text)}</w:t></w:r>`;
  }
  function para(children, o) {
    o = o || {};
    let pPr = "";
    if (o.align) pPr = `<w:pPr><w:jc w:val="${o.align}"/></w:pPr>`;
    else if (o.indent) pPr = `<w:pPr><w:ind w:left="${o.indent}"/></w:pPr>`;
    const inner = Array.isArray(children) ? children.join("") : run(children, o);
    return `<w:p>${pPr}${inner}</w:p>`;
  }

  /* ---------- 各 Part 的 XML ---------- */
  function contentTypesXml() {
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
      '<Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
      "</Types>";
  }
  function relsXml() {
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
      "</Relationships>";
  }
  function documentXml(opts) {
    const body = [];
    body.push(para([run(opts.title || "分析报告", { bold: true, size: 32 })], { align: "center" }));
    if (opts.meta) body.push(para([run(opts.meta, { size: 18, color: "666666" })], { align: "center" }));
    body.push('<w:p><w:pPr><w:spacing w:after="240"/></w:pPr></w:p>'); // 间隔
    (opts.sections || []).forEach((s) => {
      if (s.type === "heading") body.push(para([run(s.text, { bold: true, size: 24 })]));
      else if (s.type === "bullet") body.push(para([run("•  " + s.text, { size: 21 })], { indent: 240 }));
      else body.push(para([run(s.text, { size: 21 })]));
    });
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
      "<w:body>" + body.join("") +
      '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/>' +
      '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr>' +
      "</w:body></w:document>";
  }

  /* ---------- 组装 ZIP（STORE 不压缩） ---------- */
  function buildDocxBytes(opts) {
    const files = [
      { name: "[Content_Types].xml", data: utf8(contentTypesXml()) },
      { name: "_rels/.rels", data: utf8(relsXml()) },
      { name: "word/document.xml", data: utf8(documentXml(opts)) }
    ];
    const chunks = [];
    const central = [];
    let offset = 0;

    files.forEach((f) => {
      const nameBytes = utf8(f.name);
      const crc = crc32(f.data);
      const size = f.data.length;

      const lh = new Uint8Array(30 + nameBytes.length);
      const ld = new DataView(lh.buffer);
      ld.setUint32(0, 0x04034b50, true);   // 本地文件头签名
      ld.setUint16(4, 20, true);            // version needed
      ld.setUint16(6, 0x0800, true);       // 通用标志：UTF-8 文件名
      ld.setUint16(8, 0, true);            // 压缩方法：store
      ld.setUint16(10, 0, true);           // 修改时间
      ld.setUint16(12, 0, true);           // 修改日期
      ld.setUint32(14, crc, true);
      ld.setUint32(18, size, true);         // 压缩后大小
      ld.setUint32(22, size, true);         // 未压缩大小
      ld.setUint16(26, nameBytes.length, true);
      ld.setUint16(28, 0, true);           // extra 长度
      lh.set(nameBytes, 30);
      chunks.push(lh, f.data);

      const cr = new Uint8Array(46 + nameBytes.length);
      const cd = new DataView(cr.buffer);
      cd.setUint32(0, 0x02014b50, true);  // 中央目录头签名
      cd.setUint16(4, 20, true);           // version made by
      cd.setUint16(6, 20, true);           // version needed
      cd.setUint16(8, 0x0800, true);      // 标志
      cd.setUint16(10, 0, true);           // 压缩方法
      cd.setUint16(12, 0, true);           // 时间
      cd.setUint16(14, 0, true);           // 日期
      cd.setUint32(16, crc, true);
      cd.setUint32(20, size, true);
      cd.setUint32(24, size, true);
      cd.setUint16(28, nameBytes.length, true);
      cd.setUint16(30, 0, true);           // extra
      cd.setUint16(32, 0, true);           // comment
      cd.setUint16(34, 0, true);           // disk start
      cd.setUint16(36, 0, true);           // internal attr
      cd.setUint32(38, 0, true);           // external attr
      cd.setUint32(42, offset, true);      // 本地头偏移
      cr.set(nameBytes, 46);
      central.push(cr);

      offset += lh.length + f.data.length;
    });

    const centralSize = central.reduce((a, c) => a + c.length, 0);
    const cdStart = offset;
    const eocd = new Uint8Array(22);
    const ed = new DataView(eocd.buffer);
    ed.setUint32(0, 0x06054b50, true);    // 中央目录结束签名
    ed.setUint16(4, 0, true);
    ed.setUint16(6, 0, true);
    ed.setUint16(8, files.length, true);    // 本卷条目数
    ed.setUint16(10, files.length, true);   // 总条目数
    ed.setUint32(12, centralSize, true);
    ed.setUint32(16, cdStart, true);
    ed.setUint16(20, 0, true);

    const total = chunks.reduce((a, c) => a + c.length, 0) + centralSize + 22;
    const out = new Uint8Array(total);
    let p = 0;
    chunks.forEach((c) => { out.set(c, p); p += c.length; });
    central.forEach((c) => { out.set(c, p); p += c.length; });
    out.set(eocd, p);
    return out;
  }

  /* ---------- 浏览器端下载 ---------- */
  function downloadDocx(opts) {
    opts.fileName = opts.fileName || "report.docx";
    const bytes = buildDocxBytes(opts);
    const blob = new Blob([bytes], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = opts.fileName;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 120);
  }

  const api = { generateDocx: downloadDocx, buildDocxBytes: buildDocxBytes };
  global.IndiaDocx = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;

})(typeof window !== "undefined" ? window : globalThis);
