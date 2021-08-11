import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { setBurgerStatus } from "../../../reducers/appReducer";

import MenuToggle1 from "../../../images/MenuToggle1.svg";
import MenuToggle2 from "../../../images/MenuToggle2.svg";

import components from "../../../reducers/data/dataMenu";

import "./burger-menu.scss";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const iconStatus = useSelector((state) => state.app.burger_status);

  const handleToggle = () => {
    dispatch(setBurgerStatus(!iconStatus));
  };

  const burgerClass = classNames({
    "burger-menu": true,
    burger__open: iconStatus,
  });
  const svg1 = classNames({
    "svg-1__open": iconStatus,
    "svg-1__default": !iconStatus,
  });
  const svg2 = classNames({
    "svg-2__open": iconStatus,
    "svg-2__default": !iconStatus,
  });

  return (
    <div className="burger-page">
      <aside className={burgerClass}>
        <section className="toggle-wrapper">
          <MenuToggle1 onClick={handleToggle} className={svg1} />
          <MenuToggle2 onClick={handleToggle} className={svg2} />
        </section>
        {/* заменил на массивы */}
        <section className="burger-info">
<<<<<<< HEAD
          {components.li.map((item) => (
            <Link key={item} to="/car-sharing/order" onClick={handleToggle}>
              <span>{item}</span>
            </Link>
          ))}
        </section>
        <section className="social-links">
          {components.socLink.map((item) => (
            <Link key={item.text} to="/car-sharing/order">
              <img src={item.img} alt={item.text} />
            </Link>
          ))}
        </section>
        <button type="button" className="lang">
          <span>Eng</span>
        </button>
=======
          {components.li.map((item) => {
            return (
              <Link key={item} to="/car-sharing/order" onClick={handleToggle}>
                <span>{item}</span>
              </Link>
            );
          })}
        </section>
        <section className="social-links">
          {components.socLink.map((item) => {
            return (
              <Link key={item.text} to="/car-sharing/order">
                <img src={item.img} alt={item.text} />
              </Link>
            );
          })}
        </section>
        <Link to="/car-sharing/order" className="lang">
          <span>Eng</span>
        </Link>
>>>>>>> 175c49e3e6357515b87b54c086ddba2c7c857089
      </aside>
      <div className="burger__template" />
    </div>
  );
};

export default BurgerMenu;
