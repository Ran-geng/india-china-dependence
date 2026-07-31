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
  { id: 107, name: "中国商务部 公告 2025 年第 24 号 / 第 42 号· 对印度氯氰菊酯征 48.4%–166.2% 反倾销税（5 年，2025-05-07 起）；对原产印度单模光纤反倾销期终复审立案（2025-08-14，继续征 7.4%–30.6%）", url: "https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=102876" }
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
const LAST_UPDATED = "2026-07-28";

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
const DEPENDENCE_INDUSTRIES = [
  {
    key: "raw",
    group: "原材料 / 关键矿产",
    name: "稀土永磁体",
    dependency: 80,
    metric: "中国加工全球约 90% 稀土供应；印度 FY24-25 自华永磁体进口占其总进口约 78–81%（HS 8505.11 90 对华 81.3%）。",
    source: 12,
    detail: {
      intro: "以钕铁硼（NdFeB）为主的稀土永磁体是电动汽车电机、风电、消费电子与国防系统的核心部件。印度无商业规模的烧结 NdFeB 上游产能，国内加工能力仅约 3000–5000 吨/年，进口满足大部分需求。",
      hs: [
        { code: "8505.11", name: "金属制永磁体" },
        { code: "8505.19", name: "其他材料永磁体" },
        { code: "8505.90", name: "电磁起重吸盘等" }
      ],
      tradeYearly: [
        { period: "FY22-23", value: 88.42, unit: "百万美元", note: "HS 8505.11 90 自华进口" },
        { period: "FY23-24", value: 90.80, unit: "百万美元", note: "对华依赖约 72.8%" },
        { period: "FY24-25", value: 110.68, unit: "百万美元", note: "对华依赖约 81.3%（占印度该税号总进口）" }
      ],
      tradeMonthly: [
        { period: "FY26 上半年 (4–9月)", value: 16281, unit: "吨", note: "永磁体进口量同比 -56%（中国出口管制 + 车企切换轻稀土/无稀土电机）" }
      ],
      alternatives: [
        { country: "日本", note: "占印度磁体进口值约 10–15%" },
        { country: "韩国", note: "WITS 2024（HS8505.19）自韩 $6.77M" },
        { country: "越南", note: "WITS 2024 自越 $3.99M" },
        { country: "德国", note: "高端磁体来源" }
      ],
      sellers: [
        { name: "金力永磁（JL MAG，赣州）", note: "全球高性能 NdFeB 龙头，产能约 3.8 万吨/年，下游含 EV/风电/机器人" },
        { name: "宁波韵升（Ningbo Yunsheng）", note: "年产能约 2.1 万吨烧结 NdFeB" },
        { name: "中科三环（Zhong Ke Sanhuan）", note: "中科院背景，汽车/工业 OEM 主力供应商" },
        { name: "烟台正海（Zhenghai）", note: "车规级高温钕铁硼磁体" },
        { name: "横店东磁（DMEGC）/ 英洛华（Innuovo）/ 银河磁体", note: "其他主要厂商" }
      ],
      buyers: [
        { name: "Tata Motors / Mahindra", note: "本土车企，EV 电机磁体采购方" },
        { name: "Ola Electric / Ather", note: "电动两轮车龙头，磁体需求大" },
        { name: "Uno Minda / SAMVARDHANA MOTHERSON / Sona BLW", note: "汽车零部件供应商" },
        { name: "Bharat Forge / 印度电子代工厂", note: "电机与精密制造" }
      ],
      coNote: "印度无商业规模烧结 NdFeB 上游产能，公开来源未单列「自华采购的具体企业清单」；以上为公开可查的已知采购方与行业代表，非海关全量名单。",
      coSource: [44, 12],
      sources: [12, 21]
    }
  },
  {
    key: "raw",
    group: "原材料 / 关键矿产",
    name: "原料药（API/关键起始物料）",
    dependency: 74,
    metric: "印度约 70–80% 散装药/原料药自华进口；FY24-25 API 进口约 $4.35B，中国占 73.7%。其中青霉素中间体 6-APA（已并入本类）对华依赖高达 95%，是最突出的子类。",
    source: 4,
    detail: {
      intro: "API（原料药）是药品活性成分。印度号称「世界药房」，但 70–80% 的 API 依赖进口，多数来自中国，是印度医药供应链最脆弱环节之一。本类已并入青霉素中间体 6-APA（对华依赖约 95%，见下方 HS 与贸易明细），不再单列重复展示。",
      hs: [
        { code: "2941.10", name: "青霉素及其盐" },
        { code: "2941.10.50", name: "6-APA（青霉素中间体，已并入本类）" },
        { code: "2941.90", name: "其他抗生素" },
        { code: "2933 / 2936", name: "维生素类" },
        { code: "2922", name: "氨基酸类" }
      ],
      tradeYearly: [
        { period: "FY23-24", value: 396.51, unit: "百万美元", note: "6-APA 自华进口，对华依赖 94.08%（PIB Annexure-I）" },
        { period: "FY24-25", value: 407.64, unit: "百万美元", note: "6-APA 对华依赖 95.92%" },
        { period: "FY24-25", value: 3204.67, unit: "百万美元", note: "中国占印度 API 进口 73.7%（总额约 $4.35B）" }
      ],
      tradeMonthly: [],
      alternatives: [
        { country: "本土产能", note: "Aurobindo/Lyfius Kakinada 厂：青霉素 G → 6-APA，预计降依赖约 50%" },
        { country: "欧盟", note: "占印度药品进口 13.64%（$593M）" },
        { country: "新加坡", note: "2.49%" },
        { country: "美国", note: "1.96%" },
        { country: "日本", note: "1.82%" }
      ],
      sellers: [
        { name: "新和成（NHU）/ 华海药业 / 九洲药业 / 普洛药业 / 国邦医药 / 天新药业 / 仙琚制药 / 天宇股份 / 美诺华", note: "中国原料药出口头部企业；印度为其第一大出口市场（2023 占中国原料药出口约 15%）" },
        { name: "青霉素/6-APA、维生素、抗生素类企业", note: "全球主力供应商（中国占全球原料药产能约 30%、抗生素近 30%）" }
      ],
      buyers: [
        { name: "Sun Pharma / Cipla / Aurobindo / Lupin / Dr Reddy's / Zydus(Cadila) / Torrent / Mankind", note: "印度制剂与原料药企业，大量进口中国中间体与 API" },
        { name: "本土 API 园区（如 Aurobindo/Lyfius Kakinada 青霉素 G→6-APA 厂）", note: "部分自产替代，但整体仍高度依赖中国" }
      ],
      coNote: "中国医药保健品进出口商会数据显示 2023 年印度自华进口原料药及中间体约 101.5 亿美元、占其整体进口 68.8%；企业级采购清单未公开，以上为公开可查代表。",
      coSource: [40, 4],
      sources: [4, 22, 23]
    }
  },
  {
    key: "raw",
    group: "原材料 / 关键矿产",
    name: "大宗 / 精细化学品（乙酸、甲醇、异丙醇等）",
    dependency: 25,
    metric: "该类对华依赖高度不均：乙酸（HS 2915.21）2024 年自华约 53%，二氯甲烷、马来酸酐亦较高；而甲醇（HS 2905.11）仅约 4.3% 自华（中东主导），异丙醇受反倾销税限制占比极低。需按子品类分别看待。",
    source: 36,
    detail: {
      intro: "大宗/精细化学品（乙酸、甲醇、二氯甲烷、异丙醇、马来酸酐等）广泛用于塑料、胶粘剂、制药与电子。印度是净进口国，但各子品类对华依赖差异极大——不能一概而论。",
      hs: [
        { code: "2915.21", name: "乙酸（acetic acid）" },
        { code: "2903.11", name: "二氯甲烷（methylene chloride）" },
        { code: "2917.14", name: "马来酸酐（maleic anhydride）" },
        { code: "2905.11", name: "甲醇（methanol）" },
        { code: "2905.12", name: "异丙醇（IPA，受反倾销税）" }
      ],
      tradeYearly: [
        { period: "2024", value: 271, unit: "百万美元", note: "乙酸（HS 2915.21）自华进口，占印度乙酸总进口约 53%（总额约 $522.88M）" },
        { period: "2021", value: 41.36, unit: "百万美元", note: "甲醇（HS 2905.11）自华进口，仅占印度甲醇总进口 $959.97M 的约 4.3%；主要来源为沙特/卡塔尔/阿曼/阿联酋" }
      ],
      tradeMonthly: [],
      alternatives: [
        { country: "沙特/卡塔尔/伊朗/阿曼/阿联酋", note: "甲醇主要来源（中东主导）" },
        { country: "马来西亚/新加坡", note: "乙酸主要替代来源（2024 各约 24%/12%）" },
        { country: "韩国/中国台湾", note: "异丙醇等受反倾销税品类的免税替代来源" },
        { country: "印度本土（Deepak 等）", note: "异丙醇本土产能" }
      ],
      sellers: [
        { name: "华鲁恒升（Hualu Hengsheng）", note: "国内最大冰醋酸生产商（合计产能约 150 万吨/年）" },
        { name: "江苏索普（Jiangsu Sopo）/ 上海华谊 / 塞拉尼斯（Celanese，南京）/ 鲁南化工", note: "冰醋酸头部企业（年产能均超百万吨）" },
        { name: "鲁西化工等", note: "二氯甲烷/有机化学品供应商" }
      ],
      buyers: [
        { name: "印度大型化工与制药企业（如 UPL、Aarti Industries、Deepak Fertilisers 等）", note: "具体采购商未公开披露" }
      ],
      coNote: "印度是 2024 年中国冰醋酸第一大出口目的地；企业级采购商清单未公开，以上为公开可查代表。",
      coSource: [45, 36],
      sources: [34, 35, 36, 37]
    }
  },
  {
    key: "machine",
    group: "工程器械与设备",
    name: "盾构机（TBM）",
    dependency: 70,
    metric: "中国产 TBM 约占全球市场 70%（人民日报 2024-05；中铁装备产销量连续多年世界第一）。印度方面，据 Takshashila 对印度商工部数据的分析，其 TBM 进口对华依赖已明显多元化——自行式 TBM（HS 84303190）自华份额已降至极低，标准 TBM（HS 84303120）虽仍对华较高（近年约六成、较 2019 年近 100% 大幅下降）；孟买地铁 3 号线 18 台 TBM 中 8 台中资制造、其余亦在华制造。",
    source: 24,
    detail: {
      intro: "隧道掘进机（TBM/盾构机）是地下隧道开挖的大型成套装备，含上万个零部件，制造壁垒极高，被称为「工程机械之王」。",
      hs: [
        { code: "8430.31", name: "隧道掘进机（TBM）" }
      ],
      tradeYearly: [],
      tradeMonthly: [],
      alternatives: [
        { country: "德国 Herrenknecht", note: "全球龙头，约 16–28% 份额；在印供给近年转向其金奈工厂本土制造" },
        { country: "日本", note: "Hitachi Zosen / Mitsubishi / Komatsu" }
      ],
      sellers: [
        { name: "中铁重工（CRCHI）", note: "长沙，印度孟买沿海公路/班加罗尔地铁等项目的 TBM 供应商" },
        { name: "中铁装备（CREG，中铁工程装备）", note: "郑州，全球产销量第一，出口 34+ 国家" },
        { name: "中交天和（CCCC Tianhe）/ 上海隧道股份", note: "其他在印中资/中制造 TBM 厂商" }
      ],
      buyers: [
        { name: "L&T（Larsen & Toubro）/ Afcons（Shapoorji Pallonji）/ Tata Projects / HCC", note: "印度基建总包与 TBM 采购方" },
        { name: "DMRC（德里地铁）/ MMRC（孟买地铁 3 号线）/ RVNL", note: "地铁与铁路项目业主" }
      ],
      coNote: "孟买地铁 3 号线 18 台 TBM 中 8 台为中企制造、另 10 台亦在华制造；具体采购合同方未全公开，以上为公开可查项目与承包商。Takshashila 基于印度商工部数据指出，印度 TBM 进口对华依赖已多元化，标准 TBM 自华占比由 2019 近 100% 降至近年约六成。",
      coSource: [38, 25, 72],
      sources: [24, 25, 72],
      note: "公开来源未给出印度自华 TBM 进口的单一海关占比；可查的是中国占全球约 70% 的供给集中度，以及印度按 HS 细分的进口结构（自行式 TBM 自华极低、标准 TBM 仍较高），故未给单一「印度对华进口份额」数值。"
    }
  },
  {
    key: "machine",
    group: "工程器械与设备",
    name: "太阳能电池 / 组件",
    dependency: 63,
    metric: "FY24 印度太阳能设备进口约 $7B，自华 $3.89B（占 62.6%）；电池对华份额由 FY22 >90% 降至 2024 的 56%，组件 65%。",
    source: 7,
    detail: {
      intro: "光伏电池（cell）与组件（module）是太阳能发电核心件。印度装机猛增但上游制造薄弱，长期依赖进口。",
      hs: [
        { code: "8541.43", name: "光伏电池（cell）" },
        { code: "8541.42", name: "已封装光伏组件（module）" }
      ],
      tradeYearly: [
        { period: "FY23", value: 19669, unit: "千万卢比 (₹cr)", note: "GTRI 进口账单" },
        { period: "FY24", value: 54208, unit: "千万卢比 (₹cr)", note: "峰值，约 $7B，其中自华 $3.89B（62.6%）" },
        { period: "FY26", value: 31572, unit: "千万卢比 (₹cr)", note: "回落" }
      ],
      tradeMonthly: [
        { period: "2024 Q3", value: 3.8, unit: "十亿美元", note: "Mercom：印度太阳能组件+电池进口环比 +27.7%" }
      ],
      alternatives: [
        { country: "越南", note: "$1.02B（16.5%），但多依赖中国硅片" },
        { country: "马来西亚", note: "$549.8M（8.9%）" },
        { country: "泰国", note: "$248.8M（4%）" }
      ],
      sellers: [
        { name: "晶科（Jinko）/ 隆基（Longi）/ 天合（Trina）/ 晶澳（JA Solar）", note: "印度组件供应商前列（Mercom 2025：晶科 15.7%/隆基 10.7%/天合 4.4%）" },
        { name: "协鑫集成（GCL System Integration）/ 正信光电", note: "其他在印中国组件商" }
      ],
      buyers: [
        { name: "Waaree Energies（2024 组件出货 14.1% 第一）/ Adani Solar / Tata Power Solar / Vikram Solar / ReNew / Premier Energies", note: "印度组件供应商与开发商" }
      ],
      coNote: "印度自华组件占其进口约 65%（FY24），电池约 56%；ALMM 名录自 2024-04 生效后中国组件出货回落，但仍是最大来源。",
      coSource: [39, 26],
      sources: [7, 26, 8, 9]
    }
  },
  {
    key: "machine",
    group: "工程器械与设备",
    name: "多晶硅 / 硅片（上游）",
    dependency: 97,
    metric: "中国控制全球约 91–93% 多晶硅、97% 硅片产能；印度硅片进口中中国 >99%，上游近乎空白。",
    source: 7,
    detail: {
      intro: "多晶硅是光伏最上游原料，硅片由多晶硅拉棒切片而成，是电池的前驱体。印度该环节近乎空白，高度依赖中国。",
      hs: [
        { code: "2804.61", name: "多晶硅（polysilicon）" },
        { code: "3818.00", name: "硅片/已切片圆片（wafer）" }
      ],
      tradeYearly: [],
      tradeMonthly: [],
      alternatives: [
        { country: "德国 Wacker", note: "全球主要非中国多晶硅厂" },
        { country: "美国", note: "Hemlock / REC" },
        { country: "马来西亚", note: "部分渠道" }
      ],
      sellers: [
        { name: "通威（Tongwei，约 91 万吨产能，全球第一）/ 协鑫（GCL，48 万吨）/ 大全（Daqo，35 万吨）/ 新特（Xinte，30 万吨）", note: "全球前十占 9 席、合计 65% 份额" },
        { name: "青海丽豪 / 新疆东方希望 / 亚洲硅业", note: "其他主要厂" }
      ],
      buyers: [
        { name: "Adani / Waaree / Reliance（光伏野心）/ Premier Energies", note: "印度硅片/电池/组件制造商与集成商" }
      ],
      coNote: "中国占全球多晶硅约 93.5%、硅片约 97%；印度上游近乎空白，硅片进口中中国 >99%。",
      coSource: [41, 7],
      sources: [7, 27, 28],
      note: "中国占全球多晶硅 91–93%、硅片 97%；印度硅片进口中中国 >99%，分项货值公开有限。"
    }
  },
  {
    key: "part",
    group: "零部件",
    name: "电子 / 电信 / 电气产品",
    dependency: 44,
    metric: "2023-24 印度电子/通信/电器进口 $89.8B，中国大陆单独占比 43.9%（加中国香港 56%）。",
    source: 20,
    detail: {
      intro: "涵盖通信设备（8517）、显示器（8528）、二极管/晶体管/集成电路（8541/8542）等。印度电子制造业增长快，但高附加值部件仍大量自华进口。",
      hs: [
        { code: "8517", name: "电话/通信设备" },
        { code: "8528", name: "显示器/电视" },
        { code: "8541 / 8542", name: "二极管/晶体管/集成电路" }
      ],
      tradeYearly: [
        { period: "FY22", value: 30.3, unit: "十亿美元", note: "自华电子产品" },
        { period: "FY23", value: 27.6, unit: "十亿美元", note: "小幅回落（PLI 效应）" },
        { period: "FY24", value: 39.4, unit: "十亿美元", note: "占印度电子进口 $89.8B 的 43.9%" }
      ],
      tradeMonthly: [],
      alternatives: [
        { country: "越南", note: "主要替代" },
        { country: "中国台湾", note: "高端芯片/组件" },
        { country: "韩国", note: "存储器/显示" },
        { country: "马来西亚", note: "封测/组件" }
      ],
      sellers: [
        { name: "华为（Huawei）/ 小米（Xiaomi）/ OPPO / vivo / 联想（Lenovo）/ TCL / 海尔", note: "通信设备、消费电子与家电头部品牌" },
        { name: "立讯精密 / 歌尔 / 蓝思 / 比亚迪电子 / 富士康（中国台湾，华制造）", note: "关键零部件与 EMS 供应商（见「智能手机零部件」）" }
      ],
      buyers: [
        { name: "Dixon Technologies / Bhagwati（Micromax）/ Optiemus", note: "印度本土 EMS 与组装" },
        { name: "小米/OPPO/vivo 印度公司、三星印度、Reliance Jio", note: "品牌方与采购方" }
      ],
      coNote: "2023-24 印度电子/通信/电器进口中国大陆单独占 43.9%、加中国香港合计约 56%。",
      coSource: [46, 29],
      sources: [29, 30, 20]
    }
  },
  {
    key: "part",
    group: "零部件",
    name: "锂离子电池",
    dependency: 75,
    metric: "印度自华 EV 用锂离子电池 $2.2B，占此类进口 75%（2025 年口径 75.2%）；电动车与储能高度依赖中国电芯。",
    source: 1,
    detail: {
      intro: "锂离子蓄电池（HS 8507.60）是电动车与储能的核心。印度电芯与零部件高度依赖中国。",
      hs: [
        { code: "8507.60", name: "锂离子蓄电池" }
      ],
      tradeYearly: [
        { period: "FY23", value: 2.2, unit: "十亿美元", note: "EV 用锂电池，自华 75%" },
        { period: "FY24", value: 2.2, unit: "十亿美元", note: "自华 75.2%（$2.26B 总进口）" }
      ],
      tradeMonthly: [],
      alternatives: [
        { country: "韩国", note: "占印度电池进口 15–20%" },
        { country: "日本", note: "5–8%" }
      ],
      sellers: [
        { name: "宁德时代（CATL）/ 比亚迪（BYD）/ 亿纬锂能（EVE）/ 国轩高科（Gotion）/ 孚能（Farasis）/ 中创新航（CALB）/ 海辰（Hithium）/ 瑞浦兰钧（REPT）", note: "印度锂电进口前列（EVTank 2025：CATL 居首，合计占印进口约 68%）" },
        { name: "蜂巢能源（SVOLT）等", note: "其他在印合作厂商" }
      ],
      buyers: [
        { name: "Ola Electric / Ather / Tata Motors / Mahindra / TVS", note: "EV 与两轮车厂" },
        { name: "Godawari New Energy（GNEPL，8GWh 储能订单）/ Reliance / Energy In Motion（Ravindra 系，500MWh 与 CATL 协议）", note: "储能与商用车" }
      ],
      coNote: "2025 年印度约 75% 锂电进口来自中国；电芯领域 CATL/比亚迪/中创新航/亿纬/国轩合计占印进口约 68%。",
      coSource: [42, 31],
      sources: [31, 32, 1]
    }
  },
  {
    key: "part",
    group: "零部件",
    name: "智能手机零部件",
    dependency: 52,
    metric: "GTRI 真实口径：印度进口智能手机零部件 $7.15B，其中 51.7% 来自中国（传闻的 80% 实为笔记本电脑/平板）。核心零部件仍主要来自中国。",
    source: 33,
    detail: {
      intro: "手机/通信设备（8517）、声学件（8518）等。印度「组装」规模扩大，但核心零部件仍主要来自中国。",
      hs: [
        { code: "8517", name: "手机/通信设备" },
        { code: "8518", name: "扬声器/耳机等声学件" }
      ],
      tradeYearly: [
        { period: "FY25", value: 3.70, unit: "十亿美元", note: "零部件进口 $7.15B 中 51.7% 自华" }
      ],
      tradeMonthly: [],
      alternatives: [
        { country: "越南", note: "三星主导，占美国智能手机进口 30%" },
        { country: "中国台湾", note: "高端 CKD 组装份额" }
      ],
      sellers: [
        { name: "立讯精密（Luxshare）/ 歌尔（GoerTek）/ 蓝思科技（Lens）/ 比亚迪电子（BYD Electronics）/ 闻泰（Wingtech）", note: "声学、结构件、玻璃、组装" },
        { name: "富士康（Foxconn，中国台湾，华厂）/ 龙旗（Longcheer，ODM）", note: "整机代工与 ODM" }
      ],
      buyers: [
        { name: "小米 / OPPO / vivo / realme / 一加", note: "中国品牌在印公司（最大采购方）" },
        { name: "DBG（中国 EMS，印度份额升至 21%）/ 比亚迪电子（印度 7%）/ Dixon Technologies（印度最大 EMS，约 53%）/ Bhagwati（Micromax）", note: "在印 EMS 与组装" }
      ],
      coNote: "GTRI 口径印度进口智能手机零部件 51.7% 自华；中国品牌 + 在印中资 EMS 构成主要采购链。",
      coSource: [43, 33],
      sources: [33, 19],
      note: "所谓「80% 自华」更接近笔记本电脑/平板（80.5%），并非智能手机零部件本身；2024 年印度零部件本土化率仅约 35%。"
    }
  },
  {
    key: "part",
    group: "零部件",
    name: "汽车零配件",
    dependency: 23,
    metric: "GTRI：印度汽车业整体 23.3% 的进口来自中国；但 EV 高价值部件（三电、磁体、功率半导体、PCB）对华依赖高达 66–75%，多数在印车型因进口含量过高不符 PLI 资格（仅 13% 达标）。",
    source: 3,
    detail: {
      intro: "涵盖汽车电子、三电（电池/电机/电控）配套、磁体、功率半导体、PCB、结构件等。印度整车组装快，但核心零部件仍大量自华进口。",
      hs: [
        { code: "8708", name: "机动车辆零件/附件" },
        { code: "8511 / 8512", name: "汽车电气/线束/照明" },
        { code: "8503 / 8501", name: "电机及电控部件" }
      ],
      tradeYearly: [
        { period: "FY24", value: 23.3, unit: "%", note: "汽车业整体进口自华占比（GTRI）" },
        { period: "EV 部件", value: 70, unit: "%（区间）", note: "EV 三电/磁体/功率半导体对华 66–75%（Financial Express）" }
      ],
      tradeMonthly: [],
      alternatives: [
        { country: "日本", note: "汽车电子/半导体传统来源" },
        { country: "韩国", note: "车规半导体/电池材料" },
        { country: "德国", note: "高端零部件" },
        { country: "印度本土（Motherson/Bharat Forge 等）", note: "结构件/线束本地化较高" }
      ],
      sellers: [
        { name: "均胜电子（Joyson）/ 宁波华翔（Huaxiang）/ 中鼎股份（Zhongding）/ 万向（Wanxiang）", note: "汽车电子、内饰、密封与底盘部件对印出口" },
        { name: "宁德时代（CATL）/ 比亚迪（BYD）", note: "EV 电池与三电配套（已并入「锂离子电池」模块，此处指电驱体系）" },
        { name: "福耀玻璃（FY Automotive Glass）", note: "车用玻璃" }
      ],
      buyers: [
        { name: "Tata Motors / Mahindra / Ola Electric / Ather", note: "整车与电动两轮车厂" },
        { name: "Bharat Forge / Samvardhana Motherson / Bosch India / TVS / Bajaj / Hero", note: "零部件与两轮车供应商" }
      ],
      coNote: "印度汽车零配件对华进口以 EV 三电、磁体、半导体、PCB 等为主；以上为公开可查代表企业，非海关全量名单。",
      coSource: [49, 3],
      sources: [49, 3]
    }
  },
  {
    key: "raw",
    group: "原材料 / 工业中间品",
    name: "塑料及其制品",
    dependency: 26,
    metric: "GTRI：印度塑料及其相关物品进口总额约 $18.5B，其中 25.8% 来自中国（约 $4.8B），含塑料板片/薄膜、PVC/聚酯/丙烯酸聚合物等。",
    source: 3,
    detail: {
      intro: "涵盖塑料原料（聚合物初级形态）与塑料制品（板片、薄膜、管材、日用塑料件）。印度是净进口国，中高端制品对华依赖明显。",
      hs: [
        { code: "3901–3914", name: "初级形态塑料（聚乙烯/PP/PVC/聚酯等）" },
        { code: "3924 / 3920", name: "塑料制餐具/板片/薄膜等制品" }
      ],
      tradeYearly: [
        { period: "FY24", value: 4.8, unit: "十亿美元", note: "自华塑料及其制品进口，占该领域 25.8%（总额约 $18.5B）" }
      ],
      tradeMonthly: [],
      alternatives: [
        { country: "沙特/卡塔尔/阿联酋", note: "初级聚合物主要来源" },
        { country: "越南/马来西亚/韩国", note: "塑料制品替代来源" },
        { country: "印度本土（Reliance 等）", note: "上游聚合物产能大，制品环节偏弱" }
      ],
      sellers: [
        { name: "中国联塑（Lesso）/ 金发科技（Kingfa，改性塑料）/ 中国石化（Sinopec，原料）", note: "塑料制品与改性材料对印出口代表" },
        { name: "广东/浙江/江苏塑料制品产业带", note: "板片、薄膜、日用塑料件出口主力" }
      ],
      buyers: [
        { name: "印度塑料加工与包装企业（行业高度分散）", note: "具体采购商未公开披露" },
        { name: "建材/家电/汽车塑料件制造商", note: "下游用户" }
      ],
      coNote: "印度自华塑料及其制品进口约 $4.8B（占 25.8%）；企业级采购清单未公开，以上为公开可查代表。",
      coSource: [3],
      sources: [3]
    }
  },
  {
    key: "consumer",
    group: "消费品 / 轻工",
    name: "纺织品和服装",
    dependency: 42,
    metric: "GTRI：印度纺织品和服装进口 42% 来自中国（Apr2023–Jan2024 约 $3.2B），是各工业门类中自华依赖度最高的品类之一。",
    source: 3,
    detail: {
      intro: "涵盖合成纤维长丝/短纤、面料、针织与成衣。印度纺织业虽大，但中高端面料、合成纤维与成衣仍大量自华进口。",
      hs: [
        { code: "5402 / 5407", name: "合成纤维长丝及其机织物" },
        { code: "5513 / 6006", name: "合成纤维短纤织物/针织布" },
        { code: "6109 / 6204", name: "针织与梭织成衣" }
      ],
      tradeYearly: [
        { period: "Apr2023–Jan2024 (10月)", value: 3.2, unit: "十亿美元", note: "自华纺织品服装进口，占该领域 42%（总额约 $7.6B）" }
      ],
      tradeMonthly: [],
      alternatives: [
        { country: "越南", note: "成衣主要替代来源" },
        { country: "孟加拉国", note: "成衣（对印出口增长）" },
        { country: "土耳其/韩国", note: "中高端面料" }
      ],
      sellers: [
        { name: "恒力集团（Hengli）/ 荣盛石化（Rongsheng）/ 桐昆股份", note: "合成纤维与面料上游" },
        { name: "申洲国际（Shenzhou，针织成衣）/ 浙江/江苏/广东纺织服装产业带", note: "对印出口代表" }
      ],
      buyers: [
        { name: "Raymond / Arvind / Welspun / Trident / Vardhman", note: "印度服装与家纺制造商" },
        { name: "印度零售与品牌采购方", note: "下游渠道" }
      ],
      coNote: "印度纺织品服装进口 42% 自华（约 $3.2B/10月）；企业级采购清单未公开，以上为公开可查代表。",
      coSource: [3],
      sources: [3]
    }
  },
  {
    key: "raw",
    group: "原材料 / 关键矿产",
    name: "钢铁与贱金属",
    dependency: 18,
    metric: "GTRI：印度钢铁与贱金属进口仅 17.6% 来自中国（依赖较低，因印本土钢产能大）；但特种钢、铝材等仍有稳定对华进口。",
    source: 3,
    detail: {
      intro: "涵盖钢材（HS 72）、钢铁制品（73）、铝及铝材（76）等。印度是全球主要产钢国，自给率高，故整体对华依赖度低于电子/机械，但部分特种与加工材仍自华进口。",
      hs: [
        { code: "7208 / 7210", name: "钢铁板带材" },
        { code: "7308 / 7326", name: "钢铁结构体/制品" },
        { code: "7604 / 7606", name: "铝型材/板带" }
      ],
      tradeYearly: [
        { period: "2023", value: 2.99, unit: "十亿美元", note: "自华钢铁进口（SEAIR 中国对印出口口径，占印钢铁与贱金属进口 17.6%）" }
      ],
      tradeMonthly: [],
      alternatives: [
        { country: "日本/韩国", note: "高端板材" },
        { country: "俄罗斯", note: "低价钢坯/板材（2022 后份额升）" },
        { country: "越南/阿联酋", note: "加工钢材" }
      ],
      sellers: [
        { name: "宝武钢铁（Baowu）/ 河钢（HBIS）/ 沙钢（Shagang）", note: "钢材对印出口代表" },
        { name: "宏桥（Hongqiao）/ 中铝（Chalco）", note: "铝及铝材" }
      ],
      buyers: [
        { name: "Tata Steel / JSW Steel / 印度管材与工程制造商", note: "钢铁用户（部分品类印自给）" }
      ],
      coNote: "印度钢铁与贱金属自华进口占 17.6%（较低，因本土产能大）；企业级采购清单未公开，以上为公开可查代表。",
      coSource: [3],
      sources: [3]
    }
  },
  {
    key: "machine",
    group: "医疗设备",
    name: "医疗器械与科学仪器",
    dependency: 16,
    metric: "印度约 75–80% 的医疗器械靠进口；中国为第二大供应国（FY22 占其医疗器械进口 16.4%、$1.35B），并在中低端耗材与诊断设备占比上升。",
    source: 47,
    detail: {
      intro: "涵盖影像（CT/MRI）、监护、呼吸机、透析、植入物、手术耗材与体外诊断设备（HS 90）。印度号称「世界药房」却 80% 医疗设备靠进口，中国在中低端耗材/诊断设备角色上升。",
      hs: [
        { code: "9018", name: "医疗器械与仪器（手术/诊断）" },
        { code: "9019 / 9022", name: "理疗/影像与射线设备" },
        { code: "9001–9004", name: "光学与眼镜类科学仪器" }
      ],
      tradeYearly: [
        { period: "FY22", value: 1.35, unit: "十亿美元", note: "自华医疗器械进口，占印医疗器械进口 16.4%（第二大供应国）" },
        { period: "整体进口依赖", value: 80, unit: "%（全部外国）", note: "印度约 75–80% 医疗器械靠进口（US/德/日/中为主）" }
      ],
      tradeMonthly: [],
      alternatives: [
        { country: "美国", note: "高端影像/植入物最大来源" },
        { country: "德国/日本", note: "影像与精密仪器" },
        { country: "新加坡/荷兰", note: "部分高端设备" }
      ],
      sellers: [
        { name: "迈瑞医疗（Mindray）/ 联影医疗（United Imaging）", note: "监护/超声、CT/MRI 等" },
        { name: "鱼跃医疗（Yuwell）/ 东软医疗（Neusoft）/ 万东医疗 / 新华医疗", note: "监护、影像与耗材" }
      ],
      buyers: [
        { name: "Apollo / Fortis 等医院集团采购方", note: "终端用户" },
        { name: "印度本地医疗器械进口商/经销商", note: "渠道" }
      ],
      coNote: "印度约 80% 医疗器械靠进口，中国为第二大供应国（FY22 $1.35B、占 16.4%），中低端耗材/诊断设备占比升；企业级采购清单未公开。",
      coSource: [47],
      sources: [47, 3]
    }
  },
  {
    key: "consumer",
    group: "消费品 / 轻工",
    name: "玩具",
    dependency: 90,
    metric: "印度市场曾 80–90% 玩具靠进口、其中约 90% 来自中国；2020 起关税由 20% 提至 60% 后进口额由约 $3 亿腰斩至约 $1.5 亿，但中国仍为最大来源。",
    source: 48,
    detail: {
      intro: "涵盖玩具、游戏品与运动器材（HS 95）。印度本土玩具业分散、规模小，长期高度依赖中国进口；高额关税后进口量下降但来源结构未根本改变。",
      hs: [
        { code: "9503", name: "玩具（含电动/毛绒/积木）" },
        { code: "9504", name: "电子游戏机/视频游戏机" },
        { code: "9506", name: "运动器材/健身器材" }
      ],
      tradeYearly: [
        { period: "疫情前 (FY18-19)", value: 0.30, unit: "十亿美元", note: "自华玩具进口约 $300M" },
        { period: "2020 起 60% 关税后", value: 0.15, unit: "十亿美元", note: "进口腰斩至约 $150M，但中国仍占印进口玩具约 90%" }
      ],
      tradeMonthly: [],
      alternatives: [
        { country: "越南", note: "成衣/玩具替代来源" },
        { country: "日本/中国台湾/荷兰", note: "高端玩具与游戏机" },
        { country: "印度本土（Karnataka/U.P. 玩具园）", note: "政策扶持下本地化起步" }
      ],
      sellers: [
        { name: "广东澄海玩具产业带（全球玩具产量约 70–75% 来自中国）", note: "对印出口主力" },
        { name: "奥飞娱乐 / 星辉娱乐等中国玩具品牌", note: "品牌对印出口" }
      ],
      buyers: [
        { name: "印度玩具进口商/贸易商（赴华批量采购群体）", note: "渠道主力" },
        { name: "印度零售与电商", note: "终端" }
      ],
      coNote: "印度市场曾 80–90% 玩具靠进口、其中约 90% 来自中国；2020 起 60% 关税后进口额腰斩但中国仍最大来源；企业级采购清单未公开。",
      coSource: [48],
      sources: [48]
    }
  },
  {
    key: "machine",
    group: "工程器械与设备",
    name: "工程机械与工业机械（通用）",
    dependency: 40,
    metric: "GTRI：印度机械进口约 $19B 来自中国，占其机械进口 39.6%；工程机械（挖掘机/起重机等）与锅炉、汽轮机等通用机械对华依赖高。盾构机（TBM）为其中细分，已单独详述。",
    source: 3,
    detail: {
      intro: "涵盖通用工程机械（挖掘机、起重机、装载机）、锅炉、汽轮机、机床等（HS 84 大类，TBM 除外）。印度基建与制造业扩张带来大量机械进口，中国以性价比占近四成。",
      hs: [
        { code: "8429 / 8431", name: "挖掘机/起重/装载机械" },
        { code: "8402 / 8403", name: "锅炉与汽轮机" },
        { code: "8456 / 8460", name: "机床与金属加工机械" }
      ],
      tradeYearly: [
        { period: "FY24", value: 19.0, unit: "十亿美元", note: "自华机械进口，占印机械进口 39.6%" }
      ],
      tradeMonthly: [],
      alternatives: [
        { country: "日本（小松/日立建机/三菱）", note: "高端工程机械" },
        { country: "德国（利勃海尔/Siempelkamp）", note: "高端与特种机械" },
        { country: "韩国/美国", note: "工程机械与机床" }
      ],
      sellers: [
        { name: "三一重工（Sany）/ 中联重科（Zoomlion）/ 徐工（XCMG）/ 柳工（LiuGong）/ 山东临工（SDLG）", note: "工程机械对印出口代表" },
        { name: "中国锅炉/汽轮机/通用机械制造商", note: "电厂与工业设备" }
      ],
      buyers: [
        { name: "L&T / Tata Projects / Afcons / 各类工业厂", note: "基建与工程总包、工业用户" }
      ],
      coNote: "印度机械进口约 $19B 自华（占 39.6%）；盾构机为细分已单独详述；企业级采购清单未公开，以上为公开可查代表。",
      coSource: [3],
      sources: [3]
    }
  },
  {
    key: "raw",
    group: "原材料 / 工业中间品",
    name: "化肥（磷酸二铵 DAP / 特种肥）",
    dependency: 80,
    metric: "印度化肥进口中，特种/水溶肥约 80% 来自中国（Economic Times）；磷酸二铵(DAP)印度 50–60% 靠进口、其中对华约 25–30%（2023-24 曾达 40%），中国自 2023 年中暂停 DAP 出口许可后份额骤降。尿素/氯化钾(MOP)/磷酸对华依赖低。",
    source: 50,
    detail: {
      intro: "化肥是印度粮食安全（『Make in India』肥料）的关键投入。印度约 20% 尿素、50–60% DAP、约 80% 特种肥、100% MOP 靠进口，但各品类对华依赖差异极大：特种水溶肥高度依赖中国，DAP 次之，磷酸与 MOP 主要来自摩洛哥/约旦/沙特与俄白，并非中国。",
      hs: [
        { code: "3105.30", name: "磷酸二铵（DAP）" },
        { code: "3105.10 / 3105.40", name: "磷酸一铵（MAP）/ 其他磷酸盐" },
        { code: "3105.90", name: "复合/特种水溶肥（NPK/WSF）" },
        { code: "3102.10", name: "尿素（Urea）" },
        { code: "2835.21 / 2809.20", name: "磷酸氢二铵原料 / 磷酸（磷肥中间体）" }
      ],
      tradeYearly: [
        { period: "2023-24", value: 22.28, unit: "十万公吨 (LMT)", note: "DAP 自华进口量，约占印 DAP 总进口 40%（全年 55.67 LMT）" },
        { period: "2024-25", value: 8.47, unit: "十万公吨 (LMT)", note: "DAP 自华进口量，占比降至约 19%；中国出口管制后骤降" },
        { period: "特种肥(2024 H2)", value: 80, unit: "%", note: "印度进口特种/水溶肥约 15–16 万吨，其中中国供 70–80%（Economic Times）" }
      ],
      tradeMonthly: [],
      alternatives: [
        { country: "摩洛哥 / 约旦 / 沙特", note: "磷酸与磷矿主要来源（印 85–90% 磷矿/磷酸靠进口，非中国）" },
        { country: "俄罗斯 / 白俄罗斯", note: "MOP（氯化钾）主要来源，印 100% MOP 靠进口" },
        { country: "沙特 / 俄罗斯 / 摩洛哥", note: "DAP 长期协议来源（2025-26 分别 31/30.1/25 万吨）" },
        { country: "印度本土（IFFCO/Chambal/Coromandel 等）", note: "尿素本土产能大；DAP/特种肥本土化推进中" }
      ],
      sellers: [
        { name: "云天化（Yuntianhua）/ 贵州磷化（瓮福 Wengfu）/ 湖北宜化", note: "磷肥（DAP/MAP）对印出口龙头" },
        { name: "金正大（Kingenta）/ 史丹利（Stanley）/ 新洋丰（Xinyangfeng）", note: "复合肥与特种水溶肥对印出口" },
        { name: "中海化学（CNOOC Chem）/ 华鲁恒升 / 阳煤化工", note: "尿素及氨类" }
      ],
      buyers: [
        { name: "Coromandel International / Chambal Fertilizers / Paradeep Phosphates (PPL)", note: "DAP/MAP 进口与加工主力" },
        { name: "IFFCO / GSFC / Tata Chemicals / Deepak Fertilizers", note: "肥料进口与贸易" },
        { name: "印度农资进口商与农户合作社渠道", note: "终端" }
      ],
      coNote: "印度化肥高度依赖进口，但仅特种水溶肥约 80% 自华、DAP 对华约 25–30%（近年因中国出口管制骤降）；尿素/MOP/磷酸主要来源非中国。以上为公开可查代表企业，非海关全量名单。",
      coSource: [50, 51],
      sources: [50, 51]
    }
  }
];

/* --------- 2.5 各产业「依赖情况及替代可能性」分析报告文本 --------- */
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
  "大宗 / 精细化学品（乙酸、甲醇、异丙醇等）": {
    substitution: "该类对华依赖高度不均，替代可行性需分品类看待。乙酸（2024 自华约 53%）可转向马来西亚、新加坡；甲醇自华仅约 4.3%，中东（沙特/卡塔尔/阿曼/阿联酋）已为主力，几乎不存在替代问题；异丙醇受反倾销税限制，韩国、中国台湾为免税替代来源。总体看，除乙酸等少数子项外，该类整体替代性较好。",
    outlook: "大宗/精细化学品属『结构性低依赖』品类，对华依赖主要集中在特定子项。随印度本土（如 Deepak）产能与东南亚替代渠道成熟，整体对华依赖预计维持 20–30% 区间，风险可控。"
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
    substitution: "传统汽车零配件对华依赖较低（整体 23.3%），结构件、线束本土化较高，日本、韩国、德国为高端替代来源。但电动汽车高价值部件（三电、磁体、功率半导体、PCB）对华依赖高达 66–75%，多数在印车型因进口含量过高不符 PLI 资格（仅 13% 达标）。因此『传统低、电动高』是该类典型特征，替代难点集中在 EV 核心部件。",
    outlook: "汽车零配件呈现『燃油车低依赖、电动车高依赖』分化。随 Motherson、Bharat Forge 等本土化与日韩供应，燃油车部件依赖可控；但 EV 三电体系对华依赖中期仍将高位，是印度汽车电动化的最大制约。"
  },
  "塑料及其制品": {
    substitution: "塑料品类替代可行性较好。初级聚合物主要来自沙特、卡塔尔、阿联酋（中东主导），中国占比约 25.8% 集中在中高端制品与改性材料。越南、马来西亚、韩国为制品替代来源，印度本土（Reliance 等）上游聚合物产能大、制品环节偏弱。因此该类对华依赖以『中高端制品』为主，整体替代性较强。",
    outlook: "塑料及其制品对华依赖（25.8%）处于中等偏低水平，且上游原料高度多元化。随印度本土改性塑料与制品产能提升，该比例有望缓降，整体供应风险可控。"
  },
  "纺织品和服装": {
    substitution: "纺织服装替代可行性中等。印度自华进口 42% 集中在中高端面料、合成纤维与部分成衣，越南、孟加拉国为成衣主要替代，土耳其、韩国覆盖中高端面料。但中国在中高端合成纤维与功能性面料上的成本与规模优势明显，印度本土虽大却在中高端环节偏弱。关税与 PLI 可部分分流，但结构性依赖难消除。",
    outlook: "纺织服装是各工业门类中自华依赖度最高之一（42%）。成衣环节较易转向越南/孟加拉，但中高端面料与合成纤维对华依赖中期仍将维持，是印度纺织升级的主要短板。"
  },
  "钢铁与贱金属": {
    substitution: "钢铁与贱金属对华依赖很低（17.6%），因印度本土钢产能庞大、自给率高。特种钢、铝材等仍有稳定对华进口，但日本、韩国覆盖高端板材，俄罗斯提供低价钢坯/板材（2022 后份额上升），越南、阿联酋补充加工钢材。整体替代性极强，中国仅为众多来源之一。",
    outlook: "钢铁与贱金属是印度对华依赖最低的工业门类之一。本土产能构成天然屏障，对华进口以特种与加工材为主、占比小，供应风险极低，无需特别替代策略。"
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
};

/* --------- 2.6 印度对华依赖产业「总览分析」报告（隐藏式，默认收起） --------- */
/* 与单产业报告共用 {type,text} 段落格式（heading/para/bullet），
 * 由 app.js 用 repSecHTML 渲染到折叠块，并用 IndiaDocx 导出 DOCX。
 * 数据均取自上方 17 个产业模块与 DEPENDENCE_REPORTS，无虚构。 */
const DEPENDENCE_OVERVIEW_REPORT = [
  { type:"heading", text:"一、总体格局" },
  { type:"para", text:"印度与中国的产业依赖呈现「整体逆差、结构集中」的特征。2024-25 财年印度对华贸易逆差约 992 亿美元，且长期扩大。在 17 个被重点研究的产业中，对华依赖度差异极大：从钢铁（17.6%）、医疗器械（对华占其进口 16.4%）的低依赖，到多晶硅/硅片（97%+）、玩具（约 90%）、稀土永磁体（约 80%）、原料药（70–80%）的极高依赖。这种「少数战略品类被牢牢锁定、多数品类可替代」的格局，是理解印度对华产业关系的核心。" },
  { type:"heading", text:"二、依赖度层级结构（按 17 产业归类）" },
  { type:"para", text:"依据各产业对华依赖度（中国在该产业印度进口中的份额），可划分为四档：" },
  { type:"bullet", text:"极高依赖（对华份额 ≥80% 或实质近乎垄断）：多晶硅/硅片（上游，中国控制全球 91–93% 多晶硅、97% 硅片，印度硅片进口中中国 >99%）、玩具（约 90% 靠进口且主要来自中国）、稀土永磁体（约 80%）、原料药（70–80%，关键中间体 6-APA 对华依赖高达 95%）、化肥特种/水溶肥（约 80%）、盾构机（中国占全球 TBM 市场约 70%，印度 TBM 进口对华依赖已多元化、标准 TBM 自华由 2019 近 100% 降至近年约六成）。" },
  { type:"bullet", text:"高依赖（50–80%）：锂离子电池（约 75%）、太阳能电池/组件（FY24 自华约 62.6%，上游硅片/多晶硅近 100%）、电子/电信/电气（中国大陆单独占 43.9%，含中国香港约 56%）、智能手机零部件（约 51.7%，GTRI 真实口径，非传闻的 80%）。" },
  { type:"bullet", text:"中等依赖（20–50%）：纺织服装（约 42%，集中中高端面料与合成纤维）、工程机械与工业机械通用（约 39.6%）、大宗/精细化学品（结构不均，乙酸约 53%、甲醇仅 4.3%）、汽车零配件（整体 23.3%，EV 三电 66–75%）、塑料及其制品（约 25.8%，集中中高端制品）。" },
  { type:"bullet", text:"较低依赖（<20%）：钢铁与贱金属（17.6%，本土产能大、自给率高）、医疗器械（对华占其进口 16.4%，但整体进口依赖约 80%，主卡在美日德高端设备）。" },
  { type:"heading", text:"三、七大结构性特征" },
  { type:"bullet", text:"上游材料与「卡脖子」环节依赖最深：多晶硅/硅片、稀土永磁体、原料药中间体、锂电电芯均处价值链上游，对华依赖最高且最难替代。" },
  { type:"bullet", text:"下游组装与中端制造可分散：智能手机零部件、电子整机、光伏组件有越南/中国台湾/韩/马来分流，依赖度低于上游。" },
  { type:"bullet", text:"「传闻 > 现实」：市场常称手机零件对华 80%，真实口径仅 51.7%，属信息不对称导致的认知偏差。" },
  { type:"bullet", text:"传统 vs 电动分化：汽车零配件、工程机械在燃油/传统领域依赖低，但在 EV 三电、磁体、功率半导体上骤升至 66–75%。" },
  { type:"bullet", text:"战略品类替代窗口长：多晶硅/硅片、稀土分离工艺需 5–10 年技术爬坡，短期无解。" },
  { type:"bullet", text:"转口洗产地放大真实依赖：越南、中国香港、东南亚常被用作绕道，使直接贸易统计低估真实对华依存（如含港电子口径由 43.9% 升至 56%）。" },
  { type:"bullet", text:"政策缓冲有限：PLI、ALMM、关税与本土制造已降低部分品类（DAP、组件）依赖，但上游与战略环节仍锁定。" },
  { type:"heading", text:"四、替代可能性总体评估" },
  { type:"bullet", text:"易替代（可较快本土化或多元采购）：钢铁/贱金属（17.6%）、塑料中高端制品、大宗化学品多数子项、传统汽车零配件、成衣环节（转越南/孟加拉）。" },
  { type:"bullet", text:"中等可替代（需数年投入）：工程机械中低端、智能手机零部件、纺织成衣、电子中端、医疗中低端。" },
  { type:"bullet", text:"难替代（需 5–10 年或结构性突破）：多晶硅/硅片（97%+）、稀土永磁体与分离、原料药中间体（6-APA 95%）、锂电电芯、盾构机高端、玩具中低端（成本与产业带优势）。" },
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
  { name: "大宗 / 精细化学品", source: 36,
    labels: ["乙酸 (2915.21)", "二氯甲烷† (2903.12)"],
    values: [47.4, 5.7],
    note: "乙酸 47.4%（2024-05~2025-04 滚动 12 月，≈基准财年窗口；2024 年曾约 53%）。二氯甲烷 †CY2024 海关口径仅 5.7%（德国/日本已成主供，2019 年曾 >60%，属降依赖案例）[70]。甲醇 CY2024 自华近乎为零（<0.1%）、马来酸酐各来源口径冲突（29%~73%），均不列入柱图以免误导。" },
  { name: "太阳能电池 / 组件", source: 60,
    labels: ["光伏电池 (8541.42)", "光伏组件 (8541.43)"], values: [82.7, 78.9],
    note: "FY2024-25（GTRI）：电池 82.7%、组件 78.9% 自华 —— 较 FY24（约 56%/65%）显著上升，本土组件扩产反而拉高上游电池对华采购。 FY2025-26 最新动态：据 Rubix Data Sciences（经 Financial Express 2026），印度光伏电池自华占比 FY25 83%→FY26* 约 65%（本土电池产能释放），组件受 ALMM 约束进口额同比降约 54%；但上游硅片/电池仍高度依赖中国 [73]。" },
  { name: "硅片（光伏上游）", source: 60,
    labels: ["太阳能级硅片 (3818.00)"], values: [96.8],
    note: "FY2024-25 印度硅片 96.8% 自华（GTRI）。背景：印度尚无商业多晶硅/硅锭产能（MNRE 2025-02 向议会确认），光伏上游几乎完全依赖进口。原「多晶硅·中国全球份额 91%」为全球产能指标、不代表印度进口依赖，已按口径规范移出柱图。 FY2025-26 最新：Business Today（2026-06）称印度约 98% 硅片、100% 多晶硅自华；MNRE/SolarQuarter（2025-11）确认仍无商业多晶硅产能 [74]。" },
  { name: "电子 / 电信 / 电气产品", source: 60,
    labels: ["电信与电子产品 (8517 为主·跨 HS84/85)"], values: [57.2],
    note: "FY2024-25（GTRI）：电信与电子产品自华 57.2%。该篮子横跨 HS84/85 两章、无单一 6 位编码；公开来源未提供基准年内的产品级再细分，按「无法细分则不细分」原则仅列整体（FY24 口径中国大陆 43.9%、含中国香港约 56%，仅作背景）。" },
  { name: "锂离子电池", source: 66,
    labels: ["锂离子蓄电池 (8507.60)"], values: [75.2],
    note: "FY2024-25（GTRI）：锂离子电池 75.2% 自华（约 $22.6 亿）。背景：印度本土几乎无正/负极材料产能（中国占全球 LFP 正极 >98%、人造石墨负极约 85%），但该两项为全球产能集中度、非印度进口占比，已移出柱图。 FY2025-26 最新：Forbes India（2025 末）称印度锂电对华依赖升至约 79%、进口额达 $33 亿 [75]。" },
  { name: "智能手机零部件", source: 60,
    labels: ["电芯 (8507.60)", "显示模组 (8524)", "摄像头模组 (8517.79 项下)", "存储芯片 (8542.32)", "微处理器 (8542.31)", "PCB (8534.00)"],
    values: [75.2, 72, 72, 40.5, 38.2, 37],
    note: "FY2024-25（GTRI 及其转引口径）：零部件进口总额 $71.5 亿、整体 51.7% 自华；显示/摄像头模组约 72%（京东方/天马、舜宇/欧菲光），存储 40.5%（$17.5 亿）、微处理器 38.2%（$16.5 亿）、PCB 37%（$6.1 亿）。显示模组篮子跨 8524.11/12/91 等多个子目，故标品目级。" },
  { name: "汽车零配件", source: 65,
    labels: ["汽车零部件整体 (8708 为主)"], values: [26.7],
    note: "FY2024-25（商务部对议会答复）：零配件进口 $71.7 亿、自华 26.7%（ACMA 口径 32%，较 FY24 的 29% 上升）。原「EV 三电/磁体/半导体 66–75%」缺乏可溯源的基准年出处，已移出柱图；EV 相关依赖见锂离子电池、稀土永磁体两卡。 FY2025-26 最新：ACMA 年度绩效评估（2026-07）称零配件自华占比升至 36%（较 FY25 ACMA 32% 再升）[76]。" },
  { name: "塑料及其制品", source: 67,
    labels: ["PVC 树脂† (3904)"], values: [41],
    note: "†CY2024 海关口径：PVC 树脂约 41% 自华（$22 亿/$57 亿；2025 前 10 月自华 $8.7 亿，GTRI）。塑料及制品整体 25.8%（FY2023-24 GTRI）、板/片/膜 HS3920 41.1%（2022）均非基准年数据，仅作背景不上图。" },
  { name: "纺织品和服装", source: 62,
    labels: ["粘胶人造丝纱线 (5403.31 等)", "起绒织物·MMF (6001.92)", "塑料涂层织物 (5903)", "PU 涂层织物 (5903.20)"],
    values: [99, 93, 68, 52],
    note: "FY2024-25 前 5 个月（2024-04~08，政府 MIP 评估/Texmart）：粘胶人造丝纱线 99%（$1.34 亿）、MMF 起绒织物 93%、塑料涂层织物 68%、PU 涂层织物 52%；粘胶单丝 (5403.31) CY2024 海关口径 98.9%，相互印证 [70]。聚酯纱线 89%（8MFY24）、MMF 面料 62%（CITI）、整体 42%（FY24 GTRI）非基准年，仅作背景。" },
  { name: "钢铁与贱金属", source: 71,
    labels: ["成品钢进口整体 (72 章)"], values: [26.5],
    note: "FY2024-25（钢铁部/JPC · Rajya Sabha 答复，数量口径）：成品钢进口 955 万吨、自华 253 万吨 ≈26.5%，中国为第二大来源（韩国 29% 居首）。FY24 产品级占比（不锈钢 65.1%、镀层 27.3%、热轧 24.9%、合金 23.4% [61]）官方尚未公布 FY25 同口径分项分母，为避免推算误差暂不上图。 FY2025-26 最新：钢铁部数据（Mysteel 2026-04）印度成品钢进口自华占比降至约 23.5%（同比 -3.0pp）[71]。注：分项占比为 FY24 口径。" },
  { name: "医疗器械与科学仪器", source: 70,
    labels: ["CT 扫描仪† (9022.12)", "X 光管† (9022.30)", "X射线/放射设备整体† (9022)", "医疗/外科/牙科器械† (9018)"],
    values: [29.5, 25.4, 22.1, 21.1],
    note: "†CY2024 海关口径（UN Comtrade/WITS/OEC）：CT 扫描仪 29.5%（$5010 万/$1.7 亿）、X 光管 25.4%、放射设备整体 22.1%（$2.18 亿/$9.88 亿）、医疗/外科/牙科器械 21.1%（$5.48 亿/$26 亿，居美国之后第二）。耗材/IVD/植入物无官方对华分项，未列入；旧口径（整体 16.4% FY22、血氧仪 ~98% 2021 市场估算）仅作背景。" },
  { name: "玩具", source: 68,
    labels: ["玩偶/三轮车及其他玩具 (9503.00)"], values: [47.5],
    note: "FY2024-25：HS9503（占玩具进口约 3/4）自华 47.5%（$4020 万/$8470 万）。背景：三编码合计（9503–9505）FY24 自华 64%（GTRI）、2017-18 曾达 90.2% —— 60% 关税+BIS 认证后为印度「降依赖」少数成功案例；游戏机 (9504)/节庆用品 (9505) 无基准年对华分项，未列入。 FY2025-26 动态：PIB（2026）称印度玩具进口较 2017-18 降 66%、2025-26 在 9503/9504/9505 实现 $1.52 亿贸易顺差，对华依赖继续下行 [80]。" },
  { name: "工程机械与工业机械（通用）", source: 63,
    labels: ["平型针织机† (8447.20)", "针织/非织造机械† (8447/8449)", "纺织机械零部件† (8448)"],
    values: [72, 70, 60],
    note: "†CY2024 口径：平型针织机 72.0%（WITS 海关，$3830 万/$5320 万 [70]）、针织与非织造机械约 70%、纺机零部件约 60%（中国纺机协会）。机床 27%（IMTMA，CY2025）、挖掘机约 25%（ICEMA 2025 声明）、机械整体 39.6%（FY24 GTRI）、印刷/锅炉等（PIB 2014-15）均非基准年，仅作背景不上图。" },
  { name: "盾构机（TBM）", source: 24,
    labels: ["隧道掘进机 TBM (8430.31)"],
    values: [70],
    note: "† 非印度海关进口份额，而是中国在全球盾构机市场的供给集中度：中国产 TBM 约占全球 70%（人民日报 2024-05；中铁装备产销量连续多年世界第一）。印度方面，据 Takshashila 对印度商工部数据的分析，其 TBM 进口对华依赖已明显多元化——自行式 TBM（HS 84303190）自华份额已降至极低，标准 TBM（HS 84303120）虽仍对华较高（近年约六成、较 2019 年近 100% 已大幅下降）；孟买地铁 3 号线 18 台 TBM 中 8 台中资制造、其余亦在华制造。公开来源无 FY2024-25 单一「印度对华进口占比」，按「无法细分则不细分」仅列单一品类（HS 8430.31）；该全球份额指标与柱图其他海关进口份额口径不同，作专项呈现。" },
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
  }
];
const TRANSSHIPMENT_CONTEXT = {
  nomura: "据野村证券（Nomura，2025 年中）研究，2025 年 2 月起亚洲自华进口激增（3–4 月同比 +21.7%），年化 900–1000 亿美元；越南出口商品中约 19% 的增加值来自中国，柬埔寨约 29%，印度机械/电子进口含转口成分；印度已修订海关规则应对。",
  carotar: "印度于 2020-09-21 起实施 CAROTAR 2020 收紧原产地审查；2025-03-18 CBIC 第 14/2025 号通告进一步将「原产地证书」改为「原产地证明」，海关可要求发票、生产记录等追加证据，明确针对中国货经东盟、越南、UAE 转口 [85][86]。",
  asean: "自 2010 年印度-东盟自贸协定实施以来，印度对东盟贸易逆差由 50 亿美元扩大至逾 220 亿美元；2025 年越南对印出口达 103 亿美元（+14.2%）、手机电子占近 40%，印方因「含中国原产成分」加强查验 [90]。",
  sources: [88, 85, 86, 90]
};

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
    { year: "2025-26", title: "有限度放宽对华投资/签证", desc: "在电子元件、资本货物、太阳能电池领域放宽限制；允许中方持股≤10% 的资本自动审批入印；简化商务签证。", source: 19 }
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
    { year: "2025-12", title: "WTO 争端：光伏/IT 补贴", desc: "中国就印度光伏及 IT 产品贸易措施提起 WTO 诉讼，指其构成禁止性「进口替代补贴」。", source: 18 }
  ]
};
