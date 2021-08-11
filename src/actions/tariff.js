import { instance } from "../reducers/data/dataServer";
import { setTariffs } from "../reducers/appReducer";

const getTariffs = () => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: "/api/db/rate",
      });
      dispatch(setTariffs(response.data.data));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export default getTariffs();
