import "./PageOne.css";
import { useEffect, useState } from "react";
import { customerData } from "../../data/customer";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import Card from "react-bootstrap/Card";

function pageOne() {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    setCustomer(customerData());
  }, []);

  const [customerId, setCustomerId] = useState([]);

  useEffect(() => {
    setCustomerId(customer);
  }, [customer]);

  return (
    <div className="page-one-container">
      <div className="customer-detail">
        {customer.map((customer) => (
          <Link
            to={`/pageTwo/${customer.id}`}
            key={customer.id}
            style={{ textDecorationLine: "none" }}
          >
            <Card
              
              className="customer-1"
            >
              <Card.Body className="card-body" style={{ marginTop: "2rem" }} >
                <Image
                  src="src/pic/Group 20.png"
                  
                />
                <Card.Title className="page-title">{customer.name}</Card.Title>
                <Card.Subtitle className="mb-2text-muted">
                  {customer.address}
                </Card.Subtitle>
                <Card.Text >
                  <span className="bi bi-truck-flatbed">
                    &nbsp; {customer.car}
                  </span>
                  <br />
                  <span className="bi bi-coin">&nbsp; {customer.price} ฿</span>
                  <br />
                  <span className="bi bi-calendar">&nbsp; {customer.date}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default pageOne;




