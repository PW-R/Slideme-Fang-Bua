import L from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

const LeafletGeocoder = () => {
  const map = useMap();
  useEffect(() => {
    L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on("markgeocode", function (e) {
        var latlng = e.geocode.center;
        L.marker(latlng).addTo(map);
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  }, []);
  return null;
};
export default LeafletGeocoder;
