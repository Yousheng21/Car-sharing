import { store } from "../reducers";
import { setCities, setNewCities } from "../reducers/appReducer";
import { instance } from "../reducers/data/dataServer";

const getTableCity = () => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: "/api/db/city",
        params: {
          limit: 6,
        },
      });
      dispatch(setCities(response.data.data));
    } catch (e) {
      console.error(e.response);
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
