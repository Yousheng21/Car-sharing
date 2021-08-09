import React from "react";
import BurgerMenu from "../common/Burger-menu/Burger-menu";
import SideBar from "../common/SideBar/SideBar";
import "./confirm.scss";
import NavBar from "../common/NavBar/NavBar";
import InfoOrderLayout from "../layouts/InfoOrderLayout";

const Confirm = () => {
  return (
    <div className="location-page">
      <BurgerMenu />
      <NavBar confirm />
      <main className="confirm-content">
        <h1>Ваш заказ подтверждён</h1>
        <InfoOrderLayout />
      </main>
      <SideBar>
        <button type="button" className="button confirm-content-button">
          Отменить
        </button>
      </SideBar>
    </div>
  );
};

export default Confirm;
