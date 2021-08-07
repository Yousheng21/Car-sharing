import React from "react";
import "./extra.scss";

import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import InputColor from "./inputs/InputColor";
import InputRangeDate from "./inputs/InputRangeDate";
import InputTariff from "./inputs/InputTariff";
import InputExtraServices from "./inputs/InputExtraServices";

const Extra = ({ nextStep, page }) => {
  return (
    <OrderLayout path="total" step={nextStep} page={page} text="Итого">
      <main className="extra-content">
        <InputColor />
        <InputRangeDate />
        <InputTariff />
        <InputExtraServices />
      </main>
    </OrderLayout>
  );
};

export default Extra;
