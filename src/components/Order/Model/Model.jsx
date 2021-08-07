import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import "./model.scss";

import getTableCars, { selectSortCars } from "../../../actions/app";

import { API_URL } from "../../../reducers/data/dataServer";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import { setCurrentCar } from "../../../reducers/appReducer";

import { categories } from "../../../reducers/data/dataOrder";

const Model = ({ nextStep, page }) => {
  const dispatch = useDispatch();

  const [inputCategory, setInputCategory] = useState(0);
  const [inputCar, setInputCar] = useState("");
  const [inputCarValid, setInputCarValid] = useState(false);

  const tableCars = useSelector((state) => state.app.newTableCars);
  const currCar = useSelector((state) => state.app.currentCar);

  useEffect(() => {
    if (!tableCars.length) dispatch(getTableCars);
    if (!inputCar) setInputCar(currCar.name);
  }, []);

  function handleChange(value, sort) {
    selectSortCars(sort);
    setInputCategory(+value);
  }

  function handleClick(item) {
    if (item.name === inputCar) {
      setInputCar("");
      setInputCarValid(false);
      dispatch(setCurrentCar({ name: "" }));
    } else {
      setInputCar(item.name);
      setInputCarValid(true);
      dispatch(setCurrentCar(item));
    }
  }

  return (
    <OrderLayout
      path="extra"
      step={nextStep}
      text="Дополнительно"
      page={page}
      arrayValid={[inputCarValid]}
    >
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
            ? tableCars.map((item) => {
                return (
                  <button
                    type="button"
                    key={item.id}
                    className={classNames({
                      car: true,
                      active: item.name === inputCar,
                    })}
                    onClick={() => {
                      handleClick(item);
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
