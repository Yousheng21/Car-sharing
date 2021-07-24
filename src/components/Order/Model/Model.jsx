import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import BurgerMenu from "../../common/Burger-menu/Burger-menu";
import NavBar from "../../common/NavBar/NavBar";
import SideBar from "../../common/SideBar/SideBar";

import getTableCars, { selectSortCars } from "../../../actions/app";

import "./model.scss";
import { API_URL } from "../../../reducers/data/dataServer";

const categories = [
  { text: "Все модели", sort: "" },
  { text: "Эконом", sort: "Эконом+" },
  { text: "Премимум", sort: "Люкс" },
];

const Model = () => {
  const dispatch = useDispatch();

  const [inputCategory, setInputCategory] = useState(0);
  const [car, setCar] = useState(null);

  const tableCars = useSelector((state) => state.app.newTableCars);

  useEffect(() => {
    dispatch(getTableCars);
  }, []);

  function handleChange(value, sort) {
    selectSortCars(sort);
    setInputCategory(Number(value));
    setCar(null);
  }

  function handleClick(value) {
    setCar(value === car ? null : value);
  }

  return (
    <aside className="model-page">
      <BurgerMenu />
      <NavBar />
      <main className="model-content">
        <section className="model-input">
          {categories.map((item, index) => {
            return (
              <label
                className={classNames({
                  active: index === inputCategory,
                })}
                key={item.text}
                htmlFor={index}
              >
                <input
                  type="radio"
                  defaultChecked={index === 0}
                  name="category"
                  id={index}
                  value={item.sort}
                  onChange={() => handleChange(index, item.sort)}
                />
                {item.text}
              </label>
            );
          })}
        </section>
        <section className="model-cars">
          {tableCars.map((item, index) => {
            return (
              <button
                type="button"
                key={item.id}
                className={classNames({
                  car: true,
                  active: index === car,
                })}
                onClick={() => {
                  handleClick(index);
                }}
              >
                <div>
                  <h1 className="car-title">{item.name}</h1>
                  <span className="car-subtitle">
                    {item.priceMin} - {item.priceMax} P
                  </span>
                </div>
                <img
                  crossOrigin="anonymous"
                  referrerPolicy="origin"
                  src={API_URL + item.thumbnail.path}
                  alt={item.name}
                />
              </button>
            );
          })}
        </section>
      </main>
      <SideBar path="extra" text="Дополнительно" />
    </aside>
  );
};

export default Model;
