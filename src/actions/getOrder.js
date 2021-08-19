import { instance } from "../reducers/data/dataServer";
import { setTemporaryOrder } from "../reducers/appReducer";

const getOrder = (id) => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: `/api/db/order/${id}`,
      });
      dispatch(setTemporaryOrder(response.data.data));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export default getOrder;
