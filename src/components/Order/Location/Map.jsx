import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";

const customMarker = new L.icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

const Map = () => {
  const marks = useSelector((state) => state.app.placeMarks);
  const currMarkIndex = useSelector((state) => state.app.placeMarkIndex);
  const [center, setCenter] = useState([54.1838, 45.1749]);

  useEffect(() => {
    if (marks.length) setCenter([Number(marks[0].lat), Number(marks[0].lon)]);
  }, []);

  function MyComponent() {
    const map = useMap();
    useEffect(() => {
      if (Object.keys(currMarkIndex).length) {
        map.flyTo(
          [Number(currMarkIndex.lat), Number(currMarkIndex.lon)],
          map.getZoom()
        );
      }
    }, [currMarkIndex]);

    return null;
  }

  return (
    <div className="map">
      <MapContainer
        style={{ height: "450px", width: "100%" }}
        center={center}
        zoom={11}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marks.length
          ? marks.map((item) => {
              return (
                <Marker
                  position={[item.lat, item.lon]}
                  key={item.place_id}
                  icon={customMarker}
                >
                  <MyComponent />
                  <Popup>{`${item.address.city} ${item.address.road}`}</Popup>
                </Marker>
              );
            })
          : ""}
      </MapContainer>
    </div>
  );
};

export default Map;
