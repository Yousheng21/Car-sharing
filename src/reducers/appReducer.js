const SET_BURGER_STATUS = "SET_BURGER_STATUS";

const defaultState = {
  burger_status: "default",
  currentOrder: {
    place: { text: "Пункт выдачи", value: "Ульяновск, Нариманова, 42" },
    model: { text: "Модель", value: "" },
    color: { text: "Цвет", value: "" },
    delay: { text: "Длительность аренды", value: "" },
    tariff: { text: "Тариф", value: "" },
    cistern: { text: "Полный бак", value: "" },
  },
  price: {
    min: "8 000",
    max: "12 000",
  },
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_BURGER_STATUS:
      return {
        ...state,
        burger_status: action.payload,
      };

    default:
      return state;
  }
}

export const setBurgerStatus = (status) => ({
  type: SET_BURGER_STATUS,
  payload: status,
});
