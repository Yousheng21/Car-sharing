import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setBurgerStatus } from "../../../reducers/appReducer";

import MenuToggle1 from "../../../images/MenuToggle1.svg";
import MenuToggle2 from "../../../images/MenuToggle2.svg";

import "./burger-menu.css";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const iconStatus = useSelector((state) => state.app.burger_status);

  const toggle = () => {
    dispatch(setBurgerStatus(iconStatus === "default" ? "open" : "default"));
  };

  return (
    <div className="burger-page">
      <div
        className={`${
          iconStatus === "open" ? "burger-menu burger__open" : "burger-menu"
        }`}
      >
        <span
          role="button"
          tabIndex={0}
          onKeyDown={() => ""}
          className="toggle-wrapper"
          onClick={() => {
            toggle();
          }}
        >
          <MenuToggle1
            className={`${
              iconStatus === "open" ? "svg-1__open" : "svg-1__default"
            }`}
          />
          <MenuToggle2
            className={`${
              iconStatus === "open" ? "svg-2__open" : "svg-2__default"
            }`}
          />
        </span>
        <div className="burger-info">
          <Link to="/order" onClick={() => toggle()}>
            <span>ПАРКОВКА</span>
          </Link>
          <Link to="/order" onClick={() => toggle()}>
            <span>СТРАХОВКА</span>
          </Link>
          <Link to="/order" onClick={() => toggle()}>
            <span>БЕНЗИН</span>
          </Link>
          <Link to="/order" onClick={() => toggle()}>
            <span>ОБСЛУЖИВАНИЕ</span>
          </Link>
        </div>
        <div className="social-links">
          <Link to="order">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/telegram-app.png"
              alt="telegram"
            />
          </Link>
          <Link to="order">
            <img
              src="https://img.icons8.com/material-outlined/30/000000/facebook-f.png"
              alt="facebook"
            />
          </Link>
          <Link to="order">
            <img
              src="https://img.icons8.com/windows/30/000000/instagram-new.png"
              alt="inst"
            />
          </Link>
        </div>
        <div className="lang">
          <span>Eng</span>
        </div>
      </div>
      <div className="burger__template" />
    </div>
  );
};

export default BurgerMenu;
