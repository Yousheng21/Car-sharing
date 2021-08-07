import { store } from "../reducers";

import { instance } from "../reducers/data/dataServer";
import {
  setCurrentAddress,
  setCurrentCity,
  setCurrentStep,
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

export const selectSortCars = (sort) => {
  const cars = store.getState().app.tableCars;
  const newCars = !sort
    ? cars
    : cars.filter((item) => {
        return item.categoryId ? item.categoryId.name === sort : "";
      });

  store.dispatch(setNewTableCars(newCars));
};

export const setCity = (obj) => {
  const { placeMarks } = store.getState().app;

  store.dispatch(setCurrentCity(obj));
  const place = placeMarks.filter((item) => {
    return obj.name === item.address.city;
  });

  store.dispatch(setPlaceMarkIndex(place.length ? place[0] : {}));
};

export const resetCity = () => {
  store.dispatch(setCurrentCity({}));
  store.dispatch(setCurrentAddress("", ""));
};

export const setAddress = (address, city, item) => {
  store.dispatch(setCurrentAddress(address, city));
  return store.dispatch(setPlaceMarkIndex(item));
};

export const nextStep = (step) => {
  store.dispatch(setCurrentStep(step));
};

export default getTableCars();
