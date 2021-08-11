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
        <Link to="/">Местоположение</Link>
        <span>
          <Vector />
          <Link to="/">Модель</Link>
        </span>
        <span>
          <Vector />
          <Link to="/">Дополнительно</Link>
        </span>

        <span>
          <Vector />
          <Link to="/">Итого</Link>
        </span>
      </section>
    </nav>
  );
};

export default NavBar;
