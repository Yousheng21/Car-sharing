const SET_BURGER_STATUS = "SET_BURGER_STATUS";
const SET_TABLE_CARS = "SET_TABLE_CARS";
const SET_CURRENT_CAR = "SET_CURRENT_CAR";
const SET_CURRENT_STEP = "SET_CURRENT_STEP";
const SET_NEW_TABLE_CARS = "SET_NEW_TABLE_CARS";
const SET_CURRENT_CITY = "SET_CURRENT_CITY";
const SET_CURRENT_ADDRESS = "SET_CURRENT_ADDRESS";
const SET_CITIES = "SET_CITIES";
const SET_NEW_CITIES = "SET_NEW_CITIES";
const SET_ADDRESSES = "SET_ADDRESSES";
const SET_NEW_ADDRESSES = "SET_NEW_ADDRESSES";
const SET_PLACE_MARKS = "SET_PLACE_MARKS";
const SET_NEW_PLACE_MARKS = "SET_NEW_PLACE_MARKS";
const SET_PLACE_MARK_INDEX = "SET_PLACE_MARK_INDEX";

const defaultState = {
  burger_status: false,
  currentCity: {},
  currentOrder: {
    place: {
      text: "Пункт выдачи",
      value: { city: "", street: "" },
    },
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
  cities: [],
  newCities: [],
  addresses: [],
  newAddresses: [],
  placeMarks: [],
  newPlaceMarks: [],
  placeMarkIndex: {},
  currentCar: { colors: ["Любой"], thumbnail: { path: "" }, name: "" },
  currentStep: 0,
  currentAddress: "",
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
        currentStep: action.payload,
        currentPage: action.payload,
      };
    case SET_CITIES:
      return {
        ...state,
        cities: action.payload,
        newCities: action.payload,
      };
    case SET_NEW_CITIES:
      return {
        ...state,
        newCities: action.payload,
      };
    case SET_ADDRESSES:
      return {
        ...state,
        addresses: action.payload,
        newAddresses: action.payload,
      };
    case SET_NEW_ADDRESSES:
      return {
        ...state,
        newAddresses: action.payload,
      };
    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload,
        currentOrder: {
          ...state.currentOrder,
          place: {
            ...state.currentOrder.place,
            value: {
              ...state.currentOrder.place.value,
              city: action.payload.name,
            },
          },
        },
      };
    case SET_CURRENT_ADDRESS:
      return {
        ...state,
        currentAddress: action.address,
        currentOrder: {
          ...state.currentOrder,
          place: {
            ...state.currentOrder.place,
            value: {
              city: action.city,
              street: action.address,
            },
          },
        },
      };
    case SET_PLACE_MARKS:
      return {
        ...state,
        placeMarks:
          state.addresses.length > state.placeMarks.length
            ? [...state.placeMarks, action.placeMark]
            : [...state.placeMarks],
        newPlaceMarks:
          state.addresses.length > state.placeMarks.length
            ? [...state.placeMarks, action.placeMark]
            : [...state.placeMarks],
      };
    case SET_NEW_PLACE_MARKS:
      return {
        ...state,
        newPlaceMarks: action.placeMark,
      };
    case SET_PLACE_MARK_INDEX:
      return {
        ...state,
        placeMarkIndex: action.index,
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

export const setCurrentStep = (step) => ({
  type: SET_CURRENT_STEP,
  payload: step,
});

export const setCities = (cities) => ({
  type: SET_CITIES,
  payload: cities,
});

export const setNewCities = (cities) => ({
  type: SET_NEW_CITIES,
  payload: cities,
});

export const setAddresses = (addresses) => ({
  type: SET_ADDRESSES,
  payload: addresses,
});

export const setNewAddresses = (addresses) => ({
  type: SET_NEW_ADDRESSES,
  payload: addresses,
});

export const setCurrentCity = (city) => ({
  type: SET_CURRENT_CITY,
  payload: city,
});

export const setCurrentAddress = (address, city) => ({
  type: SET_CURRENT_ADDRESS,
  address,
  city,
});

export const setPlaceMarks = (placeMark) => ({
  type: SET_PLACE_MARKS,
  placeMark,
});

export const setNewPlaceMarks = (placeMark) => ({
  type: SET_NEW_PLACE_MARKS,
  placeMark,
});

export const setPlaceMarkIndex = (index) => ({
  type: SET_PLACE_MARK_INDEX,
  index,
});
