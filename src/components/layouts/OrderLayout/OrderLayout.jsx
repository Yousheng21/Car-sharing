import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../../common/Burger-menu/Burger-menu";
import NavBar from "../../common/NavBar/NavBar";
import SideBar from "../../common/SideBar/SideBar";
import { nextStep } from "../../../actions/app";
import "./orderLayout.scss";

const OrderLayout = ({ children, path, step, text, page, arrayValid }) => {
  return (
    <aside className="location-page">
      <BurgerMenu />
      <NavBar page={page} />
      {children}
      <SideBar>
        <Link to={`/car-sharing/order/${path}`}>
          <button
            type="button"
            onClick={() => nextStep(step)}
            className="sideBar-button sideBar-child"
            disabled={
              arrayValid
                ? arrayValid.some((item) => {
                    return !item;
                  })
                : ""
            }
          >
            {text}
          </button>
        </Link>
      </SideBar>
    </aside>
  );
};

export default OrderLayout;
