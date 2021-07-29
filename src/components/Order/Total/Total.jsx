import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BurgerMenu from "../../common/Burger-menu/Burger-menu";
import NavBar from "../../common/NavBar/NavBar";
import SideBar from "../../common/SideBar/SideBar";

import "./total.scss";

import { API_URL } from "../../../reducers/data/dataServer";

const Total = () => {
  const car = useSelector((state) => state.app.currentCar);
  const order = useSelector((state) => state.app.currentOrder);

  return (
    <aside className="total-page">
      <BurgerMenu />
      <NavBar />
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
      <SideBar text="Заказать" path="confirm">
        <Link to="/car-sharing/order/confirm">
          <button type="button" className="sideBar-button sideBar-child">
            Заказать
          </button>
        </Link>
      </SideBar>
    </aside>
  );
};

export default Total;
