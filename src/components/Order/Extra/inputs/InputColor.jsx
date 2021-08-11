import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { setColor } from "../../../../reducers/appReducer";

const InputColor = () => {
  const dispatch = useDispatch();
  const [inputColor, setInputColor] = useState(0);

  const car = useSelector((state) => state.app.currentCar);

  useEffect(() => {
    dispatch(setColor(car.colors[0]));
  }, []);

  const handleChange = (index, item) => {
    setInputColor(index);
    dispatch(setColor(item));
  };

  return (
    <div className="extra-main-color">
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
              onChange={() => handleChange(index, item)}
            />
            {item}
          </label>
        ))}
      </section>
    </div>
  );
};

export default InputColor;
