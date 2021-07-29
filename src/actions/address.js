import axios from "axios";
import { store } from "../reducers";
import { API_URL, headersMain } from "../reducers/data/dataServer";
import { setAddresses, setNewAddresses } from "../reducers/appReducer";
import { updateAddresses } from "./geolocate";

export const getTableAddress = (cityId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/db/point?limit=10${
          cityId !== "" ? `&cityId=${cityId}` : ""
        }`,
        {
          headers: {
            "X-Api-Factory-Application-Id":
              headersMain["X-Api-Factory-Application-Id"],
            Authorization: headersMain.Authorization,
          },
        }
      );
      dispatch(setAddresses(response.data.data));
      updateAddresses(response.data.data);
    } catch (e) {
      console.log(e.response);
    }
  };
};

export const searchAddress = (query) => {
  const addresses = store.getState().app.newAddresses;
  const regExp = new RegExp(query.toLowerCase());

  function success(item) {
    return regExp.test(item.address.toLowerCase()) === true;
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
