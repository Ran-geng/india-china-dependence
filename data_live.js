// 由 update_data_tia.py 自印度 TIA 门户实时抓取（免费、无需 Key）
// 口径：印度全部商品贸易（对全球总额），USD 十亿美元(Bn)，按财年
// 用途：交叉校验站点第一板块总量背景；TIA_TOP_PARTNERS 确认中国为第1大进口来源
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
    161.10,
    214.15
  ]
};
const TIA_TOP_PARTNERS = ["China", "Russia", "United Arab Emirates", "United States of America", "Saudi Arabia", "Iraq", "Indonesia", "Singapore", "Korea (south)", "Hong Kong"];
const TIA_LAST_UPDATED = "2026-07-28";
