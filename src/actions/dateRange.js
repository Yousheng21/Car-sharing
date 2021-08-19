import { store } from "../reducers";
import { setDateRange, setDateValid } from "../reducers/appReducer";

const setDiffDate = (from, to) => {
  if (!from || !to) return store.dispatch(setDateRange("", from, to));

  const t2 = to.getTime();
  const t1 = from.getTime();

  if (t2 - t1 <= 0) return store.dispatch(setDateValid(false));

  const DateDiff = {
    inMinutes(weeks, days, hours) {
      return Math.floor(
        (t2 - t1) / (60 * 1000) - weeks * 7 * 1440 - hours * 60 - days * 1440
      );
    },
    totalMinutes() {
      return Math.floor((t2 - t1) / (60 * 1000));
    },
    inHours(weeks, days) {
      return Math.floor((t2 - t1) / (3600 * 1000) - 24 * days - weeks * 24 * 7);
    },
    inDays(weeks) {
      return Math.floor((t2 - t1) / (24 * 3600 * 1000) - weeks * 7);
    },
    totalDays() {
      return Math.ceil((t2 - t1) / (24 * 3600 * 1000));
    },
    inWeeks() {
      return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7));
    },
    totalWeeks() {
      return Math.round((t2 - t1) / (24 * 3600 * 1000 * 7));
    },
  };

  const weeks = DateDiff.inWeeks();
  const days = DateDiff.inDays(weeks);
  const hours = DateDiff.inHours(weeks, days);
  const minutes = DateDiff.inMinutes(weeks, days, hours);

  const diff = {
    weeks: {
      value: weeks,
      total: DateDiff.totalWeeks(),
      unit: "нед",
    },
    days: {
      value: days,
      total: DateDiff.totalDays(),
      unit: "д",
    },
    hours: {
      value: hours,
      unit: "ч",
    },
    minutes: {
      value: minutes,
      total: DateDiff.totalMinutes(),
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
