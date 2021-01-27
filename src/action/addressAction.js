import { addressType } from "./type";
import axios from "../helper/axios";
export const getAddress = () => {
  return async (dispatch) => {
    dispatch({ type: addressType.GET_ADDRESS_REQUEST });
    try {
      const res = await axios.post("/get/address");
      if (res.status == 200) {
        dispatch({
          type: addressType.GET_ADDRESS_SUCCESS,
          payload: res.data.address,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };
};
