import { store } from "../reducers";
import { instance } from "../reducers/data/dataServer";
import { setAddresses, setNewPlaceMarks } from "../reducers/appReducer";
import { updateAddresses } from "./geolocate";

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
      const result = response.data.data.filter((item) => {
        return item.cityId;
      });
      dispatch(setAddresses(result));
      updateAddresses(result);
    } catch (e) {
      console.error(e.response);
    }
  };
};

export const searchAddress = (query) => {
  const { placeMarks } = store.getState().app;
  const city = store.getState().app.currentCity;
  const regExp = new RegExp(query.toLowerCase());

  function hasCity(item) {
    if (item.address.city && city.name === item.address.city)
      return regExp.test(
        `${item.address.road} ${item.address.house_number}`.toLowerCase()
      );
  }

  function withoutCity(item) {
    return regExp.test(
      `${item.address.road} ${item.address.house_number}`.toLowerCase()
    );
  }

  return store.dispatch(
    setNewPlaceMarks(placeMarks.filter("name" in city ? hasCity : withoutCity))
  );
};
