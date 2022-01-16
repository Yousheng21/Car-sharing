import React from "react";
import { API_URL } from "../../reducers/data/dataServer";

const Image = ({ car }) => {
  const imageUrl =
    car.thumbnail.path[0] === "/"
      ? API_URL + car.thumbnail.path
      : car.thumbnail.path;

  return (
    <img
      crossOrigin="anonymous"
      referrerPolicy="origin"
      src={imageUrl}
      alt={car.name}
    />
  );
};

export default Image;
