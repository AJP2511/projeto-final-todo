import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "confirmDelete",
  initialState: false,
  reducers: {
    deleteConfirmed(state) {
      return (state = true);
    },
    deleteDenied(state) {
      return (state = false);
    },
  },
});

export const { deleteConfirmed, deleteDenied } = slice.actions;

export default slice.reducer;
