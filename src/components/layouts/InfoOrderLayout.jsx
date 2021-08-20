import React from "react";
import { useSelector } from "react-redux";
import Image from "../common/Image";

const InfoOrderLayout = () => {
  const car = useSelector((state) => state.app.currentCar);
  const order = useSelector((state) => state.app.currentOrder);
  return (
    <div className="total-content-main">
      <section className="total-content-info">
        <h1>{car.name}</h1>
        {car.number ? <span className="number">{car.number}</span> : ""}
        <section className="text">
          <span>
            {`Топливо ${
              order.additional.isFullTank.value ? " 100" : car.tank ?? " 0"
            }%`}
          </span>
        </section>
        <section className="text">
          <span>Доступна c</span> {order.delay.from.toLocaleString()}
        </section>
      </section>
      <Image car={car} />
    </div>
  );
};

export default InfoOrderLayout;
