const SET_BURGER_STATUS = "SET_BURGER_STATUS";
const SET_TABLE_CARS = "SET_TABLE_CARS";
const SET_CURRENT_CAR = "SET_CURRENT_CAR";
const SET_CURRENT_STEP = "SET_CURRENT_STEP";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_NEW_TABLE_CARS = "SET_NEW_TABLE_CARS";

const defaultState = {
  burger_status: false,
  currentOrder: {
    place: { text: "Пункт выдачи", value: "Ульяновск, Нариманова, 42" },
    model: { text: "Модель", value: "" },
    color: { text: "Цвет", value: "" },
    delay: { text: "Длительность аренды", value: "", from: "", to: "" },
    tariff: { text: "Тариф", value: "" },
    cistern: { text: "Полный бак", value: "" },
  },
  price: {
    min: "8 000",
    max: "12 000",
  },
  tableCars: [],
  newTableCars: [],
  currentCar: { colors: ["Любой"], thumbnail: { path: "" }, name: "" },
  currentStep: 0,
  currentPage: 0,
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
    case SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
        currentPage: state.currentPage + 1,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
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

export const setCurrentStep = () => ({
  type: SET_CURRENT_STEP,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
