import React from "react";
import "./sideBar.scss";
import { useSelector } from "react-redux";

const SideBar = ({ children }) => {
  const parameters = useSelector((state) => state.app.currentOrder);
  const price = useSelector((state) => state.app.price);

  return (
    <aside className="sideBar">
      <header className="sideBar-info-title sideBar-child">
        <h1>Ваш заказ:</h1>
      </header>
      <main className="sideBar-parameters sideBar-child">
<<<<<<< HEAD
        {Object.keys(parameters).map(
          (item) =>
=======
        {Object.keys(parameters).map((item) => {
          return (
>>>>>>> 175c49e3e6357515b87b54c086ddba2c7c857089
            parameters[item].value && (
              <section
                key={parameters[item].text}
                className="sideBar-info-content"
              >
                <span className="place">{parameters[item].text}</span>
                <span className="dots">......................</span>
                <div className="address">
<<<<<<< HEAD
                  <span>
                    {item === "place"
                      ? `${parameters[item].value.city ?? ""},\n${
                          parameters[item].value.street ?? ""
                        }`
                      : parameters[item].value}
                  </span>
                </div>
              </section>
            )
        )}
      </main>

      <section className="sideBar-info-price sideBar-child">
        Цена от <span>{price.min}</span> до <span>{price.max}</span>
      </section>

=======
                  <span>{parameters[item].value}</span>
                </div>
              </section>
            )
          );
        })}
      </main>

      <footer className="sideBar-info-price sideBar-child">
        <text>
          Цена от <span>{price.min}</span> до <span>{price.max}</span>
        </text>
      </footer>
>>>>>>> 175c49e3e6357515b87b54c086ddba2c7c857089
      {children}
    </aside>
  );
};

export default SideBar;
