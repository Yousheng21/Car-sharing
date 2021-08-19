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
const SET_PLACE_MARKS = "SET_PLACE_MARKS";
const SET_NEW_PLACE_MARKS = "SET_NEW_PLACE_MARKS";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_TARIFFS = "SET_TARIFFS";
const SET_PLACE_MARK_INDEX = "SET_PLACE_MARK_INDEX";
const SET_COLOR = "SET_COLOR";
const SET_TARIFF = "SET_TARIFF";
const SET_ADDITIONAL = "SET_ADDITIONAL";
const CHANGE_ADDITIONAL = "CHANGE_ADDITIONAL";
const SET_DATE_RANGE = "SET_DATE_RANGE";
const DATE_IS_VALID = "DATE_IS_VALID";
const SET_PRICE = "SET_PRICE";
const SET_ORDER_ID = "SET_ORDER_ID";
const SET_ORDER_STATUS = "SET_ORDER_STATUS";
const SET_TEMPORARY_ORDER = "SET_TEMPORARY_ORDER";

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
    delay: {
      text: "Длительность аренды",
      value: "",
      date: {},
      from: "",
      to: "",
    },
    tariff: { text: "Тариф", value: "" },
    additional: {
      isFullTank: {
        text: "",
        value: false,
      },
      isNeedChildChair: {
        text: "",
        value: false,
      },
      isRightWheel: {
        text: "",
        value: false,
      },
    },
  },
  price: {
    min: 0,
    max: 32000,
    value: 0,
  },
  tableCars: [],
  newTableCars: [],
  cities: [],
  newCities: [],
  addresses: [],
  newAddresses: [],
  placeMarks: [],
  newPlaceMarks: [],
  categories: [],
  tariffs: [],
  currentTariff: {},
  placeMarkIndex: {},
  currentCar: { colors: ["Любой"], thumbnail: { path: "" }, name: "" },
  currentStep: 0,
  currentAddress: {
    name: "",
    city: "",
  },
  dateIsValid: true,
  orderId: "",
  orderStatus: false,
  temporaryOrder: {},
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
      };
    case SET_CURRENT_CAR:
      if (!action.payload.colors.length) action.payload.colors.unshift("Любой");
      return {
        ...state,
        currentCar: action.payload,
        currentOrder: {
          ...state.currentOrder,
          model: {
            ...state.currentOrder.model,
            value: action.payload.name,
          },
        },
        price: {
          min: action.payload.priceMin,
          max: action.payload.priceMax,
        },
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
        currentAddress: {
          id: action.id,
          name: action.address,
          city: action.city.name,
        },
        currentCity: action.city,
        currentOrder: {
          ...state.currentOrder,
          place: {
            ...state.currentOrder.place,
            value: {
              city: action.city ? action.city.name : "",
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
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case SET_TARIFFS:
      return {
        ...state,
        tariffs: action.tariffs,
      };
    case SET_PLACE_MARK_INDEX:
      return {
        ...state,
        placeMarkIndex: action.index,
      };
    case SET_COLOR:
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          color: {
            ...state.currentOrder.color,
            value: action.color,
          },
        },
      };
    case SET_TARIFF:
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          tariff: {
            ...state.currentOrder.tariff,
            value: action.value,
          },
        },
        currentTariff: action.tariff,
      };
    case SET_ADDITIONAL:
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          additional: {
            ...state.currentOrder.additional,
            [action.item.key]: {
              text: action.item.name,
              value: true,
            },
          },
        },
        price: {
          ...state.price,
          value: state.price.value + action.item.price,
        },
      };
    case CHANGE_ADDITIONAL:
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          additional: {
            ...state.currentOrder.additional,
            [action.item.key]: {
              ...state.currentOrder.additional[action.item.key],
              value: false,
            },
          },
        },
        price: {
          ...state.price,
          value: state.price.value - action.item.price,
        },
      };
    case SET_DATE_RANGE:
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          delay: {
            ...state.currentOrder.delay,
            value: action.text,
            date: action.diff,
            from: action.from,
            to: action.to,
          },
        },
      };
    case DATE_IS_VALID:
      return {
        ...state,
        dateIsValid: action.flag,
      };
    case SET_PRICE:
      return {
        ...state,
        price: {
          ...state.price,
          value:
            state.price.min + action.price < state.price.max
              ? state.price.min + action.price
              : state.price.max,
        },
      };
    case SET_ORDER_ID:
      return {
        ...state,
        orderId: action.id,
      };
    case SET_ORDER_STATUS:
      return {
        ...state,
        orderStatus: action.status,
      };
    case SET_TEMPORARY_ORDER:
      return {
        ...state,
        temporaryOrder: action.order,
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

export const setCurrentCity = (city) => ({
  type: SET_CURRENT_CITY,
  payload: city,
});

export const setCurrentAddress = (address, city, id) => ({
  type: SET_CURRENT_ADDRESS,
  address,
  city,
  id,
});

export const setPlaceMarks = (placeMark) => ({
  type: SET_PLACE_MARKS,
  placeMark,
});

export const setNewPlaceMarks = (placeMark) => ({
  type: SET_NEW_PLACE_MARKS,
  placeMark,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});

export const setTariffs = (tariffs) => ({
  type: SET_TARIFFS,
  tariffs,
});

export const setPlaceMarkIndex = (index) => ({
  type: SET_PLACE_MARK_INDEX,
  index,
});

export const setColor = (color) => ({
  type: SET_COLOR,
  color,
});

export const setTariff = (tariff, value) => ({
  type: SET_TARIFF,
  tariff,
  value,
});

export const setAdditional = (item) => ({
  type: SET_ADDITIONAL,
  item,
});

export const changeAdditional = (item) => ({
  type: CHANGE_ADDITIONAL,
  item,
});

export const setDateRange = (diff, text, from, to) => ({
  type: SET_DATE_RANGE,
  diff,
  text,
  from,
  to,
});

export const setDateValid = (flag) => ({
  type: DATE_IS_VALID,
  flag,
});

export const setPriceOrder = (price) => ({
  type: SET_PRICE,
  price,
});

export const setOrderId = (id) => ({
  type: SET_ORDER_ID,
  id,
});

export const setOrderStatus = (status) => ({
  type: SET_ORDER_STATUS,
  status,
});

export const setTemporaryOrder = (order) => ({
  type: SET_TEMPORARY_ORDER,
  order,
});
