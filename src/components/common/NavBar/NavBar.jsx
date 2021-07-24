import React from "react";
import { Link } from "react-router-dom";
import Vector from "../../../images/vector.svg";
import "./navBar.scss";

const NavBar = () => {
  return (
    <nav className="navBar">
      <header className="navBar-header">
        <h1 className="header-title">Need for drive</h1>
        <section className="sideBar-map">
          <span className="header-map">
            <img
              src="https://img.icons8.com/plumpy/24/000000/google-maps-new.png"
              alt=""
            />
            Ульяновск
          </span>
        </section>
      </header>

      <section className="navBar-nav">
        <span>
          <Link to="/car-sharing/order">Местоположение</Link>
        </span>
        <span>
          <Vector />
          <Link to="/car-sharing/order/model">Модель</Link>
        </span>
        <span>
          <Vector />
          <Link to="/car-sharing/order/extra">Дополнительно</Link>
        </span>
        <span>
          <Vector />
          <Link to="/car-sharing/order/total">Итого</Link>
        </span>
      </section>
    </nav>
  );
};

export default NavBar;
