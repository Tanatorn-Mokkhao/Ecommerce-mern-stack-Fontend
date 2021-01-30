import { orderType } from "./type";
import axios from "../helper/axios";

export const checkOut = (payload) => {
  return async (dispatch) => {
    const res = await axios.post("/add/order", { payload });
    if (res.status == 200) {
      window.location.href = "/orderHistory";
    }
  };
};

export const getorderHistory = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: orderType.GET_ORDER_HISTORY_REQUEST });
      const res = await axios.post("/get/orderHistory");
      if (res.status == 200) {
        dispatch({
          type: orderType.GET_ORDER_HISTORY_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error.respomse);
    }
  };
};
