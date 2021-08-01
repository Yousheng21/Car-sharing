import { store } from "../reducers";
import { instance } from "../reducers/data/dataServer";
import { setAddresses, setNewAddresses } from "../reducers/appReducer";

const LIMIT_VALUE = 10;

export const getTableAddress = (cityId) => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: `/api/db/point${cityId ? `?cityId=${cityId}` : ""}`,
        params: {
          limit: LIMIT_VALUE,
        },
      });
      dispatch(setAddresses(response.data.data));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export const searchAddress = (query) => {
  const { addresses } = store.getState().app;
  const city = store.getState().app.currentCity;
  const regExp = new RegExp(query.toLowerCase());

  function hasCity(item) {
    if (item.cityId && city.name === item.cityId.name)
      return regExp.test(item.address.toLowerCase());
  }

  function withoutCity(item) {
    return regExp.test(item.address.toLowerCase());
  }

  return store.dispatch(
    setNewAddresses(addresses.filter("name" in city ? hasCity : withoutCity))
  );
};
