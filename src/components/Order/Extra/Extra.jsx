import React, { useEffect, useState } from "react";
import "./extra.scss";

import { useDispatch, useSelector } from "react-redux";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import InputColor from "./inputs/InputColor";
import InputRangeDate from "./inputs/InputRangeDate";
import InputTariff from "./inputs/InputTariff";
import InputExtraServices from "./inputs/InputExtraServices";
import getTariffs from "../../../actions/tariff";
import { tariffIsValid } from "../../../actions/dateRange";

const Extra = ({ nextStep, page }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    startDate
      ? new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate(),
          startDate.getHours(),
          startDate.getMinutes() + 30
        )
      : ""
  );
  const [tariffsIsValid, setTariffsIsValid] = useState([]);
  const [priceValid, setPriceValid] = useState(true);
  const [tariffIsSelect, setTariffIsSelect] = useState(true);
  const [inputTariff, setInputTariff] = useState(0);

  const tariffs = useSelector((state) => state.app.tariffs);
  const dateIsValid = useSelector((state) => state.app.dateIsValid);
  const price = useSelector((state) => state.app.price);

  useEffect(() => {
    if (!tariffs.length) dispatch(getTariffs);
    setTariffsIsValid(tariffIsValid);
  }, [tariffs.length, startDate, endDate]);

  useEffect(() => {
    setTariffIsSelect(
      !tariffs.some((item, index) => {
        return index === inputTariff && tariffsIsValid[index];
      })
    );
  }, [startDate, endDate, inputTariff, tariffsIsValid]);

  useEffect(() => {
    if (price.value) {
      if (price.value >= price.min && price.value <= price.max)
        setPriceValid(true);
      else setPriceValid(false);
    }
  }, [price.value]);

  return (
    <OrderLayout
      path="total"
      step={nextStep}
      page={page}
      priceValid={priceValid}
      text="Итого"
      arrayValid={[dateIsValid, startDate, endDate, tariffIsSelect, priceValid]}
    >
      <main className="extra-content">
        <InputColor />
        <InputRangeDate
          dateIsValid={dateIsValid}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <InputTariff
          tariffIsSelect={tariffIsSelect}
          tariffsIsValid={tariffsIsValid}
          tariffs={tariffs}
          inputTariff={inputTariff}
          setInputTariff={setInputTariff}
          setTariffIsSelect={setTariffIsSelect}
          startDate={startDate}
          endDate={endDate}
        />
        <InputExtraServices />
      </main>
    </OrderLayout>
  );
};

export default Extra;
