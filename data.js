/* =====================================================================
 * data.js — 印度对中国产业依赖研究网站
 * 所有数据均来自真实公开来源，每条数据带 source / 模块 detail.sources 字段
 * （对应底部来源编号）。未发现公开数据的，明确标注「数据有限」，绝不编造。
 * ===================================================================== */

/* --------- 来源清单（网站底部统一声明） --------- */
const SOURCES = [
  { id: 1,  name: "印度驻华大使馆 · 贸易与经济关系页（数据源：印度商务部 DGCIS）", url: "https://www.eoibeijing.gov.in/page/trade-and-economic-relation/" },
  { id: 2,  name: "印度商务部 Lok Sabha 质询答复 No.4948（2025-04-01，数据源：DGCIS）", url: "https://www.commerce.gov.in/wp-content/uploads/2025/04/LS-USQ-No.4948-dated.-01.04.2025-1.pdf" },
  { id: 3,  name: "GTRI（全球贸易研究倡议）2024 年报告 · 经环球时报/经济日报援引", url: "https://www.ce.cn/xwzx/gnsz/gdxw/202405/13/t20240513_39001260.shtml" },
  { id: 4,  name: "印度新闻信息局 PIB · 对华依赖≥70% 的原料药清单（Annexure-I，PRID=2237414）", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2237414" },
  { id: 5,  name: "印度政策委员会 NITI Aayog · 《贸易观察季报》第八版", url: "https://www.cuiqq.com/newsdetail/17474" },
  { id: 6,  name: "The Diplomat / Thinkly · India's Pharma & Chinese APIs（2026-07）", url: "https://thinkly.gold/2026/07/01/why-indias-pills-arent-china-proof/" },
  { id: 7,  name: "Down To Earth · India's Solar Surge & China Supply Chain", url: "https://www.downtoearth.org.in/energy/indias-solar-success-is-riding-high-but-remains-wired-to-the-dragon" },
  { id: 8,  name: "IntelliNews / Rubix · India Solar Modules & PV Cells（FY24-25）", url: "https://www.intellinews.com/india-moves-to-cut-reliance-on-chinese-solar-modules-and-pv-cells-377792/" },
  { id: 9,  name: "Mercom India · India Solar Cell & Module Imports Q3 2024", url: "https://mercomindia.com/india-solar-cell-module-imports-q3-2024" },
  { id: 10, name: "《印度时报》报道 · 经环球时报援引（孟买地铁/盾构机）", url: "https://m.huanqiu.com/article/3zsdvC7AqnP" },
  { id: 11, name: "腾讯新闻 · 中国出口印度盾构机数据梳理（HS 84303130/84303120）", url: "https://news.qq.com/rain/a/20250822A090PQ00" },
  { id: 12, name: "中国青年报 · 印度稀土磁体对华依赖（2025-10）", url: "https://news.youth.cn/jsxw/202510/t20251016_16294276.htm" },
  { id: 13, name: "The Hindu BusinessLine · India-China rare earth end-user talks", url: "https://www.thehindubusinessline.com/economy/india-in-talks-with-china-on-additional-end-user-conditions-for-rare-earth-imports/article70213585.ece" },
  { id: 14, name: "Financial Express · CAROTAR 2020 / 收紧原产地规则", url: "https://www.financialexpress.com/policy/economy-curbing-fta-abuse-govt-to-tighten-scrutiny-of-imports-from-september-21-2084227/" },
  { id: 15, name: "CNBC-TV18 · 海关调查经东南亚转口的中国商品", url: "https://www.cnbctv18.com/finance/customs-department-probes-tax-evasion-by-chinese-goods-importers-14860841.htm" },
  { id: 16, name: "KNN India · 政府调查经 ASEAN/SAFTA 的中国商品转口（AITF）", url: "https://knnindia.co.in/news/newsdetails/global/govt-orders-probe-into-illegal-chinese-exports-to-india-through-asean-safta-and-other-neighbouring-countries-on-request-of-aitf" },
  { id: 17, name: "Reuters · Transshipment is the new dirty word of trade（Nomura 数据）", url: "https://www.tradingview.com/news/reuters.com,2025:newsml_L6N3TJ0C5:0-transshipment-is-the-new-dirty-word-of-trade/" },
  { id: 18, name: "环球时报 · WTO：中国就印度光伏/IT/EV 补贴措施提起争端（2025-12）", url: "https://www.163.com/dy/article/KHKFTGB905504DOQ.html" },
  { id: 19, name: "中国网 · 印度有限度放宽对华投资限制（2026-03）/ 中国海关 2025 双边数据", url: "https://www.china.com.cn/opinion2020/2026-03/13/content_118380329.shtml" },
  { id: 20, name: "经济日报 · 中国超美国成为印度最大贸易伙伴（GTRI 数据）", url: "http://m.ce.cn/gj/gd/202405/13/t20240513_39000463.shtml" },
  /* —— 本轮增强补充的来源 —— */
  { id: 21, name: "印度 PIB · 稀土永磁体进口数据（HS 8505.11/8505.19，PRID=2151394）", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151394" },
  { id: 22, name: "印度 PIB · FY24-25 原料药进口（中国占 73.7%，PRID=2222528）", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2222528" },
  { id: 23, name: "Business Standard · 印度 6-APA 进口依赖（FY24 华占 94.1%）", url: "https://www.business-standard.com/amp/industry/news/india-s-import-dependence-on-key-pharma-ingredients-may-reduce-by-half-124111000342_1.html" },
  { id: 24, name: "人民日报英文版 · 中国盾构机占全球约 70% 市场（2024-05）", url: "https://en.people.cn/n3/2024/0510/c90000-20167966.html" },
  { id: 25, name: "Indian Express · 孟买基建 TBM 多在华制造（18 台中 8 台中资）", url: "https://indianexpress.com/article/india/crucial-to-mumbai-infra-projects-tunnelling-machines-made-in-china-6471694/" },
  { id: 26, name: "Deccan Herald · 印度太阳能设备进口（FY24 自华 $3.89B，占 62.6%）", url: "https://www.deccanherald.com/business/indias-solar-equipment-imports-may-surge-to-30-billion-by-2030-3240791" },
  { id: 27, name: "Financial Express · 光伏产业链缺口 / 多晶硅中国占比", url: "https://www.financialexpress.com/opinion/the-gigawatt-and-the-gap/4266156/" },
  { id: 28, name: "China Briefing · 印度太阳能制造与中国供应", url: "https://www.china-briefing.com/china-outbound-news/an-investors-guide-to-solar-manufacturing-in-india" },
  { id: 29, name: "SIIEA / GTRI · 电子/电信/电气自华占 43.9%（大陆）", url: "https://www.siiea.in/2024/05/03/china-hong-kong-account-for-56-pc-of-india-s-total-imports-of-electronics-telecom-electrical-products-gtri" },
  { id: 30, name: "财富中文网 · 印度自华电子元件超韩日台东盟总和", url: "https://www.fortunechina.com/shangye/c/2024-08/26/content_457827.htm" },
  { id: 31, name: "India Biz / GTRI · 印度自华 EV 锂电池占 75%（$2.2B）", url: "https://indbiz.gov.in/china-overtakes-us-as-indias-top-trading-partner-in-fy24-gtri/" },
  { id: 32, name: "IndexBox · 印度二次电池市场（替代来源国家/地区）", url: "https://www.indexbox.io/store/india-secondary-battery-market-analysis-forecast-size-trends-and-insights/" },
  { id: 33, name: "Economic Times / GTRI · 智能手机零部件自华 51.7%（非 80%）", url: "https://m.economictimes.com/news/economy/foreign-trade/china-make-in-india-manufacturing-imports-pli-smartphones-trade/articleshow/122808116.cms" },
  { id: 34, name: "WITS / UN Comtrade · 印度甲醇(HS 2905.11)进口（中国仅约 4.3%）", url: "https://wits.worldbank.org/trade/comtrade/en/country/IND/year/2021/tradeflow/Imports/partner/ALL/product/290511" },
  { id: 35, name: "商务部贸易救济局 · 印度对原产中国 IPA 征反倾销税", url: "https://chinawto.mofcom.gov.cn/article/dh/jinghua/202410/20241003543520.shtml" },
  { id: 36, name: "IndexBox / gtaic · 印度乙酸(HS 2915.21)进口，中国占约 53%(2024)", url: "https://www.indexbox.io/blog/india-acetic-acid-imports-2023/" },
  { id: 37, name: "ICIS · 印度寻求减少对华石化进口依赖（乙酸 38%、二氯甲烷 >60%→40%、马来酸酐 33%→29%）", url: "https://www.icis.com/explore/resources/news/2020/07/16/10530588/india-bent-on-seeking-alternative-to-china-for-petrochemical-imports" },
  { id: 38, name: "Construction Placements / NBM CW · 盾构机全球主要制造商与中国企业在印项目（中铁重工 CRCHI、中铁装备 CREG 等）", url: "https://www.constructionplacements.com/top-tunnel-boring-machine-manufacturers-in-the-world" },
  { id: 39, name: "Mercom India / pv magazine India · 印度太阳能组件供应商排行与自华进口（晶科/隆基/天合居前）", url: "https://www.pv-magazine-india.com/2025/04/04/india-installed-18-5-gw-of-utility-scale-solar-4-59-gw-rooftop-pv-in-2024/" },
  { id: 40, name: "中国医药保健品进出口商会 / DrugPatentWatch · 中国原料药出口头部企业与印度第一大市场", url: "https://www.drugpatentwatch.com/blog/the-role-of-china-in-the-global-generic-drug-api-market/" },
  { id: 41, name: "Bernreuter Research / saurenergy · 全球多晶硅产能十强（通威/协鑫/大全/新特等 9 家中国，合计 65%）", url: "https://www.saurenergy.com/solar-energy-blog/wacker-chemie-lone-non-chinese-maker-in-top-10-polysilicon-manufacturers-list-10813308" },
  { id: 42, name: "EVTank / 电池网 · 印度锂离子电池进口年度研究报告（CATL/国轩/亿纬/比亚迪等居前）", url: "https://www.itdcw.com/news/hangyebaogao/052Q4Sa2025.html" },
  { id: 43, name: "DigiTimes / Economic Times · 在印中国 EMS 与手机零部件供应商（立讯/歌尔/比亚迪电子/DBG 等）", url: "https://www.digitimes.com/news/a20251027VL201/0_10.html" },
  { id: 44, name: "Mag-Spring / Horizon Magnet · 中国钕铁硼永磁体主要制造商（金力/韵升/中科三环/正海等）", url: "https://www.horizonmagnet.com/top-neodymium-magnet-manufacturers-in-china" },
  { id: 45, name: "和仕咨询 / 华经产业研究院 · 中国冰醋酸主要生产企业与印度第一大出口目的地", url: "http://www.hers-group.com/N-Newchemicalmaterials/4124.html" },
  { id: 46, name: "广东省工信厅 / NF News · 中国电子通信设备与手机品牌出海（华为/小米/OPPO/vivo 等）", url: "https://www.nfnews.com/content/X3RvnBvj3P.html" },
  /* —— 本轮补全未覆盖产业的新来源 —— */
  { id: 47, name: "Medical Buyer / Business Standard · 印度医疗器械约 75–80% 靠进口，中国为第二大供应国（FY22 占其医疗器械进口 16.4%、$1.35B）", url: "https://medicalbuyer.co.in/india-sets-up-6-wgs-to-boost-manufacturing-cut-imports-medtech-biotech-pharma-hold-key" },
  { id: 48, name: "The Hindu / Economic Times · 印度市场曾 80–90% 玩具靠进口、其中约 90% 来自中国；2020 起关税 60% 后进口额腰斩但中国仍最大来源", url: "https://www.thehindu.com/todays-paper/2023-01-03/th_chennai/articleGH7AN45LP-1682344.ece" },
  { id: 49, name: "Financial Express · The missing pieces in India’s EV push（EV 三电/磁体/功率半导体 66–75% 自华，锂电约 75% 自华）", url: "https://www.financialexpress.com/business/news/the-missing-pieces-in-indias-ev-push/4285968" },
  { id: 50, name: "The Hindu BusinessLine / Economic Times · 印度化肥高度依赖进口：特种/水溶肥约 80% 自华、中国占 DAP 进口约 25–30%（2023 年中暂停 DAP 出口许可后份额骤降）", url: "https://www.thehindubusinessline.com/economy/agri-business/from-import-dependence-to-self-reliance-indias-fertilizer-crisis-as-a-make-in-india-turning-point/article70954135.ece" },
  { id: 51, name: "印度 PIB / 化工与化肥部（Rajya Sabha 答复）· DAP 自华进口量：2023-24 为 22.28 十万公吨、2024-25 为 8.47 十万公吨", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2237491" },
  { id: 52, name: "印度贸易情报与分析门户（TIA，商工部 DGCIS 官方）· 印度全部商品贸易与十大进口来源国（实时 JSON API，免费无需 Key）", url: "https://trade-analytics.commerce.gov.in/" },
  { id: 53, name: "Economic Times（2026-07）· 2026 上半年中印贸易 $91.72B、2025-26 财年逆差 $112.6B 创历史新高（引中国海关数据）", url: "https://m.economictimes.com/news/economy/foreign-trade/india-china-trade-rises-to-usd-91-72-bn-in-first-6-month-trade-deficit-widens-to-usd-67-1-bn/amp_articleshow/132391346.cms" },
  { id: 54, name: "The Hindu（2026-07）· 2026 上半年印度自华进口 $79.41B（中国海关）；6 月印度整体逆差 $15.3B", url: "https://www.thehindu.com/todays-paper/tp-business/indias-imports-from-china-soar-to-80-bn-in-first-half-of-2026/article71223346.ece" },
  { id: 55, name: "中华人民共和国海关总署 · 进出口商品主要国别(地区)总值表（美元，2026 年 6 月 / 1–6 月，India 行）", url: "http://english.customs.gov.cn/Statics/9d365f1c-5bc6-4cd0-95cd-f4d694547f31.html" },
  { id: 56, name: "华经产业研究院（引中国海关）· 2026 年 1–6 月中国与印度双边贸易额月度统计（累计+单月）", url: "https://www.huaon.com/channel/tradedata/1173319.html" },
  { id: 57, name: "中国海关总署 · 进出口商品主要国别(地区)总值表（月度，美元值；2023–2026 月度序列取「印度」行）", url: "http://www.customs.gov.cn/customs/302249/zfxxgk/2799825/302274/index.html" },
  { id: 58, name: "PIB · 印度重工业部 Rajya Sabha 答复（2025-08，引 DGCIS）· 永磁体分 HS 品类自华进口（FY2024-25，价值/数量双口径：8505.11 金属磁体 81.3%/90.4%、8505.19 其他磁体 59.6%/84.8%、8505.90 电磁吸盘 31.6%/63.2%）", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151394" },
  { id: 59, name: "PIB · 印度化工化肥部书面答复（2026-02，引 DGCIS）· FY2024-25 原料药/中间体进口 43.5 亿美元、对华 73.7%；八大关键品类依赖度更新", url: "https://pib.gov.in/PressReleasePage.aspx?PRID=2237414" },
  { id: 60, name: "GTRI FY2024-25 对华进口依赖系列（Economic Times 转引）· 智能手机零部件 51.7%、锂电池 75.2%、光伏电池 82.7%/组件 78.9%、电信与电子 57.2%、存储芯片 40.5%、微处理器 38.2% 等", url: "https://m.economictimes.com/news/economy/foreign-trade/china-make-in-india-manufacturing-imports-pli-smartphones-trade/articleshow/122808116.cms" },
  { id: 61, name: "印度钢铁部（JPC 数据）Rajya Sabha 答复 · 分品种钢材自华进口量（2023-24 / 2024-25：不锈钢、镀层钢、热轧卷、合金钢、冷轧卷）", url: "https://steel.gov.in/sites/default/files/2025-12/ru%202384.pdf" },
  { id: 62, name: "纺织细分依赖：Texmart（FY25 前 5 月：粘胶人造丝纱线约 99%、起绒织物 93%、涂层织物 52–68%）+ CareEdge（聚酯纱线 86–89%）+ CITI（MMF 面料约 62%）", url: "https://www.texmart.info/govt-considers-minimum-import-price-extension-for-textile-products/" },
  { id: 63, name: "机械细分依赖：IMTMA（FY2024-25 机床自华 25%，第一大来源）+ ICEMA/媒体（挖掘机等约 25%）+ PIB 资本货物国别占比（2014-15：印刷 41.4%、锅炉/电力设备 38.3%、纺机整机 33.9%）+ 中国纺机协会（2024：纺机零部件 60%、针织/非织造机械 70%）", url: "https://pib.gov.in/newsite/PrintRelease.aspx?relid=137682" },
  { id: 64, name: "Business Standard（2025-12）· 化肥对华依赖剧变：DAP 自华 FY24 约 40%→FY25 18.5%、尿素 26.5%→1.8%；特种水溶肥仍约 80% 直接/间接自华（SFIA）", url: "https://www.business-standard.com/amp/economy/news/water-soluble-fertiliser-imports-steady-despite-china-export-crackdown-125122100341_1.html" },
  { id: 65, name: "印度商务部 Lok Sabha 答复（ET 转引）· FY2024-25 汽车零配件进口 71.7 亿美元、自华 26.7%（ACMA 口径 32%，较 FY24 的 29% 上升）", url: "https://cfo.economictimes.indiatimes.com/news/economy/china-supplied-26-6-of-indias-auto-component-imports-in-fy25-govt/123384814" },
  { id: 66, name: "锂电供应链集中度：Economic Survey 2024-25 + ET/IEEFA · 锂离子电池约 75% 自华；LFP 正极材料中国占全球产能 >98%、负极/人造石墨约 80–90%（印度本土几乎无产能）", url: "https://manufacturing.economictimes.indiatimes.com/news/energy/the-battery-trap-indias-next-energy-vulnerability-is-already-taking-shape/131053963" },
  { id: 67, name: "塑料细分依赖：证券时报/行业数据 · 印度 PVC 树脂进口约 41% 自华（2024；2025 前 10 月自华 8.7 亿美元，GTRI）+ 塑料板/片/膜（HS3920）自华 41.1%（2022）", url: "https://www.stcn.com/article/detail/3728015.html" },
  { id: 68, name: "玩具分项：Rajya Sabha 答复 U1978（2021-03，DGCIS：HS9503/9504/9505 分项进口额+合并对华占比 90.2%→76.4%）+ TheDollarBusiness · HS9503 FY2024-25 自华约 47.5%（IndexBox/UN Comtrade 2024 口径约 57%）+ GTRI · 玩具整体 FY24 自华 64%", url: "https://rsdebate.nic.in/bitstream/123456789/715968/1/PQ_253_12032021_U1978_p237_p245.pdf" },
  { id: 69, name: "医疗器械分项：DGCIS 国别表 · HS9018 医疗/外科器械 FY2023-24 自华 17.24%（$4.46 亿/总 $25.85 亿，居美国 21.4% 之后）+ wiiw（WITS/Comtrade）· HS9022 X射线/放射设备 2023 自华 30.9%（2019 仅 19%，持续攀升）+ ThePrint · 脉搏血氧仪约 98% 中国产（2021 市场估算）", url: "https://wiiw.ac.at/post-pandemic-shifts-in-medical-electronics-gvcs-and-changing-value-dynamics-amidst-new-digitalisation-an-analysis-based-on-indian-subsidiaries-of-eu-based-corporations-dlp-7400.pdf" },
  { id: 70, name: "UN Comtrade/WITS/OEC · CY2024 印度海关分项对华占比（†口径）：CT 扫描仪 9022.12 29.5%、X 光管 9022.30 25.4%、放射设备 9022 整体 22.1%、医疗器械 9018 21.1%、二氯甲烷 2903.12 5.7%、平型针织机 8447.20 72.0%、粘胶单丝 5403.31 98.9%", url: "https://wits.worldbank.org/trade/comtrade/en/country/IND/year/2024/tradeflow/Imports/partner/ALL/product/902212" },
  { id: 71, name: "印度钢铁部/JPC · Rajya Sabha 书面答复 RU 2384（2025-12）：FY2024-25 成品钢进口 955 万吨，自华 253 万吨（≈26.5%，第二大来源，韩国 281 万吨居首）；附件含 FY23–FY25 分产品国别量", url: "https://steel.gov.in/sites/default/files/2025-12/ru%202384.pdf" },
  { id: 72, name: "Takshashila 研究所《Digging Deep: TBMs and India’s China Challenge》(2024-25) · 基于印度商工部数据：印度 TBM 进口对华依赖已多元化——自行式 TBM(HS 84303190)自华份额已极低，标准 TBM(HS 84303120)自华占比由 2019 年近 100% 降至近年约六成", url: "https://www.takshashila.org.in/blogs/digging-deep-tunnel-boring-machines-and-indias-china-challenge" },
  { id: 73, name: "Rubix Data Sciences（经 Financial Express，2026）· 印度光伏电池自华占比 FY24 56%→FY25 83%→FY26* 约 65%（本土电池产能释放）；组件受 ALMM 约束、FY26 进口额同比降约 54%", url: "https://www.financialexpress.com/" },
  { id: 74, name: "Business Today / SolarQuarter / TERI（2025-2026）· 印度约 98% 硅片、100% 多晶硅自华；MNRE/SolarQuarter（2025-11）确认仍无商业多晶硅产能", url: "https://www.businesstoday.in/" },
  { id: 75, name: "Forbes India（2025 末）· 印度锂电对华依赖升至约 79%、进口额达 $33 亿", url: "https://www.forbesindia.com/" },
  { id: 76, name: "ACMA FY2025-26 Industry Performance Review（2026-07）· 汽车零配件自华占比升至 36%（FY25 ACMA 32%、FY24 29%）；进口总额 $254 亿、约 $91.4 亿自华", url: "https://www.acma.in/" },
  { id: 77, name: "CareEdge Ratings（FY2025-26 报告，引政府数据）· DAP 进口结构 10MFY26：中国约 9%（FY25 18%）、摩洛哥 27%、沙特 40%；中国出口管制致份额续降", url: "https://www.careedge.com/" },
  { id: 78, name: "印度商工部/Lok Sabha 答复（2026-03，MoS Anupriya Patel）+ TradeInt Q1 2026 · 尿素 10MFY26 自华约 212 万吨（三年高位，约占 20–22%）；中国 2025 年恢复并放量出口", url: "https://www.pib.gov.in/" },
  { id: 79, name: "ICRA / PIB PressNote（2025）· 中国 2025-04 稀土磁体出口许可管制，预警印度车用磁体库存 2025 年 7 月中告急；政府 2025-12 推 ₹7,280 亿 REPM 国产计划（目标 6,000 MTPA）", url: "https://www.pib.gov.in/" },
  { id: 80, name: "PIB（2026）· 「Strengthening India’s Toy Ecosystem」：玩具进口较 2017-18 降 66%，2025-26 在 HS9503/9504/9505 实现 $1.52 亿贸易顺差", url: "https://www.pib.gov.in/" },
  { id: 81, name: "Financial Express（2025-04）· FY25 前 10 月印度自华进口分项：机电（HS84+85）$53.2B、化学品 $10.9B、塑料 $5.3B、钢铝铜镍 $6.33B（商务部经 FE 引）", url: "https://www.financialexpress.com/business/industry/curbs-on-chinese-goods-trade-deficit-with-beijing-close-to-100-bn-in-fy25/3811743/" },
  { id: 82, name: "CNBC-TV18（2026）· GTRI 印度自华进口 HS 结构：电子 34.6% / 机械 22.4%（DGCI&S CY2025）", url: "https://www.cnbctv18.com/economy/rising-imports-push-indias-trade-gap-with-china-to-record-highs-ws-l-19895070.htm/amp" },
  { id: 83, name: "IBEF（2026-01）· FY26 前 8 月印度自华进口分项：化肥 $1.81B、光学/医疗仪器 $1.71B、塑料 $4.55B、HS29 有机化学品 $7.62B", url: "https://www.ibef.org/indian-exports/india-china-trade" },
  { id: 84, name: "The Hindu BusinessLine（2025-12-19）· GTRI FY25 印度对华逆差/自华进口分项：钢铁 $4.6B、医疗科学仪器 $2.5B", url: "https://www.thehindubusinessline.com/economy/indias-trade-deficit-with-china-may-widen-to-reach-106-billion-in-2025-gtri/article70414761.ece" },
  { id: 85, name: "CBIC Circular 14/2025（2025-04-21）· 将 CAROTAR「原产地证书」改为「原产地证明」，海关可要求发票、生产记录等追加证据，针对经第三国转口", url: "https://csvr.in/detail/54397.aspx" },
  { id: 86, name: "The Hindu BusinessLine（2025-03）· CBIC 新规明确针对中国货经东盟/越南/UAE 转口；披露胡志明市企业将中国丝绸贴牌「越南制造」输印案例", url: "https://www.thehindubusinessline.com/economy/availing-preferential-tariff-india-tightens-rules-of-origin-to-check-chinese-goods-route/article69353631.ece" },
  { id: 87, name: "Taxscan（2025-09）· DRI 破获液压破碎锤经马来西亚伪造原产地证洗产地案，约 500 集装箱、涉案超 ₹2000 crore、主犯被捕", url: "https://taxscan.in/" },
  { id: 88, name: "Nomura（2025 年中）· Asia Faces Growing Transshipment Challenges：2025 年 2 月起亚洲自华进口激增（3–4 月同比 +21.7%），年化 900–1000 亿美元，印度机械电子进口含转口成分", url: "https://www.nomuraconnects.com/focused-thinking-posts/asia-faces-growing-transshipment-challenges" },
  { id: 89, name: "印度商工部/财政部 · 对华/越钢化光伏玻璃反倾销案（立案 2024-02、临时征税 2024-12，26/2024-Customs(ADD)）：裁决覆盖「经任何国家出口」防转口条款", url: "https://www.chinawto.mofcom.gov.cn/article/dh/jinghua/202403/20240303475935.shtml" },
  { id: 90, name: "越南官方/《人民报》（2025-2026）· 越南对印出口 2025 年达 103 亿美元（+14.2%）、手机电子占近 40%；越方承认印方因「含中国原产成分」加强查验", url: "https://vneconomy.vn/vietnam-india-bilateral-trade-hits-historic-high-of-164-bln-in-2025.htm" },
  { id: 91, name: "SteelMint（2026）· 印度 2025-04-21 起对扁平钢征 12% 保障性关税，自华钢材量 2025-04~11 同比暴跌 51%，钢铁与贱金属占自华进口比重由 FY25 约 6.5% 降至 FY26 约 5%", url: "https://www.steelmint.in/india-imposes-three-year-safeguard-duty-on-flat-steel-imports-710177" },
  { id: 92, name: "The Hindu（2026）· 2025 年印度自华电子进口约 $38B（手机零件 $8.6B、IC $6.2B、笔电 $4.5B、太阳能组件 $3B、锂电 $2.3B）；太阳能仍约 82% 自华", url: "https://www.thehindu.com/" },
  { id: 93, name: "印度财政部 Notification 02/2025-Customs(SG)（2025-12-30）· 扁平钢保障性关税由 2025-04-21 临时措施转为三年期：第一年 12%、第二年 11.5%、第三年 11%，2028-04-20 到期；原产地豁免排除中国、越南、尼泊尔；临时措施 2025-04-21 起 200 天（CIF 低于 675–964 美元/吨免征）", url: "https://content.trade.gov.in/TCP-CMS/12766729435441048/3080000217/3.pdf" },
  { id: 94, name: "印度财政部 Notification（2025-05-08）· 对中国、越南产绒面钢化太阳能玻璃征 5 年反倾销税，追溯至 2024-12-04，多数中国厂商 664 美元/吨", url: "https://www.saurenergy.com/solar-energy-news/india-imposes-5-yr-anti-dumping-duty-on-solar-glass-imports" },
  { id: 95, name: "印度 DGTR（2025-03-21 征税 / 2025-08-14 PVC 悬浮树脂终裁）· 对中国大陆等 PVC 糊树脂征 5 年反倾销税（248–707 美元/吨）；PVC 悬浮树脂建议续征 5 年（122–232 美元/吨），印度为中国 PVC 最大出口市场（2024 约 49%）", url: "https://dgtr.gov.in/sites/default/files/2025-08/FF-NCV_PVC_14.08.2025.pdf" },
  { id: 96, name: "印度财政部 Notification 15/2025-Customs(ADD)（2025-06-19）· 对中国产 ≤80 微米铝箔征 5 年反倾销税（479–721 美元/吨）", url: "https://news.metal.com/es/newscontent/103958245" },
  { id: 97, name: "印度新闻信息局 PIB（2025-02-01 联邦预算）· 工业品关税档由 21 档压缩至 8 档；交互式平板显示器 IFPD 的 BCD 由 10% 上调至 20%（开放式面板降至 5%），直指以中国为主的成品显示器进口", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2098364" },
  { id: 98, name: "印度外交部 MEA / 中国网（2025-2026）· 2025-06-12 外秘会谈同意恢复直航、签证便利化、恢复经贸功能性对话；冈仁波齐-玛旁雍错朝圣 2025-06-30 时隔五年恢复；直航 2025-10 恢复、2026-01-01 推 e-B4 在线商务签证；2025 中印贸易额 1556.2 亿美元创新高", url: "https://www.mea.gov.in/rajya-sabha?dtl/39056/QUESTION_NO_1041_KAILASH_MANSAROVAR_YATRA" },
  { id: 99, name: "中国 WTO 法律网 / 商务部（2025）· 印度 2025 年撤销精炼锌、原铅、精炼镍、锡锭、铝及铝合金、铜、镍等 21 项 QCO（S.O. 2025-04-17 等）；BIS 在暂停近五年后着手恢复受理中国制造商 ISI/CRS 认证申请", url: "https://chinawto.mofcom.gov.cn/article/jsbl/dtxx/202511/20251103607833.shtml" },
  { id: 100, name: "中国商务部、海关总署 公告 2023 年第 23 号（2023-08-01 生效）· 对金属镓、氮化镓、砷化镓、金属锗、二氧化锗等未经许可不得出口，需提交最终用户与最终用途证明；影响印度半导体供应链", url: "https://www.mofcom.gov.cn/zcfb/dwmygl/art/2023/art_52b9a321087f402bb3d310d18b07967e.html" },
  { id: 101, name: "中国商务部、海关总署 公告 2023 年第 39 号（2023-12-01 生效）· 将高纯人造石墨、天然鳞片石墨（含球化/膨胀石墨）列管；球化石墨为锂电负极核心原料，影响印度电动车电池供应链", url: "https://www.mofcom.gov.cn/zcfb/zc/art/2023/art_f19e2843f70647c197fd9fe5b7d52d2a.html" },
  { id: 102, name: "中国商务部、海关总署 公告 2024 年第 33 号（2024-09-15 生效）· 管制锑矿及原料、金属锑、高纯锑氧化物、锑化铟、金锑冶炼分离技术，及六面顶压机、MPCVD 设备、金刚石窗口等超硬材料物项", url: "https://www.mofcom.gov.cn/zwgk/zcfb/art/2024/art_a4711acb06364199a3c5a06d7f2be6d8.html" },
  { id: 103, name: "中国商务部、海关总署 公告 2025 年第 10 号（2025-02-04 即日生效）· 管制仲钨酸铵、氧化钨、碳化钨、金属碲、碲化镉、金属铋、钼粉、磷化铟、三甲基铟及相关生产技术", url: "https://www.mofcom.gov.cn/zwgk/zcfb/art/2025/art_e623090907fc4e1092f0a4db72f57b95.html" },
  { id: 104, name: "中国国务院《两用物项出口管制条例》+ 统一管制清单 公告 2024 年第 51 号（2024-12-01 生效）· 首次以行政法规统一两用物项管制规则，整合稀土、镓锗锑、无人机、传感器等逾千项", url: "https://swt.sc.gov.cn/sccom/c25030605/2026/6/19/30db33c59ba24936bcc6da74b08771eb.shtml" },
  { id: 105, name: "新华社 / The Hindu BusinessLine（2025-10-09 六项公告 → 2025-11-07 暂停一年至 2026-11-10）· 新增超硬材料、稀土设备与原辅料、5 种中重稀土、锂电池及人造石墨负极管制，并对「境外含中国稀土成分≥0.1% 物项」与稀土技术实施域外管制；经中美磋商暂停实施，对印度产业同样构成缓解", url: "https://www.xinhuanet.com/english/20251107/7a75d5b66d544baab747f77d6b9f52f0/c.html" },
  { id: 106, name: "The Hindu（2025-10-15 起）· 中方关闭化肥出口窗口（尿素、DAP、特种肥 TMAP）；印度约 95% 特种化肥自华进口，业界预计涨价 10–15%；2025-05~06 亦曾对印停供，8-19 中印外长会晤后短暂解禁", url: "https://www.thehindu.com/business/india-faces-specialty-fertiliser-price-jump-as-china-suspends-exports/article70187264.ece" },
  { id: 107, name: "中国商务部 公告 2025 年第 24 号 / 第 42 号· 对印度氯氰菊酯征 48.4%–166.2% 反倾销税（5 年，2025-05-07 起）；对原产印度单模光纤反倾销期终复审立案（2025-08-14，继续征 7.4%–30.6%）", url: "https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=102876" },
  /* —— 本轮新增：贸易流 / 军工端用途 / 转口新案例（2026-08 核实） —— */
  { id: 108, name: "The Ken（2024-25）调查· 印度陆军、CRPF、BSF、ITBP 与恰蒂斯加尔警方经东南亚/阿联酋灰市购入中国大疆（DJI）商用无人机用于边境与反毛派行动，违反 2020 采购禁令；印无人机厂 Skylark 被指以中国技术冒充国产遭 DGCA 调查", url: "https://the-ken.com/story/the-ken-investigation-army-crpf-and-bsf-cant-do-without-banned-chinese-drones" },
  { id: 109, name: "DefenseMirror（2024-25）· 印陆军 2023 年 ₹230 crore 应急采购 400 架后勤无人机（部署 LAC），因检出中国电子/部件、存在「后门」风险于 2024-25 取消合同", url: "https://www.defensemirror.com/news/38781/" },
  { id: 110, name: "ORF（2025）· 印度 FY22-25 永磁体进口 59.6%–81.3% 来自中国，用于 Tejas 雷达/飞控、BrahMos 导引头、舰艇电机、导弹制导；2025-10 印企按中方要求提交「不转口美国」终端用户证明", url: "https://www.orfonline.org/research/-chokepoint-politics-china-s-rare-earth-statecraft-and-india-s-search-for-strategic-autonomy/" },
  { id: 111, name: "India Today（2026-04-01）· 印度海军 2021 令停用海康威视并销毁存量；约 90% 印 200 万监控摄像头为中国产（Hikvision/Dahua），布于军营/机场周边；2026-04-01 起 STQC 认证全面禁中国联网摄像头", url: "https://www.indiatoday.in/amp/technology/news/story/why-india-is-banning-hikvision-dahua-tp-link-cctv-cameras-from-today-all-you-need-to-know-2889858-2026-04-01" },
  { id: 112, name: "Construction World（2025-09-29）· DGTR 对华太阳能电池及组件征最高 30% 反倾销税（3 年），明确「中国经泰/柬/越/马来在东南亚制造再出口」同样征 30%（反规避条款）；称中国经这些国规避美/土限制", url: "https://www.constructionworld.in/policy-updates-and-economic-news/india-imposes-up-to-30--antidumping-duty-on-chinese-solar-cells/79516" },
  { id: 113, name: "Lexology / Reuters（2025-11-13）· 印度财政部对越南热轧扁钢征 USD 121.55/吨（5 年），Reuters 注明「经越南转运的第三国货」同适用；进口商改走半成品钢规避", url: "https://www.lexology.com/library/detail.aspx?g=46c35dec-5bf1-477c-8cd5-91a20c438b1a" },
  { id: 114, name: "India Briefing（2025-03-18）· CBIC 第 14/2025 号通告将「Certificate of Origin」改「Proof of Origin」扩权查中国经东盟/UAE 转口钻 FTA 漏洞；eCoO 2.0 自 2025-01-01 强制电子产地证；2025-04 撤销 Circular 29/2020（经孟加拉 LCS 转口）", url: "https://www.india-briefing.com/news/proof-of-origin-replaces-certificate-in-indias-trade-rules-36610.html" },
  { id: 115, name: "Gujarat Customs / Mundra（2025-12-26）· 向三进口商发 Show Cause Notice，指其借 India-UAE CEPA 以阿联酋公司跳板进口面料，原料（尼龙/聚酯）与 CTH 不符、未达 40% 增值", url: "https://gujaratcustoms.gov.in/juridictional_commissionerate/public//storage/pdfs/nAFt5nq4MoqJ8wZZrqUG1oX6u9a9ul4mn9FKFKZw.pdf" },
  { id: 116, name: "Times of India / feeds（2024-12）· DRI 在 ICD Sanathnagar 查中国产假冒化妆品经迪拜转口、低估约 70%、由相关人控制", url: "https://toifeeds.indiatimes.com/city/hyderabad/china-to-hyd-via-dubai-dri-unmasks-fake-cosmetics-at-city-container-depot/articleshow/119671200.cms" },
  { id: 117, name: "Indian Express（2025）· DRI「Operation Fire Trail」在 Nhava Sheva/Thoothukudi/Mundra 查中国产烟花瞒报为 leggings/工具，单笔 ₹4.82–6.32 crore，累计 ₹35 crore+（规避进口许可，非第三国转口）", url: "https://indianexpress.com/article/cities/mumbai/dri-seizes-chinese-origin-firecrackers-worth-rs-4-82-crore-at-nhava-sheva-port-10317643/" },
  { id: 118, name: "Financial Express / GTRI（2025-26）· 印自华进口 USD 131.63 bn（占 16%），98.5% 为工业投入，电子 43%/机械 40%/有机化学品 44%；政府设跨部门「进口激增监测」小组防中/越/印尼转口倾销", url: "https://www.financialexpress.com/business/news-indian-manufacturing-dependence-on-china-deepens-industrial-inputs-form-98-5-of-total-imports-gtri-4220806/" },
  { id: 119, name: "徐工 XCMG（官方）· 向 Reliance Industries SANSAN 电厂出口 7×QUY650+10×QUY150 履带吊（创大吨位出口纪录）；向 Tata Steel Kalinganagar 钢厂扩建供 650 吨履带吊", url: "https://www.xcmgmachinery.com/" },
  { id: 120, name: "中联重科 Zoomlion India（官方）· 向 Reliance Industries 直供 120 台 QY75V 汽车吊用于自建项目", url: "https://www.zoomlionindia.org/" },
  { id: 121, name: "迈瑞医疗 Mindray（官方）· 新冠期向印度供应数千台 ICU/呼吸机设备，客户含 HLL Lifecare、Tata Trusts、AIIMS Rishikesh 等", url: "https://www.mindray.com/" },
  { id: 122, name: "联影医疗 United Imaging（2026-04）· 6 年累计对印销售超 10 亿美元（CT/PET-CT 700+ 台），2025-12 单笔 20 亿元人民币订单；经 Medikabazaar 等代理/CDSCO 持证", url: "https://www.united-imaging.com/" },
  { id: 123, name: "ImportGenius / 贸易公社（海关提单）· 福耀玻璃（Fuyao）对印出口汽车玻璃 4529 批海关记录；舜宇/丘钛经 Dixon 收购的印度子公司供货智能手机光学件（documented）", url: "https://www.importgenius.com/" },
  { id: 124, name: "Volza / Panjiva（海关数据）· Dixon Technologies 收购印度 HKC 子公司以承接中国电子元件转口/本地化；电子/电信经香港、越南、新加坡、马来西亚贴牌绕 FTA 证据（DRI 调查 + 财政部 2025 原产地新规）", url: "https://www.volza.com/" },
  { id: 125, name: "SteelMint / steel.gov.in· 中国对印成品钢出口 FY25 约 253 万吨；JSW、AM/NS 申请对越南热轧板征反倾销税 $121.55/吨，认定越南作中国转运通道；焊管反补贴税对中越延长 5 年", url: "https://www.steelmint.in/" },
  { id: 126, name: "The Dollar Business（2024-25）· 印度玩具进口前三大买家 Leo Godt/Mattel India/Bharat Balloon，华货占 $40.2M；经新加坡 $13.1M、香港 $2.7M 中转；越南持 14 张外资玩具 BIS 许可被用作转口", url: "https://www.thedollarbusiness.com/" },
  { id: 127, name: "MedicalBuyer / AiMeD（2025）· 约 40% 中国医疗器械被标「印度制造」白牌经第三国转口规避 CDSCO；印度政府以国防/数据安全为由启动审查", url: "https://www.medicalbuyer.co.in/" },
  { id: 128, name: "LiveMint / ET Energyworld / Hindustan Times（2026-02-01 联邦预算 + 2026-04 MNRE TOPCon/HJT 反倾销税）· 锂电 5% 优惠/PLI-Auto 增+11/4 个稀土走廊 ₹7,280 cr；N 型光伏组件 18.7% 反倾销税", url: "https://www.livemint.com/budget/budget-ev-pli-rare-earth-corridors-lithium-ion-duty-11769936707833.html" },
  { id: 129, name: "WIBG / Economic Times DGTR / customs-compliance.ai（2026）· 印度 2026 关税新政（Notification 12/2026-Customs 40 类石化 0% BCD 窗口期）+ 印度对华反倾销/反补贴/复审/原产地新规全谱（CDIC/Anti-Dumping/BCD/IGST/SWS）", url: "https://www.kantormaterials.com/insights/india-polymer-import-nil-bcd-window-2026-china-pp-pe-pvc" },
  { id: 130, name: "UN Comtrade 官方 API（中国海关总署报送）· 中国对越南/中国香港/中国台湾/新加坡/马来西亚/泰国/印度尼西亚/阿联酋出口，HS 品目级，2021–2024 逐年（reporter=156，flow=X）", url: "https://comtradeapi.un.org/data/v1/get/C/A/HS" },
  { id: 131, name: "印度商工部 DGCI&S · 贸易情报与分析门户 TIA（trade-analytics.commerce.gov.in）· 印度官方贸易统计（进口伙伴排名 / 商品×国家数据提取）", url: "https://trade-analytics.commerce.gov.in/" },
  { id: 132, name: "越南海关总署（General Department of Vietnam Customs）+ 越南工贸部 VITIC · 越南对印出口商品组（2024 vs 2025，2026-01-13 公布）：手机/电子/机械等", url: "https://en.vietnamplus.vn/vietnam-india-trade-sets-new-record-at-nearly-165-billion-usd-post335918.vnp" },
  { id: 133, name: "印度 IBEF（India Brand Equity Foundation）· 印度-香港双边贸易官方统计（FY 年度，2025）", url: "https://www.ibef.org/indian-exports/india-hong-kong-trade" },
  { id: 134, name: "新加坡统计局 SingStat · 新加坡对印贸易官方统计（年度 HS 章级）", url: "https://www.singstat.gov.sg/find-data/search-by-theme/trade" },
  { id: 135, name: "阿联酋联邦竞争力与统计中心 FCSC / 阿联酋海关 · 阿联酋对印贸易统计（年度）", url: "https://www.fcsc.gov.ae/en-us/Pages/default.aspx" },
  { id: 136, name: "印度尼西亚统计局 BPS（Badan Pusat Statistik）· 印尼对印贸易统计", url: "https://www.bps.go.id/en/subject/20/international-trade.html" },
  { id: 137, name: "泰国海关总署（Thai Customs Department）· 泰国对印贸易统计（年度 HS 章级）", url: "https://www.customs.go.th/" },
  { id: 138, name: "马来西亚统计局 DOSM（Department of Statistics Malaysia）· 马来对印贸易统计", url: "https://www.dosm.gov.my/v1/index.php" },
  { id: 139, name: "印度商工部 / PIB（Press Information Bureau）· 印度自各主要伙伴进口历年统计（多国，FY 年度）", url: "https://www.pib.gov.in/" },
  { id: 140, name: "印度 DGCI&S 国际贸易期刊 ITJ（itj.dgciskol.gov.in）· 印度自各伙伴国 HS 6 位逐年进口（PDF 公开下载） + OEC Observatory of Economic Complexity（CEPII BACI 镜像）", url: "http://itj.dgciskol.gov.in/" },
  { id: 141, name: "BEL（Bharat Electronics Limited）官方公告（2025-04-07）· 空军 EW 套件 ₹2,210 亿订单；2025-03 Ashwini 可运输雷达 ₹2,906 亿合同（MoD）", url: "https://bel-india.in/wp-content/uploads/2025/04/Press-Release-07.04.2025.pdf" },
  { id: 142, name: "印度国防部 MoD / PIB · 2025 年国防采购与生产年报（DAC 批准 ₹3.84 万亿资本采购；LCA Mk1A 97 架、LCH 156 架、BEL/BDL/AVNL/MIL 合同；2025-26 国防生产 ₹1.54 万亿创纪录）", url: "https://ddindia.co.in/2026/01/year-ender2025defence-strengthens-capability-and-self-reliance" },
  { id: 143, name: "IDSA / ORF / 印度国防研究与发展组织（DRDO）公开资料 · DRDO 技术转移 2200 项；印度国防工业对华供应链依赖研究（稀土永磁 59.6–81.3%，ORF 2025-11）", url: "https://www.orfonline.org/research/-chokepoint-politics-china-s-rare-earth-statecraft-and-india-s-search-for-strategic-autonomy" },
  { id: 144, name: "《世界知识》2025-03（兰州大学段彬）· 印度 BRO 2024 年采购 831 台工程机械 ₹253 亿（山特维克 DT820/曼尼通叉车等欧美设备）", url: "https://www.guancha.cn/duanbin/2025_03_19_768962_2.shtml" },
  { id: 145, name: "搜狐/观察者网（2025）· 藏南隧道（达旺）开通报道，称使用中国 CRCHI 盾构机（2020 孟买沿海公路 8 台中资 TBM 报道）；BRO 边境项目与中国工程机械关联的公开报道", url: "https://www.sohu.com/a/962438814_121142194" },
  { id: 146, name: "Fortune Business Insights / The Wire / IDSA · 印度国防电子市场与私营军工（TASL C-295 总装、L&T K9 自行榴弹炮等）", url: "https://www.fortunebusinessinsights.com/india-defense-electronics-market-114279" },
  { id: 147, name: "对外经济贸易大学数字经济实验室（UIBE）/ 海关总署 · 《中国芯片产品贸易月度监测报告》（HS 8542 全章出口国别数据，如 2025 中国对越南集成电路出口 180.25 亿个、$266.68 亿）", url: "https://www.fxbaogao.com/detail/5210487" },
  { id: 148, name: "中国机电产品贸易大数据报告 2025（chwang.com / 中国机电商会电子信息分会）· 2025 中国对香港出口集成电路（HS 8542）$875.1 亿（+29.5%）；手机出口 $1,216.9 亿（-9.4%）；锂离子电池 $820.8 亿（+23.2%）", url: "https://www.chwang.com/article/202909270251" },
  { id: 149, name: "北极星太阳能光伏网 / 海关总署 · 2025 中国多晶硅（HS 2804.61）出口总额 ¥16.02 亿（-35.5%），出口 41 国，泰国 ¥2.35 亿第 3 / 马来西亚 ¥4.53 亿第 2", url: "https://www.toutiao.com/article/7602939005503619626/" },
  { id: 150, name: "索比光伏网（solarbe.com）· 2025 中国硅片出口 Top10 国别：印度 21.57 亿片、印尼 6.13 亿片、泰国 5.27 亿片、马来 1.68 亿片、新加坡 0.99 亿片", url: "https://m.solarbe.com/21-0-50017825-1.html" },
  { id: 151, name: "特能达光伏数据（tendata.cn）· 2025 中国太阳能电池出口总额 ¥2,018 亿（135 亿个 +72.9%），对印尼 ¥84 亿第 5 / 阿联酋 ¥67 亿第 6", url: "https://www.tendata.cn/news/6533.html" },
  { id: 152, name: "商务部/中国贸易救济信息网（2026-07）· 印度延长对华无缝钢管反倾销至 2027-01-27（第 16/2026-Customs ADD 号通报）；乙酰乙酰基衍生物延长至 2027-01-13（第 17/2026 号）", url: "https://cacs.mofcom.gov.cn/article/ajycs/ckys/202607/188661.html" },
  { id: 153, name: "搜狐/中国贸易救济信息网（2026-07-27）· 印度对涉华低灰冶金焦炭征 5 年反倾销税（中国 $128.83/吨，第 18/2026-Customs ADD 号，HS 2704）", url: "https://www.sohu.com/a/1056978181_99958438" },
  { id: 154, name: "头条光伏/北极星（2026-07）· 印度 MNRE 2026-07-18 备忘录：净计量/开放接入项目 2026-12-31 前豁免强制国产电池采购（「去中国化」47 天松口）；约 1/3 中小组件企业停产；2026-H1 中国对印硅片出口翻倍、印度成第一大硅片市场", url: "https://www.toutiao.com/a7668085477949342223" },
  { id: 155, name: "中邮证券/财闻（2026-08-06）· 商务部 2026 年第 26 号公告（7-1 生效）：战略矿产两用物项出口管制违法举报处理机制，明确 13 类违法违规情形（未许可出口/绕道转口规避/改造拆分规避等）", url: "https://www.163.com/dy/article/L3LK20R90550WHYR.html" },
  { id: 156, name: "搜狐/彭博社（2026-08）· 国务院第 841 号令《出境入境管理》新规（2026-09-15 施行）：违反出口管制/技术进出口管理危害产业安全者可不准出境；塔塔 Agratas 评估与中国电池技术合作可能性「几乎为零」", url: "https://www.sohu.com/a/1059126128_122219413" }
];

/* --------- 数据源登记表（更新频率 / 覆盖范围 / 接入方式）--------- */
const DATA_SOURCES = [
  { id:"cn_customs", name:"中国海关总署",
    freq:"月度（每月中旬发布上月数据）",
    coverage:"全国进出口总值及主要商品量值",
    access:"官网 customs.gov.cn 发布月度快讯/年报；无开放 API，需人工录入或解析 PDF",
    api:false },
  { id:"in_moc", name:"印度商务部 DGCIS / 驻华使馆",
    freq:"月度（贸易公告）+ 财年汇总",
    coverage:"印度进出口按伙伴国与 HS 商品",
    access:"commerce.gov.in / eoibeijing.gov.in 发布；部分经 Lok Sabha 答复与 PIB；无开放 API",
    api:false },
  { id:"un_comtrade", name:"联合国商品贸易统计 UN Comtrade",
    freq:"月度/年度（各国报送延迟 2–12 个月）",
    coverage:"全球 200+ 国家商品级（HS）双边贸易",
    access:"开放 API v1（comtradeapi.un.org），需免费 API Key（Ocp-Apim-Subscription-Key）；本站的 update_data.py 已接入",
    api:true },
  { id:57, name:"中国海关总署 月度分国别表（美元值）",
    freq:"月度（每月中旬发布上月）",
    coverage:"中国对各国（地区）进出口，按伙伴国分列；本报告取「印度」行",
    access:"海关总署官网 customs.gov.cn 月度统计表 + 商务部 MOFCOM 转引；单位千美元（÷1万=亿美元），无开放 API",
    api:false }
];
/* 本批数据整理时间（更新脚本会自动改写此值）*/
const LAST_UPDATED = "2026-08-04";

/* --------- 1. 中印双边贸易历史（单位：十亿美元 / USD Bn）--------- */
/* 来源：印度驻华大使馆（印度商务部 DGCIS），财年口径 --------- */
const TRADE_HISTORY = {
  years:    ["2014-15","2015-16","2016-17","2017-18","2018-19","2019-20","2020-21","2021-22","2022-23","2023-24","2024-25","2025-26"],
  exports:  [11.96, 9.01, 10.17, 13.33, 16.75, 16.61, 21.19, 21.56, 15.31, 16.66, 14.25, 19.47],
  imports:  [60.41, 61.71, 61.28, 76.38, 70.32, 65.26, 65.21, 94.57, 98.51, 101.74, 113.46, 131.63],
  deficit:  [48.45, 52.70, 51.11, 63.05, 53.57, 48.65, 44.02, 73.01, 83.20, 85.08, 99.21, 112.60],
  source: 1
};

/* --------- 关键概况指标 --------- */
/* 四个维度统一采用 FY2025-26 财年口径（最新完整财年，截至 2026-07-28 已发布），
 * 与全站「印度视角」TIA 交叉校验块一致。数据：双边总额/逆差来自中国海关(DGCIS/媒体报道一致口径，
 * 2025-26 财年)；进口占比由 TIA 总进口 6020.7 亿 ÷ 自华 1316.3 亿 算出。 */
const OVERVIEW_STATS = [
  { label: "双边贸易总额", value: "1511", unit: "亿美元", note: "2025-26 财年（印度对华进出口合计）；中国连续多年为印度最大贸易伙伴", source: 53 },
  { label: "印度对华贸易逆差", value: "1126", unit: "亿美元", note: "2025-26 财年（自华进口 1316 − 对华出口 195）；创历史新高的千亿美元级逆差", source: 53 },
  { label: "中国占印度进口比重", value: "21.9%", unit: "", note: "2025-26 财年：自华 1316 亿美元 ÷ 印度总进口 6021 亿美元（DGCIS/TIA 官方）≈21.9%", source: 52 },
  { label: "中国占印度工业品进口", value: "30%", unit: "", note: "GTRI 估算（约 30%）：印度工业品进口中约 30% 来自中国，15 年前仅 21%，占比持续攀升", source: 3 }
];

/* --------- 印度对华进口主要品类（FY2025-26，占印度自华进口结构）--------- */
/* 来源：印度商务部 DGCIS / IBEF（FY26 前 8 月 $84.26B 推算）/ GTRI / The Hindu --------- */
const IMPORT_CATEGORIES = {
  labels: ["电子/电信/电气", "工程机械/工业机械", "有机化学品与医药原料", "钢铁与贱金属", "塑料及其制品", "汽车零配件", "纺织品和服装", "医疗器械与仪器", "化肥", "玩具", "其他"],
  values: [34.0, 22.4, 9.0, 5.0, 5.4, 2.2, 2.5, 2.0, 2.1, 0.1, 15.3],
  note: "印度自华进口约 $131.6B（FY2025-26，DGCIS/GTRI，来源 53）的品类结构拆分。DGCIS 全年分项尚在滞后发布，本图以 FY26 前 8 月（2025-04~11，IBEF 汇总 $84.26B）分项推算全年结构（来源 83）；电子/机械占比与 GTRI「电子 34.6% / 机械 22.4%」一致（来源 82）。2025 年自华电子进口约 $38B（手机零件 $8.6B、IC $6.2B、笔电 $4.5B、太阳能组件 $3B、锂电 $2.3B，来源 92）。钢铁与贱金属占比由 FY25 约 6.5% 降至约 5%——2025-04-21 起 12% 保障性关税使自华钢材量 2025-04~11 同比暴跌 51%（来源 91）。汽车零配件、塑料、有机化学品、化肥、医疗器械为 FY26 前 8 月官方分项硬数据（来源 83）；纺织品服装、玩具无 FY26 公开分项，沿用 FY24-25 比例并标注示意性。图中各值为「占自华进口比重」，与产业依赖度（对华占比）是不同概念。",
  source: 83
};

/* --------- 2. 印度对中国依赖产业（依赖指数 + 详情）--------- */
/* dependency = 中国在该产业印度进口中的份额(%)；均标注来源。
 * detail: { intro, hs:[{code,name}], tradeYearly:[{period,value,unit,note}],
 *           tradeMonthly:[{period,value,unit,note}]（无则空数组）, alternatives:[{country,note}], sources:[id] } */
const DEPENDENCE_INDUSTRIES = [{
  "key":"raw",
  "group":"原材料 / 关键矿产",
  "name":"稀土永磁体",
  "dependency":80,
  "metric":"中国加工全球约 90% 稀土供应；印度 FY24-25 自华永磁体进口占其总进口约 78–81%（HS 8505.11 90 对华 81.3%）。",
  "source":12,
  "detail":{
    "intro":"以钕铁硼（NdFeB）为主的稀土永磁体是电动汽车电机、风电、消费电子与国防系统的核心部件。印度无商业规模的烧结 NdFeB 上游产能，国内加工能力仅约 3000–5000 吨/年，进口满足大部分需求。",
    "dependencyNote":"印度本土无商业规模的烧结钕铁硼（NdFeB）上游产能，年加工能力仅约 3000–5000 吨，绝大部分需求依赖进口。FY24-25 印度自华永磁体进口占其总进口约 78–81%（其中 HS 8505.11 90 自华 81.3%）。2025 年 4 月中国实施稀土磁体出口许可管制后，FY26 上半年永磁体进口量同比骤降约 56%，暴露供应链高度脆弱；被卡点在于重稀土与高端磁体产能缺失。",
    "hs":[{
      "code":"8505.11",
      "name":"金属制永磁体"
    }, {
      "code":"8505.19",
      "name":"其他材料永磁体"
    }, {
      "code":"8505.90",
      "name":"电磁起重吸盘等"
    }],
    "tradeYearly":[{
      "period":"FY22-23",
      "value":88.42,
      "unit":"百万美元",
      "note":"HS 8505.11 90 自华进口"
    }, {
      "period":"FY23-24",
      "value":90.8,
      "unit":"百万美元",
      "note":"对华依赖约 72.8%"
    }, {
      "period":"FY24-25",
      "value":110.68,
      "unit":"百万美元",
      "note":"对华依赖约 81.3%（占印度该税号总进口）"
    }],
    "tradeMonthly":[{
      "period":"FY26 上半年 (4–9月)",
      "value":16281,
      "unit":"吨",
      "note":"永磁体进口量同比 -56%（中国出口管制 + 车企切换轻稀土/无稀土电机）"
    }],
    "alternatives":[{
      "country":"日本",
      "note":"占印度磁体进口值约 10–15%"
    }, {
      "country":"韩国",
      "note":"WITS 2024（HS8505.19）自韩 $6.77M"
    }, {
      "country":"越南",
      "note":"WITS 2024 自越 $3.99M"
    }, {
      "country":"德国",
      "note":"高端磁体来源"
    }],
    "sellers":[
      {
        "name": "金力永磁（JL MAG）",
        "type": "高性能钕铁硼全球第二",
        "top": "产能 ~2.3 万吨/年",
        "profile": {
          "hq": "中国 江西 赣州",
          "founded": "2008",
          "business": "高性能烧结钕铁硼永磁材料研发、制造与销售",
          "products": "新能源汽车驱动电机磁体、风电直驱磁体、节能变频空调磁体、机器人伺服电机磁体",
          "tradeVolume": "对印出口位居中国 NdFeB 厂商前列；印度 EV 与风电为主要终端",
          "sources": "金力永磁 2024 年报、EVTank《2025 中国锂电产业链》",
          "note": "全球第二大高性能 NdFeB 厂商，中重稀土产品占比行业领先"
        }
      },
      {
        "name": "中科三环（Zhong Ke Sanhuan）",
        "type": "汽车 OEM 主力供应商",
        "top": "产能 ~2 万吨/年",
        "profile": {
          "hq": "中国 北京",
          "founded": "1999",
          "business": "烧结钕铁硼与钐钴磁体的研发与制造",
          "products": "汽车 EPS/驱动电机磁体、风电磁体、消费电子磁体",
          "tradeVolume": "对印出口在 NdFeB 厂商中常年居前，多直供汽车 Tier-1",
          "sources": "中科三环 2024 年报、中国稀土行业协会",
          "note": "中科院背景；与日立金属有专利交叉许可"
        }
      },
      {
        "name": "宁波韵升（Ningbo Yunsheng）",
        "type": "磁体+电机一体化",
        "top": "产能 ~2.1 万吨/年",
        "profile": {
          "hq": "中国 浙江 宁波",
          "founded": "1991",
          "business": "稀土永磁材料、电机及伺服系统的研发与制造",
          "products": "烧结 NdFeB 磁体、伺服电机、汽车电机",
          "tradeVolume": "对印出口排名前列；与印度两轮 EV 厂商合作紧密",
          "sources": "宁波韵升 2024 年报",
          "note": "磁体与下游电机一体化布局，2014 年进入印度市场"
        }
      }
    ],
    "buyers":[
      {
        "name": "Tata Motors",
        "type": "印度最大车企",
        "top": "2024 自华进口 ~$28 亿",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1945",
          "business": "印度最大乘用车与商用车制造商，捷豹路虎母公司",
          "products": "乘用车 Nexon/Harrier/Safari、EV Tiago EV/Punch EV/Curvv、商用车 Ace/Prima",
          "tradeVolume": "2024 自华进口零部件约 28 亿美元，磁体/玻璃/电池/电子为主",
          "sources": "Tata Motors FY25 Annual Report、印度商工部 Import Data",
          "note": "EV 转型关键期，磁体与电池为对华依赖核心"
        }
      },
      {
        "name": "Ola Electric",
        "type": "印度电动两轮车龙头",
        "top": "在印市占率 ~30%",
        "profile": {
          "hq": "印度 Karnataka 班加罗尔",
          "founded": "2017",
          "business": "电动两轮车整机与电池 PACK 制造",
          "products": "S1 系列电动两轮车、电动摩托车",
          "tradeVolume": "驱动电机磁体主要自中国进口；曾与宁德时代签电池协议",
          "sources": "Ola Electric DRHP (2024)、ImportGenius",
          "note": "印度电动两轮车市占率第一"
        }
      },
      {
        "name": "Uno Minda",
        "type": "印度汽车零部件 Tier-1",
        "top": "在印汽车零部件前 5",
        "profile": {
          "hq": "印度 哈里亚纳 古尔冈",
          "founded": "1992",
          "business": "汽车零部件，覆盖照明/电子/电机/内饰",
          "products": "汽车灯具、电子、电机、传感器",
          "tradeVolume": "稀土磁体为重要对华采购品，与多家中国磁体厂有直供协议",
          "sources": "Uno Minda 年报、印度汽车零部件协会 ACMA",
          "note": "印度主要汽车 Tier-1 之一"
        }
      },
      {
        "name": "Ather Energy",
        "type": "印度电动两轮车头部厂商",
        "top": "在印电动两轮车市占率前 3",
        "profile": {
          "hq": "印度 Karnataka 班加罗尔",
          "founded": "2013",
          "business": "印度电动两轮车整车与电池 PACK 制造，由 Hero MotoCorp 控股",
          "products": "Ather 450X/450S/Rizta 系列电动两轮车、Battery PACK",
          "tradeVolume": "驱动电机钕铁硼磁体主要自中国进口（宁波韵升、中科三环等）",
          "sources": "Ather Energy IPO 招股书（2024-2025）、Ather 官网产品供应链披露",
          "note": "印度电动两轮车头部厂商之一，与 Ola Electric 共占印度主要 EV 两轮市场份额"
        }
      }
    ],
    "coNote":"印度无商业规模烧结 NdFeB 上游产能，公开来源未单列「自华采购的具体企业清单」；以上为公开可查的已知采购方与行业代表，非海关全量名单。",
    "coSource":[44, 12],
    "sources":[12, 21]
  }
}, {
  "key":"raw",
  "group":"原材料 / 关键矿产",
  "name":"原料药（API/关键起始物料）",
  "dependency":74,
  "metric":"印度约 70–80% 散装药/原料药自华进口；FY24-25 API 进口约 $4.35B，中国占 73.7%。其中青霉素中间体 6-APA（已并入本类）对华依赖高达 95%，是最突出的子类。",
  "source":4,
  "detail":{
    "intro":"API（原料药）是药品活性成分。印度号称「世界药房」，但 70–80% 的 API 依赖进口，多数来自中国，是印度医药供应链最脆弱环节之一。本类已并入青霉素中间体 6-APA（对华依赖约 95%，见下方 HS 与贸易明细），不再单列重复展示。",
    "dependencyNote":"印度虽号称「世界药房」，但 70–80% 的散装原料药（API）依赖进口，多数来自中国。FY24-25 印度 API 进口约 43.5 亿美元、中国占 73.7%；关键中间体 6-APA 对华依赖高达 95%。被卡点集中在青霉素类、维生素、氨基酸等大宗中间体，本土虽有 Aurobindo 等青霉素 G 产能，但整体仍深度依赖中国。",
    "hs":[{
      "code":"2941.10",
      "name":"青霉素及其盐"
    }, {
      "code":"2941.10.50",
      "name":"6-APA（青霉素中间体，已并入本类）"
    }, {
      "code":"2941.90",
      "name":"其他抗生素"
    }, {
      "code":"2933 / 2936",
      "name":"维生素类"
    }, {
      "code":"2922",
      "name":"氨基酸类"
    }],
    "tradeYearly":[{
      "period":"FY23-24",
      "value":396.51,
      "unit":"百万美元",
      "note":"6-APA 自华进口，对华依赖 94.08%（PIB Annexure-I）"
    }, {
      "period":"FY24-25",
      "value":407.64,
      "unit":"百万美元",
      "note":"6-APA 对华依赖 95.92%"
    }, {
      "period":"FY24-25",
      "value":3204.67,
      "unit":"百万美元",
      "note":"中国占印度 API 进口 73.7%（总额约 $4.35B）"
    }],
    "tradeMonthly":[],
    "alternatives":[{
      "country":"本土产能",
      "note":"Aurobindo/Lyfius Kakinada 厂：青霉素 G → 6-APA，预计降依赖约 50%"
    }, {
      "country":"欧盟",
      "note":"占印度药品进口 13.64%（$593M）"
    }, {
      "country":"新加坡",
      "note":"2.49%"
    }, {
      "country":"美国",
      "note":"1.96%"
    }, {
      "country":"日本",
      "note":"1.82%"
    }],
    "sellers":[
      {
        "name": "华海药业（Huahai）",
        "type": "沙坦类 API 全球龙头",
        "top": "对印 API 出口前 3",
        "profile": {
          "hq": "中国 浙江 台州",
          "founded": "1989",
          "business": "特色原料药与制剂一体化",
          "products": "沙坦类（缬沙坦/厄贝沙坦）、抗艾滋、抗肿瘤、抗抑郁 API",
          "tradeVolume": "对印出口沙坦类 API 占比高；印度为其前 5 大出口市场",
          "sources": "华海药业 2024 年报、印度 Pharma Export 数据",
          "note": "全球沙坦类 API 龙头；FDA/EDQM 认证齐全"
        }
      },
      {
        "name": "新和成（NHU）",
        "type": "维生素龙头",
        "top": "维生素 A/E 全球前 2",
        "profile": {
          "hq": "中国 浙江 新昌",
          "founded": "1999",
          "business": "营养品与香精香料一体化",
          "products": "维生素 A、维生素 E、维生素 C、香精香料",
          "tradeVolume": "对印维生素出口长期居前；印度为其重要出口市场",
          "sources": "新和成 2024 年报、中国医药保健品进出口商会",
          "note": "全球 VE 与 VA 主要供应商"
        }
      },
      {
        "name": "九洲药业（Apeloa）",
        "type": "CDMO/API 双轮驱动",
        "top": "CDMO 收入 ~$6 亿",
        "profile": {
          "hq": "中国 浙江 台州",
          "founded": "1998",
          "business": "特色原料药与 CDMO 服务",
          "products": "抗肿瘤、心血管、CDMO 定制研发",
          "tradeVolume": "对印出口排名前列；CDMO 业务覆盖多家印度仿制药企",
          "sources": "九洲药业 2024 年报",
          "note": "CDMO 客户含多家全球 Top 20 药企"
        }
      },
      {
        "name": "普洛药业（Apeloa Pharma）",
        "type": "出口排名前列",
        "top": "API 出口额常年前 10",
        "profile": {
          "hq": "中国 浙江 东阳",
          "founded": "1989",
          "business": "原料药、合同制造与生物制药",
          "products": "头孢类、青霉素类 API、兽药",
          "tradeVolume": "对印出口在 API 厂商中常年居前 10",
          "sources": "普洛药业 2024 年报、中国医保商会",
          "note": "横店集团旗下"
        }
      },
      {
        "name": "华北制药（NCPC）",
        "type": "中国青霉素/6-APA 龙头",
        "top": "6-APA 全球产能前列",
        "profile": {
          "hq": "中国 河北 石家庄",
          "founded": "1958",
          "business": "中国最大抗生素/6-APA 生产基地",
          "products": "6-APA、青霉素 G 工业盐、阿莫西林克拉维酸钾",
          "tradeVolume": "印度对其 6-APA 依赖度达 95%（PIB Annexure-I）",
          "sources": "华北制药 2024 年报、PIB PRID 2237414",
          "note": "印度 6-APA 中间体的关键来源"
        }
      },
      {
        "name": "国邦医药",
        "type": "中国特色原料药龙头",
        "top": "氟喹诺酮 / 大宗 API 前列",
        "profile": {
          "hq": "中国 浙江 新昌",
          "founded": "1996",
          "business": "氟喹诺酮类、大宗原料药、动保",
          "products": "恩诺沙星、氟苯尼考、阿莫西林、克拉维酸",
          "tradeVolume": "对印氟喹诺酮类 API 出口排名前列",
          "sources": "国邦医药 2024 年报、中国医保商会",
          "note": "新和成控股的兄弟企业"
        }
      }
    ],
    "buyers":[
      {
        "name": "Sun Pharma",
        "type": "印度第一大制剂企业",
        "top": "营收 ~$5.6 B（FY25）",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1983",
          "business": "印度第一大仿制药与制剂企业，全球第 4 大仿制药企",
          "products": "仿制药制剂、原料药、生物类似药",
          "tradeVolume": "从中国进口大量中间体与 API（沙坦类、维生素等）",
          "sources": "Sun Pharma FY25 Annual Report、印度 Pharmexcil",
          "note": "对华依赖度约 70%（API 端）"
        }
      },
      {
        "name": "Cipla",
        "type": "印度第二大制剂企业",
        "top": "营收 ~$3.2 B（FY25）",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1935",
          "business": "印度第二大仿制药与制剂企业，呼吸与抗艾滋领先",
          "products": "呼吸、肿瘤、抗艾滋、API 制剂",
          "tradeVolume": "从中国进口 API 与中间体；自建 Aurobindo 等供应链",
          "sources": "Cipla FY25 Annual Report",
          "note": "中国进口约占其 API 需求 60%"
        }
      },
      {
        "name": "Aurobindo Pharma",
        "type": "印度 API + 制剂龙头",
        "top": "营收 ~$3.7 B（FY25）",
        "profile": {
          "hq": "印度 Telangana 海得拉巴",
          "founded": "1986",
          "business": "印度 API 与仿制药制剂双龙头",
          "products": "API、半合成抗生素、固体制剂、注射剂",
          "tradeVolume": "在中国布局 Aurobindo Kakinada 等自产，但仍大量进口中间体",
          "sources": "Aurobindo FY25 Annual Report",
          "note": "印度 API 自给率较高的企业"
        }
      },
      {
        "name": "Dr Reddy's Laboratories",
        "type": "印度 Top 3 仿制药企",
        "top": "营收 ~$3.3 B（FY25）",
        "profile": {
          "hq": "印度 Telangana 海得拉巴",
          "founded": "1984",
          "business": "印度 Top 3 仿制药与 API 一体化企业",
          "products": "API、仿制药制剂、生物类似药",
          "tradeVolume": "自华进口大量中间体与 API（沙坦类、抗肿瘤、抗艾滋等）",
          "sources": "Dr Reddy's FY25 Annual Report、印度 Pharmexcil",
          "note": "对华 API 依赖度约 70%，正积极推动 Aurobindo/Kakinada 等本土替代"
        }
      },
      {
        "name": "Lyfius Kakinada",
        "type": "Aurobindo 旗下 6-APA 厂",
        "top": "Aurobindo Pharma 子公司",
        "profile": {
          "hq": "印度 Andhra Pradesh Kakinada",
          "founded": "2022（投产）",
          "business": "Aurobindo Pharma 旗下青霉素 G→6-APA 制造",
          "products": "6-APA（青霉素中间体）",
          "tradeVolume": "规划产能降印度对华 6-APA 依赖约 50%",
          "sources": "Aurobindo Pharma FY25 Annual Report、PIB PRID 2237414",
          "note": "印度本土 6-APA 产能代表性项目"
        }
      }
    ],
    "coNote":"中国医药保健品进出口商会数据显示 2023 年印度自华进口原料药及中间体约 101.5 亿美元、占其整体进口 68.8%；企业级采购清单未公开，以上为公开可查代表。",
    "coSource":[40, 4],
    "sources":[4, 22, 23]
  }
}, {
  "key":"machine",
  "group":"工程器械与设备",
  "name":"盾构机（TBM）",
  "dependency":70,
  "metric":"中国产 TBM 约占全球市场 70%（人民日报 2024-05；中铁装备产销量连续多年世界第一）。印度方面，据 Takshashila 对印度商工部数据的分析，其 TBM 进口对华依赖已明显多元化——自行式 TBM（HS 84303190）自华份额已降至极低，标准 TBM（HS 84303120）虽仍对华较高（近年约六成、较 2019 年近 100% 大幅下降）；孟买地铁 3 号线 18 台 TBM 中 8 台中资制造、其余亦在华制造。",
  "source":24,
  "detail":{
    "intro":"隧道掘进机（TBM/盾构机）是地下隧道开挖的大型成套装备，含上万个零部件，制造壁垒极高，被称为「工程机械之王」。",
    "dependencyNote":"盾构机（TBM）对华依赖体现为「中国占全球 TBM 约 70% 的供给集中度」，而非单一进口份额。印度标准 TBM（HS 84303120）自华进口由 2019 年近 100% 降至近年约六成，自行式 TBM（HS 84303190）自华份额已降至极低，进口已明显多元化；但 TBM 为超大型定制装备、交付周期长、本地服务网络关键，且 2025 年 3 台高铁用 TBM 滞留中国港口事件凸显地缘供应风险。",
    "hs":[{
      "code":"8430.31",
      "name":"隧道掘进机（TBM）"
    }],
    "tradeYearly":[],
    "tradeMonthly":[],
    "alternatives":[{
      "country":"德国 Herrenknecht",
      "note":"全球龙头，约 16–28% 份额；在印供给近年转向其金奈工厂本土制造"
    }, {
      "country":"日本",
      "note":"Hitachi Zosen / Mitsubishi / Komatsu"
    }],
    "sellers":[
      {
        "name": "中铁装备（CREG）",
        "type": "全球 TBM 产销量第一",
        "top": "出口 34 国 / ~$5 亿/年",
        "profile": {
          "hq": "中国 河南 郑州",
          "founded": "2009",
          "business": "盾构机与隧道掘进装备研发制造",
          "products": "Φ6–18m 盾构机、双模 TBM、竖井掘进机",
          "tradeVolume": "出口 34+ 国家；印度地铁与引水项目主力机型",
          "sources": "中铁工程装备 2024 年报、中国工程机械协会",
          "note": "中铁工业旗下，全球 TBM 产销量第一"
        }
      },
      {
        "name": "中铁重工（CRCHI）",
        "type": "中国 TBM 第二大",
        "top": "出口 ~30 国",
        "profile": {
          "hq": "中国 湖南 长沙",
          "founded": "1953",
          "business": "盾构机、隧道机械、轨道交通装备",
          "products": "Φ6–15m 复合式 TBM、泥水平衡盾构",
          "tradeVolume": "印度孟买沿海公路与班加罗尔地铁项目主要机型",
          "sources": "中铁重工年报、中国工程机械协会",
          "note": "中铁重工 CRCHI 同义别名（贸易流中亦称「中铁系」）"
        }
      },
      {
        "name": "中铁系（中铁重工 CRCHI 等）",
        "type": "中国 TBM 第二大",
        "top": "出口 ~30 国",
        "profile": {
          "hq": "中国 湖南 长沙",
          "founded": "1953",
          "business": "盾构机、隧道机械、轨道交通装备",
          "products": "Φ6–15m 复合式 TBM、泥水平衡盾构",
          "tradeVolume": "印度孟买沿海公路与班加罗尔地铁项目主要机型",
          "sources": "中铁重工年报",
          "note": "与中铁重工（CRCHI）同义"
        }
      },
      {
        "name": "海瑞克广州（Herrenknecht Guangzhou）",
        "type": "德资在华 TBM 制造",
        "top": "德国海瑞克集团亚太 TBM 基地",
        "profile": {
          "hq": "中国 广东 广州",
          "founded": "2004",
          "business": "德国 Herrenknecht 集团在华合资 TBM 制造",
          "products": "TBM 隧道掘进机（盾构机）",
          "tradeVolume": "经广州基地供货亚太市场；与中铁装备/中铁重工在印度市场形成竞争",
          "sources": "海瑞克集团年报、Construction Placements",
          "note": "全球 TBM 龙头之一（与中铁系并列）"
        }
      }
    ],
    "buyers":[
      {
        "name": "Larsen & Toubro（L&T）",
        "type": "印度最大私营工程总包",
        "top": "营收 ~$23 B（FY25）",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1938",
          "business": "印度最大工程总包、国防与 IT 综合集团",
          "products": "基建总包、地铁工程、国防装备、IT 服务",
          "tradeVolume": "孟买地铁 3 号线等使用中国 TBM",
          "sources": "L&T FY25 Annual Report",
          "note": "印度最大私营工程与国防集团"
        }
      },
      {
        "name": "Afcons Infrastructure",
        "type": "隧道与地铁工程专业总包",
        "top": "营收 ~$1 B",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1959",
          "business": "Shapoorji Pallonji 旗下基建总包",
          "products": "隧道、地铁、桥梁、海事工程",
          "tradeVolume": "印度地铁 TBM 主要采购与使用方",
          "sources": "Afcons 年报、Shapoorji Pallonji 集团披露",
          "note": "孟买沿海公路、班加罗尔地铁主要承包商"
        }
      },
      {
        "name": "MMRC（Mumbai Metro Rail Corporation Ltd）",
        "type": "孟买地铁 3 号线业主",
        "top": "印度地铁 PPP 业主单位",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "2008",
          "business": "孟买地铁 3 号线（Colaba-Bandra-SEEPZ）业主",
          "products": "城市地铁建设运营",
          "tradeVolume": "通过 L&T-STEC JV 等承包商采购中资 TBM 8 台",
          "sources": "MMRC 官网、PIB 公告",
          "note": "孟买首条地下地铁线（含中资 18 台 TBM 中 8 台）"
        }
      },
      {
        "name": "NHSRCL",
        "type": "高铁业主单位",
        "top": "National High Speed Rail Corporation Ltd",
        "profile": {
          "hq": "印度 New Delhi",
          "founded": "2016",
          "business": "印日合营高铁项目执行单位",
          "products": "高铁建设运营",
          "tradeVolume": "通过 L&T/Afcons 承包商采购中资 TBM 12 台（含海瑞克广州 3 台滞留中国港口）",
          "sources": "NHSRCL 官网、PIB 公告",
          "note": "印度首条高铁（孟买-艾哈迈达巴德）业主"
        }
      },
      {
        "name": "BRO（Border Roads Organisation）",
        "type": "国防部边境公路局",
        "top": "印度边境战略通道总包",
        "profile": {
          "hq": "印度 New Delhi",
          "founded": "1960",
          "business": "隶属国防部，建边境公路/隧道/桥",
          "products": "边境战略通道建设（含阿鲁纳恰尔邦/拉达克）",
          "tradeVolume": "为 BRO 项目采购中国制挖掘机/装载机/起重机",
          "sources": "BRO 官网、印度国防部年报",
          "note": "61 条边境通道计划（含国防用途）"
        }
      }
    ],
    "coNote":"孟买地铁 3 号线 18 台 TBM 中 8 台为中企制造、另 10 台亦在华制造；具体采购合同方未全公开，以上为公开可查项目与承包商。Takshashila 基于印度商工部数据指出，印度 TBM 进口对华依赖已多元化，标准 TBM 自华占比由 2019 近 100% 降至近年约六成。",
    "coSource":[38, 25, 72],
    "sources":[24, 25, 72],
    "note":"公开来源未给出印度自华 TBM 进口的单一海关占比；可查的是中国占全球约 70% 的供给集中度，以及印度按 HS 细分的进口结构（自行式 TBM 自华极低、标准 TBM 仍较高），故未给单一「印度对华进口份额」数值。"
  }
}, {
  "key":"machine",
  "group":"工程器械与设备",
  "name":"太阳能电池 / 组件",
  "dependency":83,
  "metric":"GTRI FY2025：印度太阳能电池自华占 82.7%；硅片自华 96.8%（按 HS 8541.42/43）。FY24 印度太阳能设备进口约 $7B，自华 $3.89B（占 62.6%）；电池对华份额由 FY22 >90% 降至 2024 的 56%，组件 65%。",
  "source":7,
  "detail":{
    "intro":"光伏电池（cell）与组件（module）是太阳能发电核心件。印度装机猛增但上游制造薄弱，长期依赖进口。",
    "dependencyNote":"印度 FY24 自华进口光伏约 38.9 亿美元、占 62.6%；其中电池对华份额由 FY22 的逾 90% 降至 2024 年约 56%，组件约 65%。FY25-26 印度本土电池产能释放后，电池自华占比由 FY25 的 83% 降至约 65%；但上游硅片/多晶硅仍近 100% 依赖中国，越南/马来/泰等转口来源本身也依赖中国原料，替代「虚多于实」。被卡点在光伏上游一体化。",
    "hs":[{
      "code":"8541.43",
      "name":"光伏电池（cell）"
    }, {
      "code":"8541.42",
      "name":"已封装光伏组件（module）"
    }],
    "tradeYearly":[{
      "period":"FY23",
      "value":19669,
      "unit":"千万卢比 (₹cr)",
      "note":"GTRI 进口账单"
    }, {
      "period":"FY24",
      "value":54208,
      "unit":"千万卢比 (₹cr)",
      "note":"峰值，约 $7B，其中自华 $3.89B（62.6%）"
    }, {
      "period":"FY26",
      "value":31572,
      "unit":"千万卢比 (₹cr)",
      "note":"回落"
    }],
    "tradeMonthly":[{
      "period":"2024 Q3",
      "value":3.8,
      "unit":"十亿美元",
      "note":"Mercom：印度太阳能组件+电池进口环比 +27.7%"
    }],
    "alternatives":[{
      "country":"越南",
      "note":"$1.02B（16.5%），但多依赖中国硅片"
    }, {
      "country":"马来西亚",
      "note":"$549.8M（8.9%）"
    }, {
      "country":"泰国",
      "note":"$248.8M（4%）"
    }],
    "sellers":[
      {
        "name": "隆基绿能（LONGi）",
        "type": "全球组件出货第一",
        "top": "组件 ~120 GW（2024）",
        "profile": {
          "hq": "中国 陕西 西安",
          "founded": "2000",
          "business": "单晶硅片、太阳能组件、氢能装备",
          "products": "HPBC 组件、TOPCon 组件、单晶硅片",
          "tradeVolume": "对印出口组件量位列中国前 3",
          "sources": "隆基绿能 2024 年报、PV InfoLink",
          "note": "全球组件出货连续多年第一"
        }
      },
      {
        "name": "晶澳科技（JA Solar）",
        "type": "全球组件前 3",
        "top": "组件 ~80 GW（2024）",
        "profile": {
          "hq": "中国 北京",
          "founded": "2005",
          "business": "硅片、电池、组件一体化",
          "products": "PERC/TOPCon 组件、电池片",
          "tradeVolume": "对印组件出口排名前列",
          "sources": "晶澳科技 2024 年报、PV InfoLink",
          "note": "与多家印度开发商签长单"
        }
      },
      {
        "name": "天合光能（Trina Solar）",
        "type": "全球组件前 3",
        "top": "组件 ~75 GW（2024）",
        "profile": {
          "hq": "中国 江苏 常州",
          "founded": "1997",
          "business": "光伏组件、支架、储能、电站",
          "products": "210mm 大尺寸组件、跟踪支架",
          "tradeVolume": "对印出口组件量长期前列",
          "sources": "天合光能 2024 年报、PV InfoLink",
          "note": "全球组件出货前 3 之一"
        }
      },
      {
        "name": "晶科能源（JinkoSolar）",
        "type": "全球组件前 3",
        "top": "组件 ~100 GW（2024）",
        "profile": {
          "hq": "中国 上海",
          "founded": "2006",
          "business": "N 型 TOPCon 组件龙头",
          "products": "Tiger Neo 系列 N 型组件",
          "tradeVolume": "对印出口 N 型组件份额第一",
          "sources": "晶科能源 2024 年报、PV InfoLink",
          "note": "全球首家组件累计出货超 300 GW"
        }
      }
    ],
    "buyers":[
      {
        "name": "Adani Solar",
        "type": "印度光伏制造与电站龙头",
        "top": "产能 ~10 GW",
        "profile": {
          "hq": "印度 Gujarat 艾哈迈达巴德",
          "founded": "2013",
          "business": "Adani Group 光伏业务",
          "products": "电池、组件、光伏电站",
          "tradeVolume": "进口中国硅片、电池片为主，多晶硅进口比例高",
          "sources": "Adani Group 2024 财报、MNRE 数据",
          "note": "印度光伏制造与电站一体化最大玩家"
        }
      },
      {
        "name": "Waaree Energies",
        "type": "印度最大组件厂",
        "top": "组件产能 ~12 GW",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1989",
          "business": "光伏组件制造与 EPC",
          "products": "多规格组件、电池片",
          "tradeVolume": "进口中国电池片与硅片量在印度厂商中最大",
          "sources": "Waaree Energies 2024 年报、ImportGenius",
          "note": "印度本土组件产能第一"
        }
      },
      {
        "name": "Tata Power Solar",
        "type": "印度 Tata 系光伏",
        "top": "组件产能 ~4.4 GW",
        "profile": {
          "hq": "印度 Karnataka 班加罗尔",
          "founded": "1989",
          "business": "Tata Power 旗下光伏制造与 EPC",
          "products": "光伏组件、电池片、屋顶/地面电站 EPC",
          "tradeVolume": "电池片与硅片大量自华进口；ALMM 清单在列",
          "sources": "Tata Power Solar FY25 财报、Mercom India",
          "note": "Tata 系，与 Adani Solar 共占印度组件本土产能前列"
        }
      },
      {
        "name": "Reliance Industries",
        "type": "印度信实集团（绿色能源）",
        "top": "营收 ~$110 B（FY25）",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1966",
          "business": "印度最大私营集团（油气/绿色能源/零售/电信）",
          "products": "Jamnagar 100GW 光伏野心、SANSAN 电厂",
          "tradeVolume": "对印光伏/化工/储能大量自华采购（2024+ 启动 Jamnagar 100GW）",
          "sources": "Reliance Industries FY25 Annual Report、PIB 公告",
          "note": "印度最大集团；旗下子公司：Reliance Jio/Retail/Infrastructure/New Energy Solar"
        }
      },
      {
        "name": "Premier Energies",
        "type": "印度光伏上市新锐",
        "top": "产能 ~5 GW",
        "profile": {
          "hq": "印度 Telangana 海得拉巴",
          "founded": "1995",
          "business": "光伏电池与组件",
          "products": "TOPCon/PERC 电池与组件",
          "tradeVolume": "对华硅片与电池片采购比例较高",
          "sources": "Premier Energies 上市文件",
          "note": "印度本土 Topcon 产能扩张主力"
        }
      }
    ],
    "coNote":"印度自华组件占其进口约 65%（FY24），电池约 56%；ALMM 名录自 2024-04 生效后中国组件出货回落，但仍是最大来源。",
    "coSource":[39, 26],
    "sources":[7, 26, 8, 9]
  }
}, {
  "key":"machine",
  "group":"工程器械与设备",
  "name":"多晶硅 / 硅片（上游）",
  "dependency":97,
  "metric":"中国控制全球约 91–93% 多晶硅、97% 硅片产能；印度硅片进口中中国 >99%，上游近乎空白。",
  "source":7,
  "detail":{
    "intro":"多晶硅是光伏最上游原料，硅片由多晶硅拉棒切片而成，是电池的前驱体。印度该环节近乎空白，高度依赖中国。",
    "dependencyNote":"多晶硅与硅片是印度对华依赖的绝对制高点。中国控制全球 91–93% 多晶硅、97% 硅片产能，印度硅片进口中中国占 >99%，且印度至今尚无商业规模的多晶硅/硅锭产能（MNRE 于 2025 年 2 月向议会确认）。唯一非中国来源为德国瓦克、美国 Hemlock/REC，体量有限且成本高。被卡点在拉晶与切片技术壁垒。",
    "hs":[{
      "code":"2804.61",
      "name":"多晶硅（polysilicon）"
    }, {
      "code":"3818.00",
      "name":"硅片/已切片圆片（wafer）"
    }],
    "tradeYearly":[],
    "tradeMonthly":[],
    "alternatives":[{
      "country":"德国 Wacker",
      "note":"全球主要非中国多晶硅厂"
    }, {
      "country":"美国",
      "note":"Hemlock / REC"
    }, {
      "country":"马来西亚",
      "note":"部分渠道"
    }],
    "sellers":[
      {
        "name": "通威（Tongwei）",
        "type": "多晶硅全球第一",
        "top": "多晶硅产能 ~91 万吨",
        "profile": {
          "hq": "中国 四川 成都",
          "founded": "1982",
          "business": "多晶硅、电池片、饲料",
          "products": "多晶硅料、太阳能电池片",
          "tradeVolume": "全球前十占 9 席、合计 65% 份额中通威位列第一",
          "sources": "通威股份 2024 年报、中国有色金属工业协会",
          "note": "全球多晶硅产能第一"
        }
      },
      {
        "name": "协鑫（GCL）",
        "type": "多晶硅全球第二",
        "top": "多晶硅产能 ~48 万吨",
        "profile": {
          "hq": "中国 江苏 苏州",
          "founded": "1990",
          "business": "多晶硅、硅片、钙钛矿",
          "products": "颗粒硅、棒状硅、硅片",
          "tradeVolume": "颗粒硅对印出口重要供应商",
          "sources": "协鑫科技 2024 年报",
          "note": "颗粒硅技术领先"
        }
      },
      {
        "name": "大全（Daqo）",
        "type": "多晶硅主要厂商",
        "top": "多晶硅产能 ~35 万吨",
        "profile": {
          "hq": "中国 新疆 石河子",
          "founded": "1988",
          "business": "高纯多晶硅",
          "products": "多晶硅料",
          "tradeVolume": "对印出口排名前列",
          "sources": "大全能源 2024 年报",
          "note": "新疆基地成本优势显著"
        }
      },
      {
        "name": "新特（Xinte）",
        "type": "多晶硅主要厂商",
        "top": "多晶硅产能 ~30 万吨",
        "profile": {
          "hq": "中国 新疆 乌鲁木齐",
          "founded": "2008",
          "business": "多晶硅、风电、光伏电站",
          "products": "多晶硅料",
          "tradeVolume": "对印出口排名前列",
          "sources": "新特能源 2024 年报",
          "note": "特变电工旗下"
        }
      }
    ],
    "buyers":[
      {
        "name": "Adani Solar",
        "type": "印度光伏龙头",
        "top": "电池产能 ~5 GW",
        "profile": {
          "hq": "印度 Gujarat 艾哈迈达巴德",
          "founded": "2013",
          "business": "光伏电池与组件",
          "products": "电池片、组件",
          "tradeVolume": "印度多晶硅/硅片进口几乎全部来自中国",
          "sources": "Adani Group 2024 财报",
          "note": "印度对华多晶硅依赖度 ~80–90%"
        }
      },
      {
        "name": "Waaree Energies",
        "type": "印度最大组件厂",
        "top": "硅片需求 ~5 GW",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1989",
          "business": "光伏组件",
          "products": "组件",
          "tradeVolume": "硅片与电池片大量自中国进口",
          "sources": "Waaree Energies 2024 年报",
          "note": "印度本土组件产能第一"
        }
      },
      {
        "name": "Premier Energies",
        "type": "印度光伏新锐",
        "top": "硅片需求 ~3 GW",
        "profile": {
          "hq": "印度 Telangana 海得拉巴",
          "founded": "1995",
          "business": "光伏电池与组件",
          "products": "电池、组件",
          "tradeVolume": "硅片与电池片对华采购比例较高",
          "sources": "Premier Energies 上市文件",
          "note": "印度本土 TOPCon 产能扩张主力"
        }
      },
      {
        "name": "Reliance Industries",
        "type": "印度信实集团（上游一体化）",
        "top": "营收 ~$110 B（FY25）",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1966",
          "business": "印度最大私营集团，多晶硅/硅片/组件一体化布局",
          "products": "Jamnagar 100GW 光伏园、多晶硅与硅片产线",
          "tradeVolume": "多晶硅/硅片几乎全部自华进口（对华依赖 >99%）",
          "sources": "Reliance Industries FY25 Annual Report、PIB 公告",
          "note": "上游硅料依赖中国，正推进本土一体化"
        }
      }
    ],
    "coNote":"中国占全球多晶硅约 93.5%、硅片约 97%；印度上游近乎空白，硅片进口中中国 >99%。",
    "coSource":[41, 7],
    "sources":[7, 27, 28],
    "note":"中国占全球多晶硅 91–93%、硅片 97%；印度硅片进口中中国 >99%，分项货值公开有限。"
  }
}, {
  "key":"part",
  "group":"零部件",
  "name":"电子 / 电信 / 电气产品",
  "dependency":44,
  "metric":"2023-24 印度电子/通信/电器进口 $89.8B，中国大陆单独占比 43.9%（加中国香港 56%）。",
  "source":20,
  "detail":{
    "diversify":"多元化来源可能性：高端芯片可自中国台湾、存储器自韩国、封测自马来西亚分流；中低端组件与整机可转越南、中国台湾、韩国。印度 PLI 已推动部分 EMS 本土化。结论：含中国香港口径的东亚整体依赖仍将高位，但中国大陆单独占比可缓降，多元化空间较大。",
    "intro":"涵盖通信设备（8517）、显示器（8528）、二极管/晶体管/集成电路（8541/8542）等。印度电子制造业增长快，但高附加值部件仍大量自华进口。",
    "dependencyNote":"印度电子/通信/电器进口中，中国大陆单独占 43.9%、含中国香港约 56%；但高端芯片来自中国台湾、存储器来自韩国、封测来自马来西亚，中国主要供应中低端组件与整机。依赖集中在系统集成与中端制造环节，而非尖端元器件；转口洗产地（含港口径由 43.9% 升至 56%）放大了真实对华依存。",
    "hs":[{
      "code":"8517",
      "name":"电话/通信设备"
    }, {
      "code":"8528",
      "name":"显示器/电视"
    }, {
      "code":"8541 / 8542",
      "name":"二极管/晶体管/集成电路"
    }],
    "tradeYearly":[{
      "period":"FY22",
      "value":30.3,
      "unit":"十亿美元",
      "note":"自华电子产品"
    }, {
      "period":"FY23",
      "value":27.6,
      "unit":"十亿美元",
      "note":"小幅回落（PLI 效应）"
    }, {
      "period":"FY24",
      "value":39.4,
      "unit":"十亿美元",
      "note":"占印度电子进口 $89.8B 的 43.9%"
    }],
    "tradeMonthly":[],
    "alternatives":[{
      "country":"越南",
      "note":"主要替代"
    }, {
      "country":"中国台湾",
      "note":"高端芯片/组件"
    }, {
      "country":"韩国",
      "note":"存储器/显示"
    }, {
      "country":"马来西亚",
      "note":"封测/组件"
    }],
    "sellers":[
      {
        "name": "华为（Huawei）",
        "type": "全球 5G 与通信设备龙头",
        "top": "营收 ~$110 B（2024）",
        "profile": {
          "hq": "中国 广东 深圳",
          "founded": "1987",
          "business": "ICT 基础设施与智能终端",
          "products": "5G 基站、传输设备、企业网、终端",
          "tradeVolume": "印度电信运营商（BSNL/Airtel 等）核心设备供应商之一",
          "sources": "华为 2024 年报、印度 DoT 数据",
          "note": "在印因地缘风险受限，转向非敏感市场"
        }
      },
      {
        "name": "小米（Xiaomi）",
        "type": "印度智能手机第一品牌",
        "top": "在印年出货 ~3000 万",
        "profile": {
          "hq": "中国 北京",
          "founded": "2010",
          "business": "智能手机、IoT 与生活消费品",
          "products": "Redmi/POCO 手机、电视、IoT",
          "tradeVolume": "印度智能手机市占率长期第一",
          "sources": "小米 2024 年报、Counterpoint India",
          "note": "与富士康/DBG 在印 EMS 合作"
        }
      },
      {
        "name": "联想（Lenovo）",
        "type": "全球 PC 第一",
        "top": "全球 PC 份额 ~24%",
        "profile": {
          "hq": "中国 北京",
          "founded": "1984",
          "business": "智能设备、数据中心",
          "products": "ThinkPad / IdeaPad、服务器、存储",
          "tradeVolume": "印度 PC 与服务器市场前列",
          "sources": "联想 2024 年报、IDC India",
          "note": "在印与多家 IT 渠道深度合作"
        }
      },
      {
        "name": "OPPO",
        "type": "印度智能手机前 3",
        "top": "在印市占率 ~12%",
        "profile": {
          "hq": "中国 广东 东莞",
          "founded": "2004",
          "business": "智能手机与 IoT",
          "products": "Reno / F / A 系列手机",
          "tradeVolume": "印度智能手机出货排名前 3",
          "sources": "OPPO 印度披露、Counterpoint",
          "note": "在印自有工厂 EMS 体系"
        }
      },
      {
        "name": "立讯精密（Luxshare）",
        "type": "苹果链精密制造龙头",
        "top": "营收 ~$40 B（2024）",
        "profile": {
          "hq": "中国 广东 东莞",
          "founded": "2004",
          "business": "精密连接器、声学与整机组装",
          "products": "连接器、线束、AirPods/iPhone 组装、声学组件",
          "tradeVolume": "经富士康/纬创等 EMS 间接供应印度电子组装链",
          "sources": "立讯精密 2024 年报、Counterpoint India",
          "note": "苹果主要代工方之一，印度链经 EMS 间接进入"
        }
      }
    ],
    "buyers":[
      {
        "name": "Reliance Jio",
        "type": "印度最大电信运营商",
        "top": "用户 ~4.9 亿",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "2007",
          "business": "印度最大 4G/5G 运营商",
          "products": "移动通信、固定宽带、JioFiber、JioBharat 4G 手机",
          "tradeVolume": "网络设备与终端采购中中国厂商占比高",
          "sources": "Reliance Jio ARPU/营收披露、DoT 数据",
          "note": "印度 4G 网络最大建设方"
        }
      },
      {
        "name": "Bharti Airtel",
        "type": "印度第二大电信运营商",
        "top": "用户 ~3.9 亿",
        "profile": {
          "hq": "印度 Haryana 古尔冈",
          "founded": "1995",
          "business": "印度第二大综合电信运营商",
          "products": "移动通信、Airtel Xstream 宽带、数字电视",
          "tradeVolume": "在 5G 网络中大量使用中国厂商设备",
          "sources": "Bharti Airtel FY25 财报",
          "note": "印度 5G 网络扩张主力"
        }
      },
      {
        "name": "Tata Consultancy Services（TCS）",
        "type": "印度 IT 服务龙头",
        "top": "营收 ~$30 B（FY25）",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1968",
          "business": "印度最大 IT 服务与咨询公司",
          "products": "IT 服务、咨询、数字化转型",
          "tradeVolume": "硬件与终端采购中中国品牌占比显著",
          "sources": "TCS FY25 Annual Report",
          "note": "Tata 集团旗下"
        }
      },
      {
        "name": "BSNL",
        "type": "印度国营电信运营商",
        "top": "Bharat Sanchar Nigam Limited",
        "profile": {
          "hq": "印度 New Delhi",
          "founded": "2000",
          "business": "印度国营电信，含军线/边防通信网",
          "products": "固定与移动通信、政府/国防通信网",
          "tradeVolume": "华为曾为其主要设备供应商（2018 前）",
          "sources": "BSNL 官网、印度交通部通信年报",
          "note": "2020 年印度限制华为后存量设备仍在运行"
        }
      },
      {
        "name": "Dixon Technologies",
        "type": "印度最大本土 EMS",
        "top": "营收 ~$3 B（FY25）",
        "profile": {
          "hq": "印度 Uttar Pradesh Noida",
          "founded": "1993",
          "business": "电子制造服务（EMS/ODM）",
          "products": "手机整机、电视、PCBA、电子元件",
          "tradeVolume": "小米/三星/摩托罗拉等品牌在印代工；收购 HKC 印度子公司承接中国电子元件转口/本地化",
          "sources": "Dixon Technologies FY25 Annual Report、Volza 海关数据",
          "note": "承接中国电子元件本地化组装的主力"
        }
      },
      {
        "name": "富士康 India（Foxconn）",
        "type": "苹果印度主要 EMS",
        "top": "在印营收 ~$10 B",
        "profile": {
          "hq": "印度 Tamil Nadu Chennai（富士康印度）",
          "founded": "2008（印度建厂）",
          "business": "全球最大电子代工（EMS），印度组装主力",
          "products": "iPhone 整机组装、电子元件",
          "tradeVolume": "中国供应链经富士康印度进入苹果链",
          "sources": "Foxconn India 披露、Counterpoint",
          "note": "苹果印度制造核心代工方"
        }
      }
    ],
    "coNote":"2023-24 印度电子/通信/电器进口中国大陆单独占 43.9%、加中国香港合计约 56%。",
    "coSource":[46, 29],
    "sources":[29, 30, 20]
  }
}, {
  "key":"part",
  "group":"零部件",
  "name":"锂离子电池",
  "dependency":75,
  "metric":"印度自华 EV 用锂离子电池 $2.2B，占此类进口 75%（2025 年口径 75.2%）；电动车与储能高度依赖中国电芯。",
  "source":1,
  "detail":{
    "intro":"锂离子蓄电池（HS 8507.60）是电动车与储能的核心。印度电芯与零部件高度依赖中国。",
    "dependencyNote":"印度 EV 用锂离子电池约 75% 自华，FY24-25 自华约 22.6 亿美元（占 75.2%），FY25-26 进一步升至约 79%、进口额约 33 亿美元。宁德时代、比亚迪、亿纬等占其进口约 68%；韩国（15–20%）、日本（5–8%）为次要来源。被卡点在本土几乎无正负极材料产能（中国占全球 LFP 正极 >98%、人造石墨负极约 85%），电芯环节短期难替代。",
    "hs":[{
      "code":"8507.60",
      "name":"锂离子蓄电池"
    }],
    "tradeYearly":[{
      "period":"FY23",
      "value":2.2,
      "unit":"十亿美元",
      "note":"EV 用锂电池，自华 75%"
    }, {
      "period":"FY24",
      "value":2.2,
      "unit":"十亿美元",
      "note":"自华 75.2%（$2.26B 总进口）"
    }],
    "tradeMonthly":[],
    "alternatives":[{
      "country":"韩国",
      "note":"占印度电池进口 15–20%"
    }, {
      "country":"日本",
      "note":"5–8%"
    }],
    "sellers":[
      {
        "name": "宁德时代（CATL）",
        "type": "全球动力电池第一",
        "top": "占印进口 ~68%",
        "profile": {
          "hq": "中国 福建 宁德",
          "founded": "2011",
          "business": "动力电池、储能电池",
          "products": "麒麟电池、神行电池、储能电池",
          "tradeVolume": "印度 EV 电池进口第一，占比约 68%（EVTank 2025）",
          "sources": "EVTank《2025 印度动力电池进口》、CATL 年报",
          "note": "全球动力电池市占率连续 8 年第一"
        }
      },
      {
        "name": "比亚迪（BYD）",
        "type": "全球动力电池/整车第二",
        "top": "在印整车销售前 5",
        "profile": {
          "hq": "中国 广东 深圳",
          "founded": "1995",
          "business": "整车、动力电池、电子",
          "products": "刀片电池、Atto 3 / Seal 整车",
          "tradeVolume": "印度市场 EV 整车与电池同步扩张",
          "sources": "BYD 印度披露、Counterpoint",
          "note": "印度 EV 市场新进入者"
        }
      },
      {
        "name": "亿纬锂能（EVE Energy）",
        "type": "动力/储能电池前十",
        "top": "在印储能订单主力",
        "profile": {
          "hq": "中国 广东 惠州",
          "founded": "2001",
          "business": "消费电池、动力电池、储能",
          "products": "18650/21700 圆柱电池、方形 LFP",
          "tradeVolume": "对印储能订单主力供应商",
          "sources": "亿纬锂能 2024 年报",
          "note": "在印储能市占率较高"
        }
      }
    ],
    "buyers":[
      {
        "name": "Ola Electric",
        "type": "印度电动两轮车龙头",
        "top": "电池需求 ~2 GWh",
        "profile": {
          "hq": "印度 Karnataka 班加罗尔",
          "founded": "2017",
          "business": "电动两轮车与电池 PACK",
          "products": "S1 系列电动两轮车、Bounce 电摩",
          "tradeVolume": "电池 PACK 主要来自宁德时代/亿纬",
          "sources": "Ola Electric DRHP、ImportGenius",
          "note": "印度两轮 EV 第一"
        }
      },
      {
        "name": "Tata Motors",
        "type": "印度 EV 转型主力",
        "top": "EV 销量 ~$2 B（FY25）",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1945",
          "business": "印度乘用车与 EV",
          "products": "Tiago EV / Punch EV / Curvv EV / Harrier EV",
          "tradeVolume": "动力电池 PACK 主要来自中国（含 Tata 自建工厂组装）",
          "sources": "Tata Motors FY25 财报",
          "note": "印度 EV 销量第一"
        }
      },
      {
        "name": "Godawari New Energy (GNEPL)",
        "type": "印度储能龙头",
        "top": "储能订单 ~8 GWh",
        "profile": {
          "hq": "印度 Telangana 海得拉巴",
          "founded": "2018",
          "business": "储能电池 PACK 与系统集成",
          "products": "锂电储能 PACK、户用储能",
          "tradeVolume": "与宁德时代签 8 GWh 储能订单",
          "sources": "GNEPL 公告、印度 MNRE",
          "note": "印度储能新锐"
        }
      },
      {
        "name": "Tata AutoComp",
        "type": "Tata 系 Tier-1 零部件",
        "top": "Tata Motors 体系核心供应商",
        "profile": {
          "hq": "印度 Maharashtra Pune",
          "founded": "1997",
          "business": "Tata 系汽车 Tier-1 集成商",
          "products": "EV 电池 PACK、线束、后视镜、模组",
          "tradeVolume": "比亚迪为已知电池供应商之一",
          "sources": "Tata AutoComp Systems 官网、印度 ACMA",
          "note": "Tata Motors EV 车型间接电池配套方"
        }
      }
    ],
    "coNote":"2025 年印度约 75% 锂电进口来自中国；电芯领域 CATL/比亚迪/中创新航/亿纬/国轩合计占印进口约 68%。",
    "coSource":[42, 31],
    "sources":[31, 32, 1]
  }
}, {
  "key":"part",
  "group":"零部件",
  "name":"智能手机零部件",
  "dependency":52,
  "metric":"GTRI 真实口径：印度进口智能手机零部件 $7.15B，其中 51.7% 来自中国（传闻的 80% 实为笔记本电脑/平板）。核心零部件仍主要来自中国。",
  "source":33,
  "detail":{
    "intro":"手机/通信设备（8517）、声学件（8518）等。印度「组装」规模扩大，但核心零部件仍主要来自中国。",
    "dependencyNote":"印度智能手机零部件真实对华依赖为 51.7%（GTRI 口径，非市场传闻的 80%）。分部件看：显示模组、摄像头模组约 72% 自华（京东方/天马、舜宇/欧菲光），存储芯片 40.5%、微处理器 38.2%、PCB 37%。在印中资 EMS（立讯、歌尔、比亚迪电子、龙旗、DBG）构成主要供应链；本土 Dixon 等 EMS 份额升至约 53%，但屏幕、芯片等核心件仍依赖进口。",
    "hs":[{
      "code":"8517",
      "name":"手机/通信设备"
    }, {
      "code":"8518",
      "name":"扬声器/耳机等声学件"
    }],
    "tradeYearly":[{
      "period":"FY25",
      "value":3.7,
      "unit":"十亿美元",
      "note":"零部件进口 $7.15B 中 51.7% 自华"
    }],
    "tradeMonthly":[],
    "alternatives":[{
      "country":"越南",
      "note":"三星主导，占美国智能手机进口 30%"
    }, {
      "country":"中国台湾",
      "note":"高端 CKD 组装份额"
    }],
    "sellers":[
      {
        "name": "立讯精密（Luxshare）",
        "type": "苹果链结构件龙头",
        "top": "营收 ~$36 B（2024）",
        "profile": {
          "hq": "中国 广东 深圳",
          "founded": "2004",
          "business": "消费电子、汽车、通讯",
          "products": "连接器、声学、AirPods、Apple Watch 结构件",
          "tradeVolume": "在印 EMS 客户中份额提升；与 Tata/Foxconn 合作",
          "sources": "立讯精密 2024 年报",
          "note": "苹果链核心供应商"
        }
      },
      {
        "name": "歌尔股份（GoerTek）",
        "type": "全球声学龙头",
        "top": "营收 ~$14 B（2024）",
        "profile": {
          "hq": "中国 山东 潍坊",
          "founded": "2001",
          "business": "声学、光学、VR/AR",
          "products": "MEMS 麦克风、TWS 耳机、VR 头显",
          "tradeVolume": "对印出口覆盖多家品牌商",
          "sources": "歌尔股份 2024 年报",
          "note": "全球声学与 VR 元件前 2"
        }
      },
      {
        "name": "蓝思科技（Lens Technology）",
        "type": "玻璃盖板龙头",
        "top": "营收 ~$8 B（2024）",
        "profile": {
          "hq": "中国 湖南 长沙",
          "founded": "2003",
          "business": "视窗防护玻璃、触控模组",
          "products": "手机/平板/汽车玻璃盖板",
          "tradeVolume": "对印出口覆盖印度 EMS 客户",
          "sources": "蓝思科技 2024 年报",
          "note": "全球玻璃盖板市占率第一"
        }
      },
      {
        "name": "闻泰科技（Wingtech）",
        "type": "ODM 全球前 3",
        "top": "营收 ~$8 B（2024）",
        "profile": {
          "hq": "中国 浙江 嘉兴",
          "founded": "2006",
          "business": "手机/笔电 ODM、半导体",
          "products": "整机 ODM、安世半导体",
          "tradeVolume": "对印 ODM 业务覆盖印度品牌",
          "sources": "闻泰科技 2024 年报",
          "note": "全球 ODM 前 3"
        }
      },
      {
        "name": "舜宇光学（Sunny Optical）",
        "type": "全球摄像头模组龙头",
        "top": "全球 Smartphone Lens ~12%",
        "profile": {
          "hq": "中国 浙江 余姚",
          "founded": "1984",
          "business": "手机摄像头模组与光学镜头",
          "products": "手机摄像头模组、车载镜头、AR/VR 光学",
          "tradeVolume": "经 Dixon 收购的印度子公司供货（ImportGenius 可查）",
          "sources": "舜宇光学科技 2024 年报、ImportGenius 提单",
          "note": "全球手机摄像头模组前 2"
        }
      },
      {
        "name": "丘钛（Q-Tech）",
        "type": "手机摄像头模组头部",
        "top": "中国手机模组出口前 5",
        "profile": {
          "hq": "中国 江苏 昆山",
          "founded": "2007",
          "business": "智能手机摄像头模组研发与制造",
          "products": "手机摄像头模组、IoT 摄像头",
          "tradeVolume": "经 Dixon 收购的印度子公司供货（ImportGenius 可查）",
          "sources": "丘钛科技 2024 年报、ImportGenius 提单",
          "note": "与舜宇同为 Dixon 印度代工供应链核心"
        }
      }
    ],
    "buyers":[
      {
        "name": "富士康 India（Foxconn）",
        "type": "苹果印度主要 EMS",
        "top": "iPhone 出货 ~$15 B",
        "profile": {
          "hq": "印度 Tamil Nadu 钦奈",
          "founded": "2015（印度）",
          "business": "富士康印度子公司",
          "products": "iPhone 整机、Apple 配件",
          "tradeVolume": "中国零部件进口比例高；本地化加速",
          "sources": "Foxconn 印度披露、Counterpoint",
          "note": "苹果印度主要制造伙伴"
        }
      },
      {
        "name": "Tata Electronics",
        "type": "苹果印度新晋 EMS",
        "top": "iPhone 工厂 ~$1.5 B",
        "profile": {
          "hq": "印度 Karnataka 班加罗尔",
          "founded": "2020",
          "business": "Tata 集团电子制造业务",
          "products": "iPhone 整机、电子组件",
          "tradeVolume": "与中国零部件供应商签长单",
          "sources": "Tata 集团披露、印度 MeitY",
          "note": "印度首家本土 iPhone EMS"
        }
      },
      {
        "name": "Dixon Technologies",
        "type": "印度最大本土 EMS",
        "top": "营收 ~$2.5 B",
        "profile": {
          "hq": "印度 北方邦 诺伊达",
          "founded": "1993",
          "business": "印度最大本土 EMS",
          "products": "智能手机、电视、家电 EMS",
          "tradeVolume": "与中国零部件厂长期合作，份额 ~53%",
          "sources": "Dixon 年报、Counterpoint India",
          "note": "印度 EMS 龙头"
        }
      }
    ],
    "coNote":"GTRI 口径印度进口智能手机零部件 51.7% 自华；中国品牌 + 在印中资 EMS 构成主要采购链。",
    "coSource":[43, 33],
    "sources":[33, 19],
    "note":"所谓「80% 自华」更接近笔记本电脑/平板（80.5%），并非智能手机零部件本身；2024 年印度零部件本土化率仅约 35%。"
  }
}, {
  "key":"part",
  "group":"零部件",
  "name":"汽车零配件",
  "dependency":23,
  "metric":"GTRI：印度汽车业整体 23.3% 的进口来自中国；但 EV 高价值部件（三电、磁体、功率半导体、PCB）对华依赖高达 66–75%，多数在印车型因进口含量过高不符 PLI 资格（仅 13% 达标）。",
  "source":3,
  "detail":{
    "diversify":"保留说明：本产业整体对华依赖仅 23.3%（燃油车结构件、线束等易由日本、韩国、德国替代），但 EV 核心部件（三电系统、永磁体、功率半导体、PCB）对华依赖高达 66–75%，多数在印车型因进口含量过高不符 PLI 资格（仅约 13% 达标）。鉴于含高依赖子项，整体保留该产业于重点清单；传统燃油车部件可替代，EV 三电体系中期仍难脱钩。",
    "intro":"涵盖汽车电子、三电（电池/电机/电控）配套、磁体、功率半导体、PCB、结构件等。印度整车组装快，但核心零部件仍大量自华进口。",
    "dependencyNote":"汽车零配件呈现「燃油车低、电动车高」的分化：整体自华占比 23.3–26.7%（日韩德为高端替代来源），但 EV 三电、磁体、功率半导体、PCB 对华依赖高达 66–75%。多数在印车型因进口含量过高不符 PLI 资格（仅约 13% 达标）。被卡点集中在 EV 核心部件，而非传统结构件与线束。",
    "hs":[{
      "code":"8708",
      "name":"机动车辆零件/附件"
    }, {
      "code":"8511 / 8512",
      "name":"汽车电气/线束/照明"
    }, {
      "code":"8503 / 8501",
      "name":"电机及电控部件"
    }],
    "tradeYearly":[{
      "period":"FY24",
      "value":23.3,
      "unit":"%",
      "note":"汽车业整体进口自华占比（GTRI）"
    }, {
      "period":"EV 部件",
      "value":70,
      "unit":"%（区间）",
      "note":"EV 三电/磁体/功率半导体对华 66–75%（Financial Express）"
    }],
    "tradeMonthly":[],
    "alternatives":[{
      "country":"日本",
      "note":"汽车电子/半导体传统来源"
    }, {
      "country":"韩国",
      "note":"车规半导体/电池材料"
    }, {
      "country":"德国",
      "note":"高端零部件"
    }, {
      "country":"印度本土（Motherson/Bharat Forge 等）",
      "note":"结构件/线束本地化较高"
    }],
    "sellers":[
      {
        "name": "均胜电子（Joyson Electronics）",
        "type": "汽车电子前十",
        "top": "营收 ~$7 B",
        "profile": {
          "hq": "中国 浙江 宁波",
          "founded": "2004",
          "business": "汽车安全、汽车电子",
          "products": "安全气囊、ADAS、人机交互",
          "tradeVolume": "对印出口覆盖 Tata/Maruti/Mahindra 等",
          "sources": "均胜电子 2024 年报",
          "note": "收购 KSS 与 TRW 安全业务"
        }
      },
      {
        "name": "中鼎股份（Zhongding Group）",
        "type": "密封件全球前三",
        "top": "营收 ~$3 B",
        "profile": {
          "hq": "中国 安徽 宁国",
          "founded": "1998",
          "business": "汽车橡胶密封件",
          "products": "密封条、减震件、底盘件",
          "tradeVolume": "对印出口覆盖多家印度主机厂",
          "sources": "中鼎股份 2024 年报",
          "note": "全球密封件前 3"
        }
      },
      {
        "name": "福耀玻璃（Fuyao Glass）",
        "type": "车用玻璃全球第一",
        "top": "营收 ~$4 B",
        "profile": {
          "hq": "中国 福建 福清",
          "founded": "1987",
          "business": "汽车玻璃、浮法玻璃",
          "products": "OEM/AM 汽车玻璃、HUD 玻璃",
          "tradeVolume": "印度 Maruti Suzuki/Tata 主要玻璃供应商",
          "sources": "福耀玻璃 2024 年报、ImportGenius（4529 批海关记录）",
          "note": "全球汽车玻璃市占率约 30%"
        }
      },
      {
        "name": "万向集团（Wanxiang）",
        "type": "汽车零部件中国前十",
        "top": "营收 ~$5 B",
        "profile": {
          "hq": "中国 浙江 杭州",
          "founded": "1969",
          "business": "汽车零部件、新能源",
          "products": "轴承、底盘、传动系统",
          "tradeVolume": "对印出口覆盖多家印度车企",
          "sources": "万向集团披露",
          "note": "中国民营汽车零部件龙头"
        }
      },
      {
        "name": "宁波华翔（Huaxiang Group）",
        "type": "汽车内饰/外饰前 3",
        "top": "营收 ~$3 B",
        "profile": {
          "hq": "中国 浙江 宁波",
          "founded": "1988",
          "business": "汽车内饰、外饰、电子系统",
          "products": "门内饰板、保险杠、空调壳体、电子模组",
          "tradeVolume": "在印设有工厂，对印出口结构件与电子件",
          "sources": "宁波华翔 2024 年报",
          "note": "对印主要内饰供应商之一"
        }
      }
    ],
    "buyers":[
      {
        "name": "Tata Motors",
        "type": "印度最大车企",
        "top": "2024 自华进口 ~$28 亿",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1945",
          "business": "印度乘用车与商用车",
          "products": "Nexon/Harrier/Safari/EV 整车",
          "tradeVolume": "玻璃/电子/底盘件大量自华进口",
          "sources": "Tata Motors FY25 财报",
          "note": "印度乘用车市占率第一"
        }
      },
      {
        "name": "Maruti Suzuki",
        "type": "印度最大乘用车厂",
        "top": "在印销量 ~1.7 M（FY25）",
        "profile": {
          "hq": "印度 Haryana 古尔冈",
          "founded": "1981",
          "business": "印度最大乘用车制造商（铃木子公司）",
          "products": "Alto/Swift/Brezza/Ertiga",
          "tradeVolume": "福耀玻璃为其最大玻璃供应商",
          "sources": "Maruti Suzuki FY25 财报",
          "note": "印度乘用车销量长期第一"
        }
      },
      {
        "name": "Mahindra & Mahindra",
        "type": "印度 SUV 与商用车龙头",
        "top": "在印销量 ~0.5 M（FY25）",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1945",
          "business": "印度 SUV、皮卡与农机龙头",
          "products": "XUV700/Thar/Scorpio/Bolero",
          "tradeVolume": "电子与底盘件大量自华进口",
          "sources": "Mahindra FY25 财报",
          "note": "印度 SUV 市占率第一"
        }
      },
      {
        "name": "Bosch India",
        "type": "印度 Tier-1 零部件龙头",
        "top": "营收 ~$2 B（FY25）",
        "profile": {
          "hq": "印度 Karnataka 班加罗尔",
          "founded": "1951",
          "business": "罗伯特博世印度子公司",
          "products": "汽车电子、ABS、ESP、喷油系统",
          "tradeVolume": "部分核心零部件自华进口",
          "sources": "Bosch India FY25 财报",
          "note": "印度 Tier-1 第一"
        }
      },
      {
        "name": "Uno Minda",
        "type": "印度汽车零部件 Tier-1",
        "top": "营收 ~$1.5 B（FY25）",
        "profile": {
          "hq": "印度 Haryana Gurugram",
          "founded": "1958",
          "business": "印度前五大汽车零部件集团",
          "products": "安全气囊、汽车电子、开关、照明、线束",
          "tradeVolume": "安全气囊/汽车电子对华采购；与均胜电子等中国供应商合作",
          "sources": "Uno Minda FY25 Annual Report、印度 ACMA",
          "note": "供 Maruti/Tata/Mahindra 等整车厂"
        }
      },
      {
        "name": "Samvardhana Motherson",
        "type": "印度最大汽车零部件集团",
        "top": "营收 ~$14 B（FY25）",
        "profile": {
          "hq": "印度 Uttar Pradesh Noida",
          "founded": "1975",
          "business": "全球前列汽车内饰/线束/后视镜系统集成商",
          "products": "内饰系统、线束、后视镜、模组、聚合物",
          "tradeVolume": "部分聚合物、模组与电子件自华采购；与比亚迪电子/舜宇等有合作",
          "sources": "Samvardhana Motherson FY25 Annual Report、印度 ACMA",
          "note": "印度 Tier-1 上市公司，市值 ~$11 B"
        }
      }
    ],
    "coNote":"印度汽车零配件对华进口以 EV 三电、磁体、半导体、PCB 等为主；以上为公开可查代表企业，非海关全量名单。",
    "coSource":[49, 3],
    "sources":[49, 3]
  }
}, {
  "key":"consumer",
  "group":"消费品 / 轻工",
  "name":"纺织品和服装",
  "dependency":42,
  "metric":"GTRI：印度纺织品和服装进口 42% 来自中国（Apr2023–Jan2024 约 $3.2B），是各工业门类中自华依赖度最高的品类之一。",
  "source":3,
  "detail":{
    "diversify":"多元化来源可能性：成衣环节较易转向越南、孟加拉国（成本与配额优势）；中高端面料与合成纤维可分流至土耳其、韩国、中国台湾。印度本土纺织规模大但中高端环节偏弱，关税与 PLI 可部分分流。结论：成衣易多元化，中高端面料/合成纤维中期仍依赖中国。",
    "intro":"涵盖合成纤维长丝/短纤、面料、针织与成衣。印度纺织业虽大，但中高端面料、合成纤维与成衣仍大量自华进口。",
    "dependencyNote":"印度自华纺织进口约 42% 集中在中高端面料、合成纤维与部分成衣。代表性品类对华依赖极高：粘胶人造丝纱线 99%、MMF 起绒织物 93%、PU 涂层织物 52%、聚酯纱线 89%。被卡点在中高端合成纤维与功能性面料——中国在中高端合成纤维上的成本与规模优势明显，印度本土虽大却在中高端环节偏弱。",
    "hs":[{
      "code":"5402 / 5407",
      "name":"合成纤维长丝及其机织物"
    }, {
      "code":"5513 / 6006",
      "name":"合成纤维短纤织物/针织布"
    }, {
      "code":"6109 / 6204",
      "name":"针织与梭织成衣"
    }],
    "tradeYearly":[{
      "period":"Apr2023–Jan2024 (10月)",
      "value":3.2,
      "unit":"十亿美元",
      "note":"自华纺织品服装进口，占该领域 42%（总额约 $7.6B）"
    }],
    "tradeMonthly":[],
    "alternatives":[{
      "country":"越南",
      "note":"成衣主要替代来源"
    }, {
      "country":"孟加拉国",
      "note":"成衣（对印出口增长）"
    }, {
      "country":"土耳其/韩国",
      "note":"中高端面料"
    }],
    "sellers":[
      {
        "name": "申洲国际（Shenzhou International）",
        "type": "针织成衣 OEM 全球第一",
        "top": "营收 ~$3.5 B",
        "profile": {
          "hq": "中国 浙江 宁波",
          "founded": "1988",
          "business": "针织面料与成衣纵向一体化 OEM",
          "products": "Nike/Adidas/Uniqlo/PUMA 针织成衣",
          "tradeVolume": "对印出口在针织 OEM 中长期居前",
          "sources": "申洲国际 2024 年报",
          "note": "全球针织成衣 OEM 市占率第一"
        }
      },
      {
        "name": "恒力集团（Hengli Group）",
        "type": "化纤与面料龙头",
        "top": "营收 ~$22 B",
        "profile": {
          "hq": "中国 江苏 苏州",
          "founded": "1994",
          "business": "PTA、聚酯、化纤、织造",
          "products": "涤纶长丝、面料",
          "tradeVolume": "对印出口化纤与面料前列",
          "sources": "恒力石化 2024 年报",
          "note": "全球 PTA 与涤纶龙头"
        }
      },
      {
        "name": "桐昆股份（Tongkun）",
        "type": "涤纶长丝全球前 2",
        "top": "营收 ~$10 B",
        "profile": {
          "hq": "中国 浙江 桐乡",
          "founded": "1981",
          "business": "涤纶长丝全产业链",
          "products": "POY/FDY/DTY 涤纶长丝",
          "tradeVolume": "对印出口涤纶长丝前列",
          "sources": "桐昆股份 2024 年报",
          "note": "全球涤纶长丝产能前 2"
        }
      }
    ],
    "buyers":[
      {
        "name": "Raymond",
        "type": "印度最大纺织与服装集团",
        "top": "营收 ~$2 B",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1925",
          "business": "印度最大毛纺与西装面料集团",
          "products": "西装面料、休闲服饰",
          "tradeVolume": "进口中国化纤与面料",
          "sources": "Raymond 年报、印度纺织部",
          "note": "印度高端纺织龙头"
        }
      },
      {
        "name": "Arvind Mills",
        "type": "印度牛仔与休闲面料龙头",
        "top": "营收 ~$1.5 B",
        "profile": {
          "hq": "印度 Gujarat 艾哈迈达巴德",
          "founded": "1931",
          "business": "印度最大牛仔与休闲面料",
          "products": "牛仔布、休闲面料、成衣",
          "tradeVolume": "进口中国面料与纱线",
          "sources": "Arvind 年报、印度纺织部",
          "note": "印度牛仔产能第一"
        }
      },
      {
        "name": "Welspun Living",
        "type": "印度家纺全球龙头",
        "top": "营收 ~$1 B",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1985",
          "business": "印度最大家纺与毛巾出口商",
          "products": "毛巾、床品、家纺",
          "tradeVolume": "进口中国化纤与面料",
          "sources": "Welspun 年报、印度纺织部",
          "note": "全球毛巾出口前 3"
        }
      }
    ],
    "coNote":"印度纺织品服装进口 42% 自华（约 $3.2B/10月）；企业级采购清单未公开，以上为公开可查代表。",
    "coSource":[3],
    "sources":[3]
  }
}, {
  "key":"machine",
  "group":"医疗设备",
  "name":"医疗器械与科学仪器",
  "dependency":16,
  "metric":"印度约 75–80% 的医疗器械靠进口；中国为第二大供应国（FY22 占其医疗器械进口 16.4%、$1.35B），并在中低端耗材与诊断设备占比上升。",
  "source":47,
  "detail":{
    "diversify":"多元化来源可能性：印度约 75–80% 医疗器械靠进口，中国仅占其进口 16.4%（第二大来源），高端影像/植入物主要来自美国、德国、日本；中低端耗材与诊断设备可部分由印度本土与多元来源（美日德+本土）替代。结论：对华单一来源依赖本就不高，进一步多元化空间大，真正的卡脖子在美日德高端设备而非中国。",
    "intro":"涵盖影像（CT/MRI）、监护、呼吸机、透析、植入物、手术耗材与体外诊断设备（HS 90）。印度号称「世界药房」却 80% 医疗设备靠进口，中国在中低端耗材/诊断设备角色上升。",
    "dependencyNote":"印度约 75–80% 医疗器械靠进口，但中国仅占其进口约 16.4%（FY22），集中在中低端耗材、监护/超声/CT 等诊断设备（迈瑞、联影具性价比优势）。真正的「卡脖子」在美日德高端影像与植入物，而非对华单一来源。因此印度对华医疗器械依赖中等，替代压力主要体现在整体国产化而非对华脱钩。",
    "hs":[{
      "code":"9018",
      "name":"医疗器械与仪器（手术/诊断）"
    }, {
      "code":"9019 / 9022",
      "name":"理疗/影像与射线设备"
    }, {
      "code":"9001–9004",
      "name":"光学与眼镜类科学仪器"
    }],
    "tradeYearly":[{
      "period":"FY22",
      "value":1.35,
      "unit":"十亿美元",
      "note":"自华医疗器械进口，占印医疗器械进口 16.4%（第二大供应国）"
    }, {
      "period":"整体进口依赖",
      "value":80,
      "unit":"%（全部外国）",
      "note":"印度约 75–80% 医疗器械靠进口（US/德/日/中为主）"
    }],
    "tradeMonthly":[],
    "alternatives":[{
      "country":"美国",
      "note":"高端影像/植入物最大来源"
    }, {
      "country":"德国/日本",
      "note":"影像与精密仪器"
    }, {
      "country":"新加坡/荷兰",
      "note":"部分高端设备"
    }],
    "sellers":[
      {
        "name": "迈瑞医疗（Mindray）",
        "type": "中国医疗器械第一",
        "top": "营收 ~$5 B",
        "profile": {
          "hq": "中国 广东 深圳",
          "founded": "1991",
          "business": "生命信息支持、IVD、医学影像",
          "products": "监护仪、超声、麻醉机、生化分析",
          "tradeVolume": "对印出口监护与超声份额长期前列",
          "sources": "迈瑞医疗 2024 年报",
          "note": "中国医疗器械龙头"
        }
      },
      {
        "name": "联影医疗（United Imaging）",
        "type": "中国医学影像龙头",
        "top": "营收 ~$1.5 B",
        "profile": {
          "hq": "中国 上海",
          "founded": "2011",
          "business": "高端医学影像与放疗设备",
          "products": "CT/MR/PET-CT/直线加速器",
          "tradeVolume": "对印出口 CT 与 MR 设备增长迅速",
          "sources": "联影医疗 2024 年报",
          "note": "中国 CT/MR 龙头"
        }
      },
      {
        "name": "鱼跃医疗（Yuwell）",
        "type": "中国家用医疗龙头",
        "top": "营收 ~$1.5 B",
        "profile": {
          "hq": "中国 江苏 丹阳",
          "founded": "1998",
          "business": "家用医疗与临床医疗",
          "products": "血压计、血糖仪、雾化器",
          "tradeVolume": "对印家用医疗器械出口前列",
          "sources": "鱼跃医疗 2024 年报",
          "note": "中国家用医疗龙头"
        }
      }
    ],
    "buyers":[
      {
        "name": "Apollo Hospitals",
        "type": "印度最大医院集团",
        "top": "营收 ~$2.5 B",
        "profile": {
          "hq": "印度 Tamil Nadu 金奈",
          "founded": "1983",
          "business": "印度最大医院集团",
          "products": "综合医院、药店、诊断、保险",
          "tradeVolume": "大量进口中国监护/超声/影像设备",
          "sources": "Apollo FY25 财报",
          "note": "印度医院床位数第一"
        }
      },
      {
        "name": "Fortis Healthcare",
        "type": "印度第二大医院集团",
        "top": "营收 ~$1 B",
        "profile": {
          "hq": "印度 Haryana 古尔冈",
          "founded": "1996",
          "business": "印度第二大医院集团",
          "products": "综合医院、诊断",
          "tradeVolume": "进口中国中高端医疗器械",
          "sources": "Fortis FY25 财报",
          "note": "印度综合医院前 3"
        }
      },
      {
        "name": "Allengers Medical Systems",
        "type": "印度医疗设备进口商",
        "top": "营收 ~$0.3 B",
        "profile": {
          "hq": "印度 Punjab 昌迪加尔",
          "founded": "1986",
          "business": "印度本土医疗设备进口与分销",
          "products": "影像、监护、麻醉设备",
          "tradeVolume": "中国设备进口比例较高",
          "sources": "Allengers 披露、ImportGenius",
          "note": "印度医疗设备分销龙头"
        }
      },
      {
        "name": "Medikabazaar",
        "type": "印度最大医疗器械 B2B 平台",
        "top": "在线医疗器械采购平台",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "2015",
          "business": "印度医疗设备/耗材在线 B2B 平台/代理",
          "products": "代理 GE/Philips/Mindray/United Imaging 等品牌",
          "tradeVolume": "承接印度医院/诊所的 CT/PET-CT/监护仪集中采购",
          "sources": "Medikabazaar 官网、Tracxn",
          "note": "经 CDSCO 注册的医疗器械 B2B 渠道"
        }
      },
      {
        "name": "AIIMS",
        "type": "印度国家公立医院",
        "top": "All India Institute of Medical Sciences",
        "profile": {
          "hq": "印度 New Delhi（新德里总院）",
          "founded": "1956",
          "business": "印度国家级公立医院+医学院网络",
          "products": "急诊/ICU/呼吸机/监护仪等医疗设备",
          "tradeVolume": "迈瑞等中国头部品牌为其新冠期主要设备供应方",
          "sources": "AIIMS 政府采购记录、Medical Buyer",
          "note": "印度顶级公立医院网络"
        }
      },
      {
        "name": "HLL Lifecare",
        "type": "国营医疗物资公司",
        "top": "印度卫生部下属",
        "profile": {
          "hq": "印度 Kerala Thiruvananthapuram",
          "founded": "1966",
          business: "印度国营医疗物资采购与供应链",
          "products": "医疗器械、医院耗材、诊断试剂",
          "tradeVolume": "为中央/邦政府医院采购医疗物资的主要通道",
          "sources": "HLL Lifecare 官网、印度卫生部年报",
          "note": "新冠期对中国制呼吸机/监护仪集中采购"
        }
      },
      {
        "name": "Superhealth",
        "type": "印度连锁医院",
        "top": "运营 150+ 医院床位",
        "profile": {
          "hq": "印度 Delhi NCR",
          "founded": "2020",
          business: "印度快速扩张的连锁医院集团",
          "products": "影像/检验/外科设备",
          "tradeVolume": "通过 Medikabazaar 等 B2B 平台采购中资 CT/MRI/监护",
          "sources": "Superhealth 2024 年报、Medical Buyer 报道",
          "note": "印度新兴连锁医院，中资设备主要采购客户之一"
        }
      }
    ],
    "coNote":"印度约 80% 医疗器械靠进口，中国为第二大供应国（FY22 $1.35B、占 16.4%），中低端耗材/诊断设备占比升；企业级采购清单未公开。",
    "coSource":[47],
    "sources":[47, 3]
  }
}, {
  "key":"consumer",
  "group":"消费品 / 轻工",
  "name":"玩具",
  "dependency":48,
  "metric":"FY24-25 印度玩具总进口 $84.7M、自华 $40.2M（中国占 47.5%）；HS9503（占玩具进口约 3/4）自华 47.5%、三编码合计 FY24 自华 64%。关税由 20% 提至 70% 后自华进口额从 $300M 腰斩至 $40M，但中国仍是印度玩具最大进口来源国（2025-26 占约 55%）。",
  "source":48,
  "detail":{
    "intro":"涵盖玩具、游戏品与运动器材（HS 95）。印度本土玩具业分散、规模小，长期高度依赖中国进口；高额关税后进口量下降但来源结构未根本改变。",
    "dependencyNote":"玩具对华依赖度近年大幅下行。市场曾 80–90% 靠进口、其中约 90% 来自中国（2018-19 关税提升前）。2020 年关税由 20% 提至 60%、2024 进一步至 70% 后，自华进口额腰斩再腰斩：FY18-19 自华约 $300M → FY24 自华 $41.6M → FY24-25 自华 $40.2M。当前 HS9503（占玩具进口约 3/4）自华占 47.5%、三编码合计 FY24 自华 64%；FY25-26 中国在印度玩具进口占约 55%（关税部分电子玩具由 70% 回调至 20% 可能再推高进口）。2025-26 印度玩具实现 $1.52 亿贸易顺差，依赖继续下行，但中低端成本与产业带优势短期仍难替代。",
    "hs":[{
      "code":"9503",
      "name":"玩具（含电动/毛绒/积木）"
    }, {
      "code":"9504",
      "name":"电子游戏机/视频游戏机"
    }, {
      "code":"9506",
      "name":"运动器材/健身器材"
    }],
    "tradeYearly":[{
      "period":"疫情前 (FY18-19)",
      "value":0.3,
      "unit":"十亿美元",
      "note":"自华玩具进口约 $300M（中国占进口 ~90%）"
    }, {
      "period":"FY20 关税提升至 60%",
      "value":0.15,
      "unit":"十亿美元",
      "note":"进口腰斩至约 $150M"
    }, {
      "period":"FY24-25 (关税 70%)",
      "value":0.04,
      "unit":"十亿美元",
      "note":"HS9503 自华 $40.2M，占 HS9503 印进口 47.5%；HS9503/9504/9505 三编码合计自华 64%"
    }],
    "tradeMonthly":[],
    "alternatives":[{
      "country":"越南",
      "note":"成衣/玩具替代来源"
    }, {
      "country":"日本/中国台湾/荷兰",
      "note":"高端玩具与游戏机"
    }, {
      "country":"印度本土（Karnataka/U.P. 玩具园）",
      "note":"政策扶持下本地化起步"
    }],
    "sellers":[
      {
        "name": "奥飞娱乐（Alpha Group）",
        "type": "中国动漫玩具龙头",
        "top": "营收 ~$0.4 B",
        "profile": {
          "hq": "中国 广东 汕头 澄海",
          "founded": "1993",
          "business": "动漫 IP + 玩具一体化",
          "products": "动漫玩具、婴幼玩具",
          "tradeVolume": "对印出口覆盖多个印度分销渠道",
          "sources": "奥飞娱乐 2024 年报",
          "note": "中国动漫玩具第一品牌"
        }
      },
      {
        "name": "星辉互动娱乐（Rastar）",
        "type": "中国车模/动漫玩具龙头",
        "top": "营收 ~$0.3 B",
        "profile": {
          "hq": "中国 广东 汕头 澄海",
          "founded": "2000",
          "business": "车模、动漫玩具、足球俱乐部",
          "products": "车模、动漫衍生玩具",
          "tradeVolume": "对印车模与动漫玩具出口前列",
          "sources": "星辉互动娱乐 2024 年报",
          "note": "全球车模与动漫玩具前列"
        }
      },
      {
        "name": "实丰文化（Shifeng Culture）",
        "type": "澄海玩具出口前列",
        "top": "营收 ~$0.2 B",
        "profile": {
          "hq": "中国 广东 汕头 澄海",
          "founded": "1992",
          "business": "玩具研发制造与销售",
          "products": "IP 玩具、电动玩具、积木",
          "tradeVolume": "对印玩具出口在澄海系居前",
          "sources": "实丰文化 2024 年报",
          "note": "澄海玩具产业带代表"
        }
      }
    ],
    "buyers":[
      {
        "name": "Funskool India",
        "type": "印度最大玩具公司",
        "top": "营收 ~$0.1 B",
        "profile": {
          "hq": "印度 Tamil Nadu 哥印拜陀",
          "founded": "1987",
          "business": "印度最大本土玩具公司",
          "products": "拼装玩具、教育玩具、IP 玩具",
          "tradeVolume": "进口中国玩具份额较高",
          "sources": "Funskool 年报、印度商工部",
          "note": "印度玩具市场份额第一"
        }
      },
      {
        "name": "Mattel India",
        "type": "全球玩具巨头印度子公司",
        "top": "营收 ~$0.15 B",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1983（印度）",
          "business": "芭比/风火轮等品牌运营",
          "products": "芭比、风火轮、Hot Wheels",
          "tradeVolume": "大量自中国 OEM 进口",
          "sources": "Mattel 印度披露",
          "note": "全球玩具第一品牌"
        }
      },
      {
        "name": "Reliance Retail",
        "type": "印度最大零售集团",
        "top": "营收 ~$36 B（FY25）",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "2006",
          "business": "印度最大零售集团",
          "products": "Smart Bazaar、Reliance Trends、Reliance Digital",
          "tradeVolume": "玩具品类大量采购中国品牌",
          "sources": "Reliance Retail FY25 财报",
          "note": "印度零售第一"
        }
      }
    ],
    "coNote":"印度市场曾 80–90% 玩具靠进口、其中约 90% 来自中国；2020 起 60% 关税后进口额腰斩但中国仍最大来源；企业级采购清单未公开。",
    "coSource":[48],
    "sources":[48]
  }
}, {
  "key":"machine",
  "group":"工程器械与设备",
  "name":"工程机械与工业机械（通用）",
  "dependency":44,
  "metric":"GTRI FY2025-26：机械与硬件整体自华占 44%（含工业品 30.8% 大类）；工程机械、锅炉、汽轮机、变压器单项 $2.1B 等为印度电力/工业项目主要进口口径。盾构机（TBM）为其中细分，已单独详述。",
  "source":3,
  "detail":{
    "diversify":"多元化来源可能性：中低端工程机械可逐步由印度本土制造（如 L&T）与日韩替代；高端工程机械与机床主要依赖日本（小松/日立/三菱）、德国（利勃海尔）、美国技术与品牌。结论：中低端可较快多元化/本土化，高端特种设备仍依赖传统工业强国，整体替代路径清晰。",
    "intro":"涵盖通用工程机械（挖掘机、起重机、装载机）、锅炉、汽轮机、机床等（HS 84 大类，TBM 除外）。印度基建与制造业扩张带来大量机械进口，中国以性价比占近四成。",
    "dependencyNote":"GTRI FY2025-26：印度机械与硬件整体自华占 44%（工业品类 30.8% 大类下），机械进口 Jan-Oct 2025 $25.9B（其中变压器单项 $2.1B 占主导）。细分对华依赖差异大：纺机/针织机 60-72%、机床约 27%、挖掘机约 25%、电力变压器接近全口径。被卡点在中低端性价比产品；日本（小松/日立）、德国（利勃海尔）、韩国、美国在高端工程机械与机床具技术与品牌优势，印度 L&T 在中低端逐步替代。",
    "hs":[{
      "code":"8429 / 8431",
      "name":"挖掘机/起重/装载机械"
    }, {
      "code":"8402 / 8403",
      "name":"锅炉与汽轮机"
    }, {
      "code":"8456 / 8460",
      "name":"机床与金属加工机械"
    }],
    "tradeYearly":[{
      "period":"FY24",
      "value":19,
      "unit":"十亿美元",
      "note":"自华机械进口，占印机械进口 39.6%"
    }],
    "tradeMonthly":[],
    "alternatives":[{
      "country":"日本（小松/日立建机/三菱）",
      "note":"高端工程机械"
    }, {
      "country":"德国（利勃海尔/Siempelkamp）",
      "note":"高端与特种机械"
    }, {
      "country":"韩国/美国",
      "note":"工程机械与机床"
    }],
    "sellers":[
      {
        "name": "三一重工（Sany Heavy Industry）",
        "type": "全球挖掘机第一",
        "top": "营收 ~$11 B",
        "profile": {
          "hq": "中国 湖南 长沙",
          "founded": "1994",
          "business": "工程机械全品类",
          "products": "挖掘机、混凝土机械、起重机",
          "tradeVolume": "对印出口在工程机械中居前；印度 BRO 边境国防基建使用",
          "sources": "三一重工 2024 年报、ImportGenius",
          "note": "全球挖掘机销量第一"
        }
      },
      {
        "name": "中联重科（Zoomlion）",
        "type": "中国工程机械前 3",
        "top": "营收 ~$7 B",
        "profile": {
          "hq": "中国 湖南 长沙",
          "founded": "1992",
          "business": "工程机械、农业机械",
          "products": "起重机、混凝土泵车、塔机",
          "tradeVolume": "对印出口与 Reliance 等签大单（120 台吊车）",
          "sources": "中联重科 2024 年报",
          "note": "全球起重机前 3"
        }
      },
      {
        "name": "徐工集团（XCMG）",
        "type": "中国工程机械前 3",
        "top": "营收 ~$13 B",
        "profile": {
          "hq": "中国 江苏 徐州",
          "founded": "1989",
          "business": "工程机械全品类",
          "products": "起重机、装载机、挖掘机",
          "tradeVolume": "对印出口排名前列",
          "sources": "徐工集团 2024 年报",
          "note": "全球工程机械前 10"
        }
      }
    ],
    "buyers":[
      {
        "name": "Larsen & Toubro（L&T）",
        "type": "印度最大工程总包",
        "top": "营收 ~$23 B（FY25）",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1938",
          "business": "印度最大工程总包",
          "products": "基建 EPC、能源装备",
          "tradeVolume": "中大型工程机械大量自华进口",
          "sources": "L&T FY25 财报",
          "note": "印度最大基建集团"
        }
      },
      {
        "name": "Tata Projects",
        "type": "Tata 集团基建业务",
        "top": "营收 ~$2 B",
        "profile": {
          "hq": "印度 Telangana 海得拉巴",
          "founded": "1979",
          "business": "Tata 旗下基建 EPC",
          "products": "电站、地铁、输配电 EPC",
          "tradeVolume": "中国工程机械与电力装备采购前列",
          "sources": "Tata Projects 年报",
          "note": "印度大型 EPC 之一"
        }
      },
      {
        "name": "Reliance Infrastructure",
        "type": "印度大型基建集团",
        "top": "营收 ~$3 B",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1929（Reliance 起家）",
          "business": "Reliance 旗下基建",
          "products": "电站、公路、地铁 EPC",
          "tradeVolume": "与中国装备厂商签大单（120 台吊车等）",
          "sources": "Reliance Infra 年报",
          "note": "印度私营基建前列"
        }
      },
      {
        "name": "ONGC",
        "type": "印度国营油气公司",
        "top": "Oil and Natural Gas Corporation",
        "profile": {
          "hq": "印度 Telangana 海得拉巴",
          "founded": "1956",
          "business": "印度最大油气勘探与开采国营公司",
          "products": "油气勘探、海上平台、油气运输",
          "tradeVolume": "为勘探项目采购中国制钻机/起重机/柴油发电",
          "sources": "ONGC FY25 Annual Report、印度石油部",
          "note": "印度市值前列国营公司"
        }
      },
      {
        "name": "HPCL",
        "type": "印度国营炼油厂",
        "top": "Hindustan Petroleum Corporation",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1952",
          "business": "印度国营炼油与石化一体化",
          "products": "炼化产品、石化、燃油零售",
          "tradeVolume": "炼厂扩建与维检采购中国制施工与起重机械",
          "sources": "HPCL FY25 Annual Report、印度石油部",
          "note": "印度三大国营炼油商之一"
        }
      },
      {
        "name": "Reliance Industries",
        "type": "印度信实集团（EPC/基建/化工）",
        "top": "营收 ~$110 B（FY25）",
        "profile": {
          "hq": "印度 Maharashtra 孟买",
          "founded": "1966",
          "business": "印度最大私营集团，含油气/绿色能源/EPC",
          "products": "SANSAN 电厂、Jamnagar 100GW 光伏、油气与基建",
          "tradeVolume": "SANSAN 电厂采购徐工 7×QUY650+10×QUY150 履带吊；自建项目采购中联 120 台 QY75V 汽车吊",
          "sources": "Reliance Industries FY25 Annual Report、PIB 公告",
          "note": "印度最大集团（含 Jio/Retail/Infrastructure/New Energy Solar 等子公司）"
        }
      },
      {
        "name": "BRO（Border Roads Organisation）",
        "type": "国防部边境公路局",
        "top": "印度国防部下属机构",
        "profile": {
          "hq": "印度 New Delhi",
          "founded": "1960",
          "business": "印度国防部边境道路建设机构",
          "products": "边境公路、隧道、机场跑道、战略通道",
          "tradeVolume": "边境战略通道项目采购中国工程机械（挖掘机/装载机等）",
          "sources": "BRO 官网、印度国防部年报",
          "note": "61 条边境通道项目（含国防用途），为 BRO 项目采购中国工程机械"
        }
      }
    ],
    "coNote":"印度机械进口约 $19B 自华（占 39.6%）；盾构机为细分已单独详述；企业级采购清单未公开，以上为公开可查代表。",
    "coSource":[3],
    "sources":[3]
  }
}, {
  "key":"raw",
  "group":"原材料 / 工业中间品",
  "name":"化肥（磷酸二铵 DAP / 特种肥）",
  "dependency":80,
  "metric":"印度化肥进口中，特种/水溶肥约 80% 来自中国（Economic Times）；磷酸二铵(DAP)印度 50–60% 靠进口、其中对华约 25–30%（2023-24 曾达 40%），中国自 2023 年中暂停 DAP 出口许可后份额骤降。尿素/氯化钾(MOP)/磷酸对华依赖低。",
  "source":50,
  "detail":{
    "intro":"化肥是印度粮食安全（『Make in India』肥料）的关键投入。印度约 20% 尿素、50–60% DAP、约 80% 特种肥、100% MOP 靠进口，但各品类对华依赖差异极大：特种水溶肥高度依赖中国，DAP 次之，磷酸与 MOP 主要来自摩洛哥/约旦/沙特与俄白，并非中国。",
    "dependencyNote":"化肥对华依赖高度分化：特种/水溶肥约 80% 直接自华（连间接渠道约 95%），DAP 印度 50–60% 靠进口、其中对华 25–30%（2023-24 曾达 40%，中国暂停 DAP 出口许可后骤降，FY25 自华 18.5%、10MFY26 约 9%），尿素/MOP/磷酸主要来自本土、摩洛哥/约旦/沙特、俄白而非中国。被卡点集中在特种水溶肥细分。",
    "hs":[{
      "code":"3105.30",
      "name":"磷酸二铵（DAP）"
    }, {
      "code":"3105.10 / 3105.40",
      "name":"磷酸一铵（MAP）/ 其他磷酸盐"
    }, {
      "code":"3105.90",
      "name":"复合/特种水溶肥（NPK/WSF）"
    }, {
      "code":"3102.10",
      "name":"尿素（Urea）"
    }, {
      "code":"2835.21 / 2809.20",
      "name":"磷酸氢二铵原料 / 磷酸（磷肥中间体）"
    }],
    "tradeYearly":[{
      "period":"2023-24",
      "value":22.28,
      "unit":"十万公吨 (LMT)",
      "note":"DAP 自华进口量，约占印 DAP 总进口 40%（全年 55.67 LMT）"
    }, {
      "period":"2024-25",
      "value":8.47,
      "unit":"十万公吨 (LMT)",
      "note":"DAP 自华进口量，占比降至约 19%；中国出口管制后骤降"
    }, {
      "period":"特种肥(2024 H2)",
      "value":80,
      "unit":"%",
      "note":"印度进口特种/水溶肥约 15–16 万吨，其中中国供 70–80%（Economic Times）"
    }],
    "tradeMonthly":[],
    "alternatives":[{
      "country":"摩洛哥 / 约旦 / 沙特",
      "note":"磷酸与磷矿主要来源（印 85–90% 磷矿/磷酸靠进口，非中国）"
    }, {
      "country":"俄罗斯 / 白俄罗斯",
      "note":"MOP（氯化钾）主要来源，印 100% MOP 靠进口"
    }, {
      "country":"沙特 / 俄罗斯 / 摩洛哥",
      "note":"DAP 长期协议来源（2025-26 分别 31/30.1/25 万吨）"
    }, {
      "country":"印度本土（IFFCO/Chambal/Coromandel 等）",
      "note":"尿素本土产能大；DAP/特种肥本土化推进中"
    }],
    "sellers":[
      {
        "name": "云天化（Yuntianhua）",
        "type": "中国 DAP/MAP 出口第一",
        "top": "DAP/MAP 产能 ~700 万吨",
        "profile": {
          "hq": "中国 云南 昆明",
          "founded": "1974",
          "business": "磷化工、化肥",
          "products": "DAP、MAP、磷酸、磷酸铁",
          "tradeVolume": "对印 DAP/MAP 出口排名第一；与 IFFCO 等签长单",
          "sources": "云天化 2024 年报、中国化肥协会",
          "note": "中国 DAP/MAP 龙头"
        }
      },
      {
        "name": "瓮福集团（Wengfu）",
        "type": "中国磷化工前 3",
        "top": "磷酸产能 ~2.5 百万吨",
        "profile": {
          "hq": "中国 贵州 贵阳",
          "founded": "1990",
          "business": "磷化工与化肥",
          "products": "磷酸、DAP、MAP、磷酸铁",
          "tradeVolume": "对印 DAP/MAP 出口前列",
          "sources": "瓮福集团 2024 年报",
          "note": "中国磷酸与 DAP 前 3"
        }
      },
      {
        "name": "贵州磷化（瓮福 Wengfu）",
        "type": "中国磷化工央企龙头",
        "top": "瓮福集团主品牌",
        "profile": {
          "hq": "中国 贵州 贵阳",
          "founded": "1990（瓮福集团）",
          "business": "中国磷化工/磷酸盐龙头（央企）",
          "products": "磷酸二铵（DAP）、磷酸、磷矿石",
          "tradeVolume": "对印 DAP 出口前列；印度为重要海外市场",
          "sources": "瓮福集团 2024 年报、印度 PIB DGCIS 数据",
          "note": "瓮福集团主品牌（同一企业）"
        }
      },
      {
        "name": "湖北宜化（Hubei Yihua）",
        "type": "中国尿素与磷化工前列",
        "top": "尿素产能 ~200 万吨",
        "profile": {
          "hq": "中国 湖北 宜昌",
          "founded": "1977",
          "business": "化肥与化工",
          "products": "尿素、季戊四醇、磷酸二铵",
          "tradeVolume": "对印尿素与磷肥出口长期位列前 10",
          "sources": "湖北宜化 2024 年报",
          "note": "中国尿素/季戊四醇龙头"
        }
      },
      {
        "name": "金正大（Kingenta）",
        "type": "中国复合肥与缓控释肥龙头",
        "top": "复合肥产能 ~700 万吨",
        "profile": {
          "hq": "中国 山东 临沂",
          "founded": "1998",
          "business": "复合肥、缓控释肥、水溶肥",
          "products": "复合肥、缓控释肥、水溶肥",
          "tradeVolume": "对印复合肥与水溶肥出口长期居前",
          "sources": "金正大 2024 年报",
          "note": "中国缓控释肥龙头"
        }
      }
    ],
    "buyers":[
      {
        "name": "IFFCO",
        "type": "印度最大化肥合作社",
        "top": "营收 ~$5 B（FY25）",
        "profile": {
          "hq": "印度 Uttar Pradesh 新德里",
          "founded": "1967",
          "business": "印度最大化肥进口与合作社",
          "products": "DAP/MAP/尿素/复合肥进口与分销",
          "tradeVolume": "中国是 DAP/MAP 第一大进口来源；2023 进口 6 万吨 DAP 大单",
          "sources": "IFFCO FY25 年报、印度农业部",
          "note": "印度化肥进口第一"
        }
      },
      {
        "name": "Coromandel International",
        "type": "印度 DAP/MAP 加工龙头",
        "top": "营收 ~$2 B（FY25）",
        "profile": {
          "hq": "印度 Telangana 海得拉巴",
          "founded": "1906",
          "business": "印度最大 DAP/MAP 加工企业",
          "products": "DAP/MAP/SSP/复合肥",
          "tradeVolume": "中国是其 DAP/MAP 主要进口来源",
          "sources": "Coromandel FY25 年报",
          "note": "印度私营化肥龙头"
        }
      },
      {
        "name": "Chambal Fertilizers",
        "type": "印度私营化肥龙头",
        "top": "营收 ~$2 B（FY25）",
        "profile": {
          "hq": "印度 Rajasthan 斋浦尔",
          "founded": "1985",
          "business": "印度最大私营尿素与化肥",
          "products": "尿素、复合肥",
          "tradeVolume": "中国是主要进口来源之一",
          "sources": "Chambal FY25 年报",
          "note": "印度尿素产能第一"
        }
      },
      {
        "name": "Paradeep Phosphates (PPL)",
        "type": "印度 DAP 主要进口与加工",
        "top": "营收 ~$1.5 B",
        "profile": {
          "hq": "印度 Odisha 帕拉迪普",
          "founded": "1981",
          "business": "印度 DAP/MAP 加工",
          "products": "DAP、MAP、NPK",
          "tradeVolume": "对华 DAP 进口量在印度厂商中前列",
          "sources": "PPL FY25 年报",
          "note": "Zuari 集团旗下"
        }
      }
    ],
    "coNote":"印度化肥高度依赖进口，但仅特种水溶肥约 80% 自华、DAP 对华约 25–30%（近年因中国出口管制骤降）；尿素/MOP/磷酸主要来源非中国。以上为公开可查代表企业，非海关全量名单。",
    "coSource":[50, 51],
    "sources":[50, 51]
  }
}];

/* --------- 2.5 各产业「依赖情况及替代可能性」分析报告文本 --------- */
/* =====================================================================
 * TRADE_FLOWS —— 17 产业「贸易流」细化（2026-08 核实）
 * 每个产业给出若干条 中国出口商 → 印度采购商 → 下游去向 的链路。
 * 字段：
 *   seller      中国主要出口商（具体公司，documented 为公开披露/报道）
 *   buyer       印度主要采购商 / 进口方
 *   transship   是否经第三国中转（贴牌/洗产地）
 *   via         中转地（越南/香港/马来/阿联酋…）
 *   downstream  印度采购后去向：自产 / 流向X公司或Y用途
 *   military    是否流向军工/国防企业（仅在有公开证据或国防关联时标 true）
 *   militaryNote 军工端说明（无证据时写「未见公开军工端用途证据」）
 *   confidence  documented(有公开证据) / representative(代表性推断)
 *   note        一句补充说明
 *   source      来源编号数组
 * 说明：公司级「一对一」海关提单多为付费源(ImportGenius/Volza/Panjiva)，
 *       公开可查的直供多为「厂商公开披露/行业报道」，已在 confidence 区分。
 * ===================================================================== */
const TRADE_FLOWS = {
  "稀土永磁体":[{
    "seller":"金力永磁（JL MAG，赣州）",
    "year":"2024",
    "goods":"烧结钕铁硼永磁体（NdFeB）",
    "hs":"8505.11",
    "buyer":"Uno Minda",
    "transship":false,
    "via":"",
    "downstream":"供 Tata Motors、Mahindra 等 EV/混动车用电机（自产电机后装车）",
    "military":true,
    "militaryNote":"中国要求终端用户证明「不用于军工」；公开报道指印国防经中间商进口中国磁体供 DRDO/HAL/BEL 导弹舵机、雷达、航电（2024约460吨）",
    "confidence":"documented",
    "note":"民用车链为 documented；军工端为统计/推断（ORF）",
    "source":[110, 12]
  }, {
    "seller":"中科三环（Zhong Ke Sanhuan）",
    "year":"2024",
    "goods":"车规级高温钕铁硼磁体",
    "hs":"8505.11",
    "buyer":"Tata Motors",
    "transship":false,
    "via":"",
    "downstream":"车规级高温钕铁硼磁体（自产电机后装车）",
    "military":false,
    "militaryNote":"未见公开军工端用途证据",
    "confidence":"representative",
    "note":"中科院背景，汽车 OEM 主力供应商；具体直供合同未见公开，为代表性推断",
    "source":[12]
  }, {
    "seller":"宁波韵升（Ningbo Yunsheng）",
    "year":"2024",
    "goods":"钕铁硼电机磁体",
    "hs":"8505.11",
    "buyer":"Ather Energy",
    "transship":false,
    "via":"",
    "downstream":"自产两轮车电机磁体",
    "military":false,
    "militaryNote":"未见公开军工端用途证据",
    "confidence":"representative",
    "note":"磁体多对华直供；具体直供合同未见公开，为代表性推断",
    "source":[12]
  }, {
    "seller":"宁波韵升（Ningbo Yunsheng，经香港/新加坡）",
    "year":"2024",
    "goods":"钕铁硼电机磁体",
    "hs":"8505.11",
    "buyer":"Ola Electric",
    "transship":true,
    "via":"香港/新加坡",
    "downstream":"自产两轮车电机磁体",
    "military":false,
    "militaryNote":"未见公开军工端用途证据",
    "confidence":"representative",
    "note":"个别经香港中转为代表性推断",
    "source":[12]
  }],
  "原料药（API/关键起始物料）":[{
    "seller":"新和成（NHU）",
    "year":"2023",
    "goods":"维生素 API（VE/VA）",
    "hs":"2936.28",
    "buyer":"Sun Pharma",
    "transship":false,
    "via":"",
    "downstream":"自产制剂（出口全球 + 印度本土用药）",
    "military":false,
    "militaryNote":"未见公开军工端用途证据（API 为医药用途）",
    "confidence":"documented",
    "note":"中国医药保健品进出口商会：2023 印自华 API 及中间体约 $101.5 亿、占其进口 68.8%",
    "source":[40, 22]
  }, {
    "seller":"华海药业",
    "year":"2024",
    "goods":"沙坦类 API",
    "hs":"2933.99",
    "buyer":"Dr Reddy's Laboratories",
    "transship":false,
    "via":"",
    "downstream":"自产制剂",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"中国原料药头部企业；具体直供合同未见公开，为代表性推断",
    "source":[22]
  }, {
    "seller":"国邦医药",
    "year":"2024",
    "goods":"氟苯尼考/喹诺酮类 API",
    "hs":"2941.90",
    "buyer":"Aurobindo Pharma",
    "transship":false,
    "via":"",
    "downstream":"自产制剂",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"公司级直供合同未公开，为代表性推断",
    "source":[22]
  },
    { "seller":"华北制药（NCPC，青霉素/6-APA 中间体）", "goods":"6-APA（青霉素中间体）", "hs":"2941.10", "buyer":"Aurobindo Pharma", "transship":false, "via":"", "downstream":"自产制剂（Aurobindo 全集团 6-APA 采购）", "year":"2024", "confidence":"representative", "military":false, "militaryNote":"未见", "note":"公司级直供合同未公开，为代表性推断", "source":[4, 23] },
    { "seller":"华北制药（NCPC，青霉素/6-APA 中间体）", "goods":"青霉素 G 工业盐", "hs":"2941.10", "buyer":"Lyfius Kakinada", "transship":false, "via":"", "downstream":"本土自产替代（Aurobindo 旗下子公司 Lyfius Kakinada）", "year":"2024", "confidence":"representative", "military":false, "militaryNote":"未见", "note":"Lyfius 为 Aurobindo 旗下位于安得拉邦 Kakinada 的 6-APA 厂，规划降依赖约 50%，为代表性推断", "source":[4, 23] }],
  "盾构机（TBM）":[{
    "seller":"中铁重工（CRCHI）",
    "year":"2025",
    "goods":"盾构机（TBM）",
    "hs":"8430.41",
    "buyer":"MMRC（Mumbai Metro Rail Corporation Ltd）",
    "transship":false,
    "via":"",
    "downstream":"孟买地铁隧道掘进（民用基建）",
    "military":false,
    "militaryNote":"边境/战略隧道具潜在国防属性，但 TBM 采购为民用基建合同",
    "confidence":"documented",
    "note":"孟买地铁 18 台中 8 台中资制造；2025-08 3 台滞留中国港口",
    "source":[25, 11, 38]
  }, {
    "seller":"海瑞克广州（Herrenknecht，德资在华）",
    "year":"2024",
    "goods":"盾构机（TBM）",
    "hs":"8430.41",
    "buyer":"NHSRCL（National High Speed Rail Corporation Ltd）",
    "transship":false,
    "via":"",
    "downstream":"高铁隧道施工（民用）",
    "military":false,
    "militaryNote":"民用基建合同",
    "confidence":"documented",
    "note":"在华德资工厂供货，属可核实直供",
    "source":[11, 38]
  }, {
    "seller":"中铁系（中铁重工 CRCHI 等）",
    "year":"2024",
    "goods":"盾构机（TBM）",
    "hs":"8430.41",
    "buyer":"BRO（Border Roads Organisation）",
    "transship":false,
    "via":"",
    "downstream":"边境公路/隧道施工（具国防用途）",
    "military":true,
    "militaryNote":"BRO 隶属国防部建边境战略通道；中资占印工程机械主要份额",
    "confidence":"representative",
    "note":"边境基建具明确国防用途，具体 TBM 采购合同未见公开",
    "source":[38]
  }],
  "太阳能电池 / 组件":[{
    "seller":"晶科能源（Jinko）",
    "year":"2024",
    "goods":"光伏组件（TOPCon）",
    "hs":"8541.42",
    "buyer":"Tata Power Solar",
    "transship":false,
    "via":"",
    "downstream":"自供电站 EPC 及本土组件封装",
    "military":false,
    "militaryNote":"未见公开军工端用途证据",
    "confidence":"documented",
    "note":"FY24 自华太阳能设备 $3.89B、占 62.6%",
    "source":[26, 39]
  }, {
    "seller":"隆基（LONGi）",
    "year":"2024",
    "goods":"光伏组件（HPBC/TOPCon）",
    "hs":"8541.42",
    "buyer":"Adani Solar",
    "transship":false,
    "via":"",
    "downstream":"本土组件封装",
    "military":false,
    "militaryNote":"未见",
    "confidence":"documented",
    "note":"中国组件对印直供代表",
    "source":[39]
  }, {
    "seller":"天合光能（Trina）",
    "year":"2024",
    "goods":"光伏组件（210mm 大尺寸）",
    "hs":"8541.42",
    "buyer":"Waaree Energies",
    "transship":false,
    "via":"",
    "downstream":"本土组件封装",
    "military":false,
    "militaryNote":"未见",
    "confidence":"documented",
    "note":"中国组件对印直供代表",
    "source":[39]
  }],
  "多晶硅 / 硅片（上游）":[{
    "seller":"通威（Tongwei）",
    "year":"2024",
    "goods":"多晶硅料",
    "hs":"2804.61",
    "buyer":"Adani Solar",
    "transship":false,
    "via":"",
    "downstream":"本土拉棒/切片/电池，仍依赖中国多晶硅",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"公司级直供合同未公开；印度多晶硅几近空白、对华依赖极高",
    "source":[27, 28]
  }, {
    "seller":"协鑫（GCL）",
    "year":"2024",
    "goods":"颗粒硅/多晶硅",
    "hs":"2804.61",
    "buyer":"Reliance Industries",
    "transship":false,
    "via":"",
    "downstream":"本土拉棒/切片",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"上游直供合同未公开，为代表性推断",
    "source":[27]
  }],
  "电子 / 电信 / 电气产品":[
    { "seller":"华为（Huawei）", "goods":"5G 基站与传输设备", "hs":"8517.62", "buyer":"BSNL", "transship":false, "via":"", "downstream":"自组网/运维（BSNL 国营电信，含部分政府/国防网络）", "year":"2020（存量）", "confidence":"documented", "military":true, "militaryNote":"BSNL 含军方/政府通信网；2020 后限制但存量与替代仍存漏洞", "note":"BSNL 为印度国营电信，含国防/政府网络用途", "source":[111, 29] },
    { "seller":"华为（Huawei）", "goods":"5G 基站与传输设备", "hs":"8517.62", "buyer":"Bharti Airtel", "transship":false, "via":"", "downstream":"自组网/运维（Airtel 私营电信大网）", "year":"2020（存量）", "confidence":"documented", "military":false, "militaryNote":"未见新证据", "note":"Airtel 为印度最大私营电信之一", "source":[111, 29] },
    { "seller":"华为（Huawei）", "goods":"5G 基站与传输设备", "hs":"8517.62", "buyer":"Reliance Jio", "transship":false, "via":"", "downstream":"自组网/运维（Reliance 集团 5G 大网）", "year":"2020（存量）", "confidence":"documented", "military":false, "militaryNote":"未见新证据", "note":"Reliance Jio 为 Reliance 旗下电信", "source":[111, 29] },
    { "seller":"小米（Xiaomi）",
    "year":"2024",
    "goods":"智能手机整机/模组",
    "hs":"8517.13",
    "buyer":"Dixon Technologies",
    "transship":false,
    "via":"",
    "downstream":"代工后供品牌（自产整机/模组）",
    "military":false,
    "militaryNote":"未见直接军工端用途证据",
    "confidence":"documented",
    "note":"电子/电信/电气自华占 43.9%（大陆）",
    "source":[29, 30]
  }, {
    "seller":"立讯精密（Luxshare）",
    "year":"2024",
    "goods":"精密连接器与线束",
    "hs":"8536.69",
    "buyer":"富士康 India（Foxconn）",
    "transship":false,
    "via":"",
    "downstream":"组装后供品牌或流向 OEM",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"关键零部件与 EMS 供应商；具体直供合同未见公开，为代表性推断",
    "source":[30]
  }],
  "锂离子电池":[{
    "seller":"宁德时代（CATL）",
    "year":"2024",
    "goods":"锂离子动力电芯",
    "hs":"8507.60",
    "buyer":"Ola Electric",
    "transship":false,
    "via":"",
    "downstream":"自产电池包供 EV/两轮车",
    "military":true,
    "militaryNote":"印军无人机 60–70% 关键件（电池/电机/传感器）来自中国，无人机电池 75–80% 自华进口（关联 DJI 灰市采购）",
    "confidence":"documented",
    "note":"锂电自华占 75%（$2.2B）",
    "source":[31, 108, 109]
  },
    { "seller":"比亚迪（BYD）", "goods":"锂离子电池 PACK", "hs":"8507.60", "buyer":"Tata AutoComp", "transship":false, "via":"", "downstream":"Tata 系车型 EV/储能电池包配套（Tata AutoComp 集成）", "year":"2024", "confidence":"representative", "military":false, "militaryNote":"未见新证据", "note":"Tata AutoComp 为 Tata 系汽车 Tier-1 集成商；EV 电池与三电配套；具体直供合同未见公开，为代表性推断", "source":[31] },
    { "seller":"比亚迪（BYD）", "goods":"锂离子电池 PACK", "hs":"8507.60", "buyer":"Tata Motors", "transship":false, "via":"", "downstream":"Tata 整车厂自用（EV 车型动力电池）", "year":"2024", "confidence":"representative", "military":false, "militaryNote":"未见新证据", "note":"Tata Motors EV 车型电池配套；具体直供合同未见公开，为代表性推断", "source":[31] }
  ],
  "智能手机零部件":[
    { "seller":"舜宇光学（经 Dixon 印度子公司）", "goods":"手机摄像头模组", "hs":"8525.89", "buyer":"Dixon Technologies", "transship":false, "via":"", "downstream":"组装成手机后内销/出口（Dixon 自产整机）", "year":"2024", "confidence":"documented", "military":false, "militaryNote":"未见公开军工端用途证据（消费电子）", "note":"舜宇经 Dixon 收购的印度子公司供货（ImportGenius）；零部件自华 51.7%", "source":[123, 33] },
    { "seller":"丘钛（经 Dixon 印度子公司）", "goods":"手机摄像头模组", "hs":"8525.89", "buyer":"Dixon Technologies", "transship":false, "via":"", "downstream":"组装成手机后内销/出口（Dixon 自产整机）", "year":"2024", "confidence":"documented", "military":false, "militaryNote":"未见公开军工端用途证据（消费电子）", "note":"丘钛经 Dixon 收购的印度子公司供货（ImportGenius）；零部件自华 51.7%", "source":[123, 33] },{
    "seller":"立讯精密（Luxshare）",
    "year":"2024",
    "goods":"精密连接器与结构件",
    "hs":"8536.69",
    "buyer":"Tata Electronics",
    "transship":false,
    "via":"",
    "downstream":"组装成手机后内销/出口",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"具体直供合同未见公开，为代表性推断",
    "source":[33]
  }],
  "汽车零配件":[{
    "seller":"福耀玻璃（FY Automotive Glass）",
    "year":"2024",
    "goods":"车用安全玻璃总成",
    "hs":"8708.29",
    "buyer":"Maruti Suzuki",
    "transship":false,
    "via":"",
    "downstream":"供整车厂车用玻璃",
    "military":false,
    "militaryNote":"未见",
    "confidence":"documented",
    "note":"福耀对印汽车玻璃 4529 批海关记录（ImportGenius）",
    "source":[123]
  },     { "seller":"均胜电子（Joyson）", "goods":"安全气囊与汽车电子", "hs":"8708.95", "buyer":"Uno Minda", "transship":false, "via":"", "downstream":"→ Maruti Suzuki 整车（Uno Minda 自产安全气囊集成）", "year":"2024", "confidence":"representative", "military":false, "militaryNote":"未见", "note":"均胜电子通过 Uno Minda 供货 Maruti Suzuki；直供合同未公开", "source":[123] },
    { "seller":"均胜电子（Joyson）", "goods":"安全气囊与汽车电子", "hs":"8708.95", "buyer":"Uno Minda", "transship":false, "via":"", "downstream":"→ Tata Motors 整车（Uno Minda 自产安全气囊集成）", "year":"2024", "confidence":"representative", "military":false, "militaryNote":"未见", "note":"均胜电子通过 Uno Minda 供货 Tata Motors；直供合同未公开", "source":[123] },
    { "seller":"均胜电子（Joyson）", "goods":"安全气囊与汽车电子", "hs":"8708.95", "buyer":"Uno Minda", "transship":false, "via":"", "downstream":"→ Mahindra & Mahindra 整车（Uno Minda 自产安全气囊集成）", "year":"2024", "confidence":"representative", "military":false, "militaryNote":"未见", "note":"均胜电子通过 Uno Minda 供货 Mahindra；直供合同未公开", "source":[123] }, {
    "seller":"均胜电子（Joyson）",
    "year":"2024",
    "goods":"安全气囊与汽车电子",
    "hs":"8708.95",
    "buyer":"Uno Minda",
    "transship":false,
    "via":"",
    "downstream":"→ Tata Motors 整车（Uno Minda 自产安全气囊集成）",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"均胜电子（Joyson）通过 Uno Minda 供货 Tata Motors；直供合同未公开",
    "source":[123]
  }, {
    "seller":"均胜电子（Joyson）",
    "year":"2024",
    "goods":"安全气囊与汽车电子",
    "hs":"8708.95",
    "buyer":"Uno Minda",
    "transship":false,
    "via":"",
    "downstream":"→ Mahindra & Mahindra 整车（Uno Minda 自产安全气囊集成）",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"均胜电子（Joyson）通过 Uno Minda 供货 Mahindra；直供合同未公开",
    "source":[123]
  }, {
    "seller":"宁波华翔（Huaxiang）",
    "year":"2024",
    "goods":"汽车内外饰件",
    "hs":"8708.29",
    "buyer":"Samvardhana Motherson",
    "transship":false,
    "via":"",
    "downstream":"供整车厂内外饰件",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"具体直供合同未见公开，为代表性推断",
    "source":[123]
  }],
  "纺织品和服装":[
    { "seller":"申洲国际（Shenzhou International）", "goods":"针织面料与服装（内衣/运动）", "hs":"6109/6110", "buyer":"Raymond", "transship":false, "via":"", "downstream":"→ Raymond 自有品牌零售（西装/休闲）", "year":"2024", "confidence":"documented", "military":false, "militaryNote":"未见", "note":"申洲为耐克/阿迪达斯/优衣库代工；Raymond 为印度最大面料/品牌商之一", "source":[44, 102] },
    { "seller":"恒力集团（Hengli Group）", "goods":"涤纶长丝/坯布", "hs":"5402/5407", "buyer":"Arvind Mills", "transship":false, "via":"", "downstream":"→ Arvind Mills 自有牛仔/休闲面料与服装", "year":"2024", "confidence":"documented", "military":false, "militaryNote":"未见", "note":"恒力为全球最大涤纶生产商之一；Arvind Mills 印度最大牛仔布厂", "source":[44, 102] },
    { "seller":"桐昆股份（Tongkun）", "goods":"涤纶长丝", "hs":"5402.33", "buyer":"Welspun Living", "transship":false, "via":"", "downstream":"→ Welspun 毛巾/家纺（自有品牌）", "year":"2024", "confidence":"documented", "military":false, "militaryNote":"未见", "note":"桐昆为全球最大涤纶长丝生产商；Welspun 全球最大毛巾制造商", "source":[44, 102] }
  ],
  "医疗器械与科学仪器":[
    { "seller":"迈瑞医疗（Mindray）", "goods":"监护仪/呼吸机/超声", "hs":"9018.19", "buyer":"AIIMS", "transship":false, "via":"", "downstream":"医院临床自用（AIIMS 公立医院 ICU/呼吸机/监护）", "year":"2021（新冠期）", "confidence":"documented", "military":false, "militaryNote":"政府以国防/数据安全为由启动审查，但未见直接流向武装部队证据", "note":"新冠期供应数千台；AIIMS 为印度国家级公立医院", "source":[121] },
    { "seller":"迈瑞医疗（Mindray）", "goods":"监护仪/呼吸机/超声", "hs":"9018.19", "buyer":"HLL Lifecare", "transship":false, "via":"", "downstream":"医院与政府采购转售（HLL 国营医疗物资公司）", "year":"2021（新冠期）", "confidence":"documented", "military":false, "militaryNote":"未见直接流向武装部队证据", "note":"HLL 为印度卫生部下国营医疗物资采购与供应链公司", "source":[121] },{
    "seller":"联影医疗（United Imaging）",
    "year":"2025",
    "goods":"CT/PET-CT 影像设备",
    "hs":"9022.12",
    "buyer":"Medikabazaar",
    "transship":false,
    "via":"",
    "downstream":"→ Superhealth 连锁医院装机",
    "year":"2025",
    "confidence":"documented",
    "military":false,
    "militaryNote":"未见",
    "note":"6 年累计对印超 $1B，2025-12 单笔 20 亿人民币；Medikabazaar 为印度最大医疗 B2B 平台之一",
    "source":[127]
    },
    {
    "seller":"联影医疗（United Imaging）",
    "year":"2025",
    "goods":"CT/PET-CT 影像设备",
    "hs":"9022.12",
    "buyer":"Medikabazaar（B2B 医疗器械平台）",
    "transship":false,
    "via":"",
    "downstream":"→ Apollo Hospitals 装机",
    "year":"2024",
    "confidence":"representative",
    "military":false,
    "militaryNote":"未见",
    "note":"经 Medikabazaar 供货 Apollo；为代表性推断",
    "source":[127]
  }],
  "玩具":[
    { "seller":"奥飞娱乐（Alpha Group）", "goods":"IP 衍生玩具（动漫/遥控）", "hs":"9503.00/9504.50", "buyer":"Funskool India", "transship":false, "via":"", "downstream":"→ Funskool 自有品牌+零售（玩具反斗城/FirstCry）", "year":"2024", "confidence":"documented", "military":false, "militaryNote":"未见", "note":"奥飞 IP「超级飞侠/喜羊羊」出口印度；Funskool 印度最大本土玩具厂", "source":[126] },
    { "seller":"星辉互动娱乐（Rastar）", "goods":"IP 衍生玩具（遥控车/拼装）", "hs":"9503.00", "buyer":"Mattel India", "transship":false, "via":"", "downstream":"→ Mattel India 印度零售（Hot Wheels/Barbie 等）", "year":"2024", "confidence":"documented", "military":false, "militaryNote":"未见", "note":"星辉互动为宝马奔驰授权玩具龙头；Mattel India 印度最大跨国玩具商", "source":[126] },
    { "seller":"实丰文化（Shifeng Culture）", "goods":"塑料/拼装玩具", "hs":"9503.00", "buyer":"Reliance Retail", "transship":false, "via":"", "downstream":"→ Reliance Retail 零售渠道（Smart Bazaar/Reliance Trends）", "year":"2024", "confidence":"representative", "military":false, "militaryNote":"未见", "note":"实丰文化中国 IP 玩具；Reliance Retail 印度最大零售网络之一", "source":[126] }
  ],
  "工程机械与工业机械（通用）":[{
    "seller":"徐工（XCMG）",
    "year":"2024",
    "goods":"履带式起重机",
    "hs":"8426.49",
    "buyer":"Reliance Industries",
    "transship":false,
    "via":"",
    "downstream":"自建项目自用（履带吊）",
    "military":false,
    "militaryNote":"未见",
    "confidence":"documented",
    "note":"创大吨位出口纪录",
    "source":[119]
  }, {
    "seller":"中联重科（Zoomlion）",
    "year":"2024",
    "goods":"汽车起重机 QY75V",
    "hs":"8705.10",
    "buyer":"Reliance Industries",
    "transship":false,
    "via":"",
    "downstream":"自建项目（120 台 QY75V 吊车）",
    "military":false,
    "militaryNote":"未见",
    "confidence":"documented",
    "note":"Zoomlion 印度子公司直供",
    "source":[120]
  },
    { "seller":"三一重工（Sany）", "goods":"挖掘机与混凝土机械", "hs":"8429.52", "buyer":"Larsen & Toubro（L&T）", "transship":false, "via":"", "downstream":"基建 EPC 项目施工（L&T 总包）", "year":"2024", "confidence":"representative", "military":false, "militaryNote":"未见", "note":"经经销商供货，下游为代表性推断", "source":[38] },
    { "seller":"三一重工（Sany）", "goods":"挖掘机与混凝土机械", "hs":"8429.52", "buyer":"Tata Projects", "transship":false, "via":"", "downstream":"基建 EPC 项目施工（Tata Projects 总包）", "year":"2024", "confidence":"representative", "military":false, "militaryNote":"未见", "note":"经经销商供货，下游为代表性推断", "source":[38] },
    { "seller":"三一重工（Sany）", "goods":"挖掘机", "hs":"8429.52", "buyer":"ONGC", "transship":false, "via":"", "downstream":"油气勘探与基建项目（ONGC 国营）", "year":"2024", "confidence":"representative", "military":false, "militaryNote":"未见", "note":"ONGC 为印度国营油气公司；经经销商供货，为代表性推断", "source":[38] },
    { "seller":"三一重工（Sany）", "goods":"挖掘机", "hs":"8429.52", "buyer":"HPCL", "transship":false, "via":"", "downstream":"炼化与基建项目（HPCL 国营）", "year":"2024", "confidence":"representative", "military":false, "militaryNote":"未见", "note":"HPCL 为印度国营炼化公司；经经销商供货，为代表性推断", "source":[38] },
    { "seller":"三一重工（Sany）",
    "year":"2024",
    "goods":"挖掘机/工程机械",
    "hs":"8429.52",
    "buyer":"BRO（Border Roads Organisation）",
    "transship":false,
    "via":"",
    "downstream":"BRO 战略边境公路/隧道（64 条）",
    "military":true,
    "militaryNote":"BRO 隶属国防部建边境战略通道；中资占印工程机械主要份额，具体采购合同未见",
    "confidence":"representative",
    "note":"边境基建具明确国防用途",
    "source":[38]
  }],
  "化肥（磷酸二铵 DAP / 特种肥）":[{
    "seller":"云天化（Yuntianhua）",
    "year":"2024",
    "goods":"磷酸二铵（DAP）",
    "hs":"3105.30",
    "buyer":"IFFCO",
    "transship":false,
    "via":"",
    "downstream":"分装/农用（rabi 冬播季）",
    "military":false,
    "militaryNote":"化肥为农用，未见军工端用途证据",
    "confidence":"documented",
    "note":"2015 云天化 6 万吨 DAP 至印合同；印 95% 特种肥依赖中国",
    "source":[106]
  }, {
    "seller":"贵州磷化（瓮福 Wengfu）",
    "year":"2024",
    "goods":"磷酸二铵/磷酸一铵（DAP/MAP）",
    "hs":"3105.30",
    "buyer":"Coromandel International",
    "transship":false,
    "via":"",
    "downstream":"分装/农用",
    "military":false,
    "militaryNote":"未见",
    "confidence":"documented",
    "note":"瓮福 3-3.5 万吨 DAP 至印合同",
    "source":[106]
  }, {
    "seller":"湖北宜化（车用尿素/AdBlue）",
    "year":"2025",
    "goods":"车用尿素（AdBlue）",
    "hs":"3102.10",
    "buyer":"Coromandel International",
    "transship":false,
    "via":"",
    "downstream":"农用/柴油车排放控制",
    "military":false,
    "militaryNote":"未见",
    "confidence":"documented",
    "note":"2025-10-15 起中方暂停出口覆盖全市场",
    "source":[106]
  }]
}

/* 按产业名称（与 DEPENDENCE_INDUSTRIES[].name 完全一致）映射。
 * substitution：替代可能性评估；outlook：综合评估与展望。
 * 弹窗与 DOCX 下载共用，由 app.js 的 buildReportSections() 拼装其余部分（概况/贸易/来源均取自原 detail）。 */
const DEPENDENCE_REPORTS = {
  "稀土永磁体": {
    substitution: "稀土永磁体的替代难度极高。上游稀土分离与永磁体烧结工艺长期被中国主导，印度本土仅具备约 3000–5000 吨/年的小规模加工能力，且缺少重稀土与高端磁体产能。短期替代只能依赖日本（约 10–15%）、韩国、德国的高端供应，但体量有限；印度正通过 PLI 与终端用户承诺（不转口）争取恢复轻稀土磁体进口，并扶持本土产能，但中短期内仍难摆脱对华依赖。",
    outlook: "在中美博弈与出口管制背景下，印度稀土磁体对华依赖呈现『总量高、波动大』特征——2025 年出口管制曾导致进口量同比骤降 56%，凸显供应链脆弱性。预计 3–5 年内依赖度仍将维持 70% 以上，本土产能爬坡与多元化采购是主要缓释路径。"
  },
  "原料药（API/关键起始物料）": {
    substitution: "原料药替代难度很高。印度 70–80% 的散装药/原料药依赖进口，其中关键中间体如 6-APA 对华依赖高达 95%。短期替代主要来自欧盟（13.6%）、新加坡、美日，但规模与成本均难匹配中国。印度通过 PLI 计划已为 28 种关键产品建成约 5.68 万吨/年本土产能、恢复青霉素 G 国产，预计可将部分品类依赖降低约一半，但整体摆脱中国仍需长期投入。",
    outlook: "原料药是印度医药供应链最脆弱环节之一。随着本土散装药园区投产与多元化采购推进，依赖度有望缓慢下降，但在中间体与特色原料药领域，未来 3–5 年对华依赖仍将处于 60–80% 高位。"
  },
  "盾构机（TBM）": {
    substitution: "盾构机替代难度中等偏高。中国占全球约 70% 份额且性价比突出，但印度可通过德国海瑞克（Herrenknecht，全球龙头 16–28%，其在印供给近年转向金奈本土工厂）、日本日立建机/三菱/小松获取高端设备。限制在于：TBM 为超大型定制装备、交付周期长、本地服务网络关键。2025 年 3 台用于高铁的盾构机滞留中国港口事件，凸显地缘供应风险，促使印度在重大基建项目中分散采购来源。",
    outlook: "盾构机对华依赖以中国占全球约 70% 的供给集中度、以及印度项目的『中国关联』（孟买地铁 18 台中 8 台中资、其余在华制造）体现，而非单一进口份额。据 Takshashila 对印度商工部数据的分析，印度 TBM 进口对华依赖已明显多元化（自行式 TBM 自华份额极低、标准 TBM 自华由 2019 近 100% 降至近年约六成）。预计重大基建将继续『中德日混合』采购以分散风险。"
  },
  "太阳能电池 / 组件": {
    substitution: "光伏组件/电池的替代正在发生但进程有限。印度 FY24 自华约 $3.89B（占 62.6%），电池对华份额由 FY22>90% 降至 2024 年 56%，组件约 65%。越南（16.5%）、马来西亚（8.9%）、泰国（4%）是主要转口/替代来源，但三国普遍依赖中国多晶硅与硅片，替代『虚多于实』。印度 ALMM 名录与 PLI 推动本土制造，但上游硅片/多晶硅几乎空白，短期难以真正替代。",
    outlook: "光伏下游组件对华依赖呈下降趋势（受 ALMM 与本土产能挤压），但上游硅片/多晶硅依赖度仍近 100%。未来竞争焦点在上游一体化，印度中短期仍将被锁定在中游组装环节。"
  },
  "多晶硅 / 硅片（上游）": {
    substitution: "上游近乎不可替代。中国控制全球 91–93% 多晶硅、97% 硅片产能，印度硅片进口中中国 >99%，本土上游近乎空白。唯一非中国来源为德国瓦克（Wacker）、美国 Hemlock/REC，体量有限且成本高。印度虽有 Adani、Reliance 等光伏野心，但拉晶/切片环节技术壁垒极高，数年内难以形成有效替代。",
    outlook: "多晶硅与硅片是印度对华依赖的绝对制高点（97%+）。除非印度在拉晶切片与多晶硅提纯上实现突破，否则该环节对华依赖在未来 5–10 年仍将接近 100%，是印度光伏自主化的最大瓶颈。"
  },
  "电子 / 电信 / 电气产品": {
    substitution: "电子品类替代可行性中等。2023-24 印度电子/通信/电器进口中国大陆单独占 43.9%（加中国香港约 56%），但高端芯片来自中国台湾、存储器来自韩国、封测来自马来西亚，中国主要供应中低端组件与整机。越南、中国台湾、韩、马来西亚均可分流。印度 PLI 已推动部分 EMS 本土化，但核心元器件仍高度依赖东亚供应链，中国作为『系统集成与中端制造』地位短期难撼。",
    outlook: "电子产业对华依赖更偏『中端组装与组件』而非尖端，替代来源相对多元。随越南/印度本土 EMS 扩张，中国大陆单独占比可能缓降，但含香港口径的东亚整体依赖仍将高位运行。"
  },
  "锂离子电池": {
    substitution: "锂电替代难度较高。印度 EV 用锂电约 75% 自华，宁德时代、比亚迪、亿纬等占其进口约 68%。替代来源为韩国（15–20%）、日本（5–8%），但成本与产能差距明显。印度正通过 PLI 与 GNEPL、Reliance 等本土/合资项目扩产，但电芯环节技术壁垒高，短期难摆脱对中国电芯与材料的依赖。",
    outlook: "锂电是 EV 与储能的核心瓶颈，对华依赖（约 75%）中短期难以显著下降。印度的本土产能建设（多集中在 pack 与部分电芯）尚不足以替代中国电芯，预计 3–5 年内依赖度维持 60–75%。"
  },
  "智能手机零部件": {
    substitution: "零部件替代可行性中等。GTRI 真实口径显示印度智能手机零部件 51.7% 自华（非传闻的 80%），核心零部件仍主要自华，但越南（三星主导）、中国台湾（高端 CKD）可分流。在印中国品牌与中资 EMS（立讯、歌尔、比亚迪电子、龙旗、DBG）构成主要供应链，印度 Dixon 等本土 EMS 份额升至约 53%。组装本土化推进，但屏幕、芯片、声学件等仍依赖进口。",
    outlook: "智能手机零部件对华依赖低于市场传言，且随印度本土 EMS 与越南分流，依赖度有望缓降。但高端组件（显示、存储、处理器）仍握于中、韩、台之手，结构性依赖中期难解。"
  },
  "汽车零配件": {
    substitution: "传统汽车零配件对华依赖较低（整体 23.3%，ACMA 口径 FY25-26 自华升至约 36%），结构件、线束本土化较高，日本、韩国、德国为高端替代来源。但电动汽车高价值部件（三电、磁体、功率半导体、PCB）对华依赖高达 66–75%，多数在印车型因进口含量过高不符 PLI 资格（仅 13% 达标）。因此『传统低、电动高』是该类典型特征，替代难点集中在 EV 核心部件。",
    outlook: "汽车零配件呈现『燃油车低依赖、电动车高依赖』分化。随 Motherson、Bharat Forge 等本土化与日韩供应，燃油车部件依赖可控；但 EV 三电体系对华依赖中期仍将高位，是印度汽车电动化的最大制约。"
  },
  "纺织品和服装": {
    substitution: "纺织服装替代可行性中等。印度自华进口 42% 集中在中高端面料、合成纤维与部分成衣，越南、孟加拉国为成衣主要替代，土耳其、韩国覆盖中高端面料。但中国在中高端合成纤维与功能性面料上的成本与规模优势明显，印度本土虽大却在中高端环节偏弱。关税与 PLI 可部分分流，但结构性依赖难消除。",
    outlook: "纺织服装是各工业门类中自华依赖度最高之一（42%）。成衣环节较易转向越南/孟加拉，但中高端面料与合成纤维对华依赖中期仍将维持，是印度纺织升级的主要短板。"
  },
  "医疗器械与科学仪器": {
    substitution: "医疗器械替代可行性中等偏低。印度约 75–80% 医疗器械靠进口，美国（高端影像/植入物）、德国、日本覆盖高端，中国为第二大供应国（FY22 占 16.4%）且在中低端耗材与诊断设备占比上升。迈瑞、联影等中国企业在监护、超声、CT 领域具性价比优势。印度正设工作组推动本土制造，但高端设备短期仍依赖美日德，中低端可部分由本土与多元来源替代。",
    outlook: "医疗器械整体进口依赖高（约 80%），但中国仅占其进口 16.4%，且集中在中低端。真正的『卡脖子』在美日德高端设备，对华依赖本身中等，替代压力主要体现在整体国产化而非对华单一来源。"
  },
  "玩具": {
    substitution: "玩具替代难度较高。印度市场曾 80–90% 玩具靠进口、其中约 90% 来自中国，2020 年关税由 20% 提至 60% 后进口额由约 $3 亿腰斩至 $1.5 亿，但中国仍为最大来源、全球玩具约 70–75% 产自中国。越南、日本/台湾/荷兰覆盖部分高端，印度本土（卡纳塔克、UP 玩具园）在政策扶持下起步，但规模与品类远未成势。中国成本与产业带优势短期无可替代。",
    outlook: "玩具是对华依赖度最高的消费品之一（约 90%）。高关税已压低进口量但未能改变来源结构，印度本土玩具业尚处起步。预计中短期中国仍主导中低端，替代需依赖长期产业培育。"
  },
  "工程机械与工业机械（通用）": {
    substitution: "通用工程机械替代可行性中等。印度机械进口约 $19B 自华（占 39.6%），中国以性价比占近四成；但日本（小松/日立/三菱）、德国（利勃海尔）、韩国、美国在高端工程机械与机床领域具技术与品牌优势。印度本土制造（如 L&T）在中低端逐步替代。整体看，中低端可逐步本土化，高端仍依赖日德美。",
    outlook: "通用工程机械对华依赖（39.6%）以中低端性价比产品为主，替代路径清晰：本土制造+日德高端分流。随『Make in India』推进，该比例有望缓降，但高端特种设备仍依赖传统工业强国。"
  },
  "化肥（磷酸二铵 DAP / 特种肥）": {
    substitution: "化肥对华依赖高度分化。特种/水溶肥约 80% 自华（最高），DAP 印度 50–60% 靠进口、其中对华约 25–30%（2023-24 曾达 40%，中国暂停 DAP 出口许可后份额骤降），而尿素、氯化钾(MOP)、磷酸主要来自本土、摩洛哥/约旦/沙特、俄白，并非中国。因此替代重点在特种肥（可转向本土与多元来源）与 DAP（沙特/俄/摩长期协议），中国依赖实际集中在特种肥细分。",
    outlook: "化肥对华依赖呈现『特种肥极高、DAP 中等、尿素/MOP 极低』的强分化。随印度本土特种肥产能与 DAP 长期协议来源多元化，对华依赖（尤其 DAP）已明显下降，真正高依赖仅余特种水溶肥，整体风险可控。"
  }
}

/* --------- 2.6 印度对华依赖产业「总览分析」报告（隐藏式，默认收起） --------- */
/* 与单产业报告共用 {type,text} 段落格式（heading/para/bullet），
 * 由 app.js 用 repSecHTML 渲染到折叠块，并用 IndiaDocx 导出 DOCX。
 * 数据均取自上方 14 个产业模块与 DEPENDENCE_REPORTS，无虚构。 */
const DEPENDENCE_OVERVIEW_REPORT = [
  { type:"heading", text:"一、总体格局" },
  { type:"para", text:"印度与中国的产业依赖呈现「整体逆差、结构集中」的特征。2024-25 财年印度对华贸易逆差约 992 亿美元，且长期扩大。在 14 个被重点研究的产业中，对华依赖度差异极大：从医疗器械（对华占其进口 16.4%）的低依赖，到多晶硅/硅片（97%+）、玩具（约 90%）、稀土永磁体（约 80%）、原料药（70–80%）的极高依赖。这种「少数战略品类被牢牢锁定、多数品类可替代」的格局，是理解印度对华产业关系的核心。注：钢铁与贱金属、塑料及其制品、大宗/精细化学品因整体对华依赖低、替代来源多元，已从原 17 个重点产业中移出（见下方「清单调整」）。" },
  { type:"heading", text:"二、依赖度层级结构（按 14 产业归类）" },
  { type:"para", text:"依据各产业对华依赖度（中国在该产业印度进口中的份额），可划分为四档：" },
  { type:"bullet", text:"极高依赖（对华份额 ≥80% 或实质近乎垄断）：多晶硅/硅片（上游，中国控制全球 91–93% 多晶硅、97% 硅片，印度硅片进口中中国 >99%）、玩具（约 90% 靠进口且主要来自中国）、稀土永磁体（约 80%）、原料药（70–80%，关键中间体 6-APA 对华依赖高达 95%）、化肥特种/水溶肥（约 80%）、盾构机（中国占全球 TBM 市场约 70%，印度 TBM 进口对华依赖已多元化、标准 TBM 自华由 2019 近 100% 降至近年约六成）。" },
  { type:"bullet", text:"高依赖（50–80%）：锂离子电池（约 75%）、太阳能电池/组件（FY24 自华约 62.6%，上游硅片/多晶硅近 100%）、电子/电信/电气（中国大陆单独占 43.9%，含中国香港约 56%）、智能手机零部件（约 51.7%，GTRI 真实口径，非传闻的 80%）。" },
  { type:"bullet", text:"中等依赖（20–50%）：纺织服装（约 42%，集中中高端面料与合成纤维）、工程机械与工业机械通用（约 39.6%）、汽车零配件（整体 23.3% 但 EV 三电/磁体/功率半导体对华依赖 66–75%，因含高依赖子项予以保留）。" },
  { type:"bullet", text:"较低依赖（<20%）：医疗器械（对华占其进口 16.4%，但整体进口依赖约 80%，主卡在美日德高端设备）。" },
  { type:"heading", text:"三、七大结构性特征" },
  { type:"bullet", text:"上游材料与「卡脖子」环节依赖最深：多晶硅/硅片、稀土永磁体、原料药中间体、锂电电芯均处价值链上游，对华依赖最高且最难替代。" },
  { type:"bullet", text:"下游组装与中端制造可分散：智能手机零部件、电子整机、光伏组件有越南/中国台湾/韩/马来分流，依赖度低于上游。" },
  { type:"bullet", text:"「传闻 > 现实」：市场常称手机零件对华 80%，真实口径仅 51.7%，属信息不对称导致的认知偏差。" },
  { type:"bullet", text:"传统 vs 电动分化：汽车零配件、工程机械在燃油/传统领域依赖低，但在 EV 三电、磁体、功率半导体上骤升至 66–75%。" },
  { type:"bullet", text:"战略品类替代窗口长：多晶硅/硅片、稀土分离工艺需 5–10 年技术爬坡，短期无解。" },
  { type:"bullet", text:"转口洗产地放大真实依赖：越南、中国香港、东南亚常被用作绕道，使直接贸易统计低估真实对华依存（如含港电子口径由 43.9% 升至 56%）。" },
  { type:"bullet", text:"政策缓冲有限：PLI、ALMM、关税与本土制造已降低部分品类（DAP、组件）依赖，但上游与战略环节仍锁定。" },
  { type:"heading", text:"四、替代可能性总体评估" },
  { type:"bullet", text:"易替代 / 已移出重点研究清单：钢铁与贱金属（17.6%，本土产能大、自给率高）、塑料及其制品（25.8%，集中中高端制品）、大宗/精细化学品多数子项（乙酸约 53% 但甲醇仅 4.3%，整体结构性低依赖）。这些产业整体对华依赖低、替代来源多元，已从 14 个重点产业中移除。" },
  { type:"bullet", text:"保留但分化：汽车零配件（整体 23.3% 低依赖，但 EV 三电/磁体/功率半导体对华依赖 66–75%，因含高依赖子项予以保留，详情中已标注）。" },
  { type:"bullet", text:"中等可替代（需数年投入，详情中已标注多元化来源可能性）：工程机械中低端、智能手机零部件、纺织成衣、电子中端、医疗中低端。" },
  { type:"bullet", text:"难替代（需 5–10 年或结构性突破）：多晶硅/硅片（97%+）、稀土永磁体与分离、原料药中间体（6-APA 95%）、锂电电芯、盾构机高端、玩具中低端（成本与产业带优势）。" },
  { type:"bullet", text:"FY2025-26 最新动态：锂电对华依赖升至约 79%（进口额约 33 亿美元）；光伏电池自华由 FY25 的 83% 降至约 65%（本土电池产能释放）；玩具首次实现年度贸易顺差（约 1.52 亿美元）；化肥 DAP 自华续降至约 9%（摩洛哥/沙特替代）；稀土磁体受出口管制全年份额未变（仍约 85% 值 / >90% 量），政府推出 ₹7,280 亿 REPM 国产计划。整体延续「上游锁死、下游松动」。" },
  { type:"heading", text:"五、政策应对与趋势展望" },
  { type:"para", text:"印度以 PLI（生产挂钩激励）、ALMM 光伏名录、提高关税（玩具 20%→60%）、原产地规则与投资审查四管齐下降低对华依赖。短期（1–3 年）成效集中在 DAP、光伏组件、成衣等中低端；中期（3–5 年）原料药、锂电、电子中端依赖有望缓降；长期（5–10 年）上游多晶硅/硅片、稀土分离才是真正分水岭。总体判断：印度对华产业依赖呈「上游锁死、下游松动」格局，未来 5 年整体依赖度只会结构性缓降，难以出现断崖式脱钩。" },
  { type:"heading", text:"六、数据来源" },
  { type:"bullet", text:"本总览综合自各产业模块与单产业分析报告，底层数据来源包括：印度商务部 DGCIS 贸易统计 [1]、GTRI 进口依赖研究报告 [7]、PIB 公开披露 [4]、印度自华进口品类结构 [3]，以及各产业模块所引来源 [8][10][12][15][16][17][29][31][33][36][47][48][49][50][51]。" }
];

/* --------- 产业对华依赖 TOP 品类 —— 统一基准年：FY2024-25（2024.4–2025.3）---------
   规则：① 柱状图只展示锚定在基准年的数据；标注 † 的子项为 CY2024 日历年海关口径
        （与基准财年重叠 9 个月，作为官方财年数据缺位时的等效替代）。
        ② 标签只含「产品名 (HS 编码)」，不写时间；能落到 6 位子目的标 6 位，
        覆盖整个品目/章的篮子类目如实标 4 位或章级范围。
        ③ 不做伪细分：全球份额、按时间分档等不代表印度对华依赖的条目一律不上图；
        无基准年数据的旧口径仅在注释中作背景。盾构机（TBM）无 FY2024-25 印度
        海关对华进口货值，亦无可靠的"印度在用设备多数与中国相关"全国口径（原孟买
        地铁单项目外推不可代表全国）。统一采用中国占全球约 70% 的 TBM 供给
        集中度作为可核对指标（人民日报 2024-05），并在注释说明印度按 HS 细分的进口
        结构已多元化。故保留为单一品类卡（HS 8430.31），标注†非海关进口份额、
        口径与其它卡不同，不与海关进口份额混淆。 --------- */
const INDUSTRY_TOP = [
  { name: "原料药（API）", source: 59,
    labels: ["红霉素类 (2941.50)", "水杨酸 (2918.21)", "6-APA (2941.10 项下)", "皮质激素类 (2937.21/22)", "维生素B12 (2936.26)", "青霉素类 (2941.10)", "阿莫西林 (2941.10 项下)", "其他抗生素 (2941.90)"],
    values: [97.65, 96.16, 95.92, 95.41, 93.82, 92.87, 88.29, 88.15],
    note: "FY2024-25（PIB 2026-02 答复，引 DGCIS）：八大关键品类对华依赖多数不降反升（青霉素类 FY24 77%→FY25 92.9%）；FY25 原料药/中间体进口总额 $43.5 亿、整体对华 73.7%。" },
  { name: "稀土永磁体", source: 58,
    labels: ["金属永磁体·NdFeB 为主 (8505.11)", "其他材料永磁体·铁氧体等 (8505.19)", "电磁起重吸盘等 (8505.90)"],
    values: [81.3, 59.6, 31.6],
    note: "FY2024-25（PIB/DGCIS 价值口径）：金属磁体 81.3%（数量口径 90.4%，自华 $1.11 亿）、其他磁体 59.6%（数量 84.8%）、电磁吸盘 31.6%；FY25 稀土磁体进口约 $2 亿、约 85% 自华（ICRA）。 FY2025-26 动态：中国 2025-04 实施稀土磁体出口许可管制，ICRA 预警印度车用磁体库存 2025 年 7 月中告急；全年份额未变（仍约 85% 值 / >90% 量），政府 2025-12 推出 ₹7,280 亿 REPM 国产计划 [79]。2026-07 动态：中国海关数据显示 2026 年 1-7 月稀土出口 34,706.3 吨（同比 -10%）、7 月单月 4,223.5 吨，出口量延续下行；2026-07-31 国务院 841 号令（09-15 施行）规定违反出口管制/技术进出口者不准出境，堵住「技术随人外流」路径，进一步收窄印方引进稀土加工技术的通道 [156]。" },
  { name: "太阳能电池 / 组件", source: 60,
    labels: ["光伏电池 (8541.42)", "光伏组件 (8541.43)"], values: [82.7, 78.9],
    note: "FY2024-25（GTRI）：电池 82.7%、组件 78.9% 自华 —— 较 FY24（约 56%/65%）显著上升，本土组件扩产反而拉高上游电池对华采购。 FY2025-26 最新动态：据 Rubix Data Sciences（经 Financial Express 2026），印度光伏电池自华占比 FY25 83%→FY26* 约 65%（本土电池产能释放），组件受 ALMM 约束进口额同比降约 54%；但上游硅片/电池仍高度依赖中国 [73]。2026-07 动态：MNRE 2026-07-18 备忘录豁免净计量/开放接入项目至 2026-12-31 免强制国产电池采购（「去中国化」47 天松口，本土电池缺口致约 1/3 中小组件企业停产）；2026-H1 中国对印硅片出口同比翻倍、印度跃居中国硅片第一大出口市场，电池片对印出口下降、组件未进前五（出口重心转向欧/中东南亚/非洲）[154]。" },
  { name: "硅片（光伏上游）", source: 60,
    labels: ["太阳能级硅片 (3818.00)"], values: [96.8],
    note: "FY2024-25 印度硅片 96.8% 自华（GTRI）。背景：印度尚无商业多晶硅/硅锭产能（MNRE 2025-02 向议会确认），光伏上游几乎完全依赖进口。原「多晶硅·中国全球份额 91%」为全球产能指标、不代表印度进口依赖，已按口径规范移出柱图。 FY2025-26 最新：Business Today（2026-06）称印度约 98% 硅片、100% 多晶硅自华；MNRE/SolarQuarter（2025-11）确认仍无商业多晶硅产能 [74]。\n　　[细分边界] HS 3818.00 在印度海关为光伏硅片整品目、不公开尺寸/技术子目；行业口径下印度进口硅片 99%+ 为单晶（M10 182mm 与 G12 210mm 主导、多晶已淘汰），TOPCon 占新建产能 70%+；产品级口径建议查 SolarQuarter/InfoLink 等行业数据库。" },
  { name: "电子 / 电信 / 电气产品", source: 60,
    labels: ["手机整机 (8517.13)", "通信基站 (8517.62)", "其他无线通信零件 (8517.79)", "跨 HS84/85 配套 (电路板/电容/电阻)"],
    values: [55, 50, 48, 53],
    note: "FY2024-25（GTRI）：电信与电子产品自华 57.2%。该篮子横跨 HS84/85 两章，主要细分按 8517 子目拆出（8517.13 手机整机、8517.62 基站/通信、8517.79 其他无线零件），配套电子（电路板/电容/电阻等）跨 HS84/85 单独列示；各子目对华依赖度近似产业整体（不含港台约 44%、含港约 56%，GTRI 背景口径）。FY2025-26 最新：小米/OPPO/vivo 持续在印本地化 EMS，对华品牌整机进口下行、零部件采购仍主导（CXO Today 2026-03）[72]。" },
  { name: "锂离子电池", source: 66,
    labels: ["锂离子蓄电池 (8507.60)"], values: [75.2],
    note: "FY2024-25（GTRI）：锂离子电池 75.2% 自华（约 $22.6 亿）。背景：印度本土几乎无正/负极材料产能（中国占全球 LFP 正极 >98%、人造石墨负极约 85%），但该两项为全球产能集中度、非印度进口占比，已移出柱图。 FY2025-26 最新：Forbes India（2025 末）称印度锂电对华依赖升至约 79%、进口额达 $33 亿 [75]。2026-08 动态：彭博报道塔塔 Agratas（古吉拉特邦 40GWh LFP 工厂）评估与中国电池技术合作可能性「几乎为零」——中国 2025-10 锂电池/人造石墨负极管制 + 2026-07-31 出入境新规（违规者不准出境）双重收紧，印方被迫从零自研 [156]。\n　　[细分边界] HS 8507.60 为锂离子蓄电池整 HS、无 6 位子目；下游用途按 FY2025-26 行业拆分——动力电池（EV/两轮/储能牵引）约 60%、储能电池约 25%、消费电子电池约 15%（ICRA/Counterpoint 印度电芯进口结构）；HS 8507.60 含动力/储能/消费三类，公开数据无产品级对华依赖度。" },
  { name: "智能手机零部件", source: 60,
    labels: ["电芯 (8507.60)", "显示模组 (8524)", "摄像头模组 (8517.79 项下)", "存储芯片 (8542.32)", "微处理器 (8542.31)", "PCB (8534.00)"],
    values: [75.2, 72, 72, 40.5, 38.2, 37],
    note: "FY2024-25（GTRI 及其转引口径）：零部件进口总额 $71.5 亿、整体 51.7% 自华；显示/摄像头模组约 72%（京东方/天马、舜宇/欧菲光），存储 40.5%（$17.5 亿）、微处理器 38.2%（$16.5 亿）、PCB 37%（$6.1 亿）。显示模组篮子跨 8524.11/12/91 等多个子目，故标品目级。" },
  { name: "汽车零配件", source: 65,
    labels: ["汽车零部件整体 (8708 为主)"], values: [26.7],
    note: "FY2024-25（商务部对议会答复）：零配件进口 $71.7 亿、自华 26.7%（ACMA 口径 32%，较 FY24 的 29% 上升）。原「EV 三电/磁体/半导体 66–75%」缺乏可溯源的基准年出处，已移出柱图；EV 相关依赖见锂离子电池、稀土永磁体两卡。 FY2025-26 最新：ACMA 年度绩效评估（2026-07）称零配件自华占比升至 36%（较 FY25 ACMA 32% 再升）[76]。\n　　[细分边界] 印度汽车零配件进口主要子目：车身件 8708.29（含福耀车用玻璃、塑料内饰）、安全气囊装置 8708.95、车载电气控制 8537（跨章）、变速箱 8708.40、底盘件 8708.80 等；印度海关未公开 8708 子目的对华分项依赖度，故按口径规范保留 1 项。" },
  { name: "纺织品和服装", source: 62,
    labels: ["粘胶人造丝纱线 (5403.31 等)", "起绒织物·MMF (6001.92)", "塑料涂层织物 (5903)", "PU 涂层织物 (5903.20)"],
    values: [99, 93, 68, 52],
    note: "FY2024-25 前 5 个月（2024-04~08，政府 MIP 评估/Texmart）：粘胶人造丝纱线 99%（$1.34 亿）、MMF 起绒织物 93%、塑料涂层织物 68%、PU 涂层织物 52%；粘胶单丝 (5403.31) CY2024 海关口径 98.9%，相互印证 [70]。聚酯纱线 89%（8MFY24）、MMF 面料 62%（CITI）、整体 42%（FY24 GTRI）非基准年，仅作背景。" },
  { name: "医疗器械与科学仪器", source: 70,
    labels: ["CT 扫描仪† (9022.12)", "X 光管† (9022.30)", "医疗/外科/牙科器械† (9018)"],
    values: [29.5, 25.4, 21.1],
    note: "†CY2024 海关口径（UN Comtrade/WITS/OEC）：CT 扫描仪 29.5%（$5010 万/$1.7 亿）、X 光管 25.4%、医疗/外科/牙科器械 21.1%（$5.48 亿/$26 亿，居美国之后第二）。耗材/IVD/植入物无官方对华分项，未列入；旧口径（整体 16.4% FY22、血氧仪 ~98% 2021 市场估算）仅作背景。\n　　[细分精简] 原 4 项中「X射线/放射设备整体 (9022)†」与前两项（CT 扫描仪 9022.12、X 光管 9022.30）同章且口径重叠，已删除避免双重计数。" },
  { name: "玩具", source: 68,
    labels: ["塑料玩具·车/动物等 (9503.00.30)", "玩偶 (9503.00.10)", "其他玩具·拼图/积木/电子等 (9503.00.50)"],
    values: [55, 48, 42],
    note: "FY2024-25：HS9503（占玩具进口约 3/4）自华 47.5%（$4020 万/$8470 万）。背景：三编码合计（（9）-9505）FY24 自华 64%（GTRI）、2017-18 曾达 90.2% —— 60% 关税+BIS 认证后为印度「降依赖」少数成功案例；游戏机 (9504)/节庆用品 (9505) 无基准年对华分项，未列入。 FY2025-26 动态：PIB（2026）称印度玩具进口较 2017-18 降 66%、2025-26 在 9503/9504/9505 实现 $1.52 亿贸易顺差，对华依赖继续下行 [80]。\n　　[细分] HS 9503.00 子目按印度商工部 / DGCI&S TradeStat 拆分——塑料玩具 9503.00.30 最大宗、玩偶 9503.00.10、其他玩具 9503.00.50；各子目对华依赖度近似产业整体。" },
  { name: "工程机械与工业机械（通用）", source: 63,
    labels: ["平型针织机† (8447.20)", "针织/非织造机械† (8447/8449)", "纺织机械零部件† (8448)"],
    values: [72, 70, 60],
    note: "†CY2024 口径：平型针织机 72.0%（WITS 海关，$3830 万/$5320 万 [70]）、针织与非织造机械约 70%、纺机零部件约 60%（中国纺机协会）。机床 27%（IMTMA，CY2025）、挖掘机约 25%（ICEMA 2025 声明）、机械整体 39.6%（FY24 GTRI）、印刷/锅炉等（PIB 2014-15）均非基准年，仅作背景不上图。" },
  { name: "盾构机（TBM）", source: 24,
    labels: ["隧道掘进机 TBM (8430.31)"],
    values: [70],
    note: "† 非印度海关进口份额，而是中国在全球盾构机市场的供给集中度：中国产 TBM 约占全球 70%（人民日报 2024-05；中铁装备产销量连续多年世界第一）。印度方面，据 Takshashila 对印度商工部数据的分析，其 TBM 进口对华依赖已明显多元化——自行式 TBM（HS 84303190）自华份额已降至极低，标准 TBM（HS 84303120）虽仍对华较高（近年约六成、较 2019 年近 100% 已大幅下降）；孟买地铁 3 号线 18 台 TBM 中 8 台中资制造、其余亦在华制造。公开来源无 FY2024-25 单一「印度对华进口占比」，按「无法细分则不细分」仅列单一品类（HS 8430.31）；该全球份额指标与柱图其他海关进口份额口径不同，作专项呈现。\n　　[细分边界] HS 8430.31 为隧道掘进机机整品目、无 6 位子目；2026-04 印度商工部对自行式 TBM 进一步加码本土化（PLI Auto 配套），单一 HS 不足以反映子目级动态。" },
  { name: "化肥（DAP / 特种肥）", source: 64,
    labels: ["磷酸二铵 DAP (3105.30)", "尿素 (3102.10)"],
    values: [18.5, 1.8],
    note: "FY2024-25 官方口径：2025 年中国实质冻结对印 DAP 出货（CIQ 拖延「软封锁」），自华占比由 FY24 约 40% 骤降至 18.5%、尿素 26.5%→1.8%（印度转向西亚货源、到岸价上涨）。特种水溶肥约 80% 直接自华（连间接渠道约 95%）为 SFIA 行业协会 2025 年声明、非海关分项口径，不上图仅作背景。 FY2025-26 动态：DAP 自华占比续降至约 9%（CareEdge，10MFY26；摩洛哥 27%、沙特 40%）[77]；尿素则相反——中国 2025 年恢复并放量，10MFY26 自华约 212 万吨（约占 20–22%，三年高位）[78]。" }
];

/* --------- 3. 转口贸易路径 --------- */
const TRANSSHIPMENT_ROUTES = [
  {
    path: "中国 → 越南 → 印度",
    goods: "机械与电气、电子、手机、光伏、塑料制品",
    data: "据 Nomura（2025），2025 年 2 月起亚洲自华进口激增（3–4 月同比 +21.7%），印度机械/电子进口含转口成分；越南对印出口 2025 年达 103 亿美元（+14.2%），手机/电子占近 40%（越南官方 2026-01），印方已因「含中国原产成分」加强查验。",
    credibility: "较高",
    authenticity: "中",
    credNote: "越南对印出口激增与亚洲转口大趋势有 Nomura（2025）、越南官方数据支撑；但「中国经越南洗产地」属基于异常增幅与成分占比的推断，缺乏单批货物流向的直接证据。",
    source: 88
  },
  {
    path: "中国 → 中国香港 → 印度",
    goods: "机械与电气产品",
    data: "香港对印机械/电气出口在 FY18–FY20 由 77.86 亿卢比暴增至 606.39 亿卢比（+678%），被指存在中国商品借道（印方贸易统计）；Nomura（2025）指出转口激增是亚洲共性现象，印度为受关注市场之一。",
    credibility: "较高",
    authenticity: "中",
    credNote: "香港对印机械/电气出口激增 678% 的对比来自印方贸易统计，数值本身可信；但「借道洗产地」是基于异常增幅的推断，缺乏单批货物流向的直接证据。",
    source: 88
  },
  {
    path: "中国 → 东南亚(马来/泰国) → 印度",
    goods: "太阳能电池与组件",
    data: "印度 2024 年对华/越钢化光伏玻璃发起反倾销（立案 2024-02、临时征税 2024-12），裁决明确覆盖「经任何国家出口」防转口条款；越南/马来/泰国对印光伏出口占比有海关数据，但均依赖中国多晶硅与硅片。",
    credibility: "中",
    authenticity: "较低",
    credNote: "印度光伏玻璃反倾销案的防转口条款是官方直接证据（来源 89）；但这些国家普遍依赖中国多晶硅与硅片，属「供应链上游依赖」而非已证实的转口洗产地，证据较弱。",
    source: 89
  },
  {
    path: "中国 → ASEAN/SAFTA → 印度",
    goods: "服装、化妆品、家具、电子、家居",
    data: "CBIC 2025-03-18 第 14/2025 号通告将 CAROTAR「原产地证书」改为「原产地证明」，海关可要求发票、生产记录等追加证据，明确针对中国货经东盟、越南、UAE 转口（Hindu BusinessLine 2025-03，披露胡志明市企业贴牌「越南制造」案例）；DRI 2025-09 破获液压破碎锤经马来西亚伪造原产地证案，约 500 集装箱、涉案 ₹2000 crore。",
    credibility: "高",
    authenticity: "高",
    credNote: "CBIC 官方新规（来源 85）+ 媒体披露的具体贴牌案例（来源 86）+ DRI 海关执法直接证据（来源 87），可信度显著高于早期 AITF 行业指控；低报价值、虚报原产地已有逐案执法佐证。",
    source: 85
  },
  {
    path: "中国 → 越南 → 印度",
    goods: "热轧扁钢（HR 钢）",
    data: "印度财政部 2025-11-13 对越南热轧扁钢征 USD 121.55/吨（5 年），Reuters 明确注明「经越南转运的第三国货」同样适用；JSW、AM/NS 申请并指出越南被用作中国转运通道，进口商改走半成品钢规避。",
    credibility: "高",
    authenticity: "高",
    credNote: "财政部征税通知（政策直接证据）+ Reuters 对「经越南转运」的定性（媒体直接证据），可信度高于早期行业指控。",
    source: 113
  },
  {
    path: "中国 → 阿联酋 → 印度",
    goods: "尼龙/聚酯面料（借 India-UAE CEPA）",
    data: "Mundra 海关 2025-12-26 向三进口商发 Show Cause Notice，指其借 India-UAE CEPA 以阿联酋公司作跳板进口面料，原料（尼龙/聚酯）与 CTH 不符、未达 40% 增值要求，构成虚假产地。",
    credibility: "高",
    authenticity: "高",
    credNote: "海关 Show Cause Notice 为直接执法证据（来源 115），属 CEPA 被钻漏洞的典型案例。",
    source: 115
  },
  {
    path: "中国 → 迪拜 → 印度（海得拉巴）",
    goods: "假冒化妆品",
    data: "DRI 2024-12 在 ICD Sanathnagar 查获中国产假冒化妆品经迪拜转口、低估约 70%，由利益相关人控制，规避商标与估值。",
    credibility: "高",
    authenticity: "高",
    credNote: "DRI 直接执法证据（来源 116），属「经 GCC 转口 + 低报」模式。",
    source: 116
  },
  {
    path: "中国 →（瞒报伪装为服装/工具）→ 印度",
    goods: "烟花爆竹（规避进口许可）",
    data: "DRI「Operation Fire Trail」2025 年在 Nhava Sheva/Thoothukudi/Mundra 查获中国产烟花瞒报为 leggings/工具，单笔 ₹4.82–6.32 crore，累计 ₹35 crore+；属规避进口许可的伪报，非第三国转口。",
    credibility: "高",
    authenticity: "高",
    credNote: "DRI 直接执法证据（来源 117）；说明规避手法除第三国转口外，还包括伪报品名。",
    source: 117
  }
];
const TRANSSHIPMENT_CONTEXT = {
  nomura: "据野村证券（Nomura，2025 年中）研究，2025 年 2 月起亚洲自华进口激增（3–4 月同比 +21.7%），年化 900–1000 亿美元；越南出口商品中约 19% 的增加值来自中国，柬埔寨约 29%，印度机械/电子进口含转口成分；印度已修订海关规则应对。",
  carotar: "印度于 2020-09-21 起实施 CAROTAR 2020 收紧原产地审查；2025-03-18 CBIC 第 14/2025 号通告进一步将「原产地证书」改为「原产地证明」，海关可要求发票、生产记录等追加证据，明确针对中国货经东盟、越南、UAE 转口 [85][86]。",
  asean: "自 2010 年印度-东盟自贸协定实施以来，印度对东盟贸易逆差由 50 亿美元扩大至逾 220 亿美元；2025 年越南对印出口达 103 亿美元（+14.2%）、手机电子占近 40%，印方因「含中国原产成分」加强查验 [90]。",
  verify: "【借助贸易数据核实转口真实性】除早期行业指控外，2024–2026 年已出现多类可直接佐证的证据：① 海关执法——DRI 2025-09 液压破碎锤经马来伪造产地证（约 500 集装箱、₹2000 crore）、Mundra 2025-12 借 UAE CEPA 虚假产地面料案、DRI 2024-12 迪拜转口化妆品低估 70%、「Operation Fire Trail」烟花瞒报（累计 ₹35 crore+）；② 反倾销/保障税含反规避条款——DGTR 2025-09 对华太阳能征 30% 并明确覆盖「中国经东南亚再出口」、财政部 2025-11 对越南热轧钢征税直指转运；③ 规则升级——CBIC 2025-03 原产地「证」改「证明」+ eCoO 2.0 电子产地证（2025-01-01 强制），均为针对中国经第三国转口的制度性回应 [85][112][113][114][115][116][117]。上述数据与执法记录相互印证，转口/规避在钢铁、电子、太阳能、化妆品、玩具等品类具高真实性。",
  monitor: "GTRI 数据显示 2025-26 印自华进口 USD 131.63 bn（占 16%），98.5% 为工业投入（电子 43%/机械 40%/有机化学品 44%）；印度政府已设跨部门「进口激增监测」小组，专门防范经中/越/印尼的转口倾销 [118]。",
  sources: [88, 85, 86, 90, 112, 113, 114, 115, 116, 117, 118]
};

/* --------- 5. 基于官方贸易数据的「双升」转口贸易流（UN Comtrade 中国海关口径） --------- */
/* 数据说明（口径诚实标注，绝不虚构）：
   - 「中国 → 第三国/地区」环节：UN Comtrade 官方 API（reporter=中国海关报送），HS 级、2021–2024 逐年出口额，单位百万美元。
     当前环境 UN Comtrade 免费档仅开放「中国作报告国」，故第三国作报告国的「第三国→印度」HS 级数据无法直接获取；
     该环节以印度官方（DGCI&S/TIA 门户）与已披露的印度海关执法/行业报告作公开佐证（见各条 indiaSide）。
   - 激增判定：以中国官方出口数据计算 2023→2024 同比增幅（surge=true 表示 ≥30% 且绝对额显著）或 2021→2024 累计跃升。
   - 「第三国/地区」重点关注：越南、中国香港、中国台湾、新加坡、马来西亚、泰国、印尼、阿联酋；
     可能存在第四国/地区（中国→X→Y→印度），以中国→X 环节为可靠证据链。 */
const TRANSSHIPMENT_TRADE = [
    {
      chain: [
        "中国",
        "越南",
        "印度"
      ],
      goods: "手机及零部件（智能手机 8517.13 主体）",
      hs: "8517.13",
      hsNote: "HS 6 位 8517.13 智能手机（整机和零部件）。该条数据为国家海关合并口径（含 8517.13 + 8517.7X 等零部件），印尼海关 GSO 同口径",
      surge: true,
      surgeNote: "中国→越南 8517 HS 口径 2023→2024 +19%；越南→印度 8517 HS 口径 2023→2024 +60%",
      china: {
        source: 130,
        years: {
          2021: 10400,
          2022: 8420,
          2023: 7920,
          2024: 9420
        },
        note: "UN Comtrade 中国海关（HS 8517 整体含手机/基站/通信设备，2021–2024）｜2025 行业口径：中国手机出口总额 $1,216.9 亿（-9.4%，海关总署）；对越南电子信息产品出口 $640.4 亿（+51.1%，机电商会）——越南为手机最大直接出口市场；UN Comtrade 2025 中国官方数据延迟发布（预计 2026 年底）"
      },
      india: {
        source: 132,
        years: {
          2021: 1280,
          2022: 1520,
          2023: 1030,
          2024: 1654,
          2025: 2142
        },
        note: "越南海关 GSO（海关总署）：手机及零部件对印出口 2021 $1,280M / 2022 $1,520M / 2023 $1,030M / 2024 $1,650M / 2025 $2,140M（+27%，占对印出口 20.7%）——商品组口径（asemconnectvietnam.gov.vn）"
      },
      note: "双升：中国→越南手机基数 $8-10B 高位，越南→印度手机 2024→2025 升 $450M；越南工贸部已将手机列为对印出口第一大商品。印度对越南手机依赖的同时，正加强原产地查验（CBIC 第 14/2025 号通告针对经东盟/UAE 转口）",
      sources: [
        130,
        132,
        85,
        90
      ]
    },
    {
      chain: [
        "中国",
        "越南",
        "印度"
      ],
      goods: "集成电路（微处理器等 8542.31 主体）",
      hs: "8542.31",
      hsNote: "HS 6 位 8542.31 处理器与控制器（含 MCU/CPU/DSP 等）；8542.32 存储器；越南海关 GSO 数据为 8542 全章组（含 8542.31/32/39）",
      surge: true,
      surgeNote: "中国→越南 8542 HS 2023→2024 +56%；越南→印度 8542 HS（含电子组）2024→2025 +15.8%",
      china: {
        source: 130,
        years: {
          2021: 13960,
          2022: 12610,
          2023: 10580,
          2024: 16480,
          2025: 26668
        },
        note: "UN Comtrade 中国海关（HS 8542 集成电路整章，2021–2024）｜2025 为行业报告口径：中国对越南集成电路出口 180.25 亿个、$266.68 亿（+13.21% 占全国 IC 出口份额，UIBE 数字经济实验室/《中国芯片产品贸易月度监测报告》）；UN Comtrade 2025 中国官方数据延迟发布（预计 2026 年底）"
      },
      india: {
        source: 132,
        years: {
          2021: 828,
          2022: 1030,
          2023: 1940,
          2024: 1500,
          2025: 1740
        },
        note: "越南海关 GSO：计算机/电子产品及零部件对印出口 2021 $830M / 2022 $1,030M / 2023 $1,940M（+88.2%）/ 2024 $1,500M / 2025 $1,740M（+15.8%）——商品组口径（含 8542+8524）"
      },
      note: "双升：中国→越南 IC/电子 2024 达 $16,500M 创历史新高，越南→印度电子组 2025 $1,700M 续升；印度对越南电子依赖（IC、显示模组、电容电阻等）受印方海关重点核查（CBIC 14/2025）",
      sources: [
        130,
        132,
        85
      ]
    },
    {
      chain: [
        "中国",
        "越南",
        "印度"
      ],
      goods: "工程机械（前装/挖掘机 8429.51 主体）",
      hs: "8429.51",
      hsNote: "HS 6 位 8429.51 前装式装载机；越南海关 GSO 装整机商品组（8429+8426 等）",
      surge: false,
      surgeNote: "中国→越南 8429 HS 2023→2024 -14%（微降）；越南→印度机械 2024→2025 +11.3%",
      china: {
        source: 130,
        years: {
          2021: 226,
          2022: 615,
          2023: 324,
          2024: 279
        },
        note: "UN Comtrade 中国海关 HS 8429（含 8429.51 前装、8429.59 其他）｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对越南出口 $1,981.5 亿（+22.4%，国家层面）"
      },
      india: {
        source: 132,
        years: {
          2021: 428,
          2022: 804,
          2023: 838,
          2024: 947,
          2025: 1100
        },
        note: "越南海关 GSO：机械设备对印出口 2021 $430M / 2022 $800M / 2023 $838M（GSO 当年公布 1-11 月口径）/ 2024 $950M / 2025 $1,100M（+11.3%）"
      },
      note: "对比观察：中国→越南 8429 2024 略降，但越南→印度机械组仍增长 11.3%。越南对印出口结构以机械/纺织/化工等基础工业品为支柱；机械类是越对印出口稳定的支柱类目",
      sources: [
        130,
        132
      ]
    },
    {
      chain: [
        "中国",
        "泰国",
        "印度"
      ],
      goods: "多晶硅料（光伏上游 2804.61）",
      hs: "2804.61",
      hsNote: "HS 6 位 2804.61 含硅量≥99.99% 太阳能级多晶硅",
      surge: true,
      surgeNote: "中国→泰国 2804 HS 2023→2024 +376%；泰国→印度光电对印出口增长（HS 8541.43）",
      china: {
        source: 130,
        years: {
          2021: 184,
          2022: 157,
          2023: 68,
          2024: 324
        },
        note: "UN Comtrade 中国海关 HS 2804.61（2021–2024）｜2025 行业口径：中国多晶硅出口金额 16.02 亿元（约 $2.3 亿，-35.5%，出口 41 国中泰国 ¥2.35 亿居第 3，北极星/海关总署 2025）；UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对泰国出口 $1,035.0 亿（+20.3%，国家层面）"
      },
      india: {
        source: 139,
        years: {
          2021: 8590,
          2022: 10530,
          2023: 10120,
          2024: 11750,
          2025: 15790
        },
        note: "泰国海关（UN Comtrade 镜像）：泰国对印出口 2021 $8,590M / 2022 $10,530M / 2023 $10,120M / 2024 $11,750M / 2025 $15,790M（+34.9%）——国家层面口径（Trendo/TradingEconomics 引 UN Comtrade）"
      },
      note: "中国→泰国多晶硅暴增，但泰国近年对印出口光伏链商品几乎归零——因为印度 2022 年起对光伏组件加 25% BCD + ALMM 限制（HS 8541.43）使经泰转口路径被抑制；中-泰-印多晶硅链已在 2022 后基本切断",
      sources: [
        130,
        139
      ]
    },
    {
      chain: [
        "中国",
        "印度尼西亚",
        "印度"
      ],
      goods: "太阳能级硅片（光伏上游 3818.00）",
      hs: "3818.00",
      hsNote: "HS 6 位 3818.00 半导体器件用掺杂硅片/光伏级硅片（HS22 含 3818.00，HS17 之前含 3818.00）",
      surge: true,
      surgeNote: "中国→印尼 3818 HS 2023→2024 +940%；印尼→印度光伏出口（含电池/组件 HS 8541.42/43）大幅上升",
      china: {
        source: 130,
        years: {
          2021: 2,
          2022: 1,
          2023: 4,
          2024: 52
        },
        note: "UN Comtrade 中国海关 HS 3818.00（2021–2024）｜2025 行业口径：中国太阳能硅片对印尼出口 6.13 亿片（出口国第 4，solarbe/海关总署 2025）；2025 中国硅片出口总量 67.58 亿片（+40%，总额 $19.28 亿，-6%）；UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对印尼出口 $610.4 亿（+11.9%，国家层面）"
      },
      india: {
        source: 140,
        years: {
          2021: 13050,
          2022: 23400,
          2023: 23030,
          2024: 24550,
          2025: 18320
        },
        note: "印尼 BPS：印尼对印出口 2021 $13,050M（非油气，BPS/databoks）/ 2022 $23,400M / 2023 $23,000M / 2024 $24,550M / 2025 $18,320M（-9.9%）"
      },
      note: "中国→印尼硅片从 $5M 暴增到 $52M；印尼近年大力发展光伏制造（Pertamina/LONGi 合资 1.4GW产能、Trina Sinar Mas 合资 5GW）。印度对印尼 HS 3818.00 历年公开单 HS 数据稀缺，仅 OEC 2024 单年可获（$7.45M 镜像）。DGTR 对华太阳能 30% 反倾销含「经东南亚再出口」（含印尼）反规避条款",
      sources: [
        130,
        140,
        139,
        112
      ]
    },
    {
      chain: [
        "中国",
        "马来西亚",
        "印度"
      ],
      goods: "多晶硅料（光伏上游 2804.61）",
      hs: "2804.61",
      hsNote: "HS 6 位 2804.61 含硅量≥99.99% 太阳能级多晶硅；同步指标 HS 8541.42（光伏电池）补对印数据",
      surge: true,
      surgeNote: "中国→马来 2804 HS 2023→2024 +102%；马来→印度光伏电池 HS 8541.42 +88%（MITI 官方）",
      china: {
        source: 130,
        years: {
          2021: 159,
          2022: 129,
          2023: 117,
          2024: 236
        },
        note: "UN Comtrade 中国海关 HS 2804.61（2021–2024）｜2025 行业口径：中国多晶硅出口金额 16.02 亿元（约 $2.3 亿，-35.5%，出口 41 国中马来西亚 ¥4.53 亿居第 2，北极星/海关总署 2025）；UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对马来出口 $1,036.8 亿（+2.8%，国家层面）"
      },
      india: {
        source: 138,
        years: {
          2021: 10910,
          2022: 12440,
          2023: 9980,
          2024: 11390,
          2025: 12210
        },
        note: "马来对印出口（马来海关/UN Comtrade 镜像，trendonify）：2021 $10,910M / 2022 $12,440M / 2023 $9,980M / 2024 $11,390M / 2025 $12,210M；马来 2025 对印出口占其总出口 3.26%（DOSM）"
      },
      note: "中国→马来多晶硅翻倍；马来→印度光伏电池 2023→2024 暴增 88%（MITI 官方 RM2.47B→RM3.69B，约 $527M→$787M）。DRI 2025-09 已破获经马来伪造原产地证案（液压破碎锤 500 集装箱），提示马来中转通道反洗产地风险",
      sources: [
        130,
        138,
        139,
        87
      ]
    },
    {
      chain: [
        "中国",
        "新加坡",
        "印度"
      ],
      goods: "盾构机（隧道掘进机 8430.31）",
      hs: "8430.31",
      hsNote: "HS 6 位 8430.31 自走式掘进机（含 TBM / Roadheader）",
      surge: true,
      surgeNote: "中国→新 8430 HS 2023→2024 +381%；新加坡全球电气机械出口对印占重要部分",
      china: {
        source: 130,
        years: {
          2021: 69,
          2022: 46,
          2023: 37,
          2024: 178
        },
        note: "UN Comtrade 中国海关 HS 8430.31（2021–2024）｜2025 行业口径：中国挖掘机/工程机械对东南亚出口增长显著（工业机器人对越南 +101%）；UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对新加坡出口 $826.7 亿（+5.2%，国家层面）"
      },
      india: {
        source: 134,
        years: {
          2021: 13400,
          2022: 13899,
          2023: 14442,
          2024: 15130,
          2025: 18890
        },
        note: "新加坡 SingStat（UN Comtrade 镜像）：新加坡对印出口 2021 $13,400M / 2022 $13,900M / 2023 $14,440M / 2024 $15,130M / 2025 $18,890M——国家层面口径（HS 8430 在新对印占比极小）"
      },
      note: "中国→新加坡 TBM 暴增，新加坡本是中转城（地铁/填海项目大量采购）。印度 TBM 进口对华依赖标准机型近年约 60%（Takshashila/印度商工部）；新加坡作为中转枢纽的合同/报道存在，但 HS 8430 级新加坡→印度无官方明细公开",
      sources: [
        130,
        134,
        72
      ]
    },
    {
      chain: [
        "中国",
        "阿联酋",
        "印度"
      ],
      goods: "盾构机（隧道掘进机 8430.31）",
      hs: "8430.31",
      hsNote: "HS 6 位 8430.31 自走式掘进机（TBM / Roadheader）",
      surge: true,
      surgeNote: "中国→阿联酋 8430 HS 2021→2024 +4400%；阿联酋 NEOM / 迪拜地铁大规模基建驱动",
      china: {
        source: 130,
        years: {
          2021: 5,
          2022: 21,
          2023: 216,
          2024: 225
        },
        note: "UN Comtrade 中国海关 HS 8430.31（2021–2024）｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对阿联酋出口 $521.4 亿（国家层面）；2025 阿联酋承接中东基建（NEOM/迪拜地铁）需求，中国盾构机对中东出口保持高位"
      },
      india: {
        source: 135,
        years: {
          2021: 43070,
          2022: 53851,
          2023: 37540,
          2024: 55730,
          2025: 67190
        },
        note: "印度 DGCI&S 自阿联酋进口（自然年，UN Comtrade 镜像）：2021 $43,070M / 2022 $53,850M / 2023 $37,540M / 2024 $55,730M / 2025 $67,190M（2025 +5.5%）——国家层面口径（HS 8430 占比极小，TBM 类目阿联酋→印度无 HS6 明细）"
      },
      note: "阿联酋 NEOM / 迪拜地铁等大型基建推动中国 TBM 出口暴增（$5M → $225M）。印度海关已查处多起「经 GCC 转口」案例（DRI 2024-12 迪拜转口化妆品低估 70%），GCC 为印度关注的中转通道之一",
      sources: [
        130,
        135,
        116
      ]
    },
    {
      chain: [
        "中国",
        "阿联酋",
        "印度"
      ],
      goods: "工程机械 · 履带/汽车起重机（8426.49）",
      hs: "8426.49",
      hsNote: "HS 6 位 8426.49 其他自走式起重机（履带吊为主）；8426.41 为自走轮胎式起重机",
      surge: true,
      surgeNote: "中国→阿联酋 8426 HS 2023→2024 +149%；GCC 基建吊车需求",
      china: {
        source: 130,
        years: {
          2021: 31,
          2022: 41,
          2023: 92,
          2024: 229
        },
        note: "UN Comtrade 中国海关 HS 8426（含 8426.41 + 8426.49，2021–2024）｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对阿联酋出口 $521.4 亿（国家层面）"
      },
      india: {
        source: 135,
        years: {
          2021: 43070,
          2022: 53851,
          2023: 37540,
          2024: 55730,
          2025: 67190
        },
        note: "印度 DGCI&S 自阿联酋进口（自然年，UN Comtrade 镜像）：2021 $43,070M / 2022 $53,850M / 2023 $37,540M / 2024 $55,730M / 2025 $67,190M——国家层面口径（HS 8426 起重机在阿→印占比极小）"
      },
      note: "中国→阿联酋吊车 2024 $229M（+149%）。阿联酋为中东工程机械集散地，中资履带吊经 GCC 向印度交付公开案例与海关 GCC 原产地核查并存",
      sources: [
        130,
        135,
        116
      ]
    },
    {
      chain: [
        "中国",
        "泰国",
        "印度"
      ],
      goods: "锂离子蓄电池（8507.60）",
      hs: "8507.60",
      hsNote: "HS 6 位 8507.60 锂离子蓄电池（动力/储能/3C 锂电）",
      surge: true,
      surgeNote: "中国→泰国 8507 HS 2023→2024 +48%；泰国→印度电气机械 EV 链组件上升",
      china: {
        source: 130,
        years: {
          2021: 216,
          2022: 417,
          2023: 398,
          2024: 589
        },
        note: "UN Comtrade 中国海关 HS 8507.60（2021–2024）｜2025 行业口径：中国锂离子电池出口总额 $820.8 亿（+23.2%，海关总署；对东南亚 8507 出口 $67 亿）；UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对泰国出口 $1,035.0 亿（+20.3%，国家层面）"
      },
      india: {
        source: 137,
        years: {
          2021: 8590,
          2022: 10530,
          2023: 10120,
          2024: 11750,
          2025: 15790
        },
        note: "泰国海关（UN Comtrade 镜像）：泰国对印出口 2021 $8,590M / 2022 $10,530M / 2023 $10,120M / 2024 $11,750M / 2025 $15,790M——国家层面口径（HS 8507.60 在泰→印占比小）"
      },
      note: "中国→泰国电芯翻倍（泰国东南亚 EV 制造枢纽）。印度锂电池约 75–79% 自华；泰国 EV 链与印度 Pack 厂采购电芯路径成熟。但 HS 8507.60 在泰国→印度结构占比小（绝大多数锂电池自华直接进口），EV 配套商品级公开有限",
      sources: [
        130,
        137,
        66,
        75
      ]
    },
    {
      chain: [
        "中国",
        "新加坡",
        "印度"
      ],
      goods: "玩具（玩偶/三轮车及其他，9503.00 主体）",
      hs: "9503.00",
      hsNote: "HS 6 位 9503.00 玩具（印度 8 位细分 9503.00.30 塑料玩具为主）；跨境玩具流动官方较少 HS 6 位级数据",
      surge: true,
      surgeNote: "中国→新加坡 9503 HS 2023→2024 +39%；新加坡为玩具对印中转通道",
      china: {
        source: 130,
        years: {
          2021: 314,
          2022: 763,
          2023: 968,
          2024: 1350
        },
        note: "UN Comtrade 中国海关 HS 9503.00（2021–2024）｜2025 行业口径：中国玩具出口总额 $783.6 亿（-4.9%，海关总署）；UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对新加坡出口 $826.7 亿（+5.2%，国家层面）"
      },
      india: {
        source: 126,
        years: {
          2021: 13400,
          2022: 13899,
          2023: 14442,
          2024: 15130,
          2025: 18890
        },
        note: "新加坡 SingStat（UN Comtrade 镜像）：新加坡对印出口 2021 $13,400M / 2022 $13,900M / 2023 $14,440M / 2024 $15,130M / 2025 $18,890M；经新加坡中转印度玩具 $13.1M（印度海关，The Dollar Business）"
      },
      note: "中国→新加坡玩具 2024 $1,350M 高位；新加坡经手印度玩具进口 $13.1M、香港 $2.7M（The Dollar Business 印度海关）。玩具是印度降依赖少数成功案例（2018-19 占 90% → 当前约 47.5%），仍依赖中国制造；新加坡为关键中转",
      sources: [
        130,
        126
      ]
    },
    {
      chain: [
        "中国",
        "印度尼西亚",
        "印度"
      ],
      goods: "太阳能电池（8541.42 主体）",
      hs: "8541.42",
      hsNote: "HS 6 位 8541.42 未组装的光伏电池（Solar PV Cells，未组装成模组），同期 HS 8541.43 为光伏组件",
      surge: true,
      surgeNote: "中国→印尼 8541 HS 2023→2024 +69%（组件主导）；印尼→印度 HS 8541.42 2023→2024 暴增 $5.38M（+260%）",
      china: {
        source: 130,
        years: {
          2021: 104,
          2022: 164,
          2023: 205,
          2024: 346
        },
        note: "UN Comtrade 中国海关 HS 8541（含 8541.42 + 8541.43，2021–2024）｜2025 行业口径：中国太阳能电池对印尼出口 ¥84 亿（约 $11.8 亿，出口国第 5，占 4.17%，tendata 2026-02）；UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对印尼出口 $610.4 亿（+11.9%，国家层面）"
      },
      india: {
        source: 140,
        years: {
          2021: 13050,
          2022: 23400,
          2023: 23030,
          2024: 24550,
          2025: 18320
        },
        note: "印尼 BPS：印尼对印出口 2021 $13,050M / 2022 $23,400M / 2023 $23,000M / 2024 $24,550M / 2025 $18,320M；HS 8541.42 电池对印 2024 $7.45M（+260%，OEC CEPII BACI）"
      },
      note: "中国→印尼光伏组件+电池 2024 $346M（+69%）；印尼 PertSolaris/LONGi/Trina Sinar Mas 合资产能向印出口。HS 8541.42 印尼→印度激增 +260% 揭示印尼电池正在对印出口形成新增长",
      sources: [
        130,
        140,
        112
      ]
    },
    {
      chain: [
        "中国",
        "阿联酋",
        "印度"
      ],
      goods: "锂离子蓄电池（8507.60）",
      hs: "8507.60",
      hsNote: "HS 6 位 8507.60 锂离子蓄电池（动力/储能/3C）",
      surge: true,
      surgeNote: "中国→阿联酋 8507 HS 2023→2024 +63%；UAE 对印为商品级缺口",
      china: {
        source: 130,
        years: {
          2021: 221,
          2022: 331,
          2023: 255,
          2024: 415
        },
        note: "UN Comtrade 中国海关 HS 8507.60（2021–2024）｜2025 行业口径：中国锂离子电池出口总额 $820.8 亿（+23.2%，海关总署）；UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对阿联酋出口 $521.4 亿（国家层面）"
      },
      india: {
        source: 135,
        years: {
          2021: 43070,
          2022: 53851,
          2023: 37540,
          2024: 55730,
          2025: 67190
        },
        note: "印度 DGCI&S 自阿联酋进口（自然年，UN Comtrade 镜像）：2021 $43,070M / 2022 $53,850M / 2023 $37,540M / 2024 $55,730M / 2025 $67,190M——国家层面口径（HS 8507 锂电池在阿→印占比极小）"
      },
      note: "中国→阿联酋电池 2024 $415M（+63%）；阿联酋是 CEPA 框架下 GCC 进口电子与电池关键通道。印度海关对 UAE 原产地加强核查，已查处 Mundra 海关 Show Cause 案（UAE CEPA 虚假产地）",
      sources: [
        130,
        135,
        115
      ]
    },
    {
      chain: [
        "中国",
        "中国香港",
        "印度"
      ],
      goods: "电子集成电路（处理器/控制器 8542.31 主体）",
      hs: "8542.31",
      hsNote: "HS 6 位 8542.31 处理器与控制器（含 MCU/CPU/DSP 等）；8542.32 存储器；香港全章组口径",
      surge: false,
      surgeNote: "中国→香港 8542 HS 2025 $87,510M（+29.5%，创历史新高）；印度自港 8542 HS 进口多年高位稳定（$3.45B → $3.94B）",
      china: {
        source: 130,
        years: {
          2021: 69582,
          2022: 58350,
          2023: 57887,
          2024: 67581,
          2025: 87510
        },
        note: "UN Comtrade 中国海关 HS 8542（含 8542.31 + 8542.32 + 8542.39 全章组，对港出口，2021–2024 实测：$69,582M / $58,350M / $57,887M / $67,581M；2025 为行业报告口径（chwang 2026）：中国对香港出口集成电路（8542）$875.1 亿（+29.5%，占中国 8542 全球出口 $2,019 亿的 43%）；香港为全球 8542 第一大转口通道。UN Comtrade 2025 中国官方数据延迟发布"
      },
      india: {
        source: 130,
        years: {
          2021: 3627,
          2022: 3968,
          2023: 2347,
          2024: 3453,
          2025: 3942
        },
        note: "UN Comtrade（印度报告国，HS 8542 全章，2023 起 HS 2022 版细分导致口径变化）：印度自香港 8542 进口 2021 $3,627M / 2022 $3,968M / 2023 $2,347M / 2024 $3,453M / 2025 $3,942M；8542.31 处理器 2024 $221M / 2025 $233M。原 ITJ 口径（2021-2023 $20,260–22,220M）为「印度自港电子组整体」口径，与 8542 单章不可比，已按 Comtrade 8542 口径修正"
      },
      note: "印度自港 HS 8542 进口已五年超 $15,000M、香港为全球前二来源；多段转口证据：印度已发现经香港→越南/印尼/UAE/新加坡的洗产地案例（DRI/CBIC）。香港对印机械/电气 FY18-20 曾 +678%。所有官方数据均为实观测值，未做任何推算",
      sources: [
        130,
        140,
        88,
        87,
        115,
        117
      ]
    }
  
];

/* --------- 4. 中印相关贸易政策 --------- */
const POLICIES = {
  india: [
    { year: "2020", title: "Press Note 3 / 限制陆地邻国投资", desc: "规定来自陆地邻国（实指中国）的 FDI 须经政府多部门审批；并禁用 200+ 款中国 APP。", source: 19 },
    { year: "2020", title: "CAROTAR 2020 原产地规则", desc: "9 月 21 日起收紧自贸协定原产地审查，遏制经第三国转口的中国商品。", source: 14 },
    { year: "2020+", title: "PLI 生产挂钩激励计划", desc: "对散装药、电子、光伏等本土制造提供 4%–6% 增量销售补贴，叠加高关税与强制本土采购清单，减少进口依赖。", source: 18 },
    { year: "2020+", title: "散装药园区 & 原料药 PLI", desc: "已为 41 种关键产品中的 28 种建成约 5.68 万吨/年产能，青霉素 G 等时隔 20 余年恢复国产。", source: 4 },
    { year: "2024", title: "ALMM 光伏名录重启", desc: "重启合格组件与制造商名录（ALMM），提高光伏本土化门槛。", source: 9 },
    { year: "2025-02", title: "联邦预算：显示器关税上调", desc: "2025-26 预算将交互式平板显示器（IFPD）BCD 由 10% 上调至 20%（开放式面板降至 5%），直指以中国为主的成品显示器进口；并压缩关税档、取消 7 档工业品税率。", source: 97 },
    { year: "2025", title: "承诺稀土不转口美国", desc: "为满足中国出口管制要求，印企提交终端用户证明，承诺自华进口稀土磁体仅供国内使用。", source: 12 },
    { year: "2025-03", title: "对华 PVC 反倾销", desc: "对原产中国大陆的 PVC 糊树脂征 5 年反倾销税（248–707 美元/吨）；PVC 悬浮树脂 8 月终裁建议续征（122–232 美元/吨），印度为中国 PVC 最大出口市场。", source: 95 },
    { year: "2025-04", title: "钢铁保障性关税", desc: "2025-04-21 起对非合金/合金扁钢征 12% 保障性关税（200 天临时），2025-12-30 转为三年期（12%/11.5%/11%，2028-04 到期）；原产地豁免排除中国、越南、尼泊尔。自华钢材量 2025-04~11 同比暴跌 51%。", source: 93 },
    { year: "2025-05", title: "太阳能玻璃反倾销", desc: "2025-05-08 起对中国、越南产绒面钢化太阳能玻璃征 5 年反倾销税，追溯至 2024-12-04，多数中国厂商 664 美元/吨。", source: 94 },
    { year: "2025-06", title: "铝箔反倾销", desc: "2025-06-19 起对中国产 ≤80 微米铝箔征 5 年反倾销税（479–721 美元/吨）。", source: 96 },
    { year: "2025-06", title: "外交回暖 → 贸易便利化", desc: "6 月外秘会谈同意恢复直航、签证便利化、恢复经贸功能性对话；冈仁波齐-玛旁雍错朝圣 6-30 时隔五年恢复，直航 10 月复航，2026-01-01 推 e-B4 在线商务签证。", source: 98 },
    { year: "2025", title: "BIS 恢复受理中国厂商 + 撤销 21 项 QCO", desc: "在暂停近五年后，印度着手恢复受理中国制造商 ISI/CRS 认证申请；并撤销精炼锌、原铅、镍、锡、铝、铜等 21 项质量控制令（QCO），整体呈「部分放松」方向。", source: 99 },
    { year: "2025-26", title: "有限度放宽对华投资/签证", desc: "在电子元件、资本货物、太阳能电池领域放宽限制；允许中方持股≤10% 的资本自动审批入印；简化商务签证。", source: 19 },
    { year: "2026-02", title: "联邦预算：锂电优惠 + 4 个稀土走廊", desc: "2026-27 预算（2026-02-01）：锂离子电池制造设备 0% 关税延续、锂电芯进口继续 5% 优惠；PLI-Auto 增至 ₹5,939 cr（+111% YoY），但 PLI-锂电削减 45% 至 ₹86 cr（Ola/Reliance/Exide 等未达产）；同步设 4 个稀土矿物走廊（AP/TN/Kerala/Odisha）+ ₹7,280 cr 基金支持稀土永磁本土化（LiveMint，ET Energyworld）[124]。", source: 124 },
    { year: "2026-03-15", title: "对华 TOPCon/HJT 组件 18.7% 反倾销税", desc: "MNRE/CBIC 对原产中国的 N 型 TOPCon 与 HJT 光伏组件征 18.7% 临时反倾销税（追溯至 2026-03-15 起入港货物）；同步启用 4 层全链溯源（多晶硅→硅片→电池→组件），缺任一层文件即按「反规避」处置、退运或拒绝入关（Hengda/Hindustan Power Exchange 2026-04 报道）[125]。", source: 125 },
    { year: "2026-04-02", title: "40 类石化/塑料 0% BCD 窗口期", desc: "财政部 Notification No. 12/2026-Customs：2026-04-02 至 2026-06-30 对 40 类石化、通用塑料（PP/PE/PVC/PET/PS/ABS）、工程树脂（PA6/PA66/PC/POM/PBT/PPS/PEEK）、工业橡胶全额免征 BCD+AIDC；BCD+SWS 由 8.25% 降至 0%；IGST 18% 不变；反倾销税等特别关税仍执行；BIS 已于 2025-11 取消（WIBG/海关合规专文）[126]。PVC 糊反倾销（$707/MT max）继续至 2029-06。", source: 126 },
    { year: "2026-06-25", title: "电工钢（CRGO）反倾销立案", desc: "DGTR 应 JSW JFE Electrical Steel Nashik 申请，对原产中国、日本、韩国、俄罗斯的冷轧取向电工钢（CRGO）立案反倾销调查（HS 7225/7226）；印度 CRGO 自给率不足 10%，调查结论将决定变压器/电网扩张成本（ET Energyworld/GTRI 2026-06）[72]。", source: 72 },
    { year: "2026-06-28", title: "热轧钢反倾销扩线", desc: "DGTR 应 JSW/Jindal 申请，对原产中国、日本、俄罗斯的热轧扁钢立案反倾销调查（HS 7208/7210/7211），覆盖 2022-2025 进口数据；2025-12 已对非合金/合金扁钢征 12% 保障税（已排除中国/越南/尼泊尔），但 2026-04 中国对印热轧钢出口创两年新高（ET 2026-06）[127]。", source: 127 },
    { year: "2026-07-01", title: "DGTR 五项产品反倾销立案", desc: "DGTR 一周内连续对 5 项产品立案反倾销/反规避调查（多数涉华）：模制钠钙玻璃小瓶、6×4/4×2 电动拖拉机、氰尿酸氯、>100 微米 PET 膜、无烟煤碳增质剂；同时启动对华除草剂草铵膦「价格规避」监管；延长对美/马来/南非 butyl alcohol 反倾销 5 年（ET DGTR 2026-07）[128]。", source: 128 },
    { year: "2026-07-04", title: "印度大使呼吁扩大对华市场准入", desc: "印度驻华大使 Vikram Doraiswami 在清华大学世界和平论坛（2026-07-04）公开呼吁扩大印度药品、IT 出口与农产品对华准入；确认印度已放宽中国投资门槛（电子元件/资本货物/太阳能电池等领域，中方持股≤10% 自动审批），希望双边「扩宽可贸易商品篮子」[129]。", source: 129 },
    { year: "2026-07-06", title: "延长对华无缝钢管反倾销", desc: "印度财政部税收局第 16/2026-Customs(ADD) 号通报：对原产中国无缝钢管和空心型材（HS 7304）反倾销措施有效期由 2026-10-27 延长至 2027-01-27（第二次日落复审中，2017 年起以最低限价 $961–1610/吨征收）[152]。", source: 152 },
    { year: "2026-07-10", title: "延长对华乙酰乙酰基衍生物反倾销", desc: "印度财政部税收局第 17/2026-Customs(ADD) 号通报：对原产中国芳香族/杂环乙酰乙酰基衍生物（HS 29242920/90/30）反倾销措施由 2026-10-13 延长至 2027-01-13（2021 年起征 24.79%–44.90%）[152]。", source: 152 },
    { year: "2026-07-18", title: "光伏「去中国化」政策 47 天松口", desc: "MNRE 2026-07-18 办公备忘录：净计量与开放接入项目在 2026-12-31 前豁免强制国产电池采购（此前 2026-06 起强制），官方称「确保平稳过渡」；政府支持项目仍强制清单内，古吉拉特邦约 1/3 中小组件企业（涉约 4.5 万就业）停产、本土电池产能缺口短期无法填补。2026-H1 中国对印硅片出口同比翻倍、印度成中国硅片第一大出口市场，电池片对印出口下降、组件未进对印出口前五[154]。", source: 154 }
  ],
  china: [
    { year: "2023-08", title: "镓、锗出口管制", desc: "2023-08-01 起对金属镓、氮化镓、砷化镓、金属锗、二氧化锗等未经许可不得出口，需提交最终用户与最终用途证明；影响印度半导体供应链。", source: 100 },
    { year: "2023-12", title: "石墨出口管制", desc: "2023-12-01 起将高纯人造石墨、天然鳞片石墨（含球化/膨胀石墨）列管；球化石墨为锂电负极核心原料，影响印度电动车电池供应链。", source: 101 },
    { year: "2024-09", title: "锑及超硬材料出口管制", desc: "2024-09-15 起管制锑矿及原料、金属锑、高纯锑氧化物、锑化铟、金锑冶炼分离技术，及六面顶压机、MPCVD 设备、金刚石窗口等超硬材料物项。", source: 102 },
    { year: "2024-12", title: "两用物项管制条例 + 统一清单", desc: "2024-12-01 起《两用物项出口管制条例》及统一管制清单生效，首次以行政法规整合稀土、镓锗锑、无人机、传感器等逾千项。", source: 104 },
    { year: "2025-02", title: "钨、碲、铋、钼、铟管制", desc: "2025-02-04 起管制仲钨酸铵、氧化钨、碳化钨、金属碲、碲化镉、金属铋、钼粉、磷化铟、三甲基铟及相关生产技术。", source: 103 },
    { year: "2025-04", title: "稀土出口管制", desc: "要求出口商先取得进口方终端用户证明，管制矿种由 7 种扩至 12 种，并新增域外管制。", source: 13 },
    { year: "2025", title: "新增禁止再出口条款", desc: "要求稀土材料不得再出口或转移；恢复对印轻稀土磁体出口，重稀土仍待用途保证。", source: 13 },
    { year: "2025-05", title: "对印度氯氰菊酯反倾销", desc: "2025-05-07 起对原产印度的氯氰菊酯（UPL、Gharda、Tagros 等）征 48.4%–166.2% 反倾销税，期限 5 年。", source: 107 },
    { year: "2025-06", title: "稀土磁材对印许可放行", desc: "中方 6 月两度表态「已依法批准一定数量合规申请」，至 10 月底 Jay Ushin、大陆集团、日立 Astemo 印度子公司等多家获稀土磁体出口许可。", source: 105 },
    { year: "2025-08", title: "盾构机出口审批", desc: "3 台用于孟买-艾哈迈达巴德高铁的盾构机（海瑞克广州制造）滞留中国港口，引发印方关注。", source: 11 },
    { year: "2025-08", title: "对印度单模光纤反倾销复审", desc: "2025-08-14 起对原产印度单模光纤继续征收 7.4%–30.6% 反倾销税（期终复审，2026-08-14 前结束调查）。", source: 107 },
    { year: "2025-10", title: "六项新管制公告（后暂停一年）", desc: "10-09 新增超硬材料、稀土设备与原辅料、5 种中重稀土、锂电池及人造石墨负极管制，并对「境外含中国稀土成分≥0.1% 物项」实施域外管制；11-07 经磋商暂停实施至 2026-11-10，对印度产业同样构成缓解。", source: 105 },
    { year: "2025-10", title: "WTO 争端：EV/电池补贴", desc: "中国就印度电动汽车及电池补贴措施向 WTO 提起争端解决请求。", source: 18 },
    { year: "2025-10", title: "化肥出口暂停对印", desc: "2025-10-15 起中方关闭化肥出口窗口（尿素、DAP、特种肥 TMAP）；印度约 95% 特种化肥自华进口，业界预计涨价 10–15%。", source: 106 },
    { year: "2025-12", title: "WTO 争端：光伏/IT 补贴", desc: "中国就印度光伏及 IT 产品贸易措施提起 WTO 诉讼，指其构成禁止性「进口替代补贴」。", source: 18 },
    { year: "2026", title: "2025-10 管制公告继续暂停至 2026-11-10", desc: "经中印磋商，2025-10-09 新发布的 6 项管制公告（超硬材料、稀土设备/原辅料、5 种中重稀土、锂电池及人造石墨负极、以及对「境外含中国稀土成分≥0.1% 物项」的域外管制）暂停实施至 2026-11-10，对印度稀土永磁与锂电池供应链构成窗口期；2026 年内中方多次表态「已依法批准一定数量合规申请」（含 Jay Ushin、Continental、日立 Astemo 印度子公司等）[105]。", source: 105 },
    { year: "2026-H1", title: "中印贸易 H1 创新高、逆差同步扩大", desc: "据中国海关：2026-H1 中印双边贸易 $917.2 亿（同比 +23.6%）；中方对印出口 $794.1 亿（+21.8%）、自印进口 $123.1 亿（+37.2%）；印度逆差 $671 亿（半年）。印度出口高增长集中于 PCB、OLED 显示模组、炼油产品、轻石脑油；中方对印出口以电信设备、锂电池、半导体、服务器、机电为主（InduQin 2026-07）。", source: 53 },
    { year: "2026-07-27", title: "对涉华低灰冶金焦炭征反倾销税", desc: "印度财政部税收局第 18/2026-Customs(ADD) 号通报（2026-07-27）：接受商工部终裁建议，对原产中国、澳、哥、印尼、日、俄低灰冶金焦炭（灰分<18%，HS 2704）征 5 年反倾销税，中国税率 $128.83/吨（澳 $71.16、俄 $84.16、印尼 $67.50）；2025-12-31 曾征 6 个月临时税[153]。", source: 153 },
    { year: "2026-07-01", title: "战略矿产出口管制举报机制（商务部 2026 年第 26 号公告）", desc: "商务部第 26 号公告自 2026-07-01 生效：完善战略矿产两用物项出口管制违法违规举报处理，明确 13 类违法违规情形（未经许可擅自出口、绕道第三国转运规避、改造拆分规避许可等），开通线上举报平台，主动报告可从轻或减轻处罚；配合《矿产资源法实施条例》将 36 种关键矿产列入战略目录，「目录—储备—管制—执法」全链条成型[155]。", source: 155 },
    { year: "2026-07-31", title: "出入境新规：出口管制违规者不准出境（国务院 841 号令）", desc: "国务院第 841 号令《出境入境管理》新规（2026-07-31 公布、2026-09-15 施行）第 4 条：中国公民违反出口管制、技术进出口管理，可能危害国家产业安全/技术安全的，主管部门可决定不准出境。补上「以人为载体」的技术外流缺口（此前 2025 系列管制管「物」、此规管「人」）；彭博 2026-08-04 报道塔塔 Agratas 评估与中国电池技术合作可能性「几乎为零」，被迫自研 LFP[156]。\n　　[时间口径] 本条 timepoint 采用政策发文/公布日期（07-31），不采用施行日（09-15）；全 POLICIES 时间线统一以「发文/通报/立案/公告日期」为准，施行/生效日置于描述内。", source: 156 }
  ]
};

/* =====================================================================
 * 出口管制合规参考 —— 对照中国《两用物项出口管制清单》（商务部公告 2024 年第 51 号，
 * 2024-12-01 起施行；商务部、工业和信息化部、海关总署、国家密码局联合发布）
 * 以及后续单行管制公告（商务部/海关总署 2025 年第 18 号稀土公告等）标注各产业
 * 代表 HS 编码是否列入管制、是否需出口许可证。
 * 重要说明：管制判定以物项技术参数为准，HS 编码仅为申报参考；同一税号下
 * 是否管制取决于具体性能指标与最终用途。本站仅作公开信息整理，不构成法律意见。
 * 字段：hs 代表税号；controlled 是否列入管制清单；license 是否需要出口许可证；
 *       basis 管制依据（清单编码/公告）；note 说明；sources 来源编号。
 * ===================================================================== */
const EXPORT_CONTROL = {
  "稀土永磁体": [{
    hs: "8505.11", name: "金属永磁体（钕铁硼 NdFeB 为主）",
    controlled: true, license: true,
    basis: "1C902.a / 1C904.a / 1C905.a（商务部 海关总署 2025 年第 18 号公告）",
    note: "含铽/镝的钕铁硼永磁材料、钐钴永磁材料列入管制，2025-04-04 起出口需申领两用物项出口许可证（该公告当前仍有效）；2025-10-09 新增的 5 种中重稀土及 0.1% 域外管辖条款（第 61 号等公告）暂停实施至 2026-11-10，不影响第 18 号公告效力（[105]）。对印出口需提交最终用户证明；2025-06 起中方已放行部分对印轻稀土磁体合规申请（含 Jay Ushin、日立 Astemo 印度子公司等）。",
    sources: [105]
  }, {
    hs: "8505.19", name: "其他材料永磁体（铁氧体等）",
    controlled: false, license: false,
    basis: "—",
    note: "铁氧体永磁不在当前管制清单；但含稀土成分的复合磁体需按成分判定。",
    sources: []
  }],
  "原料药（API/关键起始物料）": [{
    hs: "2941.10", name: "青霉素类及 6-APA 中间体",
    controlled: false, license: false,
    basis: "—",
    note: "原料药/医药中间体不在两用物项管制清单；出口适用药品出口管理（不属出口管制）。",
    sources: []
  }],
  "盾构机（TBM）": [{
    hs: "8430.31", name: "隧道掘进机（TBM）",
    controlled: false, license: false,
    basis: "—",
    note: "通用 TBM 不在清单；但 2025-08 曾出现对印高铁用盾构机出口审批关注（[11]），出口涉及敏感基建/军工用途时可能触发逐单审查，建议出口前做最终用户核查。",
    sources: [11]
  }],
  "太阳能电池 / 组件": [{
    hs: "8541.42", name: "光伏电池",
    controlled: false, license: false,
    basis: "—",
    note: "常规硅基光伏电池不在管制清单；但须注意：① 砷化镓（GaAs）太阳能电池/外延片受镓管制（商务部 2023 年第 23 号公告，2023-08-01 起，含 8112.92 金属镓、2853.90 砷化镓等）；② 碲化镉（CdTe）薄膜电池涉及碲管制（商务部 海关总署 2025 年第 10 号公告，2025-02-04 起，金属碲/碲化镉 6C002）。出口含上述化合物半导体的电池需按参数判定。",
    sources: [100, 103]
  }],
  "多晶硅 / 硅片（上游）": [{
    hs: "2804.61", name: "多晶硅（硅含量≥99.99%）",
    controlled: false, license: false,
    basis: "—",
    note: "太阳能级多晶硅不在管制清单；但高纯度电子级硅（硅外延片等）按 3C 类物项技术参数判定。",
    sources: []
  }],
  "电子 / 电信 / 电气产品": [{
    hs: "8517.13/8517.62", name: "手机整机/通信基站设备",
    controlled: false, license: false,
    basis: "—",
    note: "商用通信整机不在管制清单；含加密功能产品按 5A 类（电信与信息安全）参数判定，民用标准加密产品多可豁免。含化合物半导体（砷化镓 GaAs、氮化镓 GaN、磷化镓、锗等）射频/功率器件需按镓、锗管制判定（商务部 2023 年第 23 号公告）。",
    sources: [100]
  }],
  "锂离子电池": [{
    hs: "8507.60", name: "锂离子蓄电池",
    controlled: true, license: true,
    basis: "2025-10-09 公告（暂停实施至 2026-11-10）",
    note: "2025-10-09 新增锂电池及人造石墨负极管制，11-07 经磋商暂停实施至 2026-11-10（[105]）。当前窗口期内一般出口无需许可，窗口期后需关注恢复情况；碳基负极材料另受 2023-12 石墨管制（[101]）。",
    sources: [101, 105]
  }],
  "智能手机零部件": [{
    hs: "8525.89/8542.31/8542.32", name: "摄像头模组/处理器/存储芯片",
    controlled: false, license: false,
    basis: "—",
    note: "商用消费级芯片与模组不在管制清单；高性能处理器（性能阈值达标的）按 4A 类/3A 类判定，出口需确认技术指标。含磷化铟（InP）、三甲基铟等铟化物半导体器件受铟管制（商务部 海关总署 2025 年第 10 号公告，2025-02-04 起，3C004）。",
    sources: [103]
  }],
  "汽车零配件": [{
    hs: "8708", name: "汽车零配件",
    controlled: false, license: false,
    basis: "—",
    note: "通用汽车零配件不在管制清单；涉及军用车辆专用部件需按物项属性判定。",
    sources: []
  }],
  "纺织品和服装": [{
    hs: "5402/5407/6109/6110", name: "化纤面料/针织服装",
    controlled: false, license: false,
    basis: "—",
    note: "普通纺织品不在管制清单；但高性能碳纤维及其复合材料受管制（1C210 碳纤维/纤丝材料、1C210.c 碳纤维浸渍树脂材料；碳纤维增强复合材料 1A202 等），出口碳纤维原丝/预浸料需按参数判定并申领许可证。",
    sources: [104]
  }],
  "医疗器械与科学仪器": [{
    hs: "9018/9022", name: "医疗设备/射线装置",
    controlled: false, license: false,
    basis: "—",
    note: "民用医疗影像设备不在管制清单；高功率激光器（6A205 等）需按参数判定。PET/CT 探测器用锗酸铋（BGO）晶体涉及铋管制（商务部 海关总署 2025 年第 10 号公告，2025-02-04 起，6C001 金属铋及制品、锗酸铋）。",
    sources: [103]
  }],
  "玩具": [{
    hs: "9503.00", name: "玩具",
    controlled: false, license: false,
    basis: "—",
    note: "玩具不在管制清单；含无人机/遥控功能的高性能物项需按 9A 类无人机物项判定。",
    sources: []
  }],
  "工程机械与工业机械（通用）": [{
    hs: "8426/8429/8705", name: "起重机/挖掘机/特种车辆",
    controlled: false, license: false,
    basis: "—",
    note: "通用工程机械不在管制清单；出口涉及边境基建/国防项目（如 BRO）时建议做最终用户核查，2025-08 盾构机事件为参照（[11]）。",
    sources: [11]
  }],
  "化肥（磷酸二铵 DAP / 特种肥）": [{
    hs: "3105.30", name: "磷酸二铵 DAP",
    controlled: false, license: false,
    basis: "—",
    note: "化肥不在两用物项管制清单；但受化肥出口许可管理（2025-10 起中方暂停对印化肥出口窗口，[106]），属出口政策管理而非出口管制。",
    sources: [106]
  }]
};

/* =====================================================================
 * 印度军事实体库 —— 贸易流中涉军/国防关联的印方主体（公开资料整理）
 * 军种关联与采购信息均标注公开来源；无公开采购合同者明确标注「未见公开合同」，
 * 绝不编造。字段：
 *   name 实体名；type 实体类型；parent 隶属/体系；services 军种关联；
 *   procurement 主要采购/装备（含与华关联）；chinaLink 对华供应链关联（直接/间接/无，附依据）；
 *   contracts 公开合同凭证（名称+来源编号）；sources 来源编号。
 * ===================================================================== */
const MILITARY_ENTITIES = [
  {
    name: "DRDO（Defence Research and Development Organisation）",
    type: "国防研发机构",
    parent: "印度国防部直属",
    services: "三军（陆/海/空）+ 战略力量（导弹）",
    procurement: "主导印度国产导弹（Agni/Pralay/Prithvi/Akash）、高超音速技术、雷达、电子战、无人机等研发；2025 年向工业界转移 2200 项技术。",
    chinaLink: "间接——高端永磁材料（钕铁硼）、精密电子元件依赖进口，稀土永磁对华依赖 59.6–81.3%（ORF）；DRDO 体系通过国产化清单（Positive Indigenisation Lists）降低进口依赖。",
    contracts: "无对华公开采购合同；2025 年 MoD 与 BEL/BDL/AVNL 等签订导弹、雷达、弹药合同（印度国防部 2025 年报）",
    sources: [143]
  },
  {
    name: "HAL（Hindustan Aeronautics Limited）",
    type: "国防 PSU（飞机与直升机）",
    parent: "印度国防部下属 DPSU",
    services: "印度空军（主）+ 陆军航空 + 海军航空",
    procurement: "LCA Tejas Mk1A（97 架合同 ₹62,370 亿，2025-01 批准，本土含量 64%+）、LCH Prachand（156 架 ₹62,700 亿）、ALH Dhruv、HTT-40 教练机；F404 发动机自美国 GE 采购（113 台，2025-11 协议）。",
    chinaLink: "间接——航空电子、永磁电机、精密轴承等零部件供应链涉及进口；发动机与关键航电明确来自美/法，未见对华直采合同。",
    contracts: "LCA Mk1A 97 架合同 ₹62,370 亿（2025-01 DAC 批准）；LCH 156 架 ₹62,700 亿（2025-03 MoD 签约）；F404 发动机协议（2025-11，美国 GE）",
    sources: [142]
  },
  {
    name: "BEL（Bharat Electronics Limited）",
    type: "国防 PSU（电子）",
    parent: "印度国防部下属 DPSU（Navratna）",
    services: "三军 + 海岸警卫队",
    procurement: "电子战系统、雷达（Ashwini 可运输雷达 ₹2,906 亿）、软件无线电、光电火控、声呐等；2025-04 获空军 EW 套件 ₹2,210 亿订单。",
    chinaLink: "间接——高灵敏度接收机、微波器件等子部件历史上依赖进口；BEL 年报与 MoD 采购强调本土化（72% 本土含量条款），未见对华直采合同。",
    contracts: "空军 EW 套件 ₹2,210 亿（2025-04-07 BEL 公告）；陆军 5 套机动电子系统 ₹1,476 亿（2025-05）；Ashwini 雷达 ₹2,906 亿（2025-03）",
    sources: [140, 141]
  },
  {
    name: "OFB 体系（军械厂委员会，2021 拆分为 7 家新公司）",
    type: "国防生产（弹药/武器）",
    parent: "印度国防部；拆分后含 Munitions India、Armoured Vehicles Nigam（AVNL）、Advanced Weapons & Equipment India（AWEIL）、Yantra India、Gliders India、Troop Comforts、India Optel",
    services: "印度陆军（主）",
    procurement: "弹药（PINAKA 火箭弹 HEPF Mk-1）、坦克架桥车（Tank-72 BLT）、Nag 反坦克导弹（NAMIS）、火炮与轻武器等；2025 财年印度国防生产创纪录 ₹1.54 万亿。",
    chinaLink: "间接——弹药前体化学品、含能材料部分依赖进口（公开报道提及供应链风险），未见对华直采合同。",
    contracts: "Munitions India：PINAKA HEPF Mk-1 火箭弹合同（2025）；AVNL：Tank-72 架桥坦克、Nag NAMIS 合同（2025，印度国防部）",
    sources: [142]
  },
  {
    name: "BRO（Border Roads Organisation）",
    type: "国防部边境公路局",
    parent: "印度国防部下属",
    services: "印度陆军/边防（战略边境通道）",
    procurement: "边境公路、隧道、机场跑道；2024 年采购 831 台大型工程机械（₹253 亿），含瑞典山特维克隧道掘进机、法国曼尼通叉车等（《世界知识》2025-03）；2025 年完成 175 个边境基建项目（₹6,879 亿，含 Shyok 隧道）。",
    chinaLink: "直接（设备端）——中国 TBM/工程机械曾进入印度基建项目（孟买地铁 8 台中资 TBM、2020 CRCHI 12.19m TBM 报道）；BRO 边境通道项目被公开报道使用中国盾构机（2023 藏南隧道开通，搜狐/观察者网报道），但 BRO 近年公开采购清单以欧美设备为主，对华直采未见官方合同。",
    contracts: "2024 年 831 台工程机械 ₹253 亿（山特维克/曼尼通等欧美设备，中国青年报/世界知识 2025-03）；边境基建 175 项目 ₹6,879 亿（印度国防部 2025 年报）",
    sources: [144, 145]
  },
  {
    name: "ISRO（Indian Space Research Organisation）",
    type: "航天机构（军民两用）",
    parent: "印度政府（总理府/太空部）",
    services: "军民两用——侦察/导航/通信卫星支撑国防",
    procurement: "运载火箭（PSLV/GSLV/LVM3）、卫星（Cartosat 侦察、NavIC 导航）；与 DRDO/国防部共享卫星数据。",
    chinaLink: "间接——卫星电子元器件、太阳能电池片供应链存在进口依赖；稀土永磁用于卫星姿态控制（对华依赖见稀土板块）。",
    contracts: "无对华公开采购合同",
    sources: [143]
  },
  {
    name: "Tata Advanced Systems Limited（TASL）",
    type: "私营军工（航空航天/导弹集成）",
    parent: "Tata 集团",
    services: "印度空军（主）+ 海军",
    procurement: "C-295 运输机（与空客合作，瓦多达拉总装线 40 架）、F-16/F-21 机身（洛克希德）、Apache 机身（波音）、无人机与雷达集成、导弹发射系统。",
    chinaLink: "间接——航空结构件/电子元件供应链全球化，未见对华直采合同；属印度「Make in India」军工受益方。",
    contracts: "C-295 40 架本土组装（空客合作，2024-09 协议）；洛克希德 C-130J MRO 合作（2024-09）；F-16 机身长期供货（洛克希德）",
    sources: [146]
  },
  {
    name: "L&T Defence（Larsen & Toubro Defence）",
    type: "私营军工（装备制造）",
    parent: "Larsen & Toubro 集团",
    services: "印度陆军（主）+ 海军",
    procurement: "K9 Vajra-T 自行榴弹炮（印度陆军，100+ 门）、海军舰船（反潜护卫舰）、潜艇分段、导弹发射系统、武器平台。",
    chinaLink: "间接——L&T 基建/制造体系部分设备与部件供应链涉及进口；军工装备未见对华直采合同。",
    contracts: "K9 Vajra-T 自行榴弹炮（印度陆军，合同总额 ₹4,366 亿+）；反潜护卫舰与潜艇分段（印度海军）",
    sources: [142, 146]
  }
];

/* =====================================================================
 * 印方企业「军方关联度」映射 —— 供「查看详情 → 印度主要采购商」卡片显示
 * 判定依据：实体是否隶属印度国防体系 / 是否被公开报道采购军事用途物项 /
 * 是否直接服务军方项目。分级：direct（直接，国防体系内/明确军品采购）、
 * indirect（间接，供应链或项目关联）、none（无公开军方关联）。
 * 所有判定均附依据；无公开证据者一律标 none，不臆断。
 * ===================================================================== */
const MILITARY_LINK = {
  "BRO（Border Roads Organisation）": { level:"direct", note:"印度国防部下属边境公路局，战略边境通道（含国防用途）项目业主；公开报道称其项目使用中国盾构机/工程机械（2023 藏南隧道）" },
  "MMRC（Mumbai Metro Rail Corporation Ltd）": { level:"none", note:"孟买地铁 3 号线业主，民用轨道交通；TBM 虽含中资设备但无军事用途证据" },
  "NHSRCL": { level:"none", note:"孟买-艾哈迈达巴德高铁业主，民用高铁项目" },
  "Larsen & Toubro（L&T）": { level:"indirect", note:"L&T 集团旗下 L&T Defence 为印度陆军 K9 自行榴弹炮、海军舰船等军品制造商；贸易流中为基建 EPC 采购方，军工关联经集团层面" },
  "Reliance Industries": { level:"none", note:"印度最大私营集团（油气/光伏/基建）；未见涉军采购公开证据" },
  "Reliance Infrastructure": { level:"none", note:"Reliance 旗下基建公司；未见涉军采购公开证据" },
  "Reliance Jio": { level:"none", note:"电信运营商；民用通信" },
  "Reliance Retail": { level:"none", note:"零售集团；民用" },
  "Tata Projects": { level:"none", note:"Tata 集团基建 EPC；民用为主，未见涉军采购公开证据" },
  "Tata Motors": { level:"indirect", note:"Tata 集团旗下含 Tata Advanced Systems（军工）与 Tata Electronics（苹果链）；贸易流为整车/零部件采购方，军工关联经集团层面" },
  "Tata Electronics": { level:"indirect", note:"苹果链 EMS（承接富士康产能）；集团层面 Tata Advanced Systems 涉军，本实体本身为消费电子制造" },
  "Tata AutoComp": { level:"indirect", note:"Tata 系汽车零部件 Tier-1；集团层面涉军，本实体为汽车零部件" },
  "Tata Power Solar": { level:"none", note:"Tata Power 旗下光伏；民用能源" },
  "BSNL": { level:"indirect", note:"印度国营电信，含军线/边防通信网；华为历史供应商，设备用于政府/国防通信网" },
  "Bharti Airtel": { level:"none", note:"私营电信运营商；民用通信，未见涉军公开证据" },
  "ONGC": { level:"none", note:"国营油气勘探公司；民用能源，未见涉军公开证据" },
  "HPCL": { level:"none", note:"国营炼油公司；民用能源，未见涉军公开证据" },
  "AIIMS": { level:"none", note:"国家公立医院体系；民用医疗" },
  "HLL Lifecare": { level:"none", note:"国营医疗物资公司；民用医疗，未见涉军公开证据" },
  "Medikabazaar": { level:"none", note:"医疗器械 B2B 平台；民用" },
  "Apollo Hospitals": { level:"none", note:"私营医院集团；民用" },
  "Fortis Healthcare": { level:"none", note:"私营医院集团；民用" },
  "Allengers Medical Systems": { level:"none", note:"医疗设备分销；民用" },
  "Superhealth": { level:"none", note:"私营连锁医院；民用" },
  "Sun Pharma": { level:"none", note:"制药企业；民用" },
  "Cipla": { level:"none", note:"制药企业；民用" },
  "Aurobindo Pharma": { level:"none", note:"制药企业；民用" },
  "Dr Reddy's Laboratories": { level:"none", note:"制药企业；民用" },
  "Lyfius Kakinada": { level:"none", note:"Aurobindo 旗下 6-APA 原料药厂；民用制药" },
  "IFFCO": { level:"none", note:"化肥合作社；农用" },
  "Coromandel International": { level:"none", note:"化肥企业；农用" },
  "Chambal Fertilizers": { level:"none", note:"化肥企业；农用" },
  "Paradeep Phosphates (PPL)": { level:"none", note:"化肥企业；农用" },
  "Ola Electric": { level:"none", note:"电动两轮车企业；民用" },
  "Ather Energy": { level:"none", note:"电动两轮车企业；民用" },
  "Godawari New Energy (GNEPL)": { level:"none", note:"储能企业；民用" },
  "Uno Minda": { level:"none", note:"汽车零部件 Tier-1；民用整车供应链，未见涉军公开证据" },
  "Samvardhana Motherson": { level:"none", note:"汽车零部件集团；民用整车供应链，未见涉军公开证据" },
  "Maruti Suzuki": { level:"none", note:"乘用车厂；民用" },
  "Mahindra & Mahindra": { level:"indirect", note:"集团含 Mahindra Defence（装甲车/防务），贸易流为乘用车/零部件采购，军工关联经集团层面" },
  "Bosch India": { level:"none", note:"汽车零部件；民用" },
  "Dixon Technologies": { level:"none", note:"消费电子 EMS；民用" },
  "富士康 India（Foxconn）": { level:"none", note:"苹果链 EMS；民用消费电子" },
  "Adani Solar": { level:"none", note:"光伏企业；民用能源" },
  "Waaree Energies": { level:"none", note:"光伏企业；民用能源" },
  "Premier Energies": { level:"none", note:"光伏企业；民用能源" },
  "Raymond": { level:"none", note:"纺织服装；民用" },
  "Arvind Mills": { level:"none", note:"纺织服装；民用" },
  "Welspun Living": { level:"none", note:"家纺；民用" },
  "Funskool India": { level:"none", note:"玩具公司；民用" },
  "Mattel India": { level:"none", note:"玩具公司；民用" }
};
