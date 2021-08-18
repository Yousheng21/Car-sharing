import { store } from "../reducers";

import { instance } from "../reducers/data/dataServer";
import {
  setCurrentAddress,
  setCurrentCity,
  setCurrentStep,
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
  store.dispatch(setCurrentAddress(address, city, item.id));
  return store.dispatch(setPlaceMarkIndex(item));
};

export const nextStep = (step) => {
  store.dispatch(setCurrentStep(step));
};

export default getTableCars();
