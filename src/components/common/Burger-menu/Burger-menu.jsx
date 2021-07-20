import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { setBurgerStatus } from "../../../reducers/appReducer";

import MenuToggle1 from "../../../images/MenuToggle1.svg";
import MenuToggle2 from "../../../images/MenuToggle2.svg";

import components from "../../../reducers/data/dataMenu";

import "./burger-menu.css";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const iconStatus = useSelector((state) => state.app.burger_status);

  const toggle = () => {
    dispatch(setBurgerStatus(!iconStatus));
  };

  return (
    <div className="burger-page">
      <div
        className={classNames({
          "burger-menu": true,
          burger__open: iconStatus,
        })}
      >
        <div className="toggle-wrapper">
          <MenuToggle1
            onClick={toggle}
            className={classNames({
              "svg-1__open": iconStatus,
              "svg-1__default": !iconStatus,
            })}
          />
          <MenuToggle2
            onClick={toggle}
            className={classNames({
              "svg-2__open": iconStatus,
              "svg-2__default": !iconStatus,
            })}
          />
        </div>
        {/* заменил на массивы */}
        <div className="burger-info">
          {components.li.map((item) => {
            return (
              <Link key={item} to="/car-sharing/order" onClick={toggle}>
                <span>{item}</span>
              </Link>
            );
          })}
        </div>
        <div className="social-links">
          {components.socLink.map((item) => {
            return (
              <Link key={item.text} to="/car-sharing/order">
                <img src={item.img} alt={item.text} />
              </Link>
            );
          })}
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
