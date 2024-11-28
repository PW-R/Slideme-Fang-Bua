// import "./Head.css";
// import { useLocation } from "react-router-dom";
// import { useParams, useNavigate } from "react-router-dom";  // import useNavigate
// function Head() {
//   const location = useLocation();
//   const headerName = () => {
//     const { pathname } = location;
//     if (pathname === "/") return "Home";
//     if (pathname === "/home") return "Home";
//     if (pathname === "/PageOne") return "งานที่สามารถรับได้";
//     if (pathname.startsWith("/pageTwo/")) return "รายละเอียดงาน"; 
//     if (pathname === "/rates") return "กำหนดราคา";
//     if (pathname === "/status") return "ดำเนินงาน";
//     if (pathname === "/Complete") return "บริการเสร็จสิ้น";
//     if (pathname === "/loading") return "บริการเสร็จสิ้น";
//     if (pathname === "/Check") return "ความคืบหน้างาน";
//     if (pathname === "/History") return "ประวัติการทำงาน";
//     if (pathname === "/Location") return "ตำแหน่งร้าน";
//     if (pathname === "/List") return "ตารางงาน";
//     if (pathname.startsWith("/List2/")) return "รายละเอียดงาน"; 
    
//     if (pathname === "/Profile") return "ข้อมูลส่วนตัว";
//     return "";
//     const { id } = useParams();
//     const navigate = useNavigate();  // สร้างฟังก์ชัน navigate
//   };
//   return (
//     <div className="header-container">

//        <i 
//           className="bi bi-chevron-left"
//           onClick={() => navigate(-1)}  
//           style={{ cursor: "pointer" }} 
//         ></i>

//       <h1>{headerName()}</h1>
//     </div>
//   );
// }

// export default Head;


import "./Head.css";
import { useLocation, useNavigate } from "react-router-dom";

function Head() {
  const location = useLocation();
  const navigate = useNavigate(); // ใช้ navigate สำหรับย้อนกลับ

  const headerName = () => {
    const { pathname } = location;
    if (pathname === "/") return "Home";
    if (pathname === "/home") return "Home";
    if (pathname === "/PageOne") return "งานที่สามารถรับได้";
    if (pathname.startsWith("/pageTwo/")) return "รายละเอียดงาน";
    if (pathname === "/rates") return "กำหนดราคา";
    if (pathname === "/status") return "ดำเนินงาน";
    if (pathname === "/Complete") return "บริการเสร็จสิ้น";
    if (pathname === "/loading") return "บริการเสร็จสิ้น";
    if (pathname === "/Check") return "ความคืบหน้างาน";
    if (pathname === "/History") return "ประวัติการทำงาน";
    if (pathname === "/Location") return "ตำแหน่งร้าน";
    if (pathname === "/List") return "ตารางงาน";
    if (pathname === "/List2/") return 
    "ตารางงาน";
    if (pathname === "/Profile") return "ข้อมูลส่วนตัว";
    if (pathname === "/Notification") return "การแจ้งเตือน";
    
    
  };

  return (
    <div className="header-container">
      {/* ไอคอนย้อนกลับ */}
      <i
        className="bi bi-chevron-left"
        onClick={() => navigate(-1)} // ย้อนกลับไปหน้าก่อนหน้า
        style={{ cursor: "pointer", marginRight: "10px" }} // เพิ่มระยะห่าง
      ></i>
      <h1>{headerName()}</h1>
    </div>
  );
}

export default Head;
