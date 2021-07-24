const SET_BURGER_STATUS = "SET_BURGER_STATUS";
const SET_TABLE_CARS = "SET_TABLE_CARS";
const SET_CURRENT_CAR = "SET_CURRENT_CAR";
const SET_NEW_TABLE_CARS = "SET_NEW_TABLE_CARS";

const defaultState = {
  burger_status: false,
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
  tableCars: [],
  newTableCars: [],
  currentCar: { colors: [] },
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_BURGER_STATUS:
      return {
        ...state,
        burger_status: action.payload,
      };
    case SET_TABLE_CARS:
      return {
        ...state,
        tableCars: action.payload,
        newTableCars: action.payload,
        currentCar: action.payload[0],
      };
    case SET_CURRENT_CAR:
      return {
        ...state,
        currentCar: action.payload,
      };
    case SET_NEW_TABLE_CARS:
      return {
        ...state,
        newTableCars: action.payload,
      };

    default:
      return state;
  }
}

export const setBurgerStatus = (status) => ({
  type: SET_BURGER_STATUS,
  payload: status,
});

export const setTableCars = (arrCars) => ({
  type: SET_TABLE_CARS,
  payload: arrCars,
});

export const setNewTableCars = (arrCars) => ({
  type: SET_NEW_TABLE_CARS,
  payload: arrCars,
});

export const setCurrentCar = (car) => ({
  type: SET_CURRENT_CAR,
  payload: car,
});
