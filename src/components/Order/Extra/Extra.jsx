import React, { useState } from "react";
import "./extra.scss";

import { useSelector } from "react-redux";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import InputColor from "./inputs/InputColor";
import InputRangeDate from "./inputs/InputRangeDate";
import InputTariff from "./inputs/InputTariff";
import InputExtraServices from "./inputs/InputExtraServices";

const Extra = ({ nextStep, page }) => {
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

  const dateIsValid = useSelector((state) => state.app.dateIsValid);
  return (
    <OrderLayout
      path="total"
      step={nextStep}
      page={page}
      text="Итого"
      arrayValid={[dateIsValid, startDate, endDate]}
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
        <InputTariff />
        <InputExtraServices />
      </main>
    </OrderLayout>
  );
};

export default Extra;
