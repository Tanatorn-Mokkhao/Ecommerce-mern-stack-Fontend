import { addressType } from "../action/type";

const initialState = {
  address: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case addressType.GET_ADDRESS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case addressType.GET_ADDRESS_SUCCESS:
      state = {
        ...state,
        loading: false,
        address: action.payload.address,
      };
      break;
  }
  return state;
};
