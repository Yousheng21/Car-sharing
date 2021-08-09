import React, { useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

const InputColor = () => {
  const [inputColor, setInputColor] = useState(0);

  const car = useSelector((state) => state.app.currentCar);

  return (
    <div>
      <h3>Цвет</h3>
      <section className="extra-color">
        {car.colors.map((item, index) => (
          <label
            className={classNames({
              active: index === inputColor,
            })}
            key={item}
            htmlFor={item}
          >
            <input
              type="radio"
              name="color"
              value={item}
              id={item}
              onChange={() => setInputColor(index)}
            />
            {item}
          </label>
        ))}
      </section>
    </div>
  );
};

export default InputColor;
