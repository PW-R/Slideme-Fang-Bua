import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";  
import { customerData } from "../../data/Lists";

import "./List2.css";

function List2() {
  const { id } = useParams();
  const navigate = useNavigate();  // สร้างฟังก์ชัน navigate
  const [customer, setCustomer] = useState(
    customerData().find((customer) => customer.id === parseInt(id))
  );

  if (!customer) {
    return <div>Customer not found!</div>;
  }

  return (
    <div className="list-two-container">

     
        {/* <i 
          className="bi bi-chevron-left"
          onClick={() => navigate(-1)}  
          style={{ cursor: "pointer" }} 
        ></i> */}
       
     

      {/* Customer details */}
      <div className="customer-more-detail">
        <Card
          body
          style={{
            backgroundColor: "#EEEEEE",
            border: "none",
            marginTop: "rem",
            width: "18rem",
            marginLeft: "3.5rem",
          }}
        >
          {customer.name} <br />
          <b>ที่อยู่:</b> {customer.address} <br />
          ประเภทการเรียก: {customer.date}
        </Card>
        <div className="work-detail">
          <Card
            style={{ width: "18rem", border: "none", marginTop: "1.5rem" }}
          >
            <ListGroup variant="flush">
              <ListGroup.Item style={{ backgroundColor: "#EEEEEE" }}>
                <b>ตำแหน่งต้นทาง:</b> <br /> {customer.firstLocation || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "#EEEEEE" }}>
                <b>ตำแหน่งปลายทาง:</b> <br /> {customer.secondLocation || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "#EEEEEE" }}>
                <b>ประเภทรถ:</b> {customer.car || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "#EEEEEE" }}>
                <b>ยี่ห้อ:</b> {customer.brand || "N/A"} <br />
                <b>ประเภทรถ:</b> {customer.type || "N/A"} <br />
                <b>รุ่น:</b> {customer.model || "N/A"} <br />
                <b>เลขทะเบียนรถ:</b> {customer.number || "N/A"} <br />
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "#EEEEEE" }}>
                <b>หมายเหตุ:</b> <br /> {customer.note || "N/A"}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default List2;
