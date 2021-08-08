import { combineReducers } from "redux";
import kindMusics from "./kind.music";
import userReducer from "./user.reducer";

const reducer = combineReducers({
  user: userReducer,
  musics: kindMusics,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
