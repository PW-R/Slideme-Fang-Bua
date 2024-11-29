import './Notification.css';
import { useEffect, useState } from 'react';
import { fetchNoti } from '../data/Notifications';
import { Image } from "react-bootstrap";


function Notification() {

 const [notiRew,setNotiRew] = useState([]);

 const [notis,setNotis] = useState([]);

 useEffect(() => {
    setNotiRew(fetchNoti())
 },[])

 useEffect(() => {
    setNotis(notiRew)
 },[notiRew])

 return ( <div className="notification">

      <div className='noti-head'>
      <div className='noti-head1'><h1>NOTIFICATION</h1>
      </div>
      </div>

        <div >

        <div className="notification-list">
  {notis.map((noti) => (
    <div className="notification-item slide-up" key={noti.id}>
      <img src={src/pic/Group173.png} alt="" className="notification-icon" />
     <img src={src/pic/Group174.png} alt="" className="notification-icon" />
      <div>
        <p className="notification-message">{noti.notim}</p>
        <small className="notification-time">{noti.notit}</small>
      </div>
    </div>
  ))}
</div>


        </div>
    </div> );
}

export default Notification;
