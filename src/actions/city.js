import { store } from "../reducers";
import { setCities, setNewCities } from "../reducers/appReducer";
import { instance } from "../reducers/data/dataServer";

const LIMIT_VALUE = 6;

const getTableCity = () => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: "/api/db/city",
        params: {
          limit: LIMIT_VALUE,
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

  return store.dispatch(
    setNewCities(
      cities.filter((item) => {
        return regExp.test(item.name.toLowerCase());
      })
    )
  );
};

export const selectCity = (cities) => {
  const { addresses } = store.getState().app;
  const n = [];
  cities.forEach((city) => {
    if (
      addresses.some((item) => {
        return item.cityId.name === city.name;
      })
    ) {
      n.push(city);
    }
  });
  return store.dispatch(setCities(n));
};

export default getTableCity();
