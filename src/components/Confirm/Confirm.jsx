import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./confirm.scss";
import BurgerMenu from "../common/Burger-menu/Burger-menu";
import NavBar from "../common/NavBar/NavBar";
import getOrder from "../../actions/getOrder";
import SideBarTotal from "../common/SideBar/SideBarTotal";
import Preloader from "../../utils/Preloader/Preloader";
import setOrderComplete from "../../actions/confirmOrder";
import { orderCloseId } from "../../reducers/data/dataOrder";
import Image from "../common/Image";

function Number({ number }) {
  if (number) return <span className="number">{number}</span>;
  return "";
}

function Tank({ fullTank, carTank }) {
  let tank;
  if (fullTank) tank = 100;
  else if (carTank) tank = carTank;
  else tank = 0;

  return <span>{`Топливо ${tank}%`}</span>;
}

const Confirm = (props) => {
  const dispatch = useDispatch();
  const { match } = props;
  const { id } = match.params;

  const order = useSelector((state) => state.app.temporaryOrder);

  useEffect(() => {
    if (!Object.keys(order).length) dispatch(getOrder(id));
  }, [Object.keys(order).length]);

  return Object.keys(order).length ? (
    <div className="location-page">
      <BurgerMenu />
      <NavBar confirm={id} city={order.cityId ? order.cityId.name : ""} />

      <main className="confirm-content">
        <h1>Ваш заказ в статусе {order.orderStatusId.name}</h1>
        <div className="total-content-main">
          <section className="total-content-info">
            <h1>{order.carId.name}</h1>
            <Number number={order.carId.number ?? ""} />
            <section className="text">
              <Tank carTank={order.carId.tank} fullTank={order.isFullTank} />
            </section>
            <section className="text">
              <span>
                Доступна c {new Date(order.dateFrom).toLocaleString()}
              </span>
            </section>
          </section>
          <Image car={order.carId} />
        </div>
      </main>

      <SideBarTotal parameters={order}>
        <button
          type="button"
          className="button confirm-content-button"
          onClick={() => dispatch(setOrderComplete(id, orderCloseId))}
        >
          Отменить
        </button>
      </SideBarTotal>
    </div>
  ) : (
    <Preloader />
  );
};

export default Confirm;
