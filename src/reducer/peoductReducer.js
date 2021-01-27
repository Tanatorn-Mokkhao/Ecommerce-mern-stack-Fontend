import { productType } from "../action/type";

const initialState = {
  product: [],
  allproduct: [],
  productDetail: [],
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productType.GET_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productType.GET_PRODUCT_SUCCESS:
      state = {
        ...state,
        product: action.payload.product,
        loading: false,
      };
      break;
    case productType.GET_PRODUCT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case productType.GET_ALL_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productType.GET_ALL_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
        allproduct: action.payload.product,
      };
      break;
    case productType.GET_ALL_PRODUCT_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case productType.GET_PRODUCT_DETAIL_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productType.GET_PRODUCT_DETAIL_SUCCESS:
      state = {
        ...state.allproduct,
        loading: false,
        productDetail: action.payload.product,
      };
      break;
    case productType.GET_PRODUCT_DETAIL_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
