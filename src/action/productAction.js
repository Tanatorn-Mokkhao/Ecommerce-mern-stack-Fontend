import { productType } from "./type";
import axios from "../helper/axios";
import { bindActionCreators } from "redux";

export const getProductBySlug = (slug) => {
  return async (dispatch) => {
    const res = await axios.post(`/product/${slug}`);
    if (res.status === 200) {
      dispatch({
        type: productType.GET_PRODUCT_SUCCESS,
        payload: res.data,
      });
    }
  };
};

export const getAllProduct = () => {
  return async (dispatch) => {
    const res = await axios.post("/get/all/product");
    if (res.status === 200) {
      dispatch({
        type: productType.GET_ALL_PRODUCT_SUCCESS,
        payload: res.data,
      });
    }
  };
};

export const getProductDetailByid = (payload) => {
  return async (dispatch) => {
    dispatch({ type: productType.GET_PRODUCT_DETAIL_REQUEST });
    const res = await axios.post(`/product/id/${payload}`);
    if (res.status === 200) {
      dispatch({
        type: productType.GET_PRODUCT_DETAIL_SUCCESS,
        payload: res.data,
      });
    }
  };
};
