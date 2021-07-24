import React from "react";
import "./sideBar.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = ({ path, text }) => {
  const parameters = useSelector((state) => state.app.currentOrder);
  const price = useSelector((state) => state.app.price);

  return (
    <aside className="sideBar">
      <header className="sideBar-info-title sideBar-child">
        <h1>Ваш заказ:</h1>
      </header>
      <main className="sideBar-parameters sideBar-child">
        {Object.keys(parameters).map((item) => {
          return (
            parameters[item].value && (
              <section
                key={parameters[item].text}
                className="sideBar-info-content"
              >
                <span className="place">{parameters[item].text}</span>
                <span className="dots">......................</span>
                <div className="address">
                  <span>{parameters[item].value}</span>
                </div>
              </section>
            )
          );
        })}
      </main>

      <footer className="sideBar-info-price sideBar-child">
        <section>
          Цена от <span>{price.min}</span> до <span>{price.max}</span>
        </section>
      </footer>
      <Link to={`/car-sharing/order/${path}`}>
        <button type="button" className="sideBar-button sideBar-child">
          {text}
        </button>
      </Link>
    </aside>
  );
};

export default SideBar;
