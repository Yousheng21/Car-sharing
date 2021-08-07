import React from "react";
import "./extra.scss";

import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import InputColor from "./InputColor";
import InputRangeDate from "./InputRangeDate";
import InputTariff from "./InputTariff";
import InputExtraServices from "./InputExtraServices";

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
