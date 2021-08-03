import axios from "axios";

const APPLICATION_ID = "5e25c641099b810b946c5d5b";
const AUTHORIZATION_API = "52efbe08228671240494f537f2486bc109a637b4";

export const API_URL = "https://api-factory.simbirsoft1.com";
export const API_GEO = "https://nominatim.openstreetmap.org/search";
export const API_GEO_KEY = "s9CEluxAEtMl";

export const instance = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com",
  headers: {
    "X-Api-Factory-Application-Id": APPLICATION_ID,
    Authorization: `Bearer ${AUTHORIZATION_API}`,
  },
});
