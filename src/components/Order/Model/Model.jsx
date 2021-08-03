import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import "./model.scss";

import getTableCars, { selectSortCars } from "../../../actions/app";

import { API_URL } from "../../../reducers/data/dataServer";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";

const categories = [
  { text: "Все модели", sort: "" },
  { text: "Эконом", sort: "Эконом+" },
  { text: "Премимум", sort: "Люкс" },
];

const Model = ({ nextStep, page }) => {
  const dispatch = useDispatch();

  const [inputCategory, setInputCategory] = useState(0);
  const [inputCar, setInputCar] = useState(null);

  const tableCars = useSelector((state) => state.app.newTableCars);

  useEffect(() => {
    if (!tableCars.length) dispatch(getTableCars);
  }, []);

  function handleChange(value, sort) {
    selectSortCars(sort);
    setInputCategory(Number(value));
    setInputCar(null);
  }

  function handleClick(value) {
    setInputCar(value === inputCar ? null : value);
  }

  return (
    <OrderLayout path="extra" step={nextStep} text="Дополнительно" page={page}>
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
          {tableCars.length
            ? tableCars.map((item, index) => {
                return (
                  <button
                    type="button"
                    key={item.id}
                    className={classNames({
                      car: true,
                      active: index === inputCar,
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
              })
            : "Машины данной категории отсутствуют"}
        </section>
      </main>
    </OrderLayout>
  );
};

export default Model;
