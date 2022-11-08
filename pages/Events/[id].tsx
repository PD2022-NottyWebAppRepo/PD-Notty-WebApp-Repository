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
            <section>
                
            </section> 
        </>
    )
}

export default EventInfo