import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {useState } from "react";
import { Link, useParams } from "react-router-dom";
import { customerData } from "../../data/customer";

import "./PageTwo.css";
function pageTwo() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(
    customerData().find((customer) => customer.id === parseInt(id))
  );
  

  if (!customer) {
    return <div>Customer not found!</div>;
  }

  return (
    <div className="page-two-container">
      <div className="customer-more-detail">
        <Card
          body
          style={{
            backgroundColor: "#EEEEEE",
            border: "none",
            marginTop: "rem",
            width: "18rem",
            marginLeft: "2.5rem",

          }}
        >
          {customer.name} <br />
          <b>ที่อยู่:</b> {customer.address} <br />
          ประเภทการเรียก: {customer.date}
        </Card>
        <div className="work-detail">
        <Card style={{ width: "18rem", border: "none", marginTop: "1.5rem" }}>
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

      <div className="accept-button">
        <Link to="/pageOne">
          <button className="reject" onClick={() => delClick(customer.id)}>
            ปฏิเสธงาน
          </button>
        </Link>

        <Link to="/rates">
          <button className="accept">ตกลงรับงาน</button>
        </Link>
      </div>
    </div>
  );
}

export default pageTwo;
