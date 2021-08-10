import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer";
// import { RootState } from './reducer'

const middleware = [thunk];
export const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);
