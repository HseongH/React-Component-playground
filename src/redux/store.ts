import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import alertSlice from "./alertSlice";
import confirmReducer from "./confirmSlice";

const rootReducer = combineReducers({
  alertSlice,
  confirmReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) => {
    const defaultMiddleWare = getDefaultMiddleWare();

    if (import.meta.env.DEV) defaultMiddleWare.concat(logger);

    return defaultMiddleWare;
  },
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
