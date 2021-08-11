import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import getTariffs from "../../../../actions/tariff";
import { setTariff } from "../../../../reducers/appReducer";

const InputTariff = () => {
  const dispatch = useDispatch();
  const [inputTariff, setInputTariff] = useState(0);
  const tariffs = useSelector((state) => state.app.tariffs);

  useEffect(() => {
    if (!tariffs.length) dispatch(getTariffs);
    else dispatch(setTariff(tariffs[0].rateTypeId.name));
  }, [tariffs.length]);

  const handleChange = (index, name) => {
    setInputTariff(index);
    dispatch(setTariff(name));
  };

  return (
    <div>
      <h1>Тариф</h1>
      <section className="extra-tariff">
        {tariffs.map((item, index) => (
          <label
            className={classNames({
              active: index === inputTariff,
            })}
            key={item.id}
            htmlFor={item.rateTypeId.id}
          >
            <input
              type="radio"
              name="tariff"
              id={item.rateTypeId.id}
              value={item.rateTypeId.id}
              onChange={() => handleChange(index, item.rateTypeId.name)}
            />
            {`${item.rateTypeId.name}, ${item.price} P/${item.rateTypeId.unit}`}
          </label>
        ))}
      </section>
    </div>
  );
};

export default InputTariff;
