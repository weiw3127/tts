import styles from './styles.module.css'; 
const data = [
    ['[電競] EWC 2024 電競世界盃 第一天', 'EWC', '780'],
    ['[爆卦] 民進黨把立院議事人員軟禁在會議室', '民進黨立院軟禁', '568'],
    ['[新聞] 新／刑事局跨國打詐恐落空！ 抓回詐騙疑犯只能「目送離開」', '跨國打詐落空', '541'],
    ['[爆卦] 供電剩6%橘燈警戒了,別開玩笑,該省就省電', '供電橘燈警戒', '510'],
    ['[爆卦] 民進黨今早直接實質癱瘓掉4個委員會開會', '民進黨癱瘓委員會', '373'],
    ['[新聞] 政院修資安法 不配合調查可罰百萬', '政院修資安法', '371'],
    ['[新聞] 軍備局證實陸軍營區使用華為路由器 將懲罰廠商', '軍備局證實陸軍營區', '351'],
    ['[情報] 今日林子偉 二軍4支0', '今日林子偉', '287'],
    ['[問卦] 人資：信箱用yahoo的都廢物', '信箱用yahoo', '286'],
    ['[問卦] 三立這次真的完蛋了，對吧?', '三立完蛋了', '285'],
    ['[問卦] 國動：台灣人跟中國人一樣可憐', '台灣人跟中國人', '285'],
    ['[新聞] 快訊／103台人詐騙峇里島遭逮 刑事局證實「11犯嫌晚間返台」', '103台人詐騙峇里島', '282'],
    ['[情報] Camry正式售價', 'Camry正式售價', '271'],
    ['[新聞] 快訊／疑越界捕魚！基隆漁船遭日保安廳攔截 船長8人被帶走調查', '基隆漁船遭日保安廳', '255'],
    ['[新聞] 自認優於石佛鄧肯！賈奈特喊「球隊沒他好」：我更加全能', '自認優於石佛鄧肯', '253'],
    ['[問卦] 目前用電使用率95% 要繼續開冷氣嗎', '用電使用率95%', '245'],
    ['[情報] Hield去勇士', 'Hield去勇士', '244'],
    ['[花邊] Bronny James出現在夏季聯賽廣告的C位', 'Bronny James出現夏季', '215'],
    ['[新聞] 爆三立節目與詐團聯手推垃圾虛擬貨幣 黃國昌轟法務部：遇到綠媒就不敢辦？', '爆三立聯手垃圾', '213'],
    ['[問卦] 軟禁有什麼委婉的說法嗎', '軟禁什麼說法', '193'],
    ['[新聞] 女員工穿瑜伽褲上班被開除！老闆「看場合穿衣很難？」 她惱羞告性騷', '女員工穿瑜伽褲', '191'],
    ['[遊記] 東京五天五夜重點分享', '東京五天五夜重點分享', '190'],
    ['Re: [心得] 4X之友心得', '4X之友心得', '189'],
    ['[新聞]沒收討論、軟禁公務員、鎖住民主！ 柯文哲斥：賴清德何時才住手？', '柯文哲斥賴清德', '184'],
    ['[情報] 馬刺隊也成為DDR有可能的下家', '馬刺隊成為DDR', '184'],
    ['[新聞] 講晚上好被出征！高捷打破沉默 霸氣「公開籍貫」直球回擊了', '高捷打破沉默', '170'],
    ['[新聞] 湖人撞上「第二土豪線」！Pelinka聯絡數十支球隊 但難談成交易', '湖人撞上第二土豪線', '169'],
    ['[新聞] 為何台南Josh可以！悍將球迷闖禁區送啦啦', '台南Josh闖禁區', '162'],
    ['[新聞]石中劍插在岩壁1300年 法傳奇寶劍杜蘭達爾', '石中劍插在岩壁', '161'],
    ['[爆卦] 三立高層和詐騙集團關係匪淺', '三立詐騙集團', '156'],
    ['[新聞] 綠能國家隊淪第五縱隊？黃國昌再爆軍營使用華為路由器、工業電腦', '綠能國家隊淪第五縱隊', '155'],
    ['[新聞] 經濟委員會也空轉！邱議瑩逕自散會 張啟楷怒轟：立院最可恥的一天', '經委會空轉最可恥', '154'],
    ['[爆卦] 蘿拉事件始末', '蘿拉事件始末', '153'],
    ['[新聞] 川普自稱快速終結俄烏戰爭 澤倫斯基：說來聽聽', '川普終結俄烏戰爭', '153'],
    ['[新聞] 仇核是弄錯方向 童子賢：暖化才是公敵', '仇核錯方向', '151'],
    ['[新聞] 再爆軍營使用華為路由器 黃國昌：綠能國家隊成綠營口中第五縱隊？', '黃國昌爆料綠能國家隊', '148'],
    ['[新聞] 不是松鼠！台中逾2000戶大停電 台電：老鼠觸電燒毀高壓線', '台中停電老鼠', '146'],
    ['[爆卦] 三立把bibo願望合夥人的新聞都下架了!', '三立把bibo願望', '144'],
    ['[請益] 現在不借貸買股是不是很笨?', '現在不借貸', '142'],
    ['[問卦] 巴黎奧運選手村最終要裝2500台冷氣', '巴黎奧運裝冷氣', '142'],
    ['[新聞] 崩潰！他因女友宗教信仰交往3年沒性行為', '交往3年無性崩潰', '135'],
    ['[新聞] 26歲女胃痛坐「博愛座」遭拐杖攻擊 怒告翁2罪名', '26歲女胃痛博愛座', '132'],
    ['[新聞] 國軍遭爆「用華為」！黃國昌揭：還有陸製路由器、工業電腦', '國軍遭爆用華為', '130'],
    ['[標的] 2330台積電下次佈局時機是哪時候？', '台積電佈局時機', '128'],
    ['[心得] 大盤反1畢業文', '大盤畢業文', '123'],
    ['[請益] 台股史詩級泡沫將來臨？', '台股史詩級泡沫將來臨？', '97'],
    ['[討論] 現在走步的標準為什麼變了', '標準變了', '69'],
    ['[討論] 主流民意版都晚上才看光電嗎？', '主流民意版看光電', '61'],
    ['[新聞] TWICE專輯「子瑜又被JYP消失」！粉絲氣瘋', '子瑜被消失', '29'],
    ['[問題] 看職棒買冰粽請啦啦隊吃被拒絕該怎麼辦', '看職棒買冰粽', '-138']
];


const Top = () => (
    <>
        <h3>Trending Topics</h3>
        <div className={`${styles.container}`}>
            <div className={`${styles.titleContainer} ${styles.flex} ${styles.title}`}>
                <div className={`${styles.title} ${styles.cell}`}>Title</div>
                <div className={`${styles.title} ${styles.cell}`}>Shrink</div>
                <div className={`${styles.title} ${styles.cell}`}>View</div>
            </div>
            <div className={`${styles.cellContainer}`}>
                {data.map(eachData => {
                    return(
                        <div key={eachData[0]} className={`${styles.flex} ${styles.topicsRow}`}>
                            <div className={`${styles.cell} ${styles.topics}`}>{eachData[0]}</div>
                            <div className={`${styles.cell} ${styles.topics}`}>{eachData[1]}</div>
                            <div className={`${styles.cell} ${styles.topics}`}>{eachData[2]}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
);

export default Top;