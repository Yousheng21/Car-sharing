import React from "react";
<<<<<<< HEAD
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
=======

const Extra = () => {
  return <div>Extra</div>;
>>>>>>> 175c49e3e6357515b87b54c086ddba2c7c857089
};

export default Extra;
