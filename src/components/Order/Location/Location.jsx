import React, { useRef, useState } from "react";
import classNames from "classnames";

import BurgerMenu from "../../common/Burger-menu/Burger-menu";
import NavBar from "../../common/NavBar/NavBar";
import SideBar from "../../common/SideBar/SideBar";

import map from "../../../images/map.png";
import Close from "../../../images/close.svg";
import "./location.scss";

const Location = () => {
  const [inputCity, setInputCity] = useState("");
  const [inputCityFocus, setInputCityFocus] = useState(false);
  const inputRef = useRef(null);

  const classClose = classNames({
    "btn-close": true,
    open: inputCityFocus,
  });

  return (
    <aside className="location-page">
      <BurgerMenu />
      <NavBar />
      <main className="location-content">
        <aside className="location-city">
          <section className="city-content-label">
            <span>Город</span>
            <span>Пункт Выдачи</span>
          </section>
          <section className="city-content-input">
            <input
              ref={inputRef}
              type="text"
              value={inputCity}
              onChange={(event) => setInputCity(event.target.value)}
              onFocus={() => setInputCityFocus(true)}
              onBlur={() => setInputCityFocus(false)}
              name="city"
              id="city"
            />
            <Close
              onClick={() => {
                setInputCity("");
                inputRef.current.focus();
              }}
              className={classClose}
            />
            <input
              type="text"
              name="place"
              placeholder="Начните вводить пункт.."
              id="place"
            />
          </section>
        </aside>
        <aside className="location-map">
          <span>Выбрать на карте:</span>
          <img src={map} alt="location-map" />
        </aside>
      </main>
      <SideBar path="model" text="Выбрать модель" />
    </aside>
  );
};

export default Location;
