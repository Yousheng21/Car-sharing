import React from "react";
import classNames from "classnames";
import Image from "../../common/Image";

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
      <Image car={item} />
    </button>
  );
};

export default Car;
