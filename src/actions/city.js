import axios from "axios";
import { API_URL, headersMain } from "../reducers/data/dataServer";
import { setCities, setNewCities } from "../reducers/appReducer";
import { store } from "../reducers";

const getTableCity = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/api/db/city?limit=6`, {
        headers: {
          "X-Api-Factory-Application-Id":
            headersMain["X-Api-Factory-Application-Id"],
          Authorization: headersMain.Authorization,
        },
      });
      dispatch(setCities(response.data.data));
    } catch (e) {
      console.log(e.response);
    }
  };
};

export const searchCity = (query) => {
  const { cities } = store.getState().app;
  const regExp = new RegExp(query.toLowerCase());
  const newCities = cities.filter((item) => {
    return regExp.test(item.name.toLowerCase()) === true;
  });
  return store.dispatch(setNewCities(newCities));
};

export default getTableCity();
