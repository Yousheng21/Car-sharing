import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./model.scss";

import getTableCars from "../../../actions/app";

import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import { setCurrentCar } from "../../../reducers/appReducer";

import LabelCategory from "./LabelCategory";
import Car from "./Car";
import Preloader from "../../../utils/Preloader/Preloader";

const Model = ({ nextStep, page }) => {
  const dispatch = useDispatch();

  const [inputCar, setInputCar] = useState("");
  const [inputCarValid, setInputCarValid] = useState(false);

  const cars = useSelector((state) => state.app.tableCars);
  const tableCars = useSelector((state) => state.app.newTableCars);
  const currCar = useSelector((state) => state.app.currentCar);

  useEffect(() => {
    if (!cars.length) dispatch(getTableCars);
    if (!inputCar && currCar.id) {
      setInputCar(currCar.id);
      setInputCarValid(true);
    }
  }, [cars.length]);

  function handleClick(item) {
    setInputCar(item.id === inputCar ? "" : item.id);
    setInputCarValid(item.id !== inputCar);
    dispatch(setCurrentCar(item.id === inputCar ? { name: "" } : item));
  }

  return (
    <OrderLayout
      path="extra"
      step={nextStep}
      text="Дополнительно"
      page={page}
      arrayValid={[inputCarValid]}
    >
      {cars.length ? (
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
      ) : (
        <Preloader />
      )}
    </OrderLayout>
  );
};

export default Model;
