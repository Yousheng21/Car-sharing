import { instance } from "../reducers/data/dataServer";
import { setCategories } from "../reducers/appReducer";
import { categoryAll } from "../reducers/data/dataOrder";

const getCategories = () => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: "/api/db/category",
      });
      response.data.data.unshift(categoryAll);
      dispatch(setCategories(response.data.data));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export default getCategories();
