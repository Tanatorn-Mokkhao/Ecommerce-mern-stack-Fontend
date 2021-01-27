import { authType } from "../action/type";

const initialState = {
  authenticate: false,
  authenticating: false,
  user: [],
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authType.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authType.LOGIN_SUCCESS:
      state = {
        ...state,
        authenticate: true,
        authenticating: false,
        user: action.payload.user,
      };
      break;
    case authType.LOGIN_FAILURE:
      state = {
        ...state,
        authenticating: false,
        error: action.payload.error,
      };
      break;
    case authType.SIGNOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authType.SIGNOUT_SUCCESS:
      state = {
        ...initialState,
        loading: false,
      };
    case authType.SIGNOUT_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case authType.SIGNUP_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authType.SIGNUP_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case authType.SIGNUP_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
