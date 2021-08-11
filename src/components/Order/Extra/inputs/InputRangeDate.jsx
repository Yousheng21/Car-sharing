import React, { useState } from "react";
import classNames from "classnames";
import Close from "../../../../images/close.svg";

const InputRangeDate = () => {
  const date = new Date();
  const [inputDateFrom, setInputDateFrom] = useState(
    `${date.toJSON().split("T")[0]}T${date.toLocaleTimeString()}`
  );
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
  console.log(inputDateFrom);
  return (
    <div>
      <h1>Дата аренды</h1>
      <div className="extra-date">
        <section className="city-content">
          <span>С</span>
          <div>
            <input
              type="datetime-local"
              value={inputDateFrom}
              onChange={(event) => setInputDateFrom(event.target.value)}
              onFocus={() => setInputDateFocusFrom(true)}
              onBlur={() => setInputDateFocusFrom(false)}
              name="dateFrom"
              id="dateFrom"
              min={inputDateFrom}
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
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
              type="datetime-local"
              name="dateTo"
              onChange={(event) => setInputDateTo(event.target.value)}
              onFocus={() => setInputDateFocusTo(true)}
              onBlur={() => setInputDateFocusTo(false)}
              placeholder="Введите дату и время"
              id="dateTo"
              min={inputDateFrom}
              value={inputDateTo}
              disabled={!inputDateFrom}
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
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
    </div>
  );
};

export default InputRangeDate;
