import React, { useState } from "react";
import classNames from "classnames";
import Close from "../../../../images/close.svg";

const InputRangeDate = () => {
  const [inputDateFrom, setInputDateFrom] = useState("");
  const [inputDateTo, setInputDateTo] = useState("");
  const [inputDateFocusTo, setInputDateFocusTo] = useState(false);
  const [inputDateFocusFrom, setInputDateFocusFrom] = useState(false);

  const classCloseTo = classNames({
    "btn-close": true,
    open: inputDateFocusTo,
  });

  const classCloseFrom = classNames({
    "btn-close": true,
    open: inputDateFocusFrom,
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
              onFocus={() => setInputDateFocusFrom(true)}
              onBlur={() => setInputDateFocusFrom(false)}
              name="dateFrom"
              id="dateFrom"
            />
            <Close
              onClick={() => {
                setInputDateFrom("");
              }}
              className={classCloseFrom}
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
              onFocus={() => setInputDateFocusTo(true)}
              onBlur={() => setInputDateFocusTo(false)}
              placeholder="Введите дату и время"
              id="dateTo"
              value={inputDateTo}
            />
            <Close
              onClick={() => {
                setInputDateTo("");
              }}
              className={classCloseTo}
            />
          </div>
        </section>
      </div>
    </aside>
  );
};

export default InputRangeDate;
