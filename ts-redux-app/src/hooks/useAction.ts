import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreater } from "../contains";

export const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(ActionCreater, dispatch);
};
