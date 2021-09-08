import { Action } from "../action";
import { ActionType } from "../actionType";

interface AuthState {
  isAuthentication: boolean;
  loading: boolean;
  error: string | null;
  data: string[] | string;
}

const initialState = {
  isAuthentication: false,
  loading: false,
  error: null,
  data: [],
};

const userReducer = (
  state: AuthState = initialState,
  { type, payload }: Action
): AuthState => {
  switch (type) {
    case ActionType.ACTION1:
      return {
        ...state,
        isAuthentication: true,
        loading: true,
        data: payload,
      };
    case ActionType.ACTION2:
      return {
        ...state,
        isAuthentication: false,
        loading: false,
        error: "error",
        data: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
