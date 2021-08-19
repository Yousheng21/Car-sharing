import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SideBarSection from "./SideBarSection";
import { additional } from "../../../reducers/data/dataOrder";
import setDiffDate from "../../../actions/dateRange";

const SideBarTotal = ({ parameters, children }) => {
  const delay = useSelector((state) => state.app.currentOrder.delay.value);
  useEffect(() => {
    if (!delay) {
      setDiffDate(new Date(parameters.dateFrom), new Date(parameters.dateTo));
    }
  }, [delay]);

  return (
    <aside className="sideBar">
      <header className="sideBar-info-title sideBar-child">
        <h1>Ваш заказ:</h1>
      </header>
      <main className="sideBar-parameters sideBar-child">
        <SideBarSection
          text="Пункт выдачи"
          value={`${parameters.cityId.name ?? ""}\n
          ${parameters.pointId.address ?? ""}`}
        />
        <SideBarSection text="Модель" value={parameters.carId.name} />
        <SideBarSection text="Цвет" value={parameters.color} />
        <SideBarSection text="Длительность аренды" value={delay ?? ""} />
        <SideBarSection
          text="Тариф"
          value={parameters.rateId.rateTypeId.name}
        />
        {additional.map((item) =>
          parameters[item.key] ? (
            <SideBarSection key={item.key} text={item.name} value="Да" />
          ) : (
            ""
          )
        )}
      </main>
      <section className="sideBar-info-price sideBar-child">
        Цена <span>{parameters.price}</span>
      </section>
      {children}
    </aside>
  );
};

export default SideBarTotal;
