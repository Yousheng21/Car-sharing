import React, { useState } from "react";
import classNames from "classnames";
import Close from "../../../../images/close.svg";

const InputRangeDate = () => {
  const [inputDateFrom, setInputDateFrom] = useState("");
  const [inputDateTo, setInputDateTo] = useState("");
  const [inputDateFocus, setInputDateFocus] = useState(false);

  const classClose = classNames({
    "btn-close": true,
    open: inputDateFocus,
  });

  return (
    <aside>
      <h1>Дата аренды</h1>
      <div className="extra-date">
        <section className="city-content">
          <span>С</span>
          <div>
            <input
              type="date"
              value={inputDateFrom}
              onChange={(event) => setInputDateFrom(event.target.value)}
              onFocus={() => setInputDateFocus(true)}
              onBlur={() => setInputDateFocus(false)}
              name="dateFrom"
              id="dateFrom"
            />
            <Close
              onClick={() => {
                setInputDateFrom("");
              }}
              className={classClose}
            />
          </div>
        </section>
        <section className="city-content">
          <span>По</span>
          <div>
            <input
              type="date"
              name="dateTo"
              onChange={(event) => setInputDateTo(event.target.value)}
              placeholder="Введите дату и время"
              id="dateTo"
              value={inputDateTo}
            />
            <Close
              onClick={() => {
                setInputDateTo("");
              }}
              className={classClose}
            />
          </div>
        </section>
      </div>
    </aside>
  );
};

export default InputRangeDate;
