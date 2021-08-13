import { instance } from "../reducers/data/dataServer";
import { setPriceOrder, setTariffs } from "../reducers/appReducer";
import { store } from "../reducers";

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

export const setPrice = (tariff) => {
  const currOrder = store.getState().app.currentOrder.delay.date;
  switch (tariff.rateTypeId.unit) {
    case "мин":
      store.dispatch(setPriceOrder(currOrder.minutes.total * tariff.price));
      break;
    case "сутки":
      store.dispatch(setPriceOrder(currOrder.days.total * tariff.price));
      break;
    case "7 дней":
      store.dispatch(setPriceOrder(currOrder.weeks.total * tariff.price));
      break;
    case "30 дней":
      store.dispatch(
        setPriceOrder(Math.floor(currOrder.weeks.total / 4) * tariff.price)
      );
      break;
    default:
      break;
  }
};

export default getTariffs();
