import './History.css';
import Card from 'react-bootstrap/Card';
import { fetchHistory } from '../data/Historys';
import { useEffect, useState } from 'react';

function History() {
  const [historysRew, setHistoryRew] = useState([]);
  const [historys, setHistorys] = useState([]);

  useEffect(() => {
    setHistoryRew(fetchHistory());
  }, []);

  useEffect(() => {
    setHistorys(historysRew);
  }, [historysRew]);

  return (
    <div className="history">

     <div className="history-body1 slide-up">
        {historys.map((history) => {
          return (
            <div className="history-body" key={history.id}>
              <img src="./img/car4.png" alt="" />

              <Card style={{ width: '17rem' }} className="history-body-card">
                <Card.Body>

                  <Card.Title className='his-add'>{history.address}</Card.Title>

                  <Card.Subtitle >
                    {history.price}
                  </Card.Subtitle>
                  <Card.Text>{history.date}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default History;
