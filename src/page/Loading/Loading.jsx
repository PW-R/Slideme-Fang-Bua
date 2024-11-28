import "./loading.css";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function loading() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="Load-container">
      <div className="loading-time">
        {loading ? (
          <BeatLoader
            loading={loading}
            size={25}
            color={"#0DC964"}
            style={{ marginTop: "13rem" }}
          />
        ) : (
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <Image
              src="src/pic/logo.png"
              style={{ width: "250px", height: "auto" }}
            />
            <p
              style={{
                color: "#0DC964",
                fontWeight: "bold",
                fontSize: "20px",
                marginTop: "1rem",
              }}
              className="loading-text"
            >
              งานของคุณเสร็จสิ้น <br /> เป็นที่เรียบร้อยแล้ว
            </p>
            <button style={{ marginTop: "1.5rem" }} className="loading-btn">
              กลับสู่หน้าหลัก
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default loading;
