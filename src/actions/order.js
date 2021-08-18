import { instance } from "../reducers/data/dataServer";
import { store } from "../reducers";
import { orderCompleteId } from "../reducers/data/dataOrder";

const setOrderTable = (req) => {
  return async () => {
    try {
      const response = await instance({
        method: "POST",
        url: "/api/db/order",
        data: req,
      });
      console.log(response);
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
      id: orderCompleteId,
    },
    cityId: city,
    pointId: point,
    carId: car,
    color,
    dateFrom,
    dateTo,
    rateId: rate,
    price,
    isFullTank: additional.isFullTank.value,
    isNeedChildChair: additional.isNeedChildChair.value,
    isRightWheel: additional.isRightWheel.value,
  };

  store.dispatch(setOrderTable(result));
};

export default setOrderTable();
