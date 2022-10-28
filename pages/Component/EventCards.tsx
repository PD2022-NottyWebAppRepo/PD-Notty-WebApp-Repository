import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Card, Col} from "react-bootstrap";
import {client} from "../../libs/client"


export default function EventCards(eventinfo){
  return (
    <Row xs={2} md={2} className="g-2">
        {Object.values(eventinfo).map((_,idx) => (
        <Col>
          <Card>
            <Card.Body key={eventinfo[idx].id}>
              <Card.Title>
                {eventinfo[idx].EventName}
              </Card.Title>
              <Card.Text>
                {eventinfo[idx].EventOverview}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
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