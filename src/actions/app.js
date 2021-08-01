import { store } from "../reducers";

import { instance } from "../reducers/data/dataServer";
import {
  setCurrentAddress,
  setCurrentCity,
  setCurrentStep,
  setNewTableCars,
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
  store.dispatch(setCurrentCity(obj));
  store.dispatch(setCurrentAddress("", obj.name));
};

export const resetCity = () => {
  store.dispatch(setCurrentCity({}));
  store.dispatch(setCurrentAddress("", ""));
};

export const setAddress = (address, city) => {
  store.dispatch(setCurrentAddress(address, city));
};

export const nextStep = (step) => {
  store.dispatch(setCurrentStep(step));
};

export default getTableCars();
