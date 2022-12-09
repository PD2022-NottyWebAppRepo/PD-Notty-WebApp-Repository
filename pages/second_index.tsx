import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Card, Col,} from "react-bootstrap";
import Link from 'next/link';
import type {NextPage} from 'next';
import NAVBAR from '../Component/Navbar';
import RouteCards from '../Component/RouteCards_second'
import HEAD from '../Component/HEAD';


const Home:NextPage = () => {
    return (
      <div>
        <NAVBAR/>
        <HEAD/>
        
        <div style={{padding : "15px"}}/>
          <RouteCards/>
          <div style={{padding : "15px"}}/>
          <Row>
            <Col>
                <Card>
                    <Card.Body>
                    <Link href="./Events">
                        <Card.Title style={{textAlign: "center"}}>
                            イベント一覧
                        </Card.Title>
                    </Link>
                    </Card.Body>
                </Card>

                <div style={{padding:"10px"}} />
          
                <Card>  
                    <Card.Body>
                    <Link href="./QR">
                    <Card.Title style={{textAlign: "center"}}>
                        QRコード
                    </Card.Title>
                    </Link>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
          
      </div>
    )
}

export default Home