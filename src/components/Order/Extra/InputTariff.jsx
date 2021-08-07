import React, { useState } from "react";
import classNames from "classnames";
import { tariff } from "../../../reducers/data/dataOrder";

const InputTariff = () => {
  const [inputTariff, setInputTariff] = useState(0);

  return (
    <aside>
      <h1>Тариф</h1>
      <section className="extra-tariff">
        {tariff.map((item, index) => {
          return (
            <label
              className={classNames({
                active: index === inputTariff,
              })}
              key={item}
              htmlFor={item}
            >
              <input
                type="radio"
                name="tariff"
                id={item}
                value={item}
                onChange={() => setInputTariff(index)}
              />
              {item}
            </label>
          );
        })}
      </section>
    </aside>
  );
};

export default InputTariff;
