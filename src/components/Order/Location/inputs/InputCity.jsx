import React from "react";
import classNames from "classnames";
import Close from "../../../../images/close.svg";

const InputCity = ({ inputCity, array }) => {
  const classClose = classNames({
    "btn-close": true,
    open: inputCity.value && inputCity.focus,
  });
  return (
    <section className="city-content">
      <span>Город</span>
      <aside onFocus={inputCity.onFocus} onBlur={inputCity.onBlur}>
        <input
          type="text"
          value={inputCity.value}
          onChange={inputCity.onChange}
          name="city"
          id="city"
        />
        <button
          type="button"
          className={classClose}
          onClick={inputCity.onClose}
        >
          <Close />
        </button>
        <div
          className={classNames({
            "auto-city": true,
            open: inputCity.focus && inputCity.isCompareError.value,
          })}
        >
          {array.map((item) => {
            return (
              <button
                key={item.name}
                type="button"
                onClick={inputCity.onChange}
                value={item.name}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </aside>
      <span>
        {inputCity.isDirty && inputCity.printError(["isCompareError"])}
      </span>
    </section>
  );
};

export default InputCity;
