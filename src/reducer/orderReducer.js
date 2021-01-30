import { orderType } from "../action/type";

const initialState = {
  orderHistory: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case orderType.GET_ORDER_HISTORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case orderType.GET_ORDER_HISTORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        orderHistory: action.payload.order,
      };
      break;
    case orderType.GET_ORDER_HISTORY_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
