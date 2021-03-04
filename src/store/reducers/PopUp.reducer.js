import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "popUp",
  initialState: false,
  reducers: {
    openPopUp(state) {
      return (state = true);
    },
    closePopUp(state) {
      return (state = false);
    },
  },
});

export const { closePopUp, openPopUp } = slice.actions;

export default slice.reducer;
