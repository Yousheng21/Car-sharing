import { instance } from "../reducers/data/dataServer";
import { store } from "../reducers";
import { orderNewId } from "../reducers/data/dataOrder";
import { setOrderId } from "../reducers/appReducer";

const setOrderTable = (req) => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "POST",
        url: "/api/db/order",
        data: req,
      });
      dispatch(setOrderId(response.data.data.id));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export const setOrder = () => {
  const city = store.getState().app.currentCity;
  const point = store.getState().app.currentAddress;
  const car = store.getState().app.currentCar;
  const color = store.getState().app.currentOrder.color.value;
  const dateFrom = store.getState().app.currentOrder.delay.from;
  const dateTo = store.getState().app.currentOrder.delay.to;
  const rate = store.getState().app.currentTariff;
  const price = store.getState().app.price.value;
  const { additional } = store.getState().app.currentOrder;

  const result = {
    orderStatusId: {
      id: orderNewId,
    },
    cityId: city,
    pointId: point,
    carId: car,
    color,
    dateFrom: dateFrom.getTime(),
    dateTo: dateTo.getTime(),
    rateId: rate,
    price,
    isFullTank: additional.isFullTank.value,
    isNeedChildChair: additional.isNeedChildChair.value,
    isRightWheel: additional.isRightWheel.value,
  };

  store.dispatch(setOrderTable(result));
};

export default setOrderTable();
