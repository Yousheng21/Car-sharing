import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectSortCars } from "../../../actions/app";
import getCategories from "../../../actions/category";

const LabelCategory = () => {
  const dispatch = useDispatch();
  const [inputCategory, setInputCategory] = useState(0);

  const categories = useSelector((state) => state.app.categories);

  useEffect(() => {
    if (!categories.length) dispatch(getCategories);
  }, [categories.length]);

  function handleChange(value, sort) {
    selectSortCars(sort);
    setInputCategory(+value);
  }
  return categories.map((item, index) => (
    <label
      className={classNames({
        active: index === inputCategory,
      })}
      key={item.id}
      htmlFor={index}
    >
      <input
        type="radio"
        defaultChecked={index === 0}
        name="category"
        id={index}
        value={item.name}
        onChange={() => handleChange(index, item.id)}
      />
      {item.name}
    </label>
  ));
};

export default LabelCategory;
