import React from "react";
import { Link } from "react-router-dom";
import Vector from "../../../images/vector.svg";
import "./navBar.scss";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar-header">
        <span className="header-title">Need for drive</span>
        <div className="sideBar-map">
          <span className="header-map">
            <img
              src="https://img.icons8.com/plumpy/24/000000/google-maps-new.png"
              alt=""
            />
            Ульяновск
          </span>
        </div>
      </div>

      <div className="navBar-nav">
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
      </div>
    </div>
  );
};

export default NavBar;
