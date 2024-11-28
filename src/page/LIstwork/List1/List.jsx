import "./List.css";
import { useEffect, useState } from "react";
import { customerData } from "../../data/Lists";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function List() {
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
            to={`/list2/${customer.id}`}
            key={customer.id}
            style={{ textDecorationLine: "none" }}
          >
            <Card
              style={{ width: "100%", border: "none" }}
              className="customer-1"
            >
              <Card.Body>
  <div className="customer-header">
    <Image src="./img/car3.png" />
    <Card.Title className="list-title1">{customer.name}</Card.Title>
  </div>
  <Card.Subtitle className="list-subtitle">
    {customer.address}
  </Card.Subtitle>
  <Card.Text className="list-text">
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

export default List;
