import React, { useRef, useState } from "react";
import BurgerMenu from "../../common/Burger-menu/Burger-menu";
import NavBar from "../../common/NavBar/NavBar";
import SideBar from "../../common/SideBar/SideBar";

import map from "../../../images/map.png";
import Close from "../../../images/close.svg";
import "./location.scss";

const Location = () => {
  const [inputCity, setInputCity] = useState("");
  const inputRef = useRef(null);
  return (
    <div className="location-page">
      <BurgerMenu />
      <NavBar />
      <div className="location-content">
        <div className="location-city">
          <div className="city-content-label">
            <span>Город</span>
            <span>Пункт Выдачи</span>
          </div>
          <div className="city-content-input">
            <input
              ref={inputRef}
              type="text"
              value={inputCity}
              onChange={(event) => setInputCity(event.target.value)}
              name="city"
              id="city"
            />
            <Close
              onClick={() => {
                setInputCity("");
                inputRef.current.focus();
              }}
              className="btn-close"
            />
            <input
              type="text"
              name="place"
              placeholder="Начните вводить пункт.."
              id="place"
            />
          </div>
        </div>
        <div className="location-map">
          <span>Выбрать на карте:</span>
          <img src={map} alt="location-map" />
        </div>
      </div>
      <SideBar>
        <button type="button" className="sideBar-button">
          Выбрать модель
        </button>
      </SideBar>
    </div>
  );
};

export default Location;
