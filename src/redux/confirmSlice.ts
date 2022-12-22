import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ConfirmState {
  open: boolean;
  title: string;
}

const initialState: ConfirmState = {
  open: false,
  title: "",
};

export const confirmSlice = createSlice({
  name: "confirm",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<ConfirmState>): ConfirmState => {
      return action.payload;
    },

    close: (): ConfirmState => {
      return {
        open: false,
        title: "",
      };
    },
  },
});

export const { open, close } = confirmSlice.actions;
export default confirmSlice.reducer;
