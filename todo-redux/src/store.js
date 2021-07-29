import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import todoReducer from "./constants/reducer/todo.reducer";
import combineReducers from "./constants/reducer/index";

const initialState = {};
const middleware = [thunk]; //  that used dispatch function

// tao store includes the entries state for single-page
const store = createStore(
  combineReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
