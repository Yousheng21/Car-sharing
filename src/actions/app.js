import { store } from "../reducers";

import { instance } from "../reducers/data/dataServer";
import {
  setCurrentAddress,
  setCurrentCity,
  setCurrentStep,
  setDateRange,
  setDateValid,
  setNewCities,
  setNewPlaceMarks,
  setNewTableCars,
  setPlaceMarkIndex,
  setTableCars,
} from "../reducers/appReducer";

const LIMIT_VALUE = 6;
const OFFSET_VALUE = 2;

const getTableCars = () => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: "/api/db/car",
        params: {
          limit: LIMIT_VALUE,
          offset: OFFSET_VALUE,
        },
      });
      dispatch(setTableCars(response.data.data));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export const selectSortCars = (id) => {
  const cars = store.getState().app.tableCars;
  const newCars = !id
    ? cars
    : cars.filter((item) => {
        return item.categoryId ? item.categoryId.id === id : "";
      });

  store.dispatch(setNewTableCars(newCars));
};

export const setCity = (obj) => {
  const { placeMarks } = store.getState().app;
  const { currentAddress } = store.getState().app;

  if (obj.name !== currentAddress.city)
    store.dispatch(setCurrentAddress("", obj.name));

  const place = placeMarks.filter((item) => {
    return obj.name === item.address.city;
  });

  store.dispatch(setCurrentCity(obj));
  store.dispatch(setNewPlaceMarks(place));
  store.dispatch(setPlaceMarkIndex(place.length ? place[0] : {}));
};

export const resetCity = () => {
  const { placeMarks } = store.getState().app;
  const { cities } = store.getState().app;
  store.dispatch(setCurrentCity({}));
  store.dispatch(setCurrentAddress("", ""));
  store.dispatch(setNewCities(cities));
  store.dispatch(setNewPlaceMarks(placeMarks));
};

export const setAddress = (address, city, item) => {
  store.dispatch(setCurrentAddress(address, city));
  return store.dispatch(setPlaceMarkIndex(item));
};

export const nextStep = (step) => {
  store.dispatch(setCurrentStep(step));
};

export const setDiffDate = (from, to) => {
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
    inHours(weeks, days) {
      return Math.floor((t2 - t1) / (3600 * 1000) - 24 * days - weeks * 24 * 7);
    },
    inDays(weeks) {
      return Math.floor((t2 - t1) / (24 * 3600 * 1000) - weeks * 7);
    },

    inWeeks() {
      return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7));
    },
  };

  const weeks = DateDiff.inWeeks();
  const days = DateDiff.inDays(weeks);
  const hours = DateDiff.inHours(weeks, days);
  const minutes = DateDiff.inMinutes(weeks, days, hours);

  const diff = `${weeks ? `${weeks}нед` : ""} ${days ? `${days}д` : ""} ${
    hours ? `${hours}ч` : ""
  } ${minutes ? `${minutes}мин` : ""}`;

  store.dispatch(setDateRange(diff, from, to));
  store.dispatch(setDateValid(true));
};

export default getTableCars();
