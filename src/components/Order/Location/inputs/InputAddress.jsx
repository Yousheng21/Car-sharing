import React from "react";
import classNames from "classnames";
import Close from "../../../../images/close.svg";

const InputAddress = ({ inputAddress, array }) => {
  const classCloseAddress = classNames({
    "btn-close": true,
    open: inputAddress.focus && inputAddress.value,
  });
  return (
    <section className="city-content">
      <span>Пункт Выдачи</span>
      <aside onFocus={inputAddress.onFocus} onBlur={inputAddress.onBlur}>
        <input
          type="text"
          value={inputAddress.value}
          onChange={inputAddress.onChangeAddress}
          name="place"
          placeholder="Начните вводить пункт.."
          id="place"
        />
        <button
          type="button"
          onClick={inputAddress.onClose}
          className={classCloseAddress}
        >
          <Close />
        </button>
        <div
          className={classNames({
            "auto-address": true,
            open: inputAddress.focus && inputAddress.isCompareError.value,
          })}
        >
          {array.length
            ? array.map((item) => {
                return (
                  <button
                    key={item.address.road}
                    type="button"
                    onClick={inputAddress.onChange}
                    value={`${item.address.road} ${item.address.house_number}`}
                  >
                    {`${item.address.city} ${item.address.road} ${item.address.house_number}`}
                  </button>
                );
              })
            : ""}
        </div>
      </aside>
      <span>
        {inputAddress.isDirty &&
          inputAddress.printError(["isEmpty", "isCompareError"])}
      </span>
    </section>
  );
};

export default InputAddress;
