import axios from "axios";
import { API_GEO } from "../reducers/data/dataServer";
import { setPlaceMarks } from "../reducers/appReducer";
import { store } from "../reducers";

const getLocale = (query) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_GEO}?q=${query}&format=json&addressdetails=1&limit=1`
      );
      dispatch(setPlaceMarks(response.data[0]));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export const updateAddresses = (points) => {
  return points.forEach((item) => {
    store.dispatch(getLocale(`${item.cityId.name} ${item.address}`));
  });
};

export default getLocale();
