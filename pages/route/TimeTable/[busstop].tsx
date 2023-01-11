import { useRouter } from "next/router"
import NAVBAR from "../../../Component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import HEAD from "../../../Component/HEAD";
import Link from "next/link";

const Route = () => {
    let csvfile = new XMLHttpRequest()
    csvfile.open("get",)

    const Router = useRouter();
    const {busstop} = Router.query;
        if(busstop == "フォルテ"){
            
        } 
    return(
        <> 
            <HEAD/>
            <NAVBAR />
            <h2>{busstop} ルートはこちらです</h2>
            <section>

            </section> 
        </>
    )
}

export default Route