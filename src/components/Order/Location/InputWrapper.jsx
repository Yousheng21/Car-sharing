import React, { useEffect } from "react";
import classNames from "classnames";
import Close from "../../../images/close.svg";
import Tooltip from "../../../utils/Input/Tooltip";
import Input from "../../../utils/Input/Input";

const InputWrapper = ({
  input,
  array,
  current,
  auto,
  title,
  onChange,
  print,
  id,
}) => {
  useEffect(() => {
    if (current) input.onClick(current);
  }, [current]);

  const classClose = classNames({
    "btn-close": true,
    open: input.focus && input.value,
  });

  const classAuto = classNames({
    "auto-address": true,
    open: input.focus && auto,
  });
  return (
    <div className="city-content">
      <span>{title}</span>
      <section
        className="city-content-main"
        onFocus={input.onFocus}
        onBlur={input.onBlur}
      >
        <Input
          name={id}
          value={input.value}
          onChange={onChange}
          placeholder={id === "city" ? "" : "Начните ввводить пункт выдачи"}
        />
        <button type="button" onClick={input.onClose} className={classClose}>
          <Close />
        </button>
        <div className={classAuto}>
          {array.length
            ? array.map((item) => (
                <Tooltip
                  key={item.name ?? item.address.road}
                  value={
                    item.name ??
                    `${item.address.road} ${item.address.house_number ?? ""}`
                  }
                  click={onChange}
                  text={
                    item.name ??
                    `${item.address.city} ${item.address.road} ${
                      item.address.house_number ?? ""
                    }`
                  }
                />
              ))
            : ""}
        </div>
      </section>
      <span>{input.isDirty && input.printError(print)}</span>
    </div>
  );
};

export default InputWrapper;
