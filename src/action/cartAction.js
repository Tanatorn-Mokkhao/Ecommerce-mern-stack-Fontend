import { cartType } from "./type";
import axios from "../helper/axios";

export const AddToCart = (cart) => {
  return async (dispatch) => {
    console.log({ cart });
    try {
      const res = await axios.post("/add/cart", { cart });
      if (res.status === 200) {
        console.log("Add Successfully");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const getCart = () => {
  return async (dispatch) => {
    dispatch({ type: cartType.GET_CART_REQUEST });
    try {
      const res = await axios.post("/get/cart");
      if (res.status === 200) {
        dispatch({
          type: cartType.GET_CART_SUCCESS,
          payload: res.data,
        });
      } else if (res.status == 202) {
        dispatch({
          type: cartType.NO_CART,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const deleteItemInCart = (productid) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/delete/item/cart", { productid });
      if (res.status === 200) {
        console.log("delete ok");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
};
