import {useNavigate } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";
import ProgressBar from "react-bootstrap/ProgressBar";


import "./status.css";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import LeafletRoutingMachine from "./LeafletRoutingMachine";
function status() {
  const [progress, setProgress] = useState(0);
  const [startProgress, setStartProgress] = useState(false);
  const navigate = useNavigate();
  const position = [13.736717, 100.523186];

  const startProgressBar = (routeLength) => {
    const stepDuration = 10000 / routeLength;
    setStartProgress(true);

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep += 1;
      setProgress((prev) => {
        const newProgress = prev + (100 / routeLength);
        if (newProgress >= 100) {
          clearInterval(interval);
          navigate("/Complete");
          return 100;
        }
        return newProgress;
      });
    }, stepDuration);
  };

  // useEffect(() => {
  //   const intervalDuration = (20 * 600) / 100;

  //   const interval = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       if (prevProgress >= 100) {
  //         clearInterval(interval);
  //         navigate("/Complete");
  //         return 100;
  //       }
  //       return prevProgress + 1;
  //     });
  //   }, intervalDuration);

  //   return () => clearInterval(interval);
  // }, [navigate]);

  const defaultIcon = L.icon({
    iconUrl: "/src/pic/placeholder.png",
    iconSize: [32, 32],
    iconAnchor: [10, 41],
    popupAnchor: [1, -40],
  });
  L.Marker.prototype.options.icon = defaultIcon;

  return (
    <div className="status-container">
      <div className="mapPic">
        <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <LeafletGeocoder /> */}
          <LeafletRoutingMachine onRouteStart={startProgressBar} />
        </MapContainer>
      </div>

      <div className="status-progress">
        <span
          className="bi bi-truck-flatbed"
          style={{ fontSize: "35px" }}
          valign="middle"
        ></span>
        &nbsp;&nbsp;
        <ProgressBar
          striped
          variant="success"
          animated={startProgress}
          now={progress}
          style={{ width: "250px", marginTop: "1.5rem" }}
          valign="middle"
        />
        &nbsp;&nbsp;
        <span
          className="bi bi-geo-alt"
          style={{ fontSize: "35px" }}
          valign="middle"
        ></span>
      </div>

      <div className="contact">
        <button
          type="button"
          className="bi bi-telephone-fill "
          id="phone"
        ></button>
        <button type="button" className="bi bi-chat" id="chat"></button>
      </div>
    </div>
  );
}
export default status;
