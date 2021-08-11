import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import classNames from "classnames";

import Vector from "../../../images/vector.svg";

import "./navBar.scss";

const tabs = [
  { text: "Местоположение", path: "" },
  { text: "Модель", path: "model" },
  { text: "Дополнительно", path: "extra" },
  { text: "Итого", path: "total" },
];

const NavBar = ({ page }) => {
  const currStep = useSelector((state) => state.app.currentStep);

=======
import Vector from "../../../images/vector.svg";
import "./navBar.scss";

const NavBar = () => {
>>>>>>> 175c49e3e6357515b87b54c086ddba2c7c857089
  return (
    <nav className="navBar">
      <header className="navBar-header">
        <h1 className="header-title">Need for drive</h1>
        <section className="sideBar-map">
          <span className="header-map">
            <img
              src="https://img.icons8.com/plumpy/24/000000/google-maps-new.png"
<<<<<<< HEAD
              alt="google-map"
=======
              alt=""
>>>>>>> 175c49e3e6357515b87b54c086ddba2c7c857089
            />
            Ульяновск
          </span>
        </section>
      </header>

      <section className="navBar-nav">
<<<<<<< HEAD
        {tabs.map((item, index) => (
          <span
            className={classNames({
              active: index === page,
              complete: index < currStep,
            })}
            key={item.text}
          >
            {index ? <Vector /> : ""}
            <Link
              className={classNames({
                disabled: index > currStep,
              })}
              to={`/car-sharing/order/${item.path}`}
            >
              {item.text}
            </Link>
          </span>
        ))}
=======
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
>>>>>>> 175c49e3e6357515b87b54c086ddba2c7c857089
      </section>
    </nav>
  );
};

export default NavBar;
