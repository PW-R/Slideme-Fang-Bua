import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Complete.css";

function Complete() {
  const [image, setImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: null,
    height: null,
  });
  const fileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const delPhoto = () => {
    if (image) {
      URL.revokeObjectURL(image);
      setImage(null);
      setImageDimensions({ width: null, height: null });
    }
  };

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  const handleImageLoad = (e) => {
    setImageDimensions({
      width: e.target.naturalWidth,
      height: e.target.naturalHeight,
    });
  };

  return (
    <div className="complete-container">
      <div className="customer-profile">
        <Image
          src="src/pic/client-1295901_1280 1.png"
          style={{ width: "60px", height: "60px", alignItems: "center" }}
        />
        <div
          className="customer-name"
          style={{ fontSize: "16px", fontWeight: "bold" }}
        >
          <p>Driver</p>
          <p>วียารานี สุขไปเถอะ</p>
        </div>
      </div>

      <hr />
      <div className="customer-workDetail" style={{ fontSize: "16px" }}>
        <span style={{ fontWeight: "bold" }}>รายละเอียดงาน</span>
        <br />
        <span className="bi bi-cash-coin">&nbsp;&nbsp; 2130 บาท</span>
        <br />
        <span className="bi bi-clock-history">&nbsp;&nbsp;45 นาที</span>
      </div>
      <hr />

      <div className="customer-location">
        <Form.Group className="mb-3" >
          <span className="bi bi-circle-fill" style={{ color: "red" }}></span>
          <Form.Control
            placeholder="ตำแหน่งปัจจุบัน"
            disabled
            style={{ width: "250px", marginLeft: "2.5rem" }}
          />  
        </Form.Group>
        <Form.Group className="mb-3">
          <span className="bi bi-geo-alt"></span>
          <Form.Control
            placeholder="บัวรถสไลด์คาร์แคร์ 98 ลำลูกาคลอง1"
            disabled
            style={{ width: "250px", marginLeft: "2.5rem" }}
          />
        </Form.Group>
      </div>

      <div className="customer-photo">
        <input
          type="file"
          onChange={fileChange}
          style={{ display: "none" }}
          id="fileInput"
        />

        {!image && (
          <Button
            variant="secondary"
            onClick={() => document.getElementById("fileInput").click()}
          >
            Select Image
          </Button>
        )}

        {image && (
          <img
            src={image}
            alt="Preview"
            onLoad={handleImageLoad}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "scale-down",
            }}
          />
        )}
      </div>

      <div
        className="customer-button"
        style={image ? { marginTop: "2.5rem", textAlign: "center" } : {}}
      >
        <button className="customer-del" onClick={delPhoto}>
          ลบรูปภาพ
        </button>
        <Link to="/loading">
          <button className="customer-send">ส่งงาน</button>
        </Link>
      </div>
    </div>
  );
}

export default Complete;
