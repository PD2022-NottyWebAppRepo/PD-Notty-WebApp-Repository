import NAVBAR from '../../Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from 'react-bootstrap';
import {client} from '../../libs/client'
import Link from 'next/link';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

const App = ({eventinfo}) => {

  const ReadableDate = (Date:string) => {
    const ymd = String(Date).match(/\d{4}-?\d{2}-?\d{2}/);
    //const hms = String(Date).match(/\d{2}:?\d{2}:?\d{2}/);
    return `${ymd}`;
    //` ${hms}`
  }
  /* 写真が欲しい　ページネーションが欲しい　カーソル合わせた時の変化が欲しい　左右に余白、イベント情報ごとに余白　境がわかりやすい
  縦に並べた方がいい*/
  return (
    <div>
      <NAVBAR/>
      <Row xs={2} md={2} className="g-2">
      {eventinfo.map((eventinfo: { id: string | any[]; EventName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; EventStartDate: string; EventEndDate: string; }) => {
        return(
            <Col key={eventinfo.id.length}>
              <Card>
                <Card.Body>
                  <Link href={`../Events/${eventinfo.EventName}`}>
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



