import { Link } from 'react-router-dom';
import './Footer.css';
import Dropdown from 'react-bootstrap/Dropdown'
;
function Footer( {tab, setTab} ) {

  
    return ( <div className='footer'>
        
       <div className='footer-box'>

        <Link to='/home'>
        <button > 
        <i  className="bi bi-house-fill" ></i>
        </button>
        </Link>
        

        
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="custom-dropdown-toggle">
        <i className="bi bi-list"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className='drop'>
        <Dropdown.Item href="#/PageOne">งานที่สามารถรับได้</Dropdown.Item>
        <Dropdown.Item href="#/History">ประวัติการทำงาน</Dropdown.Item>
        <Dropdown.Item href="#/Location">Location</Dropdown.Item>
        <Dropdown.Item href="#/Check">สถานะงาน</Dropdown.Item>
        <Dropdown.Item href="#/List">ตารางงาน</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      
        <Link to='/Notification'>
        <button >
        <i className="bi bi-bell-fill"></i>
        </button>
        </Link>
         
         <Link to='/Profile'>
        <button >
        <i className="bi bi-person-circle"></i>
        </button>
        </Link>

       </div>
    </div> );
}

export default Footer;


// import { Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown'
// import "bootstrap-icons/font/bootstrap-icons.css"
// import './Footer.css';


// function Footer({ tab, setTab }) {
//   return (
//     <div className="navbar-container">
//       <div className="navbar">
//       <Link to="/home" style={{ textDecoration: "none" }}>
//       <button className="bi bi-house" onClick={() => setTab("home")} valign="middle"></button>
//       </Link>

      
//       <Dropdown >
//       <Dropdown.Toggle variant="success" id="dropdown-basic" style={{overflow:"hidden"}}>
//       <i className="bi bi-list"></i>
//       </Dropdown.Toggle>

//       <Dropdown.Menu style={{border:"2px solid #6FBB84"}} className="navbar-dropdown">
//         <Dropdown.Item href="#/PageOne" className="navbar-dropdown1">งานที่สามารถรับได้ </Dropdown.Item>
//         <Dropdown.Item href="#/History" className="navbar-dropdown2">ประวัติการทำงาน</Dropdown.Item>
//         <Dropdown.Item href="#/Location" className="navbar-dropdown3">Location</Dropdown.Item>
//         <Dropdown.Item href="#/Check" className="navbar-dropdown4">สถานะงาน</Dropdown.Item>
//         <Dropdown.Item href="#/List" className="navbar-dropdown5">ตารางงาน</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
      

//       <Link to="/notification" style={{ textDecoration: "none" }}>
//       <button className="bi bi-bell" onClick={() => setTab("notification")} valign="middle"></button>
//       </Link>
//       <Link to="/profile" style={{ textDecoration: "none" }}>
//       <button className="bi bi-person-circle" onClick={() => setTab("profile")} valign="middle"></button>
//       </Link>

//       </div>
//     </div>
//   );
// }

// export default Footer ;
