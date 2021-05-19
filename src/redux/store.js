import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./Auth";


const combineReducer = combineReducers({
  auth: authReducer,
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducer,
  storeEnhancers(applyMiddleware(thunk))
);

export default store;
