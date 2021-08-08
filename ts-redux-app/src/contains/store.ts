import { createStore, applyMiddleware } from "redux";
// import { }
import thunk from "redux-thunk";
import reducer from "./reducer";
// import { RootState } from './reducer'

// const middleware = [...thunk]
export const store = createStore(reducer, {}, applyMiddleware(thunk));
