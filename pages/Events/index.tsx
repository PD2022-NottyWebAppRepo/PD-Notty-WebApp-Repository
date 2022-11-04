import NAVBAR from '../../Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from 'react-bootstrap';
import {client} from '../../libs/client'

interface EventInfoType {
  id: string,
  createdAt: Date,
  updatedAt:Date,
  publishedAt:Date,
  EventName: string,
  EventPlace: string,
  EventOverview: HTMLAllCollection,
  EventStartDate:Date,
  EventEndDate?:Date,
}
 
const App = (eventinfo:EventInfoType) => {
  console.log(eventinfo)
  return (
    <div>
      <NAVBAR/>
      <Row xs={2} md={2} className="g-2">
        {Object.keys(eventinfo).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body key={eventinfo.id}>
              <Card.Title>
                {eventinfo.EventName}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
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



