import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import BurgerMenu from "../../common/Burger-menu/Burger-menu";
import NavBar from "../../common/NavBar/NavBar";
import SideBar from "../../common/SideBar/SideBar";

import Close from "../../../images/close.svg";

import "./extra.scss";

const tariff = ["Поминутно,7 р/мин", "На сутки, 1999 р/сутки"];
const additional = [
  "Полный бак, 500р",
  "Детское кресло, 200р",
  "Правый руль, 1600р",
];

const Extra = () => {
  const [inputColor, setInputColor] = useState(0);
  const [inputTariff, setInputTariff] = useState(0);
  const [inputDate, setInputDate] = useState("");
  const [inputDateFocus, setInputDateFocus] = useState(false);

  const car = useSelector((state) => state.app.currentCar);

  const inputRef = useRef(null);

  const classClose = classNames({
    "btn-close": true,
    open: inputDateFocus,
  });

  return (
    <aside className="extra-page">
      <BurgerMenu />
      <NavBar />
      <main className="extra-content">
        <aside>
          <h3>Цвет</h3>
          <section className="extra-color">
            {car.colors.map((item, index) => {
              return (
                <label
                  className={classNames({
                    active: index === inputColor,
                  })}
                  key={item}
                  htmlFor={item}
                >
                  <input
                    type="radio"
                    name="color"
                    value={item}
                    id={item}
                    onChange={() => setInputColor(index)}
                  />
                  {item}
                </label>
              );
            })}
          </section>
        </aside>
        <aside>
          <h1>Дата аренды</h1>
          <div className="extra-date">
            <section className="city-content-label">
              <span>С</span>
              <span>По</span>
            </section>
            <section className="city-content-input">
              <input
                ref={inputRef}
                type="text"
                value={inputDate}
                onChange={(event) => setInputDate(event.target.value)}
                onFocus={() => setInputDateFocus(true)}
                onBlur={() => setInputDateFocus(false)}
                name="dateFrom"
                id="dateFrom"
              />
              <Close
                onClick={() => {
                  setInputDate("");
                  inputRef.current.focus();
                }}
                className={classClose}
              />
              <input
                type="text"
                name="dateTo"
                placeholder="Введите дату и время"
                id="dateTo"
              />
            </section>
          </div>
        </aside>
        <aside>
          <h1>Тариф</h1>
          <section className="extra-tariff">
            {tariff.map((item, index) => {
              return (
                <label
                  className={classNames({
                    active: index === inputTariff,
                  })}
                  key={item}
                  htmlFor={item}
                >
                  <input
                    type="radio"
                    name="tariff"
                    id={item}
                    value={item}
                    onChange={() => setInputTariff(index)}
                  />
                  {item}
                </label>
              );
            })}
          </section>
        </aside>
        <aside>
          <h1>Доп услуги</h1>
          <section className="extra-additional">
            {additional.map((item) => {
              return (
                <label key={item} htmlFor={item}>
                  {item}
                  <input
                    type="checkbox"
                    name="additional"
                    id={item}
                    value={item}
                  />
                  <span className="check-mark" />
                </label>
              );
            })}
          </section>
        </aside>
      </main>
      <SideBar path="total" text="Итого" nextPage={3} />
    </aside>
  );
};

export default Extra;
