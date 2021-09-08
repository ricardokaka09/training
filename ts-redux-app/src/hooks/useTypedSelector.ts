import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../contains";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
