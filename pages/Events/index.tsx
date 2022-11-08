import NAVBAR from '../../Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from 'react-bootstrap';
import {client} from '../../libs/client'
import Link from 'next/link';

const App = ({eventinfo}) => {

  const ReadableDate = (Date:string) => {
    const ymd = String(Date).match(/\d{4}-?\d{2}-?\d{2}/);
    //const hms = String(Date).match(/\d{2}:?\d{2}:?\d{2}/);
    return `${ymd}`;
    //` ${hms}`
  }

  return (
    <div>
      <NAVBAR/>
      <Row xs={2} md={2} className="g-2">
      {eventinfo.map((eventinfo) => {
        return(
            <Col>
              <Card>
                <Card.Body>
                  <Link href={`../Events/${eventinfo.id}`}>
                    <Card.Title>{eventinfo.EventName}</Card.Title>
                  </Link>
                  <Card.Text>{ReadableDate(eventinfo.EventStartDate)}~{ReadableDate(eventinfo.EventEndDate)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
        )
      })}
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



