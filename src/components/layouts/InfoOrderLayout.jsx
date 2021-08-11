import React from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../reducers/data/dataServer";

const InfoOrderLayout = () => {
  const car = useSelector((state) => state.app.currentCar);
  const order = useSelector((state) => state.app.currentOrder);
  return (
    <div className="total-content-main">
      <section className="total-content-info">
        <h1>{car.name}</h1>
        <span className="number">{car.number}</span>
        <section className="text">
          <span>Топливо</span>
        </section>
        <section className="text">
          <span>Доступна c</span> {order.delay.from}
        </section>
      </section>
      <img src={API_URL + car.thumbnail.path} alt={car.name} />
    </div>
  );
};

export default InfoOrderLayout;