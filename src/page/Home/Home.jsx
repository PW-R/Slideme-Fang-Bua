import './Home.css';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from "react";  


function Home() {

  const images = [
    "https://www.nktbrake.com/images/content/original-1600229191135.jpg",

    "https://static.truck2hand.com/public/upload/item/123280/43e1b4ea-c01a-43a3-9af4-628946e2c08a.jpeg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlMFwuC4RMBbCy9naOLOKpPaMd58T5HugoNtPeXJILd72O42F"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  
// ปุ่มเปิดปิดร้าน
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  }

  // ทำให้รูปเลื่อนไปเอง
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Slideรูปทุก 3 วินาที
    return () => clearInterval(interval); 
  }, []);
  
  return (
    
    <div className='home'>

   

  {/* Switch */}
  <div className='switch'>
  <Form >
      <Form.Check
        type="switch"
        id="custom-switch"
        label={isOn ? "เปิดร้าน" : "ปิดร้าน"}
        checked={isOn}
        onChange={handleToggle}
       
      />
    </Form>
      </div>


      {/* Slider */}
      <div className="slider-container">
        <div className="slider-image-container">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slider-image"
          />
        </div>

        <button onClick={prevSlide} className="slider-button prev">
        <i className="bi bi-chevron-left"></i>
        </button>

        <button onClick={nextSlide} className="slider-button next">
        <i className="bi bi-chevron-right"></i>
        </button>

      </div>

    <div className='home-info'>
  <i className="bi bi-telephone"> &nbsp; </i><span>096-235-8888</span>
  <br />
  <i className="bi bi-file-earmark-text">&nbsp; </i><span>ติดต่อเรา</span>
</div>



<div className='home-info2'>
<i className="bi bi-shop"></i> &nbsp; <span>เกี่ยวกับเรา</span>
<br />
<span className='home-info2-text'>
  Fix & Drive ร้านซ่อมรถยนต์ในเชียงใหม่ บริการซ่อมเครื่องยนต์, ระบบไฟฟ้า,เบรก,เปลี่ยนถ่ายน้ำมันเครื่องและดูแลรถยนต์ทุกประ
เภทด้วยช่างมืออาชีพและเทคโนโลยีทันสมัยพร้อมรับประกันความพึง
พอใจและความปลอดภัยในการขับขี่</span>
</div>

<div className='home-map'>
  <div>
<span>ร้านซ่อมรถยนต์ในเชียงใหม่</span>

</div>

<span>ที่อยู่: 123 ถนนเจริญเมืองตำบล <br />สันกำแพง 
อำเภอสันกำแพง จังหวัด<br />เชียงใหม่ 50130</span>

 <img className='home-map1' src="./img/map.png" alt="" /> 
</div>
</div>);
}

export default Home;
