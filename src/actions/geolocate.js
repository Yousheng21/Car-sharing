import axios from "axios";
import { API_GEO, API_GEO_KEY } from "../reducers/data/dataServer";
import { setPlaceMarks } from "../reducers/appReducer";
import { store } from "../reducers";

const getLocale = (query) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_GEO}/?format=json&apikey=${API_GEO_KEY}&geocode=${query}`
      );
      dispatch(
        setPlaceMarks(
          response.data.response.GeoObjectCollection.featureMember[0].GeoObject
        )
      );
    } catch (e) {
      console.error(e.response);
    }
  };
};

export const updateAddresses = (points) => {
  return points.map((item) => {
    return store.dispatch(getLocale(`${item.cityId.name} ${item.address}`));
  });
};

export default getLocale();
