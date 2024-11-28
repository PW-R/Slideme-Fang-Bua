import './Location.css'
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [13.85490110338797, 100.58467714543136]; // พิกัดร้าน

function Location() {
  return (
  <div className='location'>

    
    <div className='map'>
      <MapContainer center={position} zoom={20}  className='map-1'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         //  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Fix & Drive
          </Popup>
        </Marker>
      </MapContainer>
      <div className='location-box'>
         <div className='location-info'>

          <div className='location-info-1'>
          <i className="bi bi-telephone"> &nbsp; </i><span>096-235-8888</span>
         <br />
         <i className="bi bi-file-earmark-text">&nbsp; </i><span>ติดต่อเรา</span>
          </div>
          </div>
          <div className='location-pic'>
          <img src="./img/car5.png" alt="" />
          </div>

          <div className="location-info-2 slide-up">
          <i className="bi bi-shop"></i> &nbsp; <span>เกี่ยวกับเรา</span>
    <p>
    Fix & Drive ร้านซ่อมรถยนต์ในเชียงใหม่ บริการซ่อมเครื่องยนต์, ระบบไฟฟ้า,เบรก,เปลี่ยนถ่ายน้ำมันเครื่องและดูแลรถยนต์ทุกประ
    เภทด้วยช่างมืออาชีพและเทคโนโลยีทันสมัยพร้อมรับประกันความพึง
    พอใจและความปลอดภัยในการขับขี่
  </p>
</div>
      </div>
    </div>
    </div>
  );
}

export default Location;
