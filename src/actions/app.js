import axios from "axios";
import { store } from "../reducers";

import { API_URL, headers } from "../reducers/data/dataServer";
import {
  setTableCars,
  setNewTableCars,
  setCurrentStep,
  setCurrentPage,
} from "../reducers/appReducer";

const getTableCars = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/db/car?limit=6&offset=2`,
        {
          headers: {
            "X-Api-Factory-Application-Id":
              headers["X-Api-Factory-Application-Id"],
            Authorization: headers.Authorization,
          },
        }
      );
      dispatch(setTableCars(response.data.data));
    } catch (e) {
      console.log(e.response);
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
  const currStep = store.getState().app.currentStep;
  if (step > currStep) store.dispatch(setCurrentStep());
  else store.dispatch(setCurrentPage(step));
};

export default getTableCars();
