import "./Rates.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Image } from "react-bootstrap";

function rates() {
  const [basePrice, setBasePrice] = useState("");
  const [toolPrice, setToolPrice] = useState("");
  const servicePrice = ((basePrice || 0) + (toolPrice || 0)) * 0.05;
  const totalPrice = (basePrice || 0) + (toolPrice || 0) + servicePrice;
  console.log(totalPrice);

  const basePriceChange = (event) =>
    setBasePrice(Number(event.target.value) || 0);
  const toolPriceChange = (event) =>
    setToolPrice(Number(event.target.value) || 0);
  return (
    <div className="rates-container">
      <div className="rates-logo">
        <Image
          src="src/pic/logo.png"
          style={{ width: "250px", height: "auto" }}
        />
      </div>

      <div className="rates-content">
        <div className="price-one" style={{ fontWeight: "bold" }}>
          <label style={{ textAlign: "left" }}>ราคาต้น</label>&nbsp;
          <input
            type="number"
            style={{ border: "none", textAlign: "right" }}
            value={basePrice}
            onChange={basePriceChange}
            placeholder=" "
          />
          &nbsp;
          <span>บาท</span>
        </div>

        <div className="price-two" style={{ fontWeight: "bold" }}>
          <label>ค่าอุปกรณ์เสริม</label>&nbsp;
          <input
            type="number"
            style={{ border: "none", textAlign: "right", width: "45%" }}
            value={toolPrice}
            onChange={toolPriceChange}
            placeholder=" "
          />
          &nbsp;
          <span>บาท</span>
        </div>

        <div className="price-three" style={{ fontWeight: "bold" }}>
          <label>ค่าบริการ</label>&nbsp;
          <input
            type="number"
            style={{ border: "none", textAlign: "right" }}
            value={servicePrice.toFixed(2)}
            readOnly
            placeholder=" "
          />
          &nbsp;
          <span>บาท</span>
        </div>

        <div className="price-three" style={{ fontWeight: "bold" }}>
          <label>สรุปราคา</label>&nbsp;
          <input
            type="number"
            value={totalPrice}
            readOnly
            style={{ border: "none", textAlign: "right" }}
          />
          &nbsp;
          <span style={{ textAlign: "right" }}>บาท</span>
        </div>

        <div className="reason" style={{ textAlign: "left", margin: "0.5rem" }}>
          <label style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
            หมายเหตุ :
          </label>
          &nbsp;
          <p style={{ textAlign: "center" }}></p>
        </div>
      </div>

      <Link to="/status">
        <button className="btnAccept">รับงาน</button>
      </Link>
    </div>
  );
}

export default rates;
