import { categoryType } from "./type";
import axios from "../helper/axios";

export const initialData = () => {
  return async (dispatch) => {
    dispatch({ type: categoryType.GET_ALL_CATEGORY_REQUEST });
    const res = await axios.post("/initial/category");
    if (res.status == 200) {
      dispatch({
        type: categoryType.GET_ALL_CATEGORY_SUCCESS,
        payload: { category: res.data.listcategory },
      });
    }
  };
};
