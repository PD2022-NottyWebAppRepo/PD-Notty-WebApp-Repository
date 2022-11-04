import { useRouter } from "next/router"
import HEAD from "../../../Component/HEAD";
import NAVBAR from "../../../Component/Navbar";

const TimeTable = () => {
    const Router = useRouter();
    const {name} = Router.query;

    return(
        <>  
            <HEAD/>
            <NAVBAR />
            <h2>{String(name)}の時刻表はこちらです</h2>
            <section>
                {/*{Route_stoplist[Route_Name[String(route_name)]].map((routeName,idx) => {
                    return(
                    <div className="item" style={{textAlign:"center",padding: "5px"}} key={idx}>
                        <Link href="/Route/TimeTable/[name]">{idx},{routeName}</Link>
                    </div>
                )
                })}*/}
            </section> 
        </>
    )
}

export default TimeTable