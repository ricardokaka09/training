import { GetMusicType } from "../action";
import { ActionType } from "../actionType";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: false,
  kind: null,
  data: [],
};
interface musicTypes {
  isAuthenticated: boolean;
  loading: boolean;
  error: boolean;
  kind: string | null;
  data: string[];
}

const kindMusics = (
  state: musicTypes = initialState,
  { type, payload }: GetMusicType
): musicTypes => {
  switch (type) {
    case ActionType.GETMUSICTYPES:
      return {
        ...state,
        loading: true,
        error: false,
        data: payload,
      };
    default:
      return state;
  }
};

export default kindMusics;
