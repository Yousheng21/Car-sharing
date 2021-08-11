import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { additional } from "../../../../reducers/data/dataOrder";
import {
  changeAdditional,
  setAdditional,
} from "../../../../reducers/appReducer";

const InputExtraServices = () => {
  const dispatch = useDispatch();
  const [arrSelected, setArrSelected] = useState([]);

  const additionalState = useSelector(
    (state) => state.app.currentOrder.additional
  );

  const handleChange = (item, index) => {
    if (!arrSelected.includes(index)) {
      dispatch(setAdditional(item));
      setArrSelected([...arrSelected, index]);
    } else {
      const elIndex = additionalState.findIndex((el) => {
        return el.text === item.name;
      });
      dispatch(changeAdditional(elIndex));
      arrSelected.splice(elIndex, 1);
      setArrSelected([...arrSelected]);
    }
  };

  return (
    <div>
      <h1>Доп услуги</h1>
      <section className="extra-additional">
        {additional.map((item, index) => (
          <label key={item.name} htmlFor={item.name}>
            {`${item.name}, ${item.price}P`}
            <input
              type="checkbox"
              onChange={() => handleChange(item, index)}
              name="additional"
              id={item.name}
              value={item.name}
            />
            <span className="check-mark" />
          </label>
        ))}
      </section>
    </div>
  );
};

export default InputExtraServices;
