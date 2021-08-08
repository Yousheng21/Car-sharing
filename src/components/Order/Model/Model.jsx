import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./model.scss";

import getTableCars from "../../../actions/app";

import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import { setCurrentCar } from "../../../reducers/appReducer";

import LabelCategory from "./LabelCategory";
import Car from "./Car";

const Model = ({ nextStep, page }) => {
  const dispatch = useDispatch();

  const [inputCar, setInputCar] = useState("");
  const [inputCarValid, setInputCarValid] = useState(false);

  const cars = useSelector((state) => state.app.tableCars);
  const tableCars = useSelector((state) => state.app.newTableCars);
  const currCar = useSelector((state) => state.app.currentCar);

  useEffect(() => {
    if (!cars.length) dispatch(getTableCars);
    if (!inputCar && currCar.name !== "") {
      setInputCar(currCar.name);
      setInputCarValid(true);
    }
  }, [cars.length]);

  function handleClick(item) {
    setInputCar(item.name === inputCar ? "" : item.name);
    setInputCarValid(item.name !== inputCar);
    dispatch(setCurrentCar(item.name === inputCar ? { name: "" } : item));
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
          <LabelCategory />
        </section>
        <section className="model-cars">
          {tableCars.length
            ? tableCars.map((item) => (
                <Car
                  key={item.id}
                  handleClick={handleClick}
                  inputCar={inputCar}
                  item={item}
                />
              ))
            : "Машины данной категории отсутствуют"}
        </section>
      </main>
    </OrderLayout>
  );
};

export default Model;
