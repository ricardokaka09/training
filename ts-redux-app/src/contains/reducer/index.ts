import { combineReducers } from "redux";
import kindMusics from "./kind.music";
import { playingReducer } from "./playing.music";
import userReducer from "./user.reducer";

const reducer = combineReducers({
  user: userReducer,
  musics: kindMusics,
  playing: playingReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
