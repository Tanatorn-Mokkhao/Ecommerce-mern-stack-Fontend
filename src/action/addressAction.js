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

export const addAddress = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: addressType.ADD_ADDRESS_REQUEST });
      const res = await axios.post("/create/address", { payload });

      if (res.status === 201) {
        console.log("hi");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
};
