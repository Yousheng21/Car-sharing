import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./location.scss";

import getTableCity from "../../../actions/city";
import { getTableAddress } from "../../../actions/address";
import { setCurrentAddress } from "../../../reducers/appReducer";
import { useInput } from "../../../utils/Validator/validator";
import Map from "./Map";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import { resetCity } from "../../../actions/app";
import InputAddress from "./inputs/InputAddress";
import InputCity from "./inputs/InputCity";

const Location = ({ nextStep, page }) => {
  const dispatch = useDispatch();

  const placemarks = useSelector((state) => state.app.placeMarks);
  const currCity = useSelector((state) => state.app.currentCity.name);
  const currAddress = useSelector((state) => state.app.currentAddress);
  const cities = useSelector((state) => state.app.newCities);
  const addresses = useSelector((state) => state.app.newPlaceMarks);

  const inputAddress = useInput("", {
    isEmpty: {
      text: "Пустое поле",
      value: true,
    },
    isCompareAddress: {
      text: "Введите или выберите адрес из списка",
      value: false,
      array: addresses,
    },
  });
  const inputCity = useInput("", {
    isCompareCity: {
      text: "Оставьте поле пустым или введите город",
      value: false,
      array: cities,
    },
  });

  useEffect(() => {
    if (!placemarks.length) {
      dispatch(getTableCity);
      dispatch(getTableAddress(""));
    }

    if (currCity) inputCity.onClick(currCity);
    if (currAddress) inputAddress.onClick(currAddress);
  }, [placemarks.length, currCity, currAddress]);

  useEffect(() => {
    if (!inputCity.value && inputCity.focus) {
      inputAddress.onClick("");
      resetCity();
    } else if (inputCity.value && inputCity.isCompareError.value)
      inputAddress.onClick("");
  }, [inputCity.value]);

  useEffect(() => {
    if (
      inputAddress.focus &&
      !inputAddress.value &&
      inputCity.inputValid.value
    ) {
      dispatch(setCurrentAddress("", inputCity.value ?? ""));
    }
  }, [inputAddress.value]);

  return (
    <OrderLayout
      path="model"
      text="Выбрать модель"
      step={nextStep}
      page={page}
      arrayValid={[inputAddress.inputValid.value, inputCity.inputValid.value]}
    >
      <main className="location-content">
        <aside className="location-city">
          <InputCity inputCity={inputCity} array={cities} />
          <InputAddress inputAddress={inputAddress} array={addresses} />
        </aside>
        <aside className="location-map">
          <span>Выбрать на карте:</span>
          <Map />
        </aside>
      </main>
    </OrderLayout>
  );
};

export default Location;
