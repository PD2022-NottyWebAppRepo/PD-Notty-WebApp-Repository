import { useRouter } from "next/router"
import NAVBAR from "../../Component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import RouteCards from "../../Component/RouteCards";
import HEAD from "../../Component/HEAD";

//辞書オブジェクト生成
interface RoutePoint {
    [name_ja:string]:string
}

const Route_Name:RoutePoint = {}
Route_Name["Central"] = "中央"
Route_Name["Western"] = "西部"
Route_Name["North"] = "北部"
Route_Name["South"] = "南部"

const Route_stoplist : {[name:string]:string[]} = {}
Route_stoplist[Route_Name["Central"]] = ["フォルテ","太平寺","カレード","堀内東","堀内公民館・吉光内科病院　協賛","郷公民館","蓮花寺・北鉄自動車学校前","南が丘病院","明倫高校・めいりん通りみやもと歯科　協賛","下林郵便局","下林","位川","野々市市役所","三納","老人福祉センター","矢作","菅原団地","菅原小学校","菅原","住吉","すみよし公園","扇が丘","扇が丘東","工業大学東","金沢工業大学・ヨシダ宣伝株式会社　協賛","高橋","工大前駅","カミーノ","喜多家住宅","本町4丁目","若松"]
Route_stoplist[Route_Name["Western"]] = ["野々市市役所","三納","野々市中学校","野々市消防署","カレード","太平寺西","堀内東","堀内中央","堀内北","万葉台","三日市","二日市南","野々市駅南口","二日市北","市営住宅前","徳用","郷町","柳町","金沢脳神経外科病院","南が丘病院","明倫高校","下林郵便局","下林会館","藤平田南"]
Route_stoplist[Route_Name["North"]] = ["フォルテ","本町4丁目","喜多家住宅","カミーノ","のっぽくん・本町2丁目","本町1丁目","若葉台","押野・株式会社河合組前","押野駅口","押野保育園","本押野","押野2丁目","布水中学校","かわきた整形外科病院前","押越,押越西","野代東","二日市","野々市駅南口前","野々市駅北口","長池","御経塚西","あやめ","あやめ北","御経塚中央","御経塚史跡公園","野々市駅南口","あすなろ団地口","野代","御園小学校・柴電気工事株式会社　協賛","稲荷","つばき公園","本町6丁目"]
Route_stoplist[Route_Name["South"]] = ["野々市市役所","藤平田","下林南","下林西","清金団地","下清金","上清金","藤樫宛","明和特別支援学校","藤平・林農産前","スポーツランド","中林丸の内","中林","県立大学","末松","サニーメイト","末松ガーデンアイル","上林","南部公園","新庄西","百々鶴荘","新庄南","南部浄水場","上新庄","新庄東","下新庄","新庄北","富奥郵便局・プララAコープ富奥店前","乙丸駅","栗田中央","栗田北","矢作南","矢作西"]

const Route = () => {
    const Router = useRouter();
    const {route_name} = Router.query;

    return(
        <>  
            <HEAD/>
            <NAVBAR />
            <h2>{Route_Name[String(route_name)]}ルートはこちらです</h2>
            <section className="main-contents">
                <section className="circle-box">
                {Route_stoplist[Route_Name[String(route_name)]].map((_,idx) => (
                    <div className="item" style={{textAlign:"center",padding: "5px"}} key={idx}>
                        {idx},{Route_stoplist[Route_Name[String(route_name)]][idx]}
                    </div>
                ))}
                </section>
            </section> 
        </>
    )
}

export default Route