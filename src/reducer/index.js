import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./peoductReducer";
import authReducer from "./authReducer";
import cartReducer from "./cart";
import addressReducer from "./addressReducer";
import orderReducer from "./orderReducer";
const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  address: addressReducer,
  order: orderReducer,
});

export default rootReducer;
