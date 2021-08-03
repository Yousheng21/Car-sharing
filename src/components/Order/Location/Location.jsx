import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import "./location.scss";

import Close from "../../../images/close.svg";

import getTableCity from "../../../actions/city";
import { getTableAddress } from "../../../actions/address";

import { setCurrentAddress } from "../../../reducers/appReducer";

import { useInput } from "../../../utils/Validator/validator";

import Map from "./Map";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import { resetCity } from "../../../actions/app";

const Location = ({ nextStep, page }) => {
  const dispatch = useDispatch();

  const placemarks = useSelector((state) => state.app.placeMarks);
  const currCity = useSelector((state) => state.app.currentCity.name);
  const currAddress = useSelector((state) => state.app.currentAddress);
  const cities = useSelector((state) => state.app.newCities);
  const addresses = useSelector((state) => state.app.newPlaceMarks);

  const inputCity = useInput("", {
    isCompareCity: {
      text: "Оставьте поле пустым или введите город",
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
    if (!placemarks.length) {
      dispatch(getTableCity);
      dispatch(getTableAddress(""));
    }

    if (currCity) inputCity.onClick(currCity);
    if (currAddress) inputAddress.onClick(currAddress);
  }, []);

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

  const classClose = classNames({
    "btn-close": true,
    open: inputCity.value && inputCity.focus,
  });

  const classCloseAddress = classNames({
    "btn-close": true,
    open: inputAddress.focus && inputAddress.value,
  });

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
          <section className="city-content">
            <span>Город</span>
            <div onFocus={inputCity.onFocus} onBlur={inputCity.onBlur}>
              <input
                type="text"
                value={inputCity.value}
                onChange={inputCity.onChange}
                name="city"
                id="city"
              />
              <button
                type="button"
                className={classClose}
                onClick={inputCity.onClose}
              >
                <Close />
              </button>
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
            </div>
            <span>
              {inputCity.isDirty && inputCity.printError(["isCompareError"])}
            </span>
          </section>
          <section className="city-content">
            <span>Пункт Выдачи</span>
            <div onFocus={inputAddress.onFocus} onBlur={inputAddress.onBlur}>
              <input
                type="text"
                value={inputAddress.value}
                onChange={inputAddress.onChangeAddress}
                name="place"
                placeholder="Начните вводить пункт.."
                id="place"
              />
              <button
                type="button"
                onClick={inputAddress.onClose}
                className={classCloseAddress}
              >
                <Close />
              </button>
              <div
                className={classNames({
                  "auto-address": true,
                  open:
                    inputAddress.value.length >= 2 &&
                    inputAddress.focus &&
                    inputAddress.isCompareError.value,
                })}
              >
                {addresses.length
                  ? addresses.map((item) => {
                      return (
                        <button
                          key={item.address.road}
                          type="button"
                          onClick={inputAddress.onChange}
                          value={`${item.address.road} ${item.address.house_number}`}
                        >
                          {`${item.address.city} ${item.address.road} ${item.address.house_number}`}
                        </button>
                      );
                    })
                  : ""}
              </div>
            </div>
            <span>
              {inputAddress.isDirty &&
                inputAddress.printError(["isEmpty", "isCompareError"])}
            </span>
          </section>
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
