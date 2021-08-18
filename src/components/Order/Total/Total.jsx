import React, { useState } from "react";
import "./total.scss";

import { Link } from "react-router-dom";
import InfoOrderLayout from "../../layouts/InfoOrderLayout";
import BurgerMenu from "../../common/Burger-menu/Burger-menu";
import NavBar from "../../common/NavBar/NavBar";
import SideBar from "../../common/SideBar/SideBar";
import Modal from "../../../utils/Modal/Modal";
import { setOrder } from "../../../actions/order";

const Total = ({ page }) => {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className="location-page">
      <BurgerMenu />
      <NavBar page={page} />
      <main className="total-content">
        <InfoOrderLayout />
      </main>
      <SideBar>
        <button
          type="button"
          onClick={() => {
            setActiveModal(true);
          }}
          className="button sideBar-button sideBar-child"
        >
          Заказать
        </button>
      </SideBar>
      <Modal active={activeModal} total>
        <h1>Подтвердить заказ</h1>
        <Link className="button" to="/car-sharing/order/confirm">
          <button type="button" className="success" onClick={setOrder}>
            Подтвердить
          </button>
        </Link>
        <button
          type="button"
          className="canceled"
          onClick={() => setActiveModal(false)}
        >
          Вернуться
        </button>
      </Modal>
    </div>
  );
};

export default Total;
