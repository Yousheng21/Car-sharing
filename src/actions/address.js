import { store } from "../reducers";
import { instance } from "../reducers/data/dataServer";
import { setAddresses, setNewAddresses } from "../reducers/appReducer";
import { updateAddresses } from "./geolocate";

export const getTableAddress = (cityId) => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: `/api/db/point${cityId ? `?cityId=${cityId}` : ""}`,
        params: {
          limit: 10,
        },
      });
      dispatch(setAddresses(response.data.data));
      updateAddresses(response.data.data);
    } catch (e) {
      console.error(e.response);
    }
  };
};

export const searchAddress = (query) => {
  const { addresses } = store.getState().app;
  const city = store.getState().app.currentCity;
  const regExp = new RegExp(query.toLowerCase());

  function success(item) {
    if ("name" in city) {
      if (city.name === item.cityId.name)
        return regExp.test(item.address.toLowerCase()) === true;
    } else return regExp.test(item.address.toLowerCase()) === true;
  }

  return store.dispatch(setNewAddresses(addresses.filter(success)));
};

export const selectAddresses = (city) => {
  const { addresses } = store.getState().app;
  const newAddresses = addresses.filter((item) => {
    return item.cityId.name === city;
  });
  return store.dispatch(setNewAddresses(newAddresses));
};
