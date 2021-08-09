import React from "react";
import "./total.scss";

import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import InfoOrderLayout from "../../layouts/InfoOrderLayout";

const Total = ({ nextStep, page }) => {
  return (
    <OrderLayout path="confirm" text="Заказать" page={page} step={nextStep}>
      <main className="total-content">
        <InfoOrderLayout />
      </main>
    </OrderLayout>
  );
};

export default Total;
