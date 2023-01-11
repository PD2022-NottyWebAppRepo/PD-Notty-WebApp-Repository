import { useRouter } from "next/router"
import NAVBAR from "../../../Component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import HEAD from "../../../Component/HEAD";
import Link from "next/link";
import { Card } from "react-bootstrap";

const Route = () => {
    let TimeTable: string[] = []
    const Router = useRouter();
    const {busstop} = Router.query;
        if(busstop == "フォルテ"){
            TimeTable = ["6:50","7:40","8:30","9:20","10:10","11:00","11:50","12:40","13:30","14:20","15:10","16:00","16:50","17:40","18:30","19:20"]
        } 
    return(
        <> 
            <HEAD/>
            <NAVBAR />
            <h2>{busstop} ルートはこちらです</h2>
            <div style={{margin: "auto"}}>
                {TimeTable.map((_,i) => {
                    return (
                        <>
                        <div style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
                        <Card style={{width: "18rem",justifyContent: "center"}} key={i}>
                            <Card.Body style={{margin:"auto"}}>
                                {i+1}週目のバス,{TimeTable[i]}
                            </Card.Body>
                        </Card>
                        </div>
                        <div style={{paddingBottom: "10px"}}/>
                        </>
                    )
                })}
            </div> 
        </>
    )
}

export default Route