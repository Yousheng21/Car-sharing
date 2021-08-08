import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./location.scss";

import getTableCity, { selectCity } from "../../../actions/city";
import { getTableAddress } from "../../../actions/address";
import {
  setCurrentAddress,
  setNewPlaceMarks,
} from "../../../reducers/appReducer";
import { useInput } from "../../../utils/Validator/validator";
import Map from "./Map";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import { resetCity } from "../../../actions/app";
import InputWrapper from "./InputWrapper";

const Location = ({ nextStep, page }) => {
  const dispatch = useDispatch();

  const placemarks = useSelector((state) => state.app.placeMarks);
  const cities = useSelector((state) => state.app.newCities);
  const addresses = useSelector((state) => state.app.newPlaceMarks);
  const currAddress = useSelector((state) => state.app.currentAddress);
  const currCity = useSelector((state) => state.app.currentCity.name);

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
      dispatch(getTableAddress());
    } else {
      selectCity();
    }
  }, [placemarks.length]);

  useEffect(() => {
    if (!inputCity.value && inputCity.focus) {
      inputAddress.onClick("");
      resetCity();
    } else if (
      inputCity.value &&
      currAddress.city !== inputCity.value &&
      !inputCity.isCompareError.value
    ) {
      inputAddress.onClick("");
    }
  }, [inputCity.value]);

  useEffect(() => {
    if (
      inputAddress.focus &&
      !inputAddress.value &&
      inputCity.inputValid.value
    ) {
      if (!inputCity.value) dispatch(setNewPlaceMarks(placemarks));
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
        <section className="location-city">
          <InputWrapper
            current={currCity}
            auto={inputCity.isCompareError.value || !inputCity.value}
            title="Город"
            onChange={inputCity.onChange}
            print={["isCompareError"]}
            input={inputCity}
            array={cities}
            id="city"
          />
          <InputWrapper
            current={currAddress.name}
            auto={inputAddress.isCompareError.value}
            title="Пункт выдачи"
            onChange={inputAddress.onChangeAddress}
            print={["isEmpty", "isCompareError"]}
            input={inputAddress}
            array={addresses}
            id="place"
          />
        </section>
        <section className="location-map">
          <h3>Выбрать на карте:</h3>
          <Map />
        </section>
      </main>
    </OrderLayout>
  );
};

export default Location;
