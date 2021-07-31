import { store } from "../reducers";

import { instance } from "../reducers/data/dataServer";
import {
  setCurrentPage,
  setCurrentStep,
  setNewTableCars,
  setTableCars,
} from "../reducers/appReducer";

const getTableCars = () => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: "/api/db/car",
        params: {
          limit: 6,
          offset: 2,
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
        return item.categoryId.name === sort;
      });

  store.dispatch(setNewTableCars(newCars));
};

export const nextStep = (step) => {
  store.dispatch(setCurrentStep(step));
  store.dispatch(setCurrentPage(step));
};

export default getTableCars();
