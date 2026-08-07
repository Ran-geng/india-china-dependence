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
  { id: 140, name: "印度 DGCI&S 国际贸易期刊 ITJ（itj.dgciskol.gov.in）· 印度自各伙伴国 HS 6 位逐年进口（PDF 公开下载） + OEC Observatory of Economic Complexity（CEPII BACI 镜像）", url: "http://itj.dgciskol.gov.in/" }
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
          "note": "中车株洲旗下，海外订单主力之一"
        }
      }
    ],
    "buyers":[
      {
        "name": "L&T（Larsen & Toubro）",
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
      }
    ],
    "buyers":[
      {
        "name": "Foxconn India",
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
        "name": "L&T（Larsen & Toubro）",
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
    "buyer":"Uno Minda（汽车零部件）",
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
    "buyer":"Tata Motors（整车厂）",
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
    "buyer":"Ather（电动两轮车）",
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
    "buyer":"Ola Electric（电动两轮车）",
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
    "buyer":"Dr Reddy's",
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
    "buyer":"Aurobindo",
    "transship":false,
    "via":"",
    "downstream":"自产制剂",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"公司级直供合同未公开，为代表性推断",
    "source":[22]
  }, {
    "seller":"华北制药（NCPC，青霉素/6-APA 中间体）",
    "year":"2024",
    "goods":"6-APA（青霉素中间体）",
    "hs":"2941.10",
    "buyer":"Aurobindo / Lyfius Kakinada 青霉素 G→6-APA 厂",
    "transship":false,
    "via":"",
    "downstream":"本土自产替代（降依赖约 50%），仍部分依赖中国",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"公司级直供合同未公开，为代表性推断",
    "source":[4, 23]
  }],
  "盾构机（TBM）":[{
    "seller":"中铁装备 CREG（郑州）",
    "year":"2025",
    "goods":"盾构机（TBM）",
    "hs":"8430.41",
    "buyer":"Mumbai Metro 3 号线（MMRC）",
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
    "buyer":"孟买-艾哈迈达巴德高铁项目",
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
    "buyer":"印度 BRO 边境战略通道项目",
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
    "buyer":"Waaree",
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
    "buyer":"Adani（Jamnagar 建厂）",
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
    "buyer":"Reliance（Jamnagar 光伏野心）",
    "transship":false,
    "via":"",
    "downstream":"本土拉棒/切片",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"上游直供合同未公开，为代表性推断",
    "source":[27]
  }],
  "电子 / 电信 / 电气产品":[{
    "seller":"华为（Huawei）",
    "year":"2020（存量）",
    "goods":"5G 基站与传输设备",
    "hs":"8517.62",
    "buyer":"BSNL / Airtel / Reliance Jio（网络）",
    "transship":false,
    "via":"",
    "downstream":"自组网/运维，供电信与部分政府网络",
    "military":true,
    "militaryNote":"印军/边防通信网曾含中国设备隐患；2020 后限制但存量与替代仍存漏洞（关联监控设备禁令背景）",
    "confidence":"documented",
    "note":"电信设备具潜在国防/安全用途",
    "source":[111, 29]
  }, {
    "seller":"小米（Xiaomi）",
    "year":"2024",
    "goods":"智能手机整机/模组",
    "hs":"8517.13",
    "buyer":"Dixon Technologies（代工）",
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
    "buyer":"富士康 India（EMS）",
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
  }, {
    "seller":"比亚迪（BYD）",
    "year":"2024",
    "goods":"锂离子电池 PACK",
    "hs":"8507.60",
    "buyer":"Tata AutoComp / Tata Motors",
    "transship":false,
    "via":"",
    "downstream":"自产电池包供 EV/储能",
    "military":false,
    "militaryNote":"未见新证据",
    "confidence":"representative",
    "note":"EV 电池与三电配套；具体直供合同未见公开，为代表性推断",
    "source":[31]
  }, {
    "seller":"ATL（新能源科技，经东南亚）",
    "year":"2024",
    "goods":"锂离子电芯",
    "hs":"8507.60",
    "buyer":"印度 Pack 厂",
    "transship":true,
    "via":"东南亚",
    "downstream":"本地 Pack 后供 EV",
    "military":false,
    "militaryNote":"未见新证据",
    "confidence":"representative",
    "note":"电芯经东盟中转常见",
    "source":[31]
  }],
  "智能手机零部件":[{
    "seller":"舜宇光学 / 丘钛（经 Dixon 印度子公司）",
    "year":"2024",
    "goods":"手机摄像头模组",
    "hs":"8525.89",
    "buyer":"Dixon Technologies",
    "transship":false,
    "via":"",
    "downstream":"组装成手机后内销/出口（自产整机）",
    "military":false,
    "militaryNote":"未见公开军工端用途证据（消费电子）",
    "confidence":"documented",
    "note":"舜宇/丘钛经 Dixon 收购的印度子公司供货（ImportGenius）；零部件自华 51.7%",
    "source":[123, 33]
  }, {
    "seller":"立讯精密（Luxshare）",
    "year":"2024",
    "goods":"精密连接器与结构件",
    "hs":"8536.69",
    "buyer":"塔塔电子（Tata Electronics）",
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
    "buyer":"Maruti Suzuki（整车厂）",
    "transship":false,
    "via":"",
    "downstream":"供整车厂车用玻璃",
    "military":false,
    "militaryNote":"未见",
    "confidence":"documented",
    "note":"福耀对印汽车玻璃 4529 批海关记录（ImportGenius）",
    "source":[123]
  }, {
    "seller":"均胜电子（Joyson）",
    "year":"2024",
    "goods":"安全气囊与汽车电子",
    "hs":"8708.95",
    "buyer":"Uno Minda（汽车零部件）",
    "transship":false,
    "via":"",
    "downstream":"供 Maruti/Tata/Mahindra 整车（自产零部件）",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"汽车电子/内饰供应商；具体直供合同未见公开，为代表性推断",
    "source":[123]
  }, {
    "seller":"宁波华翔（Huaxiang）",
    "year":"2024",
    "goods":"汽车内外饰件",
    "hs":"8708.29",
    "buyer":"SAMVARDHANA MOTHERSON（零部件）",
    "transship":false,
    "via":"",
    "downstream":"供整车厂内外饰件",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"具体直供合同未见公开，为代表性推断",
    "source":[123]
  }],
  "纺织品和服装":[],
  "医疗器械与科学仪器":[{
    "seller":"迈瑞医疗（Mindray）",
    "year":"2021（新冠期）",
    "goods":"监护仪/呼吸机/超声",
    "hs":"9018.19",
    "buyer":"AIIMS / HLL Lifecare（医院与采购）",
    "transship":false,
    "via":"",
    "downstream":"医院临床自用（ICU/呼吸机/监护）",
    "military":false,
    "militaryNote":"政府以国防/数据安全为由启动审查，但未见直接流向武装部队证据",
    "confidence":"documented",
    "note":"新冠期供应数千台",
    "source":[121]
  }, {
    "seller":"联影医疗（United Imaging）",
    "year":"2025",
    "goods":"CT/PET-CT 影像设备",
    "hs":"9022.12",
    "buyer":"Medikabazaar 代理 → Superhealth 等医院",
    "transship":false,
    "via":"",
    "downstream":"医院装机 CT/PET-CT 700+ 台",
    "military":false,
    "militaryNote":"未见",
    "confidence":"documented",
    "note":"6 年累计对印超 $1B，2025-12 单笔 20 亿人民币",
    "source":[122]
  }, {
    "seller":"中国 IVD/耗材（经香港/新加坡/马来）",
    "year":"2024",
    "goods":"体外诊断试剂与耗材",
    "hs":"3822.00",
    "buyer":"Dr Lal / SRL 等诊断实验室",
    "transship":true,
    "via":"香港/新加坡/马来",
    "downstream":"自产检测服务",
    "military":false,
    "militaryNote":"未见",
    "confidence":"documented",
    "note":"约 40% 被标「印度制造」白牌规避 CDSCO（AiMeD）",
    "source":[127]
  }],
  "玩具":[{
    "seller":"中国 OEM（珠三角产业带）",
    "year":"2024",
    "goods":"塑料/电子玩具",
    "hs":"9503.00",
    "buyer":"Mattel India",
    "transship":false,
    "via":"",
    "downstream":"零售（Hamleys/Reliance Retail）/电商",
    "military":false,
    "militaryNote":"未见",
    "confidence":"documented",
    "note":"华货占 $40.2M",
    "source":[126]
  }, {
    "seller":"中国 OEM（浙江）",
    "year":"2024",
    "goods":"玩具与气球",
    "hs":"9503.00",
    "buyer":"Leo Godt / Bharat Balloon",
    "transship":false,
    "via":"",
    "downstream":"零售/批发",
    "military":false,
    "militaryNote":"未见",
    "confidence":"documented",
    "note":"对华直供代表",
    "source":[126]
  }, {
    "seller":"中国 OEM（经新加坡/香港/越南）",
    "year":"2024",
    "goods":"玩具",
    "hs":"9503.00",
    "buyer":"印度进口商",
    "transship":true,
    "via":"新加坡/香港/越南",
    "downstream":"零售",
    "military":false,
    "militaryNote":"未见",
    "confidence":"documented",
    "note":"经新加坡 $13.1M、香港 $2.7M 中转；越南 14 张外资玩具 BIS 许可被用作转口",
    "source":[126]
  }],
  "工程机械与工业机械（通用）":[{
    "seller":"徐工（XCMG）",
    "year":"2024",
    "goods":"履带式起重机",
    "hs":"8426.49",
    "buyer":"Reliance Industries（SANSAN 电厂）",
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
  }, {
    "seller":"三一重工（Sany）",
    "year":"2024",
    "goods":"挖掘机与混凝土机械",
    "hs":"8429.52",
    "buyer":"L&T / Tata Projects / ONGC / HPCL（EPC）",
    "transship":false,
    "via":"",
    "downstream":"基建/能源项目施工",
    "military":false,
    "militaryNote":"未见",
    "confidence":"representative",
    "note":"经经销商供货，下游为代表性推断",
    "source":[38]
  }, {
    "seller":"三一重工（Sany）",
    "year":"2024",
    "goods":"挖掘机/工程机械",
    "hs":"8429.52",
    "buyer":"印度 BRO 边境国防基建",
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
    "buyer":"印度（SFIA 渠道）",
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
    note: "FY2024-25（PIB/DGCIS 价值口径）：金属磁体 81.3%（数量口径 90.4%，自华 $1.11 亿）、其他磁体 59.6%（数量 84.8%）、电磁吸盘 31.6%；FY25 稀土磁体进口约 $2 亿、约 85% 自华（ICRA）。 FY2025-26 动态：中国 2025-04 实施稀土磁体出口许可管制，ICRA 预警印度车用磁体库存 2025 年 7 月中告急；全年份额未变（仍约 85% 值 / >90% 量），政府 2025-12 推出 ₹7,280 亿 REPM 国产计划 [79]。" },
  { name: "太阳能电池 / 组件", source: 60,
    labels: ["光伏电池 (8541.42)", "光伏组件 (8541.43)"], values: [82.7, 78.9],
    note: "FY2024-25（GTRI）：电池 82.7%、组件 78.9% 自华 —— 较 FY24（约 56%/65%）显著上升，本土组件扩产反而拉高上游电池对华采购。 FY2025-26 最新动态：据 Rubix Data Sciences（经 Financial Express 2026），印度光伏电池自华占比 FY25 83%→FY26* 约 65%（本土电池产能释放），组件受 ALMM 约束进口额同比降约 54%；但上游硅片/电池仍高度依赖中国 [73]。" },
  { name: "硅片（光伏上游）", source: 60,
    labels: ["太阳能级硅片 (3818.00)"], values: [96.8],
    note: "FY2024-25 印度硅片 96.8% 自华（GTRI）。背景：印度尚无商业多晶硅/硅锭产能（MNRE 2025-02 向议会确认），光伏上游几乎完全依赖进口。原「多晶硅·中国全球份额 91%」为全球产能指标、不代表印度进口依赖，已按口径规范移出柱图。 FY2025-26 最新：Business Today（2026-06）称印度约 98% 硅片、100% 多晶硅自华；MNRE/SolarQuarter（2025-11）确认仍无商业多晶硅产能 [74]。\n　　[细分边界] HS 3818.00 在印度海关为光伏硅片整品目、不公开尺寸/技术子目；行业口径下印度进口硅片 99%+ 为单晶（M10 182mm 与 G12 210mm 主导、多晶已淘汰），TOPCon 占新建产能 70%+；产品级口径建议查 SolarQuarter/InfoLink 等行业数据库。" },
  { name: "电子 / 电信 / 电气产品", source: 60,
    labels: ["手机整机 (8517.13)", "通信基站 (8517.62)", "其他无线通信零件 (8517.79)", "跨 HS84/85 配套 (电路板/电容/电阻)"],
    values: [55, 50, 48, 53],
    note: "FY2024-25（GTRI）：电信与电子产品自华 57.2%。该篮子横跨 HS84/85 两章，主要细分按 8517 子目拆出（8517.13 手机整机、8517.62 基站/通信、8517.79 其他无线零件），配套电子（电路板/电容/电阻等）跨 HS84/85 单独列示；各子目对华依赖度近似产业整体（不含港台约 44%、含港约 56%，GTRI 背景口径）。FY2025-26 最新：小米/OPPO/vivo 持续在印本地化 EMS，对华品牌整机进口下行、零部件采购仍主导（CXO Today 2026-03）[72]。" },
  { name: "锂离子电池", source: 66,
    labels: ["锂离子蓄电池 (8507.60)"], values: [75.2],
    note: "FY2024-25（GTRI）：锂离子电池 75.2% 自华（约 $22.6 亿）。背景：印度本土几乎无正/负极材料产能（中国占全球 LFP 正极 >98%、人造石墨负极约 85%），但该两项为全球产能集中度、非印度进口占比，已移出柱图。 FY2025-26 最新：Forbes India（2025 末）称印度锂电对华依赖升至约 79%、进口额达 $33 亿 [75]。\n　　[细分边界] HS 8507.60 为锂离子蓄电池整 HS、无 6 位子目；下游用途按 FY2025-26 行业拆分——动力电池（EV/两轮/储能牵引）约 60%、储能电池约 25%、消费电子电池约 15%（ICRA/Counterpoint 印度电芯进口结构）；HS 8507.60 含动力/储能/消费三类，公开数据无产品级对华依赖度。" },
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
        note: "UN Comtrade 中国海关（HS 8517 整体含手机/基站/通信设备）｜UN Comtrade 2025 中国官方数据延迟发布（预计 2026 年底）；中国海关总署 2025 全年对越南出口 $1,981.5 亿（+22.4%）——国家层面总量供参考"
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
          2024: 16480
        },
        note: "UN Comtrade 中国海关（HS 8542 集成电路整章）｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对越南出口 $1,981.5 亿（+22.4%，国家层面）"
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
          2024: 947,
          2025: 1100
        },
        note: "越南海关 GSO：机械设备对印出口 2021 $430M / 2022 $800M / 2024 $950M / 2025 $1,100M（+11.3%）；2023 越南海关仅公布 1-11 月机械对印 $838M（全年未单独公布，当年对印总出口 $8,490M 为参照）"
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
        note: "UN Comtrade 中国海关 HS 2804.61｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对泰国出口 $1,035.0 亿（+20.3%，国家层面）"
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
          2023: 5,
          2024: 52
        },
        note: "UN Comtrade 中国海关 HS 3818.00｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对印尼出口 $610.4 亿（+11.9%，国家层面）"
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
        note: "UN Comtrade 中国海关 HS 2804.61｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对马来出口 $1,036.8 亿（+2.8%，国家层面）"
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
        note: "UN Comtrade 中国海关 HS 8430.31｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对新加坡出口 $826.7 亿（+5.2%，国家层面）"
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
        note: "UN Comtrade 中国海关 HS 8430.31｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对阿联酋出口 $521.4 亿（国家层面）"
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
        note: "UN Comtrade 中国海关 HS 8426（含 8426.41 + 8426.49）｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对阿联酋出口 $521.4 亿（国家层面）"
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
        note: "UN Comtrade 中国海关 HS 8507.60｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对泰国出口 $1,035.0 亿（+20.3%，国家层面）"
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
        note: "UN Comtrade 中国海关 HS 9503.00｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对新加坡出口 $826.7 亿（+5.2%，国家层面）"
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
        note: "UN Comtrade 中国海关 HS 8541（含 8541.42 + 8541.43）｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对印尼出口 $610.4 亿（+11.9%，国家层面）"
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
        note: "UN Comtrade 中国海关 HS 8507.60｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对阿联酋出口 $521.4 亿（国家层面）"
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
      surgeNote: "中国→香港 8542 HS 2024 $67,600M（创历史高位）；印度自港 8542 HS 进口多年高位稳定",
      china: {
        source: 130,
        years: {
          2021: 67900,
          2022: 62900,
          2023: 57900,
          2024: 67600
        },
        note: "UN Comtrade 中国海关 HS 8542（含 8542.31 + 8542.32 + 8542.39 全章组，对港出口）｜UN Comtrade 2025 中国官方数据延迟发布；海关总署 2025 对香港出口 $2,400.3 亿（+16.1%，国家层面）"
      },
      india: {
        source: 140,
        years: {
          2021: 22120,
          2022: 22220,
          2023: 20264
        },
        note: "印度 DGCI&S 国际期刊 ITJ（itj.dgciskol.gov.in）：印度自香港 HS 8542 进口 2021 $22,120M / 2022 $22,220M / 2023 $20,260M（全球第二来源，仅次中国大陆）；2024-2025 HS6 明细未上链公开"
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
    { year: "2026-07-04", title: "印度大使呼吁扩大对华市场准入", desc: "印度驻华大使 Vikram Doraiswami 在清华大学世界和平论坛（2026-07-04）公开呼吁扩大印度药品、IT 出口与农产品对华准入；确认印度已放宽中国投资门槛（电子元件/资本货物/太阳能电池等领域，中方持股≤10% 自动审批），希望双边「扩宽可贸易商品篮子」[129]。", source: 129 }
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
    { year: "2026-H1", title: "中印贸易 H1 创新高、逆差同步扩大", desc: "据中国海关：2026-H1 中印双边贸易 $917.2 亿（同比 +23.6%）；中方对印出口 $794.1 亿（+21.8%）、自印进口 $123.1 亿（+37.2%）；印度逆差 $671 亿（半年）。印度出口高增长集中于 PCB、OLED 显示模组、炼油产品、轻石脑油；中方对印出口以电信设备、锂电池、半导体、服务器、机电为主（InduQin 2026-07）。", source: 53 }
  ]
};
