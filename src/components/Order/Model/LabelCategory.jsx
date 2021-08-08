import React, { useState } from "react";
import classNames from "classnames";
import { selectSortCars } from "../../../actions/app";
import { categories } from "../../../reducers/data/dataOrder";

const LabelCategory = () => {
  const [inputCategory, setInputCategory] = useState(0);

  function handleChange(value, sort) {
    selectSortCars(sort);
    setInputCategory(+value);
  }
  return categories.map((item, index) => (
    <label
      className={classNames({
        active: index === inputCategory,
      })}
      key={item.text}
      htmlFor={index}
    >
      <input
        type="radio"
        defaultChecked={index === 0}
        name="category"
        id={index}
        value={item.sort}
        onChange={() => handleChange(index, item.sort)}
      />
      {item.text}
    </label>
  ));
};

export default LabelCategory;
