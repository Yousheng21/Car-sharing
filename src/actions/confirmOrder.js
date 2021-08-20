import { instance } from "../reducers/data/dataServer";
import { setTemporaryOrder } from "../reducers/appReducer";

const setOrderComplete = (id, orderId) => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "PUT",
        url: `/api/db/order/${id}`,
        data: {
          orderStatusId: {
            id: orderId,
          },
        },
      });
      dispatch(setTemporaryOrder(response.data.data));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export default setOrderComplete;
