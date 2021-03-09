import { combineReducers, createStore } from "redux";
import { dataReducer } from "../Reducers/DataReducer";
import { cartReducer } from "../Reducers/CartReducer";
const rootReducer = combineReducers({
  jsondata: dataReducer,
  cart: cartReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
