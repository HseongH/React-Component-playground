import {
  TypedUseSelectorHook,
  useSelector,
  useDispatch,
  shallowEqual,
} from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";

export const useTypedDispatch: () => AppDispatch = useDispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useShallowSelector = (selector: (state: RootState) => RootState) =>
  useTypedSelector(selector, shallowEqual);
