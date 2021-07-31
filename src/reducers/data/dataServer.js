import axios from "axios";

const APPLICATION_ID = "5e25c641099b810b946c5d5b";
const AUTHORIZATION_API = "52efbe08228671240494f537f2486bc109a637b4";

export const API_URL = "https://api-factory.simbirsoft1.com";
export const API_GEO = "https://geocode-maps.yandex.ru/1.x";
export const API_GEO_KEY = "ccc07d30-f6af-44a9-9d1f-875ed33ea03d";

export const instance = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com",
  headers: {
    "X-Api-Factory-Application-Id": APPLICATION_ID,
    Authorization: `Bearer ${AUTHORIZATION_API}`,
  },
});
