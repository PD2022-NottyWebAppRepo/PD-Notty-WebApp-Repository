import NAVBAR from '../../Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from 'react-bootstrap';
import {client} from '../../libs/client'
import Link from 'next/link';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

type Info = {
  id: string , 
  EventName: string,
  EventStartDate: string,
  EventEndDate: string;
}

const App = (eventinfo:Info[]) => {

  const ReadableDate = (Date:string) => {
    const ymd = String(Date).match(/\d{4}-?\d{2}-?\d{2}/);
    //const hms = String(Date).match(/\d{2}:?\d{2}:?\d{2}/);
    return `${ymd}`;
    //` ${hms}`
  }
  /* 写真が欲しい　ページネーションが欲しい　カーソル合わせた時の変化が欲しい　左右に余白、イベント情報ごとに余白　境がわかりやすい
  縦に並べた方がいい 4行化*/
  return (
    <div>
      <NAVBAR/>
      <Row xs={2} md={2} className="g-2">
      {eventinfo.map((eventinfo: Info) => {
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



