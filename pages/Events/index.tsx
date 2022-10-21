import NAVBAR from '../Component/Navbar';
import Link from "next/link"
import { Col, Card,Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import {client} from '../../libs/client'

type eventinfo = {
  id:string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  EventName: string,
  EventPlace: string,
  EventOverview?: string,
  EventStartDate: string,
  EventEndDate: string,
}

const App = () => {
  //Eventがeventinfo型オブジェクトを複数持ったオブジェクト
  console.log(Event)
  return (
    <div>
      <NAVBAR/>
      <Row xs={2} md={2} className="g-2">
        {/*{Object.keys(Event).map((_,idx:number) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="../public/eventphoto.png" />
                <Card.Body >
                <Card.Title>{Events[idx].EventName}</Card.Title>
                <Link href={`/Events/${Event[idx].EventName}`}>
                  <Card.Text>
                    Event 
                  </Card.Text>
                </Link>
                </Card.Body>
              </Card>
            </Col>
        ))}
      */}
      </Row>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({endpoint:"eventinfo"});

  return {
    props:{
      eventinfo: data.contents,
    },
  };
};

export default App



