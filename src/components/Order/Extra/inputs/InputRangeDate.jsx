import React, { useEffect } from "react";
import DateOrder from "../../../../utils/Input/DateOrder";
import setDiffDate from "../../../../actions/dateRange";

const InputRangeDate = ({
  dateIsValid,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  useEffect(() => {
    if (!startDate) setEndDate("");
    setDiffDate(startDate, endDate);
  }, [startDate, endDate]);

  function handleDateFrom(date) {
    setStartDate(date);

    const nextDate = new Date(date);
    nextDate.setMinutes(nextDate.getMinutes() + 30);

    if (endDate <= date) {
      setEndDate(nextDate);
    }
  }

  const filterPassedTimeFrom = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const filterPassedTimeTo = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return (
      currentDate.getTime() < selectedDate.getTime() &&
      selectedDate.getTime() > startDate.getTime()
    );
  };

  return (
    <div>
      <h1>Дата аренды</h1>
      <div className="extra-date">
        <section className="city-content">
          <span>С</span>
          <DateOrder
            onChange={handleDateFrom}
            onClose={() => setStartDate("")}
            minDate={new Date()}
            selected={startDate}
            filterTime={filterPassedTimeFrom}
            popperPlacement="top-end"
          />
          <span>{!startDate ? "Пустое поле" : ""}</span>
        </section>
        <section className="city-content">
          <span>По</span>
          <DateOrder
            onChange={setEndDate}
            onClose={() => setEndDate("")}
            minDate={startDate}
            selected={endDate}
            filterTime={filterPassedTimeTo}
            disabled={!startDate}
          />
          <span>{!endDate ? "Пустое поле" : ""}</span>
        </section>
      </div>
      {!dateIsValid ? "Выберите правильную продолжительность аренды" : ""}
    </div>
  );
};

export default InputRangeDate;
