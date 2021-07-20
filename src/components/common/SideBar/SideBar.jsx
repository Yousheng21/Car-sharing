import React from "react";
import "./sideBar.css";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const SideBar = ({ children }) => {
  const parameters = useSelector((state) => state.app.currentOrder);
  const price = useSelector((state) => state.app.price);

  return (
    <div className="sideBar">
      <div className="sideBar-info-title">
        <h1>Ваш заказ:</h1>
      </div>
      <div className="sideBar-parameters">
        {Object.keys(parameters).map((item) => {
          return (
            parameters[item].value && (
              <div key={parameters[item].text} className="sideBar-info-content">
                <span className="place">{parameters[item].text}</span>
                <span className="dots">......................</span>
                <div className="address">
                  <span>{parameters[item].value}</span>
                </div>
              </div>
            )
          );
        })}
      </div>

      <div className="sideBar-info-price">
        <h1>
          Цена от <span>{price.min}</span> до <span>{price.max}</span>
        </h1>
      </div>
      {children}
    </div>
  );
};

export default SideBar;
