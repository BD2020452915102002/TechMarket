import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import authReducer from "./reducers/authReducer";
import productsReducer from "./reducers/productsReducer.js";
import chatReducer from "./reducers/chatReducer.js";
import customersReducer from "./reducers/customersReducer.js";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  customers: customersReducer,
  chat: chatReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
