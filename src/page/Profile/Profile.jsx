import './Profile.css';
import React, { useState } from 'react';
function Profile() {

    // สร้าง state สำหรับข้อมูลที่สามารถแก้ไขได้
  const [location, setLocation] = useState("56/4 พัฒนาการ 18 ประเวศ คลองตัน กรุงเทพมหานคร 15564");

  const [isEditing, setIsEditing] = useState(false); // ใช้สำหรับตรวจสอบสถานะการแก้ไข
  // ฟังก์ชันสำหรับการบันทึก
  const handleSave = () => {
    setIsEditing(false);
  };

  // ฟังก์ชันสำหรับการแก้ไข
  const handleEdit = () => {
    setIsEditing(true);
  };
  
return ( <div className='profile'>

     {/* <div className='pro-head'>
      <div className='pro-head1'><h1>PROFILE</h1>
      </div>
      </div> */}
      
         <img className='carpro' src="./img/customer.png" alt="" />
         <div className='profile-info1'>
         <p><b>สมใจ สมดีนคร</b></p>
         <p><b>569-SM-8A2001</b></p>
         <p><b>096-235-8888</b></p>
         <button className='button-pro' onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? "บันทึก" : "แก้ไข"}
      </button>
    </div>
    <hr />
    <h5 className='profile-h5'>ทั่วไป</h5>
    <div className='profile-info2'>

    <div className='profile-info2-1'>
     <p>เลขทะเบียนพาหนะ</p>
     <p>ยี่ห้อพาหนะ</p>
     <p>วันหมดอายุใบขับขี่</p>
     <p>วันที่เริ่มงาน</p>
     <p>สถานที่</p>
     </div>

     <div className='profile-info2-2'>
     <p>กก-3667</p>
     <p>Toyata XRT2015</p>
     <p>30 กันยายน 2580</p>
     <p>17  กันยายน 2567</p>
     {isEditing ? (
            <div>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <p>{location}</p>
            </div>
          )}
        </div>

      </div>
      <div className='profile-info3'>
        <p>ยี่ห้อย่านพาหนะ(แนบภาพ)</p>
        <img className='carin' src="./img/car.png" alt="car" />
        <img className='carin' src="./img/carr.jpg" alt="car" />
      </div>

     
    </div>
  );
}

export default Profile;