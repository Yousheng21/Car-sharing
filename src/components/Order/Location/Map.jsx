import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";

import { center } from "../../../reducers/data/dataOrder";

const customMarker = new L.icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

const Map = () => {
  const marks = useSelector((state) => state.app.placeMarks);
  const currMarkIndex = useSelector((state) => state.app.placeMarkIndex);

  function MyComponent() {
    const map = useMap();
    useEffect(() => {
      if (Object.keys(currMarkIndex).length) {
        map.flyTo([+currMarkIndex.lat, +currMarkIndex.lon], map.getZoom());
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
        {marks.length &&
          marks.map((item) => (
            <Marker
              position={[item.lat, item.lon]}
              key={item.place_id}
              icon={customMarker}
            >
              <MyComponent />
              <Popup>{`${item.address.city} ${item.address.road}`}</Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;
