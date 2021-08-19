import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./confirm.scss";
import BurgerMenu from "../common/Burger-menu/Burger-menu";
import NavBar from "../common/NavBar/NavBar";
import getOrder from "../../actions/getOrder";
import { API_URL } from "../../reducers/data/dataServer";
import SideBarTotal from "../common/SideBar/SideBarTotal";

const Confirm = (props) => {
  const dispatch = useDispatch();
  const { match } = props;
  const { id } = match.params;

  const order = useSelector((state) => state.app.temporaryOrder);

  useEffect(() => {
    if (id) dispatch(getOrder(id));
  }, [id]);

  return (
    <div className="location-page">
      <BurgerMenu />
      <NavBar confirm={id} city={order.cityId ? order.cityId.name : ""} />
      {Object.keys(order).length ? (
        <main className="confirm-content">
          <h1>Ваш заказ подтверждён</h1>
          <div className="total-content-main">
            <section className="total-content-info">
              <h1>{order.carId.name}</h1>
              {order.carId.number ? (
                <span className="number">{order.carId.number}</span>
              ) : (
                ""
              )}
              <section className="text">
                <span>
                  {`Топливо ${
                    order.isFullTank ? " 100" : order.carId.tank ?? " 0"
                  }%`}
                </span>
              </section>
              <section className="text">
                <span>
                  Доступна c {new Date(order.dateFrom).toLocaleString()}
                </span>
              </section>
            </section>
            <img
              src={API_URL + order.carId.thumbnail.path}
              alt={order.carId.name}
            />
          </div>
        </main>
      ) : (
        ""
      )}
      {Object.keys(order).length ? (
        <SideBarTotal parameters={order}>
          <button type="button" className="button confirm-content-button">
            Отменить
          </button>
        </SideBarTotal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Confirm;
