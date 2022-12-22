import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AlertState {
  open: boolean;
  status: "success" | "error";
  message: string;
}

const initialState: AlertState = {
  open: false,
  status: "success",
  message: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<AlertState>): AlertState => {
      return action.payload;
    },

    close: (state): AlertState => {
      return {
        open: false,
        status: state.status,
        message: "",
      };
    },
  },
});

export const { open, close } = alertSlice.actions;
export default alertSlice.reducer;
