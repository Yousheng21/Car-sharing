import { Component } from "react";
import { store } from "../reducers";
import { setDateRange, setDateValid } from "../reducers/appReducer";

class DateDiff extends Component {
  constructor(from, to) {
    super();
    this.from = from;
    this.to = to;
  }

  inMinutes(weeks, days, hours) {
    return Math.floor(
      (this.to - this.from) / (60 * 1000) -
        weeks * 7 * 1440 -
        hours * 60 -
        days * 1440
    );
  }

  totalMinutes() {
    return Math.floor((this.to - this.from) / (60 * 1000));
  }

  inHours(weeks, days) {
    return Math.floor(
      (this.to - this.from) / (3600 * 1000) - 24 * days - weeks * 24 * 7
    );
  }

  inDays(weeks) {
    return Math.floor((this.to - this.from) / (24 * 3600 * 1000) - weeks * 7);
  }

  totalDays() {
    return Math.ceil((this.to - this.from) / (24 * 3600 * 1000));
  }

  inWeeks() {
    return Math.floor((this.to - this.from) / (24 * 3600 * 1000 * 7));
  }

  totalWeeks() {
    return Math.round((this.to - this.from) / (24 * 3600 * 1000 * 7));
  }
}

const setDiffDate = (from, to) => {
  if (!from || !to) return store.dispatch(setDateRange("", from, to));

  const toDate = to.getTime();
  const fromDate = from.getTime();

  if (toDate - fromDate <= 0) return store.dispatch(setDateValid(false));

  const dateDiff = new DateDiff(fromDate, toDate);

  const weeks = dateDiff.inWeeks();
  const days = dateDiff.inDays(weeks);
  const hours = dateDiff.inHours(weeks, days);
  const minutes = dateDiff.inMinutes(weeks, days, hours);

  const diff = {
    weeks: {
      value: weeks,
      total: dateDiff.totalWeeks(),
      unit: "нед",
    },
    days: {
      value: days,
      total: dateDiff.totalDays(),
      unit: "д",
    },
    hours: {
      value: hours,
      unit: "ч",
    },
    minutes: {
      value: minutes,
      total: dateDiff.totalMinutes(),
      unit: "мин",
    },
  };
  let diffText = "";
  diffText = Object.keys(diff).map((key) =>
    diff[key].value ? `${diffText} ${diff[key].value}${diff[key].unit}` : ""
  );

  store.dispatch(setDateRange(diff, diffText, from, to));
  store.dispatch(setDateValid(true));
};

export const tariffIsValid = () => {
  const dateDuration = store.getState().app.currentOrder.delay.date;
  if (dateDuration) {
    const month = dateDuration.weeks.value >= 4;
    const week = month || dateDuration.weeks.value;
    const days = month || week || dateDuration.days.value;
    return [false, !days, !week, !month];
  }
};

export default setDiffDate;
