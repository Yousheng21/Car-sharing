import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { additional } from "../../../../reducers/data/dataOrder";
import {
  changeAdditional,
  setAdditional,
} from "../../../../reducers/appReducer";

const InputExtraServices = () => {
  const dispatch = useDispatch();
  const [arrSelected, setArrSelected] = useState([]);

  const handleChange = (item, index) => {
    if (!arrSelected.includes(index)) {
      dispatch(setAdditional(item));
      setArrSelected([...arrSelected, index]);
    } else {
      const elIndex = arrSelected.findIndex((el) => {
        return el === index;
      });
      dispatch(changeAdditional(item));
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
