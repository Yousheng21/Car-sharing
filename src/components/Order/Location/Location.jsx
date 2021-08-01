import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import "./location.scss";

import Close from "../../../images/close.svg";

import getTableCity from "../../../actions/city";
import { getTableAddress } from "../../../actions/address";

import { setCurrentAddress } from "../../../reducers/appReducer";

import { useInput } from "../../../utils/Validator/validator";

import map from "../../../images/map.png";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import { resetCity } from "../../../actions/app";

const Location = ({ nextStep, page }) => {
  const dispatch = useDispatch();

  const currCity = useSelector((state) => state.app.currentCity.name);
  const currAddress = useSelector((state) => state.app.currentAddress);
  const cities = useSelector((state) => state.app.newCities);
  const addresses = useSelector((state) => state.app.newAddresses);

  const inputCity = useInput("", {
    isCompareCity: {
      text: "Введите или выберите город из списка",
      value: false,
      array: cities,
    },
  });
  const inputAddress = useInput("", {
    isEmpty: {
      text: "Пустое поле",
      value: true,
    },
    isCompareAddress: {
      text: "Введите или выберите город из списка",
      value: false,
      array: addresses,
    },
  });

  useEffect(() => {
    dispatch(getTableCity);
    dispatch(getTableAddress(""));

    if (currCity) inputCity.onClick(currCity);
    if (currAddress) inputAddress.onClick(currAddress);
  }, []);

  useEffect(() => {
    if (!inputCity.value) {
      inputAddress.onClick("");
      resetCity();
    } else if (inputCity.value && inputCity.isCompareError.value)
      inputAddress.onClick("");
  }, [inputCity.value]);

  useEffect(() => {
    if (!inputAddress.value && inputCity.inputValid.value) {
      dispatch(setCurrentAddress("", inputCity.value ?? ""));
    }
  }, [inputAddress.value]);

  const classClose = classNames({
    "btn-close": true,
    open: inputCity.focus,
  });

  const classCloseAddress = classNames({
    "btn-close": true,
    open: inputAddress.focus,
  });

  return (
    <OrderLayout path="model" text="Выбрать модель" step={nextStep} page={page}>
      <main className="location-content">
        <aside className="location-city">
          <section className="city-content">
            <span>Город</span>
            <article onFocus={inputCity.onFocus} onBlur={inputCity.onBlur}>
              <input
                type="text"
                value={inputCity.value}
                onChange={inputCity.onChange}
                name="city"
                id="city"
              />
              <Close
                onClick={() => {
                  inputCity.onClick("");
                }}
                className={classClose}
              />
              <div
                className={classNames({
                  "auto-city": true,
                  open: inputCity.focus && inputCity.isCompareError.value,
                })}
              >
                {cities.map((item) => {
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={inputCity.onChange}
                      value={item.name}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </article>
          </section>
          <section className="city-content">
            <span>Пункт Выдачи</span>
            <article
              onFocus={inputAddress.onFocus}
              onBlur={inputAddress.onBlur}
            >
              <input
                type="text"
                value={inputAddress.value}
                onChange={inputAddress.onChangeAddress}
                readOnly={!inputCity.inputValid.value ? "readOnly" : ""}
                name="place"
                placeholder="Начните вводить пункт.."
                id="place"
              />
              <Close
                onClick={() => inputAddress.onClick("")}
                className={classCloseAddress}
              />
              <div
                className={classNames({
                  "auto-address": true,
                  open:
                    inputAddress.value.length >= 2 &&
                    inputAddress.focus &&
                    inputAddress.isCompareError.value,
                })}
              >
                {addresses.map((item) => {
                  return (
                    <button
                      key={item.address}
                      type="button"
                      onClick={inputAddress.onChange}
                      value={item.address}
                    >
                      {`${item.cityId.name} ${item.address}`}
                    </button>
                  );
                })}
              </div>
            </article>
          </section>
        </aside>
        <aside className="location-map">
          <span>Выбрать на карте:</span>
          <img src={map} alt="location-map" />
        </aside>
      </main>
    </OrderLayout>
  );
};

export default Location;
