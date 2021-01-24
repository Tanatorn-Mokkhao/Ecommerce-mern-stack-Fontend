import { Form } from "react-bootstrap";
import { categoryType } from "../action/type";

const initialState = {
  category: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case categoryType.GET_ALL_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryType.GET_ALL_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        category: action.payload.category,
      };
      break;
    case categoryType.GET_ALL_CATEGORY_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
  }
  return state;
};
