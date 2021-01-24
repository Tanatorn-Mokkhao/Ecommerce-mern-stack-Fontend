import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./peoductReducer";
const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
});

export default rootReducer;
