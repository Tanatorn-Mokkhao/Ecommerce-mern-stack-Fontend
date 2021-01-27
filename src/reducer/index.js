import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./peoductReducer";
import authReducer from "./authReducer";
import cartReducer from "./cart";
import addressReducer from "./addressReducer";
const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  address: addressReducer,
});

export default rootReducer;
