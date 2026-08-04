// 由 refresh_monthly.py 合并刷新（印度 TIA 门户，免费无需 Key）
// 口径：印度全部商品贸易（对全球总额），USD 十亿美元(Bn)，按财年
// 合并规则：TIA 可返回的财年用最新值覆盖；人工扩充的 FY2024-25/FY2025-26 保留不回退
const TIA_TOTAL_TRADE = {
  "years": [
    "2019-20",
    "2020-21",
    "2021-22",
    "2022-23",
    "2023-24",
    "2024-25",
    "2025-26"
  ],
  "imports_bn": [
    352.17,
    311.75,
    451.24,
    506.55,
    495.26,
    535.42,
    602.07
  ],
  "exports_bn": [
    299.46,
    266.0,
    354.53,
    353.6,
    353.01,
    374.32,
    387.92
  ],
  "deficit_bn": [
    52.71,
    45.75,
    96.71,
    152.95,
    142.25,
    161.1,
    214.15
  ]
};
const TIA_TOP_PARTNERS = ["China", "Russia", "United Arab Emirates", "United States of America", "Saudi Arabia", "Iraq", "Indonesia", "Singapore", "Korea (south)", "Hong Kong"];
const TIA_LAST_UPDATED = "2026-08-04";
