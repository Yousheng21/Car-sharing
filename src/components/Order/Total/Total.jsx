import React from "react";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import "./total.scss";

import { API_URL } from "../../../reducers/data/dataServer";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";

const Total = ({ nextStep, page }) => {
  const car = useSelector((state) => state.app.currentCar);
  const order = useSelector((state) => state.app.currentOrder);

  return (
    <OrderLayout path="confirm" text="Заказать" page={page} step={nextStep}>
      <main className="total-content">
        <section className="total-content-info">
          <h1>{car.name}</h1>
          <span className="number">{car.number}</span>
          <section className="text">
            <span>Топливо</span> {order.cistern.value}
          </section>
          <section className="text">
            <span>Доступна c</span> {order.delay.from}
          </section>
        </section>
        <img src={API_URL + car.thumbnail.path} alt={car.name} />
      </main>
    </OrderLayout>
  );
=======

const Total = () => {
  return <div>Total</div>;
>>>>>>> 175c49e3e6357515b87b54c086ddba2c7c857089
};

export default Total;
