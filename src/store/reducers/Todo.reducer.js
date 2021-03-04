import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todo",
  initialState: null,
  reducers: {
    addTask(state, action) {
      if (state === null) {
        return [{ subject: action.payload.subject, task: action.payload.task }];
      } else {
        return [
          ...state,
          { subject: action.payload.subject, task: action.payload.task },
        ];
      }
    },
    removeTask(state, action) {
      state.splice(action.payload, 1);

      return state;
    },
  },
});

export const { addTask, removeTask } = slice.actions;

export default slice.reducer;
