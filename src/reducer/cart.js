import { cartType } from "../action/type";

const initialState = {
  cart: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case cartType.ADD_TO_CART_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case cartType.ADD_TO_CART_SUCCESS:
      state = {
        ...state,
        cart: action.payload.cart,
        loading: false,
      };
      break;
    case cartType.ADD_TO_CART_FAILUE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case cartType.GET_CART_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case cartType.GET_CART_SUCCESS:
      state = {
        ...state,
        loading: false,
        cart: action.payload.cart,
      };
      break;
    case cartType.GET_CART_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case cartType.NO_CART:
      state = {
        ...initialState,
      };
      break;
  }
  return state;
};
