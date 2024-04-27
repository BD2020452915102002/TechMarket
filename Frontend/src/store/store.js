import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import authReducer from "./reducers/authReducer";
import productsReducer from "./reducers/productsReducer.js";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
