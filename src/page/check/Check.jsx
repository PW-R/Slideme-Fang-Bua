import { Dropdown, ButtonGroup, Button, Card, Modal } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useState } from "react";

import "./check.css";
import { customerDetail } from "../data/customertwo";
function check() {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("สถานะ : ");
  const [variant, setVariant] = useState("secondary");
  const [customers, setCustomers] = useState(
    customerDetail().map((customer) => ({ ...customer, readonly: false }))
  );
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  

  const handleClose = () => setShow(false);

  const handleShow = (customerId) => {
    setShow(true);
    setSelectedCustomer(customerId);}

  const selectClick = (statusText, variantColor) => {
    setStatus(statusText);
    setVariant(variantColor);
  };

  const deleteClick = () => {
    setCustomers(customers.filter((customer) => customer.id !== selectedCustomer)); // Remove the customer
    handleClose();
  };

  const finishedWork = (customerId) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === customerId ? { ...customer, readonly: true } : customer
      )
    );
  };

  return (
    <div className="check-container">
      <div className="check-status" style={{  marginTop: "8rem" }}>
        <Dropdown as={ButtonGroup}>
          <Button variant={variant}>{status}</Button>

          <Dropdown.Toggle split variant={variant} id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => selectClick("สถานะ : เปิดให้บริการ", "success")}
            >
              เปิดให้บริการ
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                selectClick("สถานะ : งดให้บริการชั่วคราว", "warning")
              }
            >
              งดให้บริการชั่วคราว
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                selectClick("สถานะ : ปิดให้บริการในขณะนี้", "danger")
              }
            >
              ปิดให้บริการในขณะนี้
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="check-detail" style={{ marginTop: "2rem" }}>
        {customers.map((customer) => (
          <><Card className="customer-card"
            key={customer.id}
            style={{ width: "100%", border: "none", marginBottom: "1rem" }}
          >
            <Card.Body>
              <Image
                src="src/pic/Group 20.png"
                style={{ width: "60px", marginBottom: "0.5rem" }} />
              <Card.Subtitle  className="cardSub-title1" style={{ color: "#15BC11" }}>
                {customer.address}
              </Card.Subtitle>
              <Card.Subtitle className="cardSub-title1" style={{ color: "#004AAD", marginTop: "0.5rem" }}>
                {customer.name}
              </Card.Subtitle>
              <Card.Text
                style={{
                  marginTop: "1rem",
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "#E5E5E5",
                  padding: "0.5rem",
                }}
              >
                <span className="bi bi-truck-flatbed">
                  &nbsp; {customer.car}
                </span>
                <br />
                <span className="bi bi-coin">&nbsp; {customer.price}</span>
                <br />
                <span className="bi bi-calendar">&nbsp; {customer.date}</span>
              </Card.Text>
            </Card.Body>
            
          </Card>
          <div className="work-button" style={{ marginBottom: "2rem" }}>
          {customer.readonly ? (
                <span style={{ color: "#15BC11" }}>งานเสร็จสิ้นเป็นที่เรียบร้อย</span>
              ) : (
                <>
                  <button
                    className="cancel"
                    onClick={() => handleShow(customer.id)}
                  >
                    ยกเลิกงาน
                  </button>
                  <button
                    className="finish"
                    onClick={() => finishedWork(customer.id)}
                  >
                    สำเร็จงาน
                  </button>
                </>
                
              )}
            </div><hr /></>
        ))}
        

    

        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          style={{ height: "300px" }}
        >
          <Modal.Header closeButton></Modal.Header>
          <br />
          <Modal.Body>ต้องการยกเลิกงานนี้ใช่หรือไม่ ?</Modal.Body>
          <br />
          <Modal.Footer
            style={{
              display: "flex",
              justifyContent: "space-around",
              textAlign: "center",
            }}
          >
            <Button
              variant="danger"
              onClick={handleClose}
              style={{ width: "110px", height: "30px" }}
            >
              ไม่
            </Button>
            <Button
              variant="success"
              onClick={deleteClick}
              style={{ width: "110px", height: "30px" }}
            >
              ใช่
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default check;
