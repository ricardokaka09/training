import { Action } from "../action";
import { ActionType } from "../actionType";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: false,
  kind: null,
  musics: [],
};
interface musicTypes {
  isAuthenticated: boolean;
  loading: boolean;
  error: boolean;
  kind: string | null;
  musics: string[] | string;
}

const kindMusics = (
  state: musicTypes = initialState,
  { type, payload }: Action
): musicTypes => {
  switch (type) {
    case ActionType.GETMUSICTYPES:
      return {
        ...state,
        loading: true,
        error: false,
        musics: payload,
      };
    default:
      return state;
  }
};

export default kindMusics;
