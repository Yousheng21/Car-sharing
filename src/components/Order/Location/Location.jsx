<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> ff03ecbf9c00ba950a12f736ff83c80cb5193657
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
      <SideBar>
        <button type="button" className="sideBar-button sideBar-child">
          Выбрать модель
        </button>
      </SideBar>
    </aside>
<<<<<<< HEAD
>>>>>>> 175c49e3e6357515b87b54c086ddba2c7c857089
=======
>>>>>>> ff03ecbf9c00ba950a12f736ff83c80cb5193657
  );
};

export default Location;
