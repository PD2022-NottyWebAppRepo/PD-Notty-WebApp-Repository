import Link from "next/link";
import { useRouter } from "next/router";
import HEAD from "../../Component/HEAD";
import NAVBAR from "../../Component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


const EventInfo = () => {
    const Router = useRouter();
    const {EventName} = Router.query;

    return(
        <>  
            <HEAD/>
            <NAVBAR />
            <h2>{EventName}</h2>
            <section  style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
                <div style={{width: "18rem",justifyContent: "center"}}>
                <h2>期間</h2>
                <p>2022-10-12~2022-10-12</p>
                <h2>実施場所</h2>
                <p>押野公民館</p>
                <h2>ホームページ</h2>
                <p style={{color: "red"}}>Link Data NOT FOUND</p>
                
                </div>
            </section> 
        </>
    )
}

export default EventInfo