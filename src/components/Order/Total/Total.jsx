import React from "react";
import { useSelector } from "react-redux";
import "./total.scss";

import { API_URL } from "../../../reducers/data/dataServer";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";

const Total = () => {
  const car = useSelector((state) => state.app.currentCar);
  const order = useSelector((state) => state.app.currentOrder);

  return (
    <OrderLayout path="confirm" text="Заказать">
      <main className="total-content">
        <section className="total-content-info">
          <h1>{car.name}</h1>
          <span className="number">{car.number}</span>
          <article className="text">
            <span>Топливо</span> {order.cistern.value}
          </article>
          <article className="text">
            <span>Доступна c</span> {order.delay.from}
          </article>
        </section>
        <img src={API_URL + car.thumbnail.path} alt={car.name} />
      </main>
    </OrderLayout>
  );
};

export default Total;
