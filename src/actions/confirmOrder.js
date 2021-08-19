import { instance } from "../reducers/data/dataServer";
import { orderCompleteId } from "../reducers/data/dataOrder";
import { setOrderStatus } from "../reducers/appReducer";

const setOrderComplete = (id) => {
  return async (dispatch) => {
    try {
      await instance({
        method: "PUT",
        url: `/api/db/order/${id}`,
        data: {
          orderStatusId: {
            id: orderCompleteId,
          },
        },
      });
      dispatch(setOrderStatus(true));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export default setOrderComplete;
