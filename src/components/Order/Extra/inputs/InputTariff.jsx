import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setAdditional, setTariff } from "../../../../reducers/appReducer";
import Modal from "../../../../utils/Modal/Modal";
import { setPrice } from "../../../../actions/tariff";
import { additional } from "../../../../reducers/data/dataOrder";

const InputTariff = ({
  tariffs,
  tariffsIsValid,
  tariffIsSelect,
  inputTariff,
  setInputTariff,
  startDate,
  endDate,
}) => {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState(false);

  const currTariff = useSelector((state) => state.app.currentTariff);
  const stateAdditional = useSelector(
    (state) => state.app.currentOrder.additional
  );

  useEffect(() => {
    if (tariffs.length && !currTariff.id) {
      dispatch(setTariff(tariffs[0], tariffs[0].rateTypeId.name));
    }
  }, [tariffs.length]);

  const handleChange = (index, tariff) => {
    setInputTariff(index);
    dispatch(setTariff(tariff, tariff.rateTypeId.name));
  };

  useEffect(() => {
    if (currTariff.id) {
      setPrice(currTariff);
      Object.keys(stateAdditional).forEach((item) => {
        if (stateAdditional[item].value) {
          return additional.forEach((add) => {
            if (item === add.key) {
              return dispatch(setAdditional(add));
            }
          });
        }
      });
    }
  }, [startDate, endDate, currTariff.id]);

  return (
    <div>
      <h1>Тариф</h1>
      <section className="extra-tariff">
        {tariffs.map((item, index) => (
          <label
            className={classNames({
              active: index === inputTariff && !tariffsIsValid[index],
            })}
            key={item.id}
            htmlFor={item.rateTypeId.id}
          >
            <button
              className={classNames({
                "extra-btn": true,
                disabled: tariffsIsValid[index],
              })}
              type="button"
              onClick={(event) => {
                if (event.target.classList[1] === "disabled") {
                  setActiveModal(true);
                } else handleChange(index, item);
              }}
            >
              {`${item.rateTypeId.name}, ${item.price} P/${item.rateTypeId.unit}`}
            </button>
            <Modal active={activeModal}>
              <h1 className="title">
                Тариф не соответсвует выбранной длительности аренды
              </h1>
              <button
                className="success"
                type="button"
                onClick={() => setActiveModal(false)}
              >
                Понятно
              </button>
            </Modal>
          </label>
        ))}
      </section>
      {!tariffIsSelect ? <span className="error">Выберите тариф</span> : ""}
    </div>
  );
};

export default InputTariff;
