import axios from "axios";
import { store } from "../reducers";

import { API_URL, headersMain } from "../reducers/data/dataServer";
import {
  setCurrentPage,
  setCurrentStep,
  setNewTableCars,
  setTableCars,
} from "../reducers/appReducer";

const getTableCars = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/db/car?limit=6&offset=2`,
        {
          headers: {
            "X-Api-Factory-Application-Id":
              headersMain["X-Api-Factory-Application-Id"],
            Authorization: headersMain.Authorization,
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
  store.dispatch(setCurrentStep(step));
  store.dispatch(setCurrentPage(step));
};

export default getTableCars();
