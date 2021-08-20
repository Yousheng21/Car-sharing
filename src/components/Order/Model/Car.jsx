import React from "react";
import classNames from "classnames";
import { API_URL } from "../../../reducers/data/dataServer";

const Car = ({ item, handleClick, inputCar }) => {
  return (
    <button
      type="button"
      className={classNames({
        car: true,
        active: item.id === inputCar,
      })}
      onClick={() => {
        handleClick(item);
      }}
    >
      <div>
        <h1 className="car-title">{item.name}</h1>
        <span className="car-subtitle">
          {item.priceMin} - {item.priceMax} P
        </span>
      </div>
      <img
        crossOrigin="anonymous"
        referrerPolicy="origin"
        src={API_URL + item.thumbnail.path}
        alt={item.name}
      />
    </button>
  );
};

export default Car;
