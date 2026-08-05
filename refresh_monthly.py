# -*- coding: utf-8 -*-
"""
月度定期刷新脚本（安全合并版，自包含）— 由 GitHub Actions 定时（每月 1 日）或手动触发。

设计原则（为何「定期」而非「实时」）：
  - 海关 / 商务部均为月度或财年发布，本身没有实时数据流；
  - UN Comtrade 免费档取不到印度-中国双边（仅「全球」口径），无法作实时源；
  - 印度 TIA 门户虽免费无需 Key，但其公开端点仅到最近完整财年（FY2023-24），
    而本站点已人工扩充 FY2024-25 / FY2025-26 的对华双边与总量，刷新时【绝不能回退】。

本脚本（不依赖任何被 .gitignore 排除的脚本，可独立在 Actions 运行）做的事：
  1) 更新 data.js 的 LAST_UPDATED 为今日；
  2) 重新抓取印度 TIA 门户（印度总贸易 + 进口伙伴排名）：
       - TIA 能返回的财年（目前至 FY2023-24）用最新值覆盖；
       - 现有文件中「TIA 不返回、但人工扩充」的财年（FY2024-25 / FY2025-26）一律保留；
       - 若未来 TIA 返回了更新的财年，自动采用（向前兼容）。
  3) 不触碰 UN Comtrade 与 17 产业逐 HS 数据（需人工或 TIA 数据提取导出，另行处理）。
"""
import urllib.request, urllib.parse, json, datetime, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
BASE = "https://trade-analytics.commerce.gov.in/public/indiaTrade"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
FY = "2023-24"


def _get(path, params):
    url = BASE + path + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=40) as r:
        return json.loads(r.read().decode("utf-8"))


def fetch_total_trade(fy=FY):
    d = _get("/refreshPublicMerchandiseTrade", {
        "currency": "USD", "option": "country", "year": fy, "impexptype": "Import"
    })
    arr = d["data"]
    years = [x["label"] for x in arr[0]]
    imp = [x["value"] for x in arr[1]]
    exp = [x["value"] for x in arr[2]]
    defi = [imp[i] - exp[i] for i in range(len(imp))]
    return {
        "years": years,
        "imports_bn": [round(v / 1000.0, 2) for v in imp],
        "exports_bn": [round(v / 1000.0, 2) for v in exp],
        "deficit_bn": [round(v / 1000.0, 2) for v in defi],
    }


def fetch_top_partners(fy=FY):
    d = _get("/getTopCountryCommodityData", {
        "year": fy, "type": "Import", "currency": "USD",
        "option": "country", "classification": "HS2"
    })
    return [x["label"] for x in d]


def _read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def _load_tia_const(src, name):
    m = re.search(r"const %s\s*=\s*(.*?);" % name, src, re.S)
    return json.loads(m.group(1))


def merge_total(existing, fresh):
    """以现有年份为基准：TIA 有的覆盖，TIA 没有的（人工扩充）保留；新增年份追加。"""
    ex_imp = dict(zip(existing["years"], existing["imports_bn"]))
    ex_exp = dict(zip(existing["years"], existing["exports_bn"]))
    ex_def = dict(zip(existing["years"], existing["deficit_bn"]))
    fresh_years = set(fresh["years"])
    years = list(existing["years"])
    for y in fresh["years"]:
        if y not in years:
            years.append(y)
    imp = [fresh["imports_bn"][fresh["years"].index(y)] if y in fresh_years else ex_imp[y] for y in years]
    exp = [fresh["exports_bn"][fresh["years"].index(y)] if y in fresh_years else ex_exp[y] for y in years]
    defe = [fresh["deficit_bn"][fresh["years"].index(y)] if y in fresh_years else ex_def[y] for y in years]
    return {"years": years, "imports_bn": imp, "exports_bn": exp, "deficit_bn": defe}


def main():
    today = datetime.date.today().isoformat()
    print("== 月度定期刷新（%s）==" % today)

    live_src = _read(os.path.join(HERE, "data_live.js"))
    existing_total = _load_tia_const(live_src, "TIA_TOTAL_TRADE")
    existing_partners = _load_tia_const(live_src, "TIA_TOP_PARTNERS")

    try:
        fresh = fetch_total_trade()
        partners = fetch_top_partners()
        print("TIA 抓取成功，年份:", fresh["years"])
    except Exception as e:
        print("TIA 抓取失败（保留现有数据）:", e)
        fresh, partners = None, None

    merged = merge_total(existing_total, fresh) if fresh else existing_total
    final_partners = partners if partners else existing_partners

    out = (
        "// 由 refresh_monthly.py 合并刷新（印度 TIA 门户，免费无需 Key）\n"
        "// 口径：印度全部商品贸易（对全球总额），USD 十亿美元(Bn)，按财年\n"
        "// 合并规则：TIA 可返回的财年用最新值覆盖；人工扩充的 FY2024-25/FY2025-26 保留不回退\n"
        "const TIA_TOTAL_TRADE = " + json.dumps(merged, ensure_ascii=False, indent=2) + ";\n"
        "const TIA_TOP_PARTNERS = " + json.dumps(final_partners, ensure_ascii=False) + ";\n"
        "const TIA_LAST_UPDATED = " + json.dumps(today) + ";\n"
    )
    with open(os.path.join(HERE, "data_live.js"), "w", encoding="utf-8") as f:
        f.write(out)
    print("已写回 data_live.js（merged years:", merged["years"], "）")

    dj = os.path.join(HERE, "data.js")
    s = _read(dj)
    s2 = re.sub(r'const LAST_UPDATED\s*=\s*"[0-9-]+";', 'const LAST_UPDATED = "%s";' % today, s)
    if s2 != s:
        with open(dj, "w", encoding="utf-8") as f:
            f.write(s2)
        print("已更新 data.js LAST_UPDATED ->", today)
    else:
        print("LAST_UPDATED 未变化")


if __name__ == "__main__":
    main()
