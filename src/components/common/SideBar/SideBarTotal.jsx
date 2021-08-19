import React from "react";
import SideBarSection from "./SideBarSection";
import { additional } from "../../../reducers/data/dataOrder";

const SideBarTotal = ({ parameters, children }) => {
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
        <SideBarSection text="Длительность аренды" value="" />
        <SideBarSection
          text="Тариф"
          value={parameters.rateId.rateTypeId.name}
        />
        {additional.map((item) =>
          parameters[item.key] ? (
            <SideBarSection text={item.name} value="Да" />
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
