/* =====================================================================
 * app.js — 渲染逻辑、图表、数据源面板、产品详情弹窗
 * 关键设计：弹窗事件「无条件」先于图表绑定；图表渲染独立 try/catch，
 * 任一图表失败都不会阻断弹窗/页面其余交互。
 * ===================================================================== */
(function(){
  "use strict";

  const $  = (s,el=document)=>el.querySelector(s);
  const $$ = (s,el=document)=>Array.from(el.querySelectorAll(s));
  const cite = id => `<a class="cite-ref" href="#sources" data-cite="${id}">${id}</a>`;

  /* ---------- 实时数据覆盖（预留接口：由 update_data.py 生成 window.LIVE_TRADE 后启用） ---------- */
  /* 当前数据文件均未定义 LIVE_TRADE，此段恒不执行；保留供自动更新脚本接入。 */
  const LIVE = (typeof window !== "undefined" && window.LIVE_TRADE) ? window.LIVE_TRADE : null;
  if (LIVE) {
    if (LIVE.tradeHistory) {
      TRADE_HISTORY.years    = LIVE.tradeHistory.years;
      TRADE_HISTORY.imports  = LIVE.tradeHistory.imports;
      TRADE_HISTORY.exports  = LIVE.tradeHistory.exports;
      TRADE_HISTORY.deficit  = LIVE.tradeHistory.deficit;
    }
    DEPENDENCE_INDUSTRIES.forEach(d=>{
      const m = LIVE.modules && LIVE.modules[d.name];
      if (!m) return;
      if (m.tradeYearly && m.tradeYearly.length)   d.detail.tradeYearly = m.tradeYearly;
      if (m.tradeMonthly && m.tradeMonthly.length) d.detail.tradeMonthly = m.tradeMonthly;
    });
  }

  /* ---------- 移动端导航 ---------- */
  const toggle = $("#navToggle"), links = $("#navLinks");
  toggle && toggle.addEventListener("click", ()=>links.classList.toggle("open"));
  $$(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

  /* ---------- Hero 指标条 ---------- */
  $("#heroStats").innerHTML = OVERVIEW_STATS.map(s=>`
    <div class="hstat">
      <div class="v">${s.value}${s.unit?` <small>${s.unit}</small>`:""}</div>
      <div class="l">${s.label}</div>
      <div class="cite">${s.note}　［来源 ${s.source}］</div>
    </div>`).join("");

  /* ---------- 概况 KPI 卡 ---------- */
  $("#kpiCards").innerHTML = OVERVIEW_STATS.map(s=>`
    <div class="card">
      <div class="num">${s.value}${s.unit?`<small> ${s.unit}</small>`:""}</div>
      <div class="lab">${s.label}${cite(s.source)}</div>
      <div class="note">${s.note}</div>
    </div>`).join("");

  /* ---------- 多源交叉验证：印度视角 vs 中国镜像 ---------- */
  function renderCrossCheck(){
    const cc = (typeof CROSS_CHECK !== "undefined") ? CROSS_CHECK : null;
    if(!cc) return;
    const rc = cc.recompute;
    const cols = cc.reporters.map(x=>`
      <div class="xcheck-col">
        <div class="xcheck-head"><span class="flag ${x.flag}"></span> ${x.who}</div>
        <div class="xcheck-org">${x.org}</div>
        <div class="xcheck-basis">${x.basis}</div>
        <div class="xcheck-rows">
          <div class="xcheck-row"><span>${x.labelA}</span><b>$${x.valA}B</b></div>
          <div class="xcheck-row"><span>${x.labelB}</span><b>$${x.valB}B</b></div>
          <div class="xcheck-row deficit"><span>${x.labelD}</span><b>$${x.valD}B</b></div>
        </div>
        <a class="xcheck-src" href="${x.url}" target="_blank" rel="noopener">来源：${x.srcLabel} ↗</a>
      </div>`).join("");
    $("#crossCheck").innerHTML = `
      <div class="xcheck-card">
        <div class="sub">印度视角（报告国=印度）与中国镜像（报告国=中国）对照；差异来自 FOB/CIF 估值与经港转口，属正常镜像偏差，不矛盾。</div>
        <div class="xcheck-grid">${cols}</div>
        <div class="xcheck-recon">
          <div class="xcheck-recon-gap">两口径差额 <b>$${rc.gap_abs}B</b>（约 <b>${rc.gap_pct}%</b>）</div>
          <p>${rc.verdict}</p>
          <p class="xcheck-third">${rc.third}</p>
        </div>
        <div class="xcheck-note">*两国进出口因统计年度（印度财年 / 中国自然年）与 FOB/CIF 估值差异不完全对应；量级一致、差异已标注。</div>
      </div>`;
  }

  /* ---------- 印度视角 · DGCIS/TIA 官方数据交叉校验 ---------- */
  function renderTiaCross(){
    const t = (typeof TIA_TOTAL_TRADE !== "undefined") ? TIA_TOTAL_TRADE : null;
    if(!t) return;
    const fy = "2025-26";
    const tIdx = t.years.indexOf(fy);
    const hIdx = (typeof TRADE_HISTORY !== "undefined") ? TRADE_HISTORY.years.indexOf(fy) : -1;
    if(tIdx < 0 || hIdx < 0) return;
    const impTotal = t.imports_bn[tIdx];      // 602.07（FY2025-26 对全球总额，十亿美元）
    const expTotal = t.exports_bn[tIdx];
    const defTotal = t.deficit_bn[tIdx];
    const cnImp    = TRADE_HISTORY.imports[hIdx];  // 131.63（FY2025-26 自华双边，十亿美元）
    const share    = (cnImp / impTotal * 100).toFixed(1); // ≈21.9%
    const partners = (typeof TIA_TOP_PARTNERS !== "undefined") ? TIA_TOP_PARTNERS.slice(0,5) : [];
    const lastUpd = (typeof TIA_LAST_UPDATED !== "undefined") ? TIA_LAST_UPDATED : "";
    const cells = [
      { num: "$"+impTotal.toFixed(1)+"B", lab: "印度总进口（DGCIS/TIA，全部来源）" },
      { num: "$"+cnImp.toFixed(1)+"B",   lab: "其中自华进口（对华双边）" },
      { num: share+"%",                  lab: "中国占印度进口比重" },
      { num: "$"+defTotal.toFixed(1)+"B", lab: "印度总贸易逆差" }
    ];
    $("#tiaCross").innerHTML = `
      <div class="tia-card">
        <div class="sub">以印度为报告国（印度海关账本）看对华贸易；数据来自印度商工部 DGCIS 实时门户，与本站既有对华双边数据互相印证。财年 ${fy}${lastUpd?` · 抓取于 ${lastUpd}`:""}</div>
        <div class="tia-grid">
          ${cells.map(c=>`<div class="tia-cell"><div class="num">${c.num}</div><div class="lab">${c.lab}</div></div>`).join("")}
        </div>
        ${partners.length?`<div class="tia-partners"><b>印度前五大进口来源国：</b>${partners.map((p,i)=>`${i+1}. ${p}`).join("　·　")} —— <b>中国居第 1 位</b>。</div>`:""}
        <div class="tia-note">交叉验证：${cnImp} B（自华）÷ ${impTotal} B（总进口）= ${share}%，与上方头条“中国占印度进口比重 ${share}”一致。印度总进口/出口/逆差口径为对全球总额（DGCIS/TIA）；对华进口为双边口径（DGCIS/驻华使馆，来源 1、3）。</div>
      </div>`;
  }
  renderTiaCross();
  renderCrossCheck();
  renderMonthly();
  renderMilitaryEntities();
  renderExportControl();

  /* ---------- 月度贸易追踪 · 中印双边（中国海关口径，多年度） ---------- */
  function renderMonthly(){
    const M = (typeof MONTHLY_TRADE !== "undefined") ? MONTHLY_TRADE : null;
    if(!M) return;
    const el = $("#monthlyPanel");
    if(!el) return;
    const years = Object.keys(M.years).sort();
    const B = v => (v/10).toFixed(1);   // 亿 -> 十亿美元
    const sum = a => (a||[]).reduce((x,y)=>x+(+y||0),0);
    let cur = "2025"; if(!M.years[cur]) cur = years[years.length-1];
    let monthlyChart = null;   // 复用的 Chart 实例（切换年份时先销毁，避免泄漏）

    function draw(yr){
      const y = M.years[yr];
      if(!y) return;
      const tot = sum(y.total), exp = sum(y.chinaExp), imp = sum(y.chinaImp), def = sum(y.deficit);
      const isPartial = (y.months||[]).length < 12;
      const rows = (y.months||[]).map((mo,i)=>`
        <tr>
          <td>${mo}</td>
          <td>${y.total[i].toFixed(2)}</td>
          <td>${y.chinaExp[i].toFixed(2)}</td>
          <td>${y.chinaImp[i].toFixed(2)}</td>
          <td class="def">${y.deficit[i].toFixed(2)}</td>
        </tr>`).join("");
      const tabs = years.map(y2=>`<button class="myr ${y2===yr?'active':''}" data-yr="${y2}">${y2}${(M.years[y2].months||[]).length<12?' *':''}</button>`).join("");
      el.innerHTML = `
        <div class="monthly-card">
          <h3>月度贸易追踪 · 中印双边（中国海关口径，亿美元）</h3>
          <div class="sub">${M.note}</div>
          <div class="monthly-tabs">${tabs}</div>
          <div class="monthly-sum">
            <div class="ms"><b>$${B(tot)}B</b><span>${yr} 年累计双边${isPartial?'（截至 '+y.months[y.months.length-1]+'）':''}</span></div>
            <div class="ms"><b>$${B(exp)}B</b><span>中国对印出口</span></div>
            <div class="ms"><b>$${B(imp)}B</b><span>中国自印进口</span></div>
            <div class="ms def"><b>$${B(def)}B</b><span>中方顺差(=印逆差)</span></div>
          </div>
          <div class="monthly-chart-wrap"><canvas id="monthlyChart" height="170"></canvas></div>
          <table class="monthly-tbl">
            <thead><tr><th>月份</th><th>双边总额</th><th>中国对印出口</th><th>中国自印进口</th><th>中方顺差</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
          <div class="monthly-note">数据来源：${M.srcLabel}［${M.source}］。带 <b>*</b> 的年份为部分月份（截至当前）。注：中国为报告国口径，月度含 FOB/CIF 与经港转口因素；年度汇总与印度视角趋于一致（见上方多源交叉验证）。</div>
        </div>`;
      if(window.Chart){
        const ctx = document.getElementById("monthlyChart");
        if(ctx){
          if(monthlyChart) monthlyChart.destroy();   // 释放旧实例与 resize 监听
          monthlyChart = new Chart(ctx,{
            type:"bar",
            data:{ labels:y.months,
              datasets:[
                {type:"line",label:"双边总额",data:y.total,borderColor:"#c0392b",backgroundColor:"#c0392b",borderWidth:2,tension:.3,pointRadius:3,order:1},
                {label:"中国对印出口",data:y.chinaExp,backgroundColor:"rgba(192,57,43,.55)",borderRadius:4,order:2},
                {label:"中国自印进口",data:y.chinaImp,backgroundColor:"rgba(27,103,178,.6)",borderRadius:4,order:3}
              ]},
            options:{ responsive:true, plugins:{legend:{labels:{font:{size:11}}}},
              scales:{ y:{title:{display:true,text:"亿美元"},beginAtZero:true} } }
          });
        }
      }
    }
    draw(cur);
    el.addEventListener("click", e=>{
      const b = e.target.closest && e.target.closest(".myr");
      if(!b) return;
      cur = b.dataset.yr; draw(cur);
    });
  }

  /* ---------- 依赖产业卡片（可点击） ---------- */
  function renderDep(filter){
    const list = DEPENDENCE_INDUSTRIES
      .map((d,i)=>({d,i}))
      .filter(o=>filter==="all"||o.d.key===filter);
    $("#depGrid").innerHTML = list.map(o=>`
      <div class="dep-card" data-idx="${o.i}">
        <div class="grp">${o.d.group}</div>
        <div class="nm">${o.d.name}${cite(o.d.source)}</div>
        <div class="dep-val"><b>${o.d.dependency}%</b><span>对华依赖度</span></div>
        <div class="dep-meter"><div class="dep-fill" data-w="${o.d.dependency}"></div></div>
        <div class="desc">${o.d.metric}</div>
        <div class="more">查看详情</div>
      </div>`).join("");
    requestAnimationFrame(()=>{
      setTimeout(()=>$$(".dep-fill").forEach(f=>f.style.width=f.dataset.w+"%"),60);
    });
  }
  renderDep("all");
  $$("#depFilter button").forEach(b=>b.addEventListener("click",()=>{
    $$("#depFilter button").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    renderDep(b.dataset.f);
  }));

  /* =====================================================================
   * 产品详情弹窗 —— 无条件绑定，绝不因图表问题而失效
   * ===================================================================== */
  const modal = $("#depModal");
  let currentItem = null, currentTab = "year";
  let lastFocus = null;   // 记录打开弹窗前的焦点，关闭时归还（a11y）

  function tradeTable(arr, isYear){
    if(!arr || !arr.length){
      return `<div class="limited">暂无公开${isYear?"逐年":"逐月 / 周期"}的 HS 级中印双边贸易数据。` +
             (isYear ? "（该品类公开来源多仅提供有限年度点，详见下方模块说明。）"
                     : "（公开来源多仅提供年度或周期汇总，未单列逐月数据。）") + `</div>`;
    }
    return `<table class="hs-table"><thead><tr><th>周期</th><th>数值</th><th>说明</th></tr></thead><tbody>` +
      arr.map(r=>`<tr><td>${r.period}</td><td><b>${r.value}</b> ${r.unit||""}</td><td>${r.note||""}</td></tr>`).join("") +
      `</tbody></table>`;
  }

  function renderTradeBlock(){
    if(!currentItem) return;
    const d = currentItem;
    const isYear = currentTab==="year";
    const arr = isYear ? d.detail.tradeYearly : d.detail.tradeMonthly;
    const tb = $("#tradeBlock");
    if(tb) tb.innerHTML = tradeTable(arr, isYear);
  }

  /* ---------- 各产业「依赖情况及替代可能性」分析报告 ---------- */
  function relCls(level){
    const map = { "高":"lvl-high", "较高":"lvl-midhigh", "中":"lvl-mid", "较低":"lvl-lowmid", "低":"lvl-low" };
    return map[level] || "lvl-mid";
  }
  function buildReportSections(d){
    const det = d.detail || {};
    const rep = (typeof DEPENDENCE_REPORTS !== "undefined") ? DEPENDENCE_REPORTS[d.name] : null;
    const secs = [];
    secs.push({ type:"heading", text:"一、产业概况与对华依赖现状" });
    secs.push({ type:"para", text: det.intro || "" });
    secs.push({ type:"para", text:`对华依赖度：${d.dependency}%。${d.metric || ""}` });
    if (det.dependencyNote) secs.push({ type:"para", text:`印度对中国依赖情况：${det.dependencyNote}` });
    secs.push({ type:"heading", text:"二、具体依赖表现" });
    if (det.tradeYearly && det.tradeYearly.length){
      secs.push({ type:"para", text:"印度自华进口贸易数据（公开口径）：" });
      det.tradeYearly.forEach(r=>{
        secs.push({ type:"bullet", text:`${r.period}：${r.value}${r.unit?(" "+r.unit):""}${r.note?("，"+r.note):""}` });
      });
    } else if (det.note) {
      secs.push({ type:"para", text: det.note });
    } else {
      secs.push({ type:"para", text:"公开来源未提供该品类 HS 级逐年贸易数据，依赖度主要依据行业研究与企业披露估算。" });
    }
    if (det.alternatives && det.alternatives.length){
      const alt = det.alternatives.map(a=>`${a.country}（${a.note}）`).join("；");
      secs.push({ type:"para", text:"主要替代来源国/地区：" + alt + "。" });
    }
    secs.push({ type:"heading", text:"三、替代可能性评估" });
    secs.push({ type:"para", text: rep ? rep.substitution : "（该产业替代可能性分析暂缺，详见各模块数据。）" });
    secs.push({ type:"heading", text:"四、综合评估与展望" });
    secs.push({ type:"para", text: rep ? rep.outlook : "（该产业综合评估暂缺，详见各模块数据。）" });
    const srcIds = Array.from(new Set([...(det.sources||[]), ...(det.coSource||[])]));
    if (srcIds.length){
      secs.push({ type:"heading", text:"五、数据来源" });
      srcIds.forEach(id=>{
        const s = (typeof SOURCES !== "undefined") && SOURCES.find(x=>x.id===id);
        if (s) secs.push({ type:"bullet", text:`[${s.id}] ${s.name}` });
      });
    }
    return secs;
  }
  function repSecHTML(s){
    if (s.type === "heading") return `<h5 class="rep-h">${s.text}</h5>`;
    if (s.type === "bullet") return `<p class="rep-bullet">• ${s.text}</p>`;
    return `<p class="rep-p">${s.text}</p>`;
  }
  function reportBlock(d, idx){
    const secs = buildReportSections(d);
    return `
      <div class="rep-divider"></div>
      <h4 class="rep-title">印度对中国依赖情况及替代可能性分析报告</h4>
      <div class="report-block">
        ${secs.map(repSecHTML).join("")}
      </div>
      <div class="report-actions">
        <button class="dl-docx" id="dlDocx" data-idx="${idx}">⬇ 下载分析报告（DOCX）</button>
        <span class="dl-hint">点击后浏览器将直接生成并下载 Word 文档，无需联网</span>
      </div>`;
  }
  function buildDocxOpts(d){
    return {
      fileName: `印度对华依赖分析报告_${d.name}.docx`,
      title: `印度对中国「${d.name}」产业依赖情况及替代可能性分析报告`,
      meta: `印度对华产业依赖研究 · 数据整理于 ${typeof LAST_UPDATED !== "undefined" ? LAST_UPDATED : "2026"}`,
      sections: buildReportSections(d)
    };
  }

  /* ---------- 依赖度仪表盘（SVG 半圆弧，可动画） ---------- */
  function gaugeSVG(dep){
    const v = Math.max(0, Math.min(100, dep));
    return `<div class="gauge">
      <svg class="gauge-svg" viewBox="0 0 120 70" aria-hidden="true">
        <defs><linearGradient id="gGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#e0762a"/><stop offset="1" stop-color="#c23a32"/>
        </linearGradient></defs>
        <path class="g-track" d="M8 60 A52 52 0 0 1 112 60" pathLength="100"/>
        <path class="g-val" id="gVal" d="M8 60 A52 52 0 0 1 112 60" pathLength="100" style="stroke-dashoffset:100"/>
      </svg>
      <div class="g-center"><div class="g-num"><span id="gNum">0</span><span class="g-pct">%</span></div><div class="g-cap">对华依赖度</div></div>
    </div>`;
  }

  /* ---------- 出口管制合规标注辅助函数 ---------- */
  function ecMatch(indName, hs){
    if(typeof EXPORT_CONTROL === "undefined") return null;
    const list = EXPORT_CONTROL[indName] || [];
    if(!hs) return list[0] || null;
    return list.find(e=>hs.indexOf(e.hs)===0) || list[0] || null;
  }
  function ecBadgeHTML(d){
    const m = ecMatch(d.name, d.detail.hs && d.detail.hs[0] && d.detail.hs[0].code);
    if(!m) return "";
    return m.controlled
      ? ` <span class="badge b-ec b-ec-yes">两用物项 · 需许可证</span>`
      : ` <span class="badge b-ec b-ec-no">未列管</span>`;
  }
  function ecCellHTML(indName, hs){
    const m = ecMatch(indName, hs);
    if(!m) return `<span class="ec-na">—</span>`;
    if(m.controlled){
      return `<span class="ec-cell ec-yes" title="${m.basis}">● 管制 · 需许可</span>`;
    }
    return `<span class="ec-cell ec-no" title="未列入《两用物项出口管制清单》（以技术参数为准）">○ 未列管</span>`;
  }
  function ecNoteHTML(d){
    const m = ecMatch(d.name, d.detail.hs && d.detail.hs[0] && d.detail.hs[0].code);
    if(!m) return "";
    const basis = m.basis && m.basis!=="—" ? `　管制依据：${m.basis}。` : "";
    return `<div class="ec-detail-note">【出口管制】${m.controlled?"列入":"未列入"}《中华人民共和国两用物项出口管制清单》（商务部公告 2024 年第 51 号，2024-12-01 施行）${m.controlled?"，出口需向商务部申请两用物项出口许可证":""}。${basis}${m.note?" "+m.note:""}</div>`;
  }

  /* ---------- 交互式贸易流卡片 ---------- */
  function flowItemHTML(f){
    const seller = `<button type="button" class="chip f-seller co-jump" data-jump-name="${f.seller}" data-jump-side="seller" data-role="中国供应方（对华出口商）" data-tip="点击跳转上方中国主要出口商" title="点击跳转上方中国主要出口商 ${f.seller}">${f.seller}</button>`;
    const buyer  = `<button type="button" class="chip f-buyer co-jump" data-jump-name="${f.buyer}" data-jump-side="buyer" data-role="印度采购方（进口商）" data-tip="点击跳转上方印度主要采购商" title="点击跳转上方印度主要采购商 ${f.buyer}">${f.buyer}</button>`;
    const trans  = f.transship ? `<span class="arrow">→</span><span class="chip f-trans" data-role="经第三国中转（规避关税）" data-tip="中转地">经 ${f.via} 中转</span>` : "";
    const down   = `<span class="arrow">→</span><span class="f-down">${f.downstream}</span>`;
    const goods  = (f.goods || f.hs) ? `<div class="flow-goods"><span class="g-tag">商品</span>${f.goods || "—"}${f.hs ? `　<span class="g-hs">HS ${f.hs}</span>` : ""}</div>` : "";
    return `<div class="flow-item" tabindex="0">
        <div class="flow-chain">${seller}<span class="arrow">→</span>${buyer}${trans}${down}</div>
        ${goods}
        <div class="flow-badges">
          ${f.year ? `<span class="badge b-year">最近年份 ${f.year}</span>` : ""}
          ${f.transship ? `<span class="badge b-trans">中转 · ${f.via}</span>` : ""}
          ${f.military ? `<span class="badge b-mil">⚠ 军工</span>` : ""}
          <span class="badge ${f.confidence==="documented"?"b-doc":"b-rep"}">${f.confidence==="documented"?"已核实":"代表性推断"}</span>
        </div>
        <div class="flow-note">${f.note}${f.military ? (" ｜ "+f.militaryNote) : ""}${f.source?(" "+f.source.map(cite).join(" ")):""}</div>
        <div class="flow-caption" aria-live="polite"></div>
        <div class="flow-hint"><span class="chev">▾</span> 点击链路节点查看角色 · <b>点击企业名</b>可跳转到上方企业介绍 · 点击卡片展开 / 收起</div>
      </div>`;
  }

  /* 企业卡片：摘要行（名称 + 类型 + 关键指标），点击展开 profile 详情 */
  function coCardHTML(c){
    const p = c.profile || {};
    const rows = [
      ["总部", p.hq], ["成立", p.founded],
      ["主营业务", p.business], ["主要产品", p.products],
      ["对印贸易", p.tradeVolume], ["数据来源", p.sources],
      ["备注", p.note]
    ].filter(r=>r[1]);
    const grid = rows.map(r=>`<div class="co-cell ${r[0]==="总部"||r[0]==="成立"?"":"span2"}">
        <span class="co-lbl">${r[0]}</span><span class="co-val">${r[1]}</span>
      </div>`).join("");
    // 军方关联度（查 MILITARY_LINK 映射，无则默认「无公开军方关联」）
    let milBadge = "";
    let milCell = "";
    if (typeof MILITARY_LINK !== "undefined" && MILITARY_LINK[c.name]) {
      const m = MILITARY_LINK[c.name];
      const cls = m.level==="direct" ? "mil-dir" : (m.level==="indirect" ? "mil-ind" : "mil-none");
      const lbl = m.level==="direct" ? "直接" : (m.level==="indirect" ? "间接" : "无");
      milBadge = `<span class="badge mil-badge ${cls}">军关联 · ${lbl}</span>`;
      milCell = `<div class="co-cell span2"><span class="co-lbl">军方关联度</span><span class="co-val"><b class="${cls}">${lbl}</b> — ${m.note}</span></div>`;
    }
    return `<div class="co-card" data-co data-co-name="${c.name.replace(/"/g,'&quot;')}">
      <div class="co-summary" tabindex="0" aria-expanded="false">
        <div class="co-summ-main">
          <span class="co-name" data-co-name="${c.name.replace(/"/g,'&quot;')}">${c.name}</span>
          ${c.type ? `<span class="co-type">${c.type}</span>` : ""}
        </div>
        <div class="co-summ-side">
          ${c.top ? `<span class="co-top">${c.top}</span>` : ""}
          ${milBadge}
          ${c.military ? `<span class="badge b-mil">⚠ 军工</span>` : ""}
          <span class="co-toggle" aria-hidden="true">＋</span>
        </div>
      </div>
      <div class="co-detail" hidden>
        <div class="co-grid">${grid}${milCell}</div>
      </div>
    </div>`;
  }


  function openModal(idx){
    if(!modal) return;
    lastFocus = document.activeElement;
    const d = DEPENDENCE_INDUSTRIES[idx];
    if(!d || !d.detail) return;
    currentItem = d; currentTab = "year";
    $("#mGrp").textContent = d.group;
    $("#mName").textContent = d.name;
    $("#mDep").innerHTML = `对华依赖度 <b>${d.dependency}%</b> · ${d.metric}`;
    $("#mGauge").innerHTML = gaugeSVG(d.dependency);

    const overviewPane = `
      <p class="intro">${d.detail.intro}</p>
      <h4>印度对中国依赖情况</h4>
      <p class="rep-p">${d.detail.dependencyNote ? d.detail.dependencyNote : `对华依赖度 <b>${d.dependency}%</b>。${d.metric||""}`}</p>
      <div class="mini-note">对华依赖度（中国在该产业印度进口中的份额）：${d.dependency}%。${d.metric?(" "+d.metric):""}</div>`;

    const tradePane = `
      <h4>中印双边贸易数据（印度自华进口）</h4>
      <div class="toggle" id="tradeToggle">
        <button data-t="year" class="active">逐年</button>
        <button data-t="month">逐月 / 周期</button>
      </div>
      <div id="tradeBlock"></div>
      <h4>HS 编码分类明细${ecBadgeHTML(d)}</h4>
      <table class="hs-table"><thead><tr><th>HS 编码</th><th>品类</th><th>出口管制</th></tr></thead><tbody>
        ${d.detail.hs.map(h=>`<tr><td class="code">${h.code}</td><td>${h.name}</td><td>${ecCellHTML(d.name, h.code)}</td></tr>`).join("")}
      </tbody></table>
      <div class="mini-note">注：HS 编码为代表性税号；贸易额单位见上表对应数据行。${d.detail.note?(" "+d.detail.note):""}${ecNoteHTML(d)}</div>`;

    const supplyPane = `
      <h4>印度替代来源国家 / 地区</h4>
      <ul class="alt-list">
        ${d.detail.alternatives.map(a=>`<li><b>${a.country}</b> — ${a.note}</li>`).join("")}
      </ul>
      ${d.detail.diversify ? `
      <div class="diversify-box">
        <h4 class="d-title">多元化来源可能性（标注）</h4>
        <p>${d.detail.diversify}</p>
      </div>` : ""}
      ${d.detail.sellers && d.detail.sellers.length ? `
      <h4>中国主要出口商（出口方）</h4>
      <div class="co-list">
        ${d.detail.sellers.map(coCardHTML).join("")}
      </div>` : ""}
      ${d.detail.buyers && d.detail.buyers.length ? `
      <h4>印度主要采购商（进口方）</h4>
      <div class="co-list">
        ${d.detail.buyers.map(coCardHTML).join("")}
      </div>` : ""}
      ${d.detail.coNote ? `<div class="mini-note">注：${d.detail.coNote}</div>` : ""}
      ${(typeof TRADE_FLOWS!=="undefined" && TRADE_FLOWS[d.name]) ? `
      <h4>贸易流（中国供应商 → 印度采购商 → 下游）</h4>
      <div class="flow-list">
        ${TRADE_FLOWS[d.name].map(flowItemHTML).join("")}
      </div>
      <div class="mini-note">说明：公司级「一对一」海关提单多属付费源（ImportGenius/Volza/Panjiva），公开可查直供以厂商披露/行业报道为主；标「代表性推断」者为基于公开上下游代表的合理链路，非具体合同。中转 / 军工均依据公开证据标注。点击节点可查看其角色，点击卡片可展开 / 收起说明。</div>
      ` : ""}`;

    $("#mBody").innerHTML = `
      <div class="m-tabs" id="mTabs">
        <button data-tab="overview" class="active">概览</button>
        <button data-tab="trade">贸易数据</button>
        <button data-tab="supply">供应链与贸易流</button>
        <button data-tab="report">分析报告</button>
      </div>
      <div class="m-pane active" data-pane="overview">${overviewPane}</div>
      <div class="m-pane" data-pane="trade">${tradePane}</div>
      <div class="m-pane" data-pane="supply">${supplyPane}</div>
      <div class="m-pane" data-pane="report">${reportBlock(d, idx)}</div>
    `;

    renderTradeBlock();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
    /* 锁定背景滚动，并用 padding-right 补偿滚动条宽度避免抖动 */
    const sw = window.innerWidth - document.documentElement.clientWidth;
    if(sw > 0) document.body.style.paddingRight = sw + "px";
    document.body.style.overflow = "hidden";
    const firstFocus = modal.querySelector("#mTabs button, .modal-close, a, button");
    if(firstFocus) firstFocus.focus({preventScroll:true});

    /* 标签切换 */
    const tabs = $("#mTabs");
    if (tabs) tabs.addEventListener("click", e=>{
      const b = e.target.closest("button[data-tab]"); if(!b) return;
      $$("#mTabs button").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
      const t = b.dataset.tab;
      $$(".m-pane").forEach(p=>p.classList.toggle("active", p.dataset.pane===t));
    });

    /* 贸易数据切换（保留原逻辑） */
    $$("#tradeToggle button").forEach(b=>b.addEventListener("click",()=>{
      $$("#tradeToggle button").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
      currentTab = b.dataset.t;
      renderTradeBlock();
    }));

    /* 交互式贸易流：节点高亮 + 角色说明；卡片展开 / 收起 */
    $$(".flow-item").forEach(item=>{
      const cap = item.querySelector(".flow-caption");
      item.querySelectorAll(".chip").forEach(chip=>{
        chip.addEventListener("click", ev=>{
          // co-jump 按钮：委托给 document 级处理器实现跳转，不在此处处理；也不拦截冒泡
          if(chip.classList.contains("co-jump")) return;
          ev.stopPropagation();
          item.querySelectorAll(".chip").forEach(c=>c.classList.remove("picked"));
          chip.classList.add("picked");
          cap.innerHTML = `<b>${chip.dataset.role}</b>　${chip.textContent}`;
          cap.classList.add("show");
        });
      });
      item.addEventListener("click", ev=>{
        // 点击企业跳转按钮时不切换贸易流卡片
        if(ev.target.closest(".co-jump")) return;
        const opened = item.classList.toggle("open");
        if(!opened) cap.classList.remove("show");
      });
      item.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); item.click(); }});
    });

    /* 企业卡片：点击摘要行展开 / 收起详情 */
    $$(".co-card").forEach(card=>{
      const summ = card.querySelector(".co-summary");
      const det  = card.querySelector(".co-detail");
      if(!summ || !det) return;
      const toggle = ()=>{
        const opened = card.classList.toggle("open");
        det.hidden = !opened;
        summ.setAttribute("aria-expanded", opened ? "true" : "false");
      };
      summ.addEventListener("click", toggle);
      summ.addEventListener("keydown", e=>{
        if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); }
      });
    });

    /* 分析报告 DOCX 下载 */
    const dld = $("#dlDocx");
    if (dld) dld.addEventListener("click", ()=>{
      if (!window.IndiaDocx) { alert("报告生成组件未加载（docxGen.js）"); return; }
      try {
        window.IndiaDocx.generateDocx(buildDocxOpts(currentItem));
      } catch(e){ console.error("DOCX 生成失败：", e); alert("报告生成失败："+e.message); }
    });

    /* 仪表盘动画（视口出现后触发） */
    requestAnimationFrame(()=>{
      const gv = $("#gVal"); const gn = $("#gNum");
      if(gv) gv.style.strokeDashoffset = String(100 - d.dependency);
      if(gn){
        const target = d.dependency, t0 = performance.now(), dur = 1100;
        const step = now=>{
          const p = Math.min(1,(now-t0)/dur);
          const eased = 1-Math.pow(1-p,3);
          gn.textContent = Math.round(target*eased);
          if(p<1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    });
  }


  function closeModal(){
    if(!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    if(lastFocus && typeof lastFocus.focus === "function") lastFocus.focus({preventScroll:true});
    currentItem = null;
  }

  /* 卡片点击 → 弹窗（点角标则跳来源，不弹窗） */
  const depGridEl = $("#depGrid");
  if (depGridEl) depGridEl.addEventListener("click",e=>{
    if(e.target.closest(".cite-ref")) return;
    const card = e.target.closest(".dep-card");
    if(card) openModal(parseInt(card.dataset.idx,10));
  });
  const depCloseEl = $("#depClose"); if (depCloseEl) depCloseEl.addEventListener("click",closeModal);
  const depMaskEl = $("#depMask"); if (depMaskEl) depMaskEl.addEventListener("click",closeModal);
  document.addEventListener("keydown",e=>{ if(e.key==="Escape" && modal && modal.classList.contains("open")) closeModal(); });

  /* ---------- 来源声明：收起/展开 ---------- */
  const discEl = $("#sources");
  const discToggle = $("#discToggle");
  const discIcon = $("#discToggleIcon");
  function setDisc(open){
    if(!discEl) return;
    discEl.classList.toggle("collapsed", !open);
    if(discToggle) discToggle.setAttribute("aria-expanded", open?"true":"false");
    if(discIcon) discIcon.innerHTML = open ? `<span class="chev">▾</span> 收起` : `<span class="chev">▾</span> 展开`;
  }
  if(discToggle) discToggle.addEventListener("click",()=>{
    if(!discEl) return;
    setDisc(discEl.classList.contains("collapsed"));
  });
  // 通过锚点（导航「来源声明」或 #sources 直达）进入时自动展开
  $$('a[href="#sources"]').forEach(a=>a.addEventListener("click",()=>setDisc(true)));
  if(location.hash==="#sources") setDisc(true);

  /* ---------- 印度对华依赖产业总览分析：收起/展开 + DOCX 下载 ---------- */
  const ovEl = $("#overviewReport");
  const ovToggle = $("#ovToggle");
  const ovIcon = $("#ovToggleIcon");
  if (ovEl && ovToggle){
    const ovBody = $("#ovReportBody");
    if (ovBody && typeof DEPENDENCE_OVERVIEW_REPORT !== "undefined"){
      ovBody.innerHTML = DEPENDENCE_OVERVIEW_REPORT.map(repSecHTML).join("");
    }
    function setOv(open){
      if(!ovEl) return;
      ovEl.classList.toggle("collapsed", !open);
      ovToggle.setAttribute("aria-expanded", open?"true":"false");
      if(ovIcon) ovIcon.innerHTML = open ? `<span class="chev">▾</span> 收起` : `<span class="chev">▾</span> 展开`;
    }
    ovToggle.addEventListener("click",()=>{
      if(!ovEl) return;
      setOv(ovEl.classList.contains("collapsed"));
    });
    const dlOv = $("#dlOvDocx");
    if (dlOv) dlOv.addEventListener("click", ()=>{
      if (!window.IndiaDocx){ alert("报告生成组件未加载（docxGen.js）"); return; }
      try {
        window.IndiaDocx.generateDocx({
          fileName: "印度对华依赖产业总览分析.docx",
          title: "印度对华依赖产业总览分析",
          meta: `印度对华产业依赖研究 · 数据整理于 ${typeof LAST_UPDATED !== "undefined" ? LAST_UPDATED : "2026"}`,
          sections: (typeof DEPENDENCE_OVERVIEW_REPORT !== "undefined") ? DEPENDENCE_OVERVIEW_REPORT : []
        });
      } catch(e){ console.error("总览 DOCX 生成失败：", e); alert("报告生成失败："+e.message); }
    });
  }

  /* ---------- 折叠区块：印度视角 / 多源交叉验证（默认折叠，点击展开）---------- */
  function bindCollapse(wrapId, toggleId, iconId){
    const wrap = $("#"+wrapId), toggle = $("#"+toggleId), icon = $("#"+iconId);
    if (!wrap || !toggle) return;
    function setOpen(open){
      wrap.classList.toggle("collapsed", !open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (icon) icon.innerHTML = open
        ? `<span class="chev">▾</span> 收起`
        : `<span class="chev">▾</span> 展开`;
    }
    toggle.addEventListener("click", ()=> setOpen(wrap.classList.contains("collapsed")));
  }
  bindCollapse("tiaWrap","tiaToggle","tiaIcon");
  bindCollapse("crossCheckWrap","xcheckToggle","xcheckIcon");
  bindCollapse("srcWrap","srcToggle","srcIcon");

  /* ---------- 转口贸易路径 ---------- */
  const REL_LEGEND = `<div class="rel-scale">
      <span class="rel-scale-title">可靠性评级说明：</span>
      <span class="rel-badge lvl-high">高</span><span class="rel-scale-desc">证据确凿 / 官方来源</span>
      <span class="rel-badge lvl-midhigh">较高</span>
      <span class="rel-badge lvl-mid">中</span>
      <span class="rel-badge lvl-lowmid">较低</span>
      <span class="rel-badge lvl-low">低</span><span class="rel-scale-desc">推断 / 指控为主</span>
    </div>`;
  $("#routeFlow").innerHTML = REL_LEGEND + TRANSSHIPMENT_ROUTES.map(r=>{
    const parts = r.path.split("→").map(s=>s.trim());
    const chain = parts.map((p,i)=>{
      const cls = i===0?"cn":(i===parts.length-1?"in":"mid");
      const node = `<span class="node ${cls}">${p}</span>`;
      return i<parts.length-1 ? node+`<span class="arrow">→</span>` : node;
    }).join("");
    const cred = r.credibility || "—";
    const auth = r.authenticity || "—";
    return `<div class="route">
        <div class="chain">${chain}</div>
        <div class="goods">主要商品：<b>${r.goods}</b></div>
        <div class="rel-row">
          <span class="rel-label">可信程度</span><span class="rel-badge ${relCls(cred)}">${cred}</span>
          <span class="rel-label">真实程度</span><span class="rel-badge ${relCls(auth)}">${auth}</span>
        </div>
        ${r.credNote ? `<div class="rel-note">评估说明：${r.credNote}</div>` : ""}
        <div class="rdata">${r.data}${cite(r.source)}</div>
      </div>`;
  }).join("");

  const c = TRANSSHIPMENT_CONTEXT;
  $("#contextList").innerHTML = [
    `${c.carotar}${cite(14)}`,
    `${c.nomura}${cite(17)}`,
    `${c.asean}${cite(15)}`,
    `${c.verify}`,
    `${c.monitor}${cite(118)}`
  ].map(t=>`<li>${t}</li>`).join("");

  /* ---------- 转口贸易数据面板（基于官方贸易数据）---------- */
  if (typeof TRANSSHIPMENT_TRADE !== "undefined") {
    // 单位统一：所有数值以百万美元展示（列头已注明「金额，百万美元」，单元格仅显示金额数字）
    const fmt = v => (v==null||v===undefined) ? "—" : Number(v).toLocaleString("en-US");
    const yoy = (y, py) => (y!=null && py!=null && py>0) ? Math.round((y-py)/py*100) : null;
    const yoyStr = v => v==null ? "—" : (v>=0?`+${v}%`:`${v}%`);
    const allYears = (china, india) => {
      const s = new Set([...Object.keys(china.years||{}).map(Number), ...Object.keys(india.years||{}).map(Number)]);
      return [...s].sort((a,b)=>a-b);
    };

    $("#tdataNote").innerHTML = `<b>数据口径：</b>每条卡片以 <b>数据表</b> 并排展示 <b>中国 → 第三国/地区</b>（UN Comtrade 中国海关官方，HS 6 位国际编码逐年口径，2021–2025）<b>与 第三国/地区 → 印度</b>（第三国海关 / 印度 PIB / IBEF / WITS 等官方年度统计，按可得性逐年对应）。<b>颜色规则</b>：某年份 <b>双侧同比均增长 → 该行整行红色高亮</b>（"双升"）；<b>仅单侧增长</b> 时中国侧与 X→印度侧各自分色（<b style="color:var(--cn)">升=红</b>、<b style="color:var(--teal)">降=绿</b>）；无数据年份留空「—」。表内<b>单位一律为百万美元</b>（单元格显示金额数字，如 9,910 即 9,910 百万美元 = $9.91B）。所有数值均来自官方来源，未做任何推算。`;
    const flowsHTML = TRANSSHIPMENT_TRADE.map((f,i)=>{
      const c = f.china, id = f.india;
      const nodes = f.chain.map((p,i)=>{
        const cls = i===0?"cn":(i===f.chain.length-1?"in":"mid");
        return `<span class="node ${cls}">${p}</span>`;
      }).join('<span class="arrow">→</span>');
      const years = allYears(c, id);
      // 双升徽章判定：取「双方都有数据的最近两个年份」，双侧同比均增长（>0）
      let surgeBoth = false;
      const overlap = years.filter(y=>c.years?.[y]!=null && id.years?.[y]!=null);
      if (overlap.length>=2) {
        const yA = overlap[overlap.length-2], yB = overlap[overlap.length-1];
        const cYoy = yoy(c.years?.[yB], c.years?.[yA]);
        const iYoy = yoy(id.years?.[yB], id.years?.[yA]);
        if (cYoy!=null && iYoy!=null && cYoy>0 && iYoy>0) surgeBoth=true;
      }
      // 表格行：双升判定——双侧同比均增长 → 整行红色；单侧升/单侧降 → 单元格分色（升=红、降=绿）
      let rows = "";
      years.forEach((y,idx)=>{
        const cVal = c.years?.[y], iVal = id.years?.[y];
        const prevY = idx>0 ? years[idx-1] : null;
        const cY = (cVal!=null && prevY!=null) ? yoy(cVal, c.years?.[prevY]) : null;
        const iY = (iVal!=null && prevY!=null) ? yoy(iVal, id.years?.[prevY]) : null;
        const cUp = cY!=null && cY>0;
        const iUp = iY!=null && iY>0;
        const bothUp = cUp && iUp;                      // 双侧均增长
        const cCls = cY==null ? "" : (cY>=0 ? "up" : "dn");
        const iCls = iY==null ? "" : (iY>=0 ? "up" : "dn");
        const yCls = bothUp ? "surge-row" : "";         // 仅双升整行红
        const yStr = cY==null ? "—" : yoyStr(cY);
        const iStr = iY==null ? "—" : yoyStr(iY);
        rows += `<tr class="${yCls}"><td>${y}</td><td>${fmt(cVal)}</td><td>${cCls?`<span class="${cCls}">${yStr}</span>`:yStr}</td><td>${fmt(iVal)}</td><td>${iCls?`<span class="${iCls}">${iStr}</span>`:iStr}</td></tr>`;
      });

      const citeRefs = (f.sources||[f.source]).filter(Boolean).map(s=>cite(s)).join("");

      return `<div class="tflow ${surgeBoth?'surge':''}" id="tflow-${i}">
        <div class="tflow-head">
          <div class="tflow-chain">${nodes}</div>
          <div class="tflow-badges">
            ${surgeBoth ? `<span class="tflow-badge surge">▲ 双升</span>` : `<span class="tflow-badge high">观察</span>`}
            <span class="tflow-badge hs">HS ${f.hs}</span>
          </div>
        </div>
        <div class="tflow-goods">主要商品：<b>${f.goods}</b><span class="hsnote">${f.hsNote}</span></div>
        <table class="tflow-tbl">
          <thead><tr><th>年份</th><th>中国 → ${f.chain[1]}（金额，百万美元）</th><th>同比</th><th>${f.chain[1]} → 印度（金额，百万美元）</th><th>同比</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
        <div class="tflow-note">
          <b>双升说明：</b>${f.surgeNote}<br>
          <b>中国官方：</b>${c.note}${c.source?cite(c.source):""}<br>
          <b>X → 印度官方：</b>${id.note}${id.source?cite(id.source):""}<br>
          <b>分析：</b>${f.note}<br>
          <b>来源：</b>${citeRefs}
        </div>
      </div>`;
    }).join("");
    $("#tradeFlowPanel").innerHTML = flowsHTML;

    bindCollapse("transInfoWrap","transInfoToggle","transInfoIcon");
    bindCollapse("transDataWrap","transDataToggle","transDataIcon");
  }

  /* ---------- 政策时间线 ---------- */
  const tl = (arr,cls)=>arr.map(p=>`
    <div class="tl-item ${cls}">
      <div class="yr">${p.year}</div>
      <div class="ti">${p.title}${cite(p.source)}</div>
      <div class="de">${p.desc}</div>
    </div>`).join("");
  $("#policyIndia").innerHTML = tl(POLICIES.india,"in");
  $("#policyChina").innerHTML = tl(POLICIES.china,"cn");
  bindCollapse("policyIndiaWrap","policyIndiaToggle","policyIndiaIcon");
  bindCollapse("policyChinaWrap","policyChinaToggle","policyChinaIcon");

  /* ---------- 数据来源与更新面板 ---------- */
  $("#lastUpdated").innerHTML =
    `<span class="dot"></span>最后更新：${LAST_UPDATED} · 更新方式：每月定期（GitHub Actions 定时工作流）`;
  $("#srcRegistry").innerHTML = DATA_SOURCES.map(s=>`
    <div class="src-card">
      <h4>${s.name} <span class="${s.api?'api':'manual'}">${s.api?'API 可接入':'人工更新'}</span></h4>
      <dl>
        <dt>更新频率</dt><dd>${s.freq}</dd>
        <dt>覆盖范围</dt><dd>${s.coverage}</dd>
        <dt>接入方式</dt><dd>${s.access}</dd>
      </dl>
    </div>`).join("");

  /* ---------- 来源清单 ---------- */
  $("#srcList").innerHTML = SOURCES.map(s=>`
    <div class="src-item" id="src-${s.id}">
      <span class="n">[${s.id}]</span>
      <span>${s.name}<br><a href="${s.url}" target="_blank" rel="noopener">${s.url}</a></span>
    </div>`).join("");

  /* ---------- 贸易流企业名点击：跳转到对应企业卡片并展开 ---------- */
  document.addEventListener("click", e=>{
    const jump = e.target.closest(".co-jump");
    if(!jump) return;
    e.preventDefault();
    e.stopPropagation();
    const name = jump.dataset.jumpName || "";
    const side = jump.dataset.jumpSide || "";
    if(!name) return;
    // 收起该卡上原有的 picked 状态与 caption
    const flowItem = jump.closest(".flow-item");
    if(flowItem){
      flowItem.querySelectorAll(".chip.picked").forEach(c=>c.classList.remove("picked"));
      const cap = flowItem.querySelector(".flow-caption");
      if(cap) cap.classList.remove("show");
    }
    // 模态内查找同 data-co-name 的企业卡片
    // 1) 精确匹配；2) 按括号前主名匹配；3) 主名互为子串匹配（如 Ather ↔ Ather Energy）；4) 大小写不敏感子串匹配；5) 整体子串模糊匹配（兜底）
    const escaped = name.replace(/"/g,'\\"');
    let target = modal.querySelector(`.co-card[data-co-name="${escaped}"]`);
    if(!target){
      const baseName = s => { const i = s.indexOf('（'); return i>=0 ? s.slice(0, i) : s; };
      const lower = s => (s||"").toLowerCase();
      const flowBase = baseName(name);
      const flowBaseLower = lower(flowBase);
      const allCards = $$(".co-card", modal);
      // 2) 按括号前主名精确匹配
      for(const card of allCards){
        const cn = card.getAttribute("data-co-name")||"";
        if(baseName(cn) === flowBase){ target = card; break; }
      }
      // 3) 主名互为子串（处理「Ather」↔「Ather Energy」）
      if(!target){
        for(const card of allCards){
          const cn = card.getAttribute("data-co-name")||"";
          const cnBase = baseName(cn);
          if(cnBase && flowBase && (cnBase.includes(flowBase) || flowBase.includes(cnBase))){
            target = card;
            break;
          }
        }
      }
      // 4) 大小写不敏感子串匹配（处理 SAMVARDHANA vs Samvardhana）
      if(!target){
        for(const card of allCards){
          const cn = lower(card.getAttribute("data-co-name")||"");
          const cnBase = lower(baseName(card.getAttribute("data-co-name")||""));
          if(cnBase && flowBaseLower && (cnBase.includes(flowBaseLower) || flowBaseLower.includes(cnBase))){
            target = card;
            break;
          }
        }
      }
      // 5) 整体子串模糊匹配
      if(!target){
        for(const card of allCards){
          const cn = (card.getAttribute("data-co-name")||"");
          if(cn && (cn.includes(name) || name.includes(cn))){
            target = card;
            break;
          }
        }
      }
    }
    if(target){
      // 展开该卡片（若未展开）
      if(!target.classList.contains("open")){
        const det = target.querySelector(".co-detail");
        const summ = target.querySelector(".co-summary");
        if(det && summ){
          target.classList.add("open");
          det.hidden = false;
          summ.setAttribute("aria-expanded","true");
        }
      }
      // 滚动到视口中央（高亮 + 跳位置）
      target.scrollIntoView({behavior:"smooth", block:"center"});
      target.style.transition = "box-shadow .35s, transform .35s";
      target.style.boxShadow = "0 0 0 3px rgba(194,58,50,.55)";
      target.style.transform = "translateY(-2px)";
      setTimeout(()=>{ target.style.boxShadow=""; target.style.transform=""; }, 1800);
    } else {
      // 模态内未找到同名：浮层提示
      const tip = document.createElement("div");
      tip.textContent = `未在上方企业列表中找到「${name}」`;
      tip.style.cssText = "position:fixed;top:18%;left:50%;transform:translateX(-50%);background:rgba(255,255,255,.96);color:#b00;padding:10px 16px;border-radius:8px;box-shadow:0 4px 18px rgba(0,0,0,.18);z-index:200;font-size:14px;";
      document.body.appendChild(tip);
      setTimeout(()=>tip.remove(), 2200);
    }
  });

  /* ---------- 角标点击高亮来源 ---------- */
  document.addEventListener("click",e=>{
    const ref = e.target.closest(".cite-ref");
    if(!ref) return;
    const id = ref.dataset.cite;
    const tgt = $("#src-"+id);
    if(tgt){
      setDisc(true); // 展开声明，确保来源可见
      setTimeout(()=>{
        tgt.style.transition="background .3s";
        tgt.style.background="rgba(255,122,26,.18)";
        setTimeout(()=>tgt.style.background="",1400);
      },400);
    }
  });

  /* =====================================================================
   * 图表 —— 与弹窗解耦；Chart 缺失或单图报错都不影响交互
   * ===================================================================== */
  const FONT = '"Noto Sans SC","PingFang SC","Microsoft YaHei",system-ui,sans-serif';
  const C = { primary:"#2c2a26", india:"#e0762a", china:"#c23a32", teal:"#0f8a7e", gold:"#b3852c", grid:"#e2dccd" };

  function chartFallback(){
    $$(".chart-wrap").forEach(w=>{
      if(w.querySelector("canvas") && document.getElementById(w.querySelector("canvas").id)) return;
      w.innerHTML = '<div style="height:100%;display:flex;align-items:center;justify-content:center;color:var(--ink-mute);font-size:13px;text-align:center;padding:20px">图表库未能加载（vendor/chart.umd.min.js）。请确认该文件与本页面在同一目录。</div>';
    });
  }

  if (typeof Chart === "undefined") {
    chartFallback();
  } else {
    try { Chart.defaults.font.family = FONT; } catch(e){}
    Chart.defaults.color = "#4a5a72";

    /* 1. 贸易趋势 */
    try {
      new Chart($("#tradeChart"),{
        type:"bar",
        data:{
          labels:TRADE_HISTORY.years,
          datasets:[
            {type:"bar",label:"印度自华进口",data:TRADE_HISTORY.imports,backgroundColor:C.china,borderRadius:4,order:3},
            {type:"bar",label:"印度对华出口",data:TRADE_HISTORY.exports,backgroundColor:C.teal,borderRadius:4,order:2},
            {type:"line",label:"贸易逆差",data:TRADE_HISTORY.deficit,borderColor:C.india,backgroundColor:C.india,borderWidth:3,tension:.35,pointRadius:3,pointBackgroundColor:C.india,order:1}
          ]
        },
        options:{
          responsive:true,maintainAspectRatio:false,
          interaction:{mode:"index",intersect:false},
          plugins:{
            legend:{position:"top",labels:{usePointStyle:true,boxWidth:8,padding:14}},
            tooltip:{callbacks:{label:ctx=>`${ctx.dataset.label}：${ctx.parsed.y} 十亿美元`}}
          },
          scales:{
            x:{grid:{display:false}},
            y:{grid:{color:C.grid},ticks:{callback:v=>v+"B"},title:{display:true,text:"十亿美元 (USD Bn)"}}
          }
        }
      });
    } catch(e){ console.error("tradeChart 渲染失败：",e); }

    /* 2. 进口品类结构 */
    try {
      new Chart($("#catChart"),{
        type:"doughnut",
        data:{
          labels:IMPORT_CATEGORIES.labels,
          datasets:[{
            data:IMPORT_CATEGORIES.values,
            backgroundColor:["#e0762a","#c23a32","#0f8a7e","#b3852c","#2c2a26","#d98b4a","#8a8275","#7e57c2","#5a8f86","#ef9a4d","#9c8f7a"],
            borderColor:"#fff",borderWidth:2
          }]
        },
        options:{
          responsive:true,maintainAspectRatio:false,cutout:"58%",
          plugins:{
            legend:{position:"right",labels:{usePointStyle:true,boxWidth:8,padding:10,font:{size:12}}},
            tooltip:{callbacks:{label:ctx=>`${ctx.label}：${ctx.parsed}%`}}
          }
        }
      });
    } catch(e){ console.error("catChart 渲染失败：",e); }

    /* 3+4. 产业对华依赖 TOP 品类（原料药 + 其余 8 产业 合并统一渲染）
     * 交互式：先展示依赖度总览条（可点击导航），点击某产业 → 下方仅渲染该产业的细分卡片
     * 颜色五档色阶：红=高依赖（危险）→ 绿=低依赖（安全），符合「红涨绿跌」语义
     */
    try {
      const grid = $("#industryTopGrid");
      const ovEl = $("#topOverview");
      if (grid) {
        // 依赖度色阶：≥90 深红 / ≥70 红橙 / ≥50 琥珀 / ≥30 黄绿 / <30 绿
        const depColor = v => v>=90 ? "#b01b13" : v>=70 ? "#d9502e" : v>=50 ? "#d99a2b" : v>=30 ? "#7fa94a" : "#2e8b66";
        const repVal = s => Math.max.apply(null, s.values);   // 卡片代表值 = 子项最高依赖
        const sorted = [...INDUSTRY_TOP].sort((a,b)=>repVal(b)-repVal(a)); // 按代表值降序
        let topChartInst = null;   // 当前产业卡片的 Chart 实例（切换时销毁重建）

        // 渲染单个产业的细分卡片（每次仅渲染一张）
        function renderTopCard(s){
          grid.innerHTML = "";
          const card = document.createElement("div");
          card.className = "subdep-card";
          const maxV = repVal(s);
          const canvasH = Math.max(210, s.labels.length * 32 + 46); // 子项越多画布越高
          const noteLen = (s.note||"").length;
          const needFold = noteLen > 80;   // 阈值：>80 字符即默认收起
          // 用原生 <details>/<summary> 实现折叠：summary（按钮）天然在 note 区域下方可见，不会被截断
          card.innerHTML =
            `<div class="subdep-head">
              <h4>${s.name} · TOP 品类</h4>
              <span class="subdep-badge" style="background:${depColor(maxV)}">${maxV}%</span>
            </div>` +
            `<div class="subdep-canvas" style="height:${canvasH}px"><canvas id="topChart0"></canvas></div>` +
            `<details class="subdep-details"${needFold?'':' open'}>
              <summary class="subdep-fold-btn" type="button">
                <span class="chev"></span><span class="lbl">${needFold?'展开注释':'收起注释'}</span>
              </summary>
              <div class="subdep-note-body">
                ${s.note}<br>来源 ${cite(s.source)}
              </div>
            </details>`;
          grid.appendChild(card);

          // 注释折叠交互：监听原生 toggle 事件更新按钮文字与箭头
          const dtl = card.querySelector(".subdep-details");
          if(dtl){
            const lbl = dtl.querySelector(".lbl");
            dtl.addEventListener("toggle", ()=>{
              if(lbl) lbl.textContent = dtl.open ? "收起注释" : "展开注释";
            });
          }

          // 柱状图（销毁旧实例避免泄漏/重影）
          const cv = document.getElementById("topChart0");
          if(!cv) return;
          if(topChartInst) topChartInst.destroy();
          topChartInst = new Chart(cv,{
            type:"bar",
            data:{
              labels:s.labels,
              datasets:[{
                label:"对华依赖度(%)",
                data:s.values,
                backgroundColor:s.values.map(depColor),
                borderRadius:4,
                barPercentage:0.68
              }]
            },
            options:{
              indexAxis:"y",
              responsive:true,maintainAspectRatio:false,
              plugins:{
                legend:{display:false},
                tooltip:{callbacks:{
                  label:ctx=>`对华依赖度：${ctx.parsed.x}%`
                }}
              },
              scales:{
                x:{beginAtZero:true,max:100,grid:{color:C.grid},ticks:{callback:v=>v+"%"}},
                y:{grid:{display:false},ticks:{font:{size:11.5}}}
              }
            }
          });
        }

        // 渲染总览条（可点击导航）+ 绑定切换
        function renderOverview(activeIdx){
          if(!ovEl) return;
          ovEl.innerHTML =
            `<div class="top-overview-head"><b>依赖度总览</b><span class="ov-hint">点击产业查看细分 · 按代表值降序 · 颜色=依赖档位（红=高 · 绿=低）</span></div>` +
            `<div class="top-overview-chips">` +
            sorted.map((s,i)=>{
              const v = repVal(s);
              return `<button class="ov-chip ${i===activeIdx?'active':''}" data-i="${i}" type="button" title="点击查看「${s.name}」细分（代表值 ${v}%）">
                <span class="ov-name">${s.name}</span><span class="ov-val" style="color:${depColor(v)}">${v}%</span>
              </button>`;
            }).join("") +
            `</div>`;
          ovEl.querySelectorAll(".ov-chip").forEach(btn=>{
            btn.addEventListener("click", ()=>{
              const idx = parseInt(btn.dataset.i, 10);
              if(isNaN(idx)) return;
              renderOverview(idx);
              renderTopCard(sorted[idx]);
            });
          });
        }

        // 初始：默认选中第一个（代表值最高），渲染其细分卡片
        renderOverview(0);
        renderTopCard(sorted[0]);
      }
    } catch(e){ console.error("industryTop 渲染失败：",e); }
  }

  /* =====================================================================
   * 全局交互 · 滚动进度 / 入场动画 / 导航高亮 / 数字滚动
   * ===================================================================== */
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1. 滚动进度条 + 导航高亮（scroll-spy） */
  const progressEl = $("#scrollProgress");
  const navLinks = $$(".nav-links a");
  const spyTargets = navLinks.map(a=>$(a.getAttribute("href"))).filter(Boolean);
  let ticking = false;
  function onScroll(){
    if(ticking) return; ticking = true;
    requestAnimationFrame(()=>{
      const st = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if(progressEl) progressEl.style.width = (h>0 ? (st/h*100) : 0) + "%";
      let cur = spyTargets[0];
      spyTargets.forEach(s=>{ if(s.offsetTop - 120 <= st) cur = s; });
      navLinks.forEach(a=>a.classList.toggle("active", cur && a.getAttribute("href") === "#"+cur.id));
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, {passive:true});
  window.addEventListener("resize", onScroll, {passive:true});
  onScroll();

  /* 2. 入场动画（IntersectionObserver） */
  if(!reduceMotion){
    const revEls = $$(".section, .dep-card, .route, .chart-card, .src-card, .subdep-card, .tl-item, .monthly-card, .tia-card, .xcheck-card, .ov-report, .collapse-sec");
    revEls.forEach(el=>el.classList.add("reveal"));
    if("IntersectionObserver" in window){
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
      },{threshold:.12, rootMargin:"0px 0px -8% 0px"});
      revEls.forEach(el=>io.observe(el));
      /* 兜底：若 observer 未触发，2.5s 后强制显示，避免内容滞留隐藏态 */
      setTimeout(()=>revEls.forEach(el=>el.classList.add("in")), 2500);
    } else {
      revEls.forEach(el=>el.classList.add("in"));
    }
  }

  /* 3. 数字滚动计数（Hero / KPI） */
  function animateCount(el){
    const html = el.innerHTML;
    const m = html.match(/^([^\d]*)([\d.,]+)([\s\S]*)$/);
    if(!m) return;
    const prefix = m[1], numStr = m[2], suffix = m[3];
    const target = parseFloat(numStr.replace(/,/g,""));
    const dec = (numStr.split(".")[1]||"").length;
    const t0 = performance.now(), dur = 1200;
    const step = now=>{
      const p = Math.min(1,(now-t0)/dur);
      const eased = 1-Math.pow(1-p,3);
      const val = target*eased;
      const str = dec ? val.toFixed(dec) : Math.round(val).toLocaleString("en-US");
      el.innerHTML = prefix + str + suffix;
      if(p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  if(!reduceMotion){
    const counters = $$(".hstat .v, .kpi .num");
    if("IntersectionObserver" in window){
      const io2 = new IntersectionObserver((entries)=>{
        entries.forEach(en=>{ if(en.isIntersecting){ animateCount(en.target); io2.unobserve(en.target); } });
      },{threshold:.5});
      counters.forEach(el=>io2.observe(el));
    } else {
      counters.forEach(animateCount);
    }
  }

  /* ---------- 印度军事实体库（折叠板块）渲染 ---------- */
  function renderMilitaryEntities(){
    if(typeof MILITARY_ENTITIES === "undefined" || !MILITARY_ENTITIES.length) return;
    const noteEl = $("#milNote");
    if(noteEl) noteEl.innerHTML = `<b>说明：</b>本库收录贸易流中涉军 / 国防关联的印方主体（含政府实体与军品企业）。<b>军种关联</b>与<b>采购清单</b>均依据公开资料（印度国防部 / PIB / 企业公告 / 智库研究）整理，每条标注来源；<b>对华供应链关联</b>按「直接 / 间接 / 无」分级——「直接」指有公开证据表明该实体或其项目采购中国物项（如 BRO 边境项目使用中国盾构机的公开报道），「间接」指经集团 / 供应链层面的关联，「无」指无公开军方关联证据。<b>凡无公开采购合同者均明确标注「未见公开合同」，绝不编造。</b>`;
    const grid = $("#milGrid");
    if(!grid) return;
    grid.innerHTML = MILITARY_ENTITIES.map(e=>`
      <div class="mil-card">
        <div class="mil-head">
          <span class="mil-name">${e.name}</span>
          <span class="mil-type">${e.type}</span>
        </div>
        <div class="mil-body">
          <div class="mil-row"><span class="mil-lbl">隶属</span><span>${e.parent}</span></div>
          <div class="mil-row"><span class="mil-lbl">军种关联</span><span>${e.services}</span></div>
          <div class="mil-row"><span class="mil-lbl">采购 / 装备</span><span>${e.procurement}</span></div>
          <div class="mil-row"><span class="mil-lbl">对华供应链关联</span><span>${e.chinaLink}</span></div>
          <div class="mil-row"><span class="mil-lbl">公开合同凭证</span><span>${e.contracts}</span></div>
          <div class="mil-src">来源：${(e.sources||[]).map(cite).join(" ")}</div>
        </div>
      </div>`).join("");
    // 折叠绑定
    const wrap = $("#milWrap"), tog = $("#milToggle"), icon = $("#milIcon");
    if(wrap && tog){
      tog.addEventListener("click", ()=>{
        const open = wrap.classList.toggle("collapsed") ? false : true;
        tog.setAttribute("aria-expanded", open?"true":"false");
        if(icon) icon.innerHTML = open ? `<span class="chev">▾</span> 收起` : `<span class="chev">▾</span> 展开`;
      });
    }
  }

  /* ---------- 出口管制合规参考（折叠板块）渲染 ---------- */
  function renderExportControl(){
    if(typeof EXPORT_CONTROL === "undefined") return;
    const noteEl = $("#ecNote");
    if(noteEl) noteEl.innerHTML = `<b>说明：</b>本表对照中国《两用物项出口管制清单》（商务部公告 2024 年第 51 号，2024-12-01 起施行；由商务部、工业和信息化部、海关总署、国家密码局联合发布）及各单行管制公告（如商务部 / 海关总署 2025 年第 18 号稀土公告），为本站 14 个产业的代表 HS 编码标注<b>是否列入管制、是否需出口许可证</b>。<b>重要提示：管制判定以物项技术参数为准，HS 编码仅为申报参考</b>——同一税号下是否管制取决于具体性能指标与最终用途；本站标注仅为公开信息整理，不构成法律意见，出口前请向商务部两用物项出口管制业务咨询。`;
    const wrap = $("#ecTableWrap");
    if(!wrap) return;
    const rows = Object.entries(EXPORT_CONTROL).map(([ind, list])=>{
      const cells = list.map(m=>{
        const flag = m.controlled
          ? `<span class="ec-tag ec-yes">列入管制 · 需许可证</span>`
          : `<span class="ec-tag ec-no">未列管</span>`;
        return `<tr>
          <td>${ind}</td>
          <td class="code">${m.hs}</td>
          <td>${m.name}</td>
          <td>${flag}</td>
          <td class="ec-basis">${m.basis && m.basis!=="—" ? m.basis : "—"}</td>
          <td class="ec-note-cell">${m.note||""}${(m.sources||[]).length ? "　" + m.sources.map(cite).join(" ") : ""}</td>
        </tr>`;
      }).join("");
      return cells;
    }).join("");
    wrap.innerHTML = `<table class="ec-table">
      <thead><tr><th>产业</th><th>HS 编码</th><th>品类</th><th>管制状态</th><th>管制依据</th><th>说明</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
    // 折叠绑定
    const wrapEl = $("#ecWrap"), tog = $("#ecToggle"), icon = $("#ecIcon");
    if(wrapEl && tog){
      tog.addEventListener("click", ()=>{
        const open = wrapEl.classList.toggle("collapsed") ? false : true;
        tog.setAttribute("aria-expanded", open?"true":"false");
        if(icon) icon.innerHTML = open ? `<span class="chev">▾</span> 收起` : `<span class="chev">▾</span> 展开`;
      });
    }
  }

})();
