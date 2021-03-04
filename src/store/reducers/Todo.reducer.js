import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todo",
  initialState: null,
  reducers: {
    addTask(state, action) {
      if (state === null) {
        return [
          {
            subject: action.payload.subject,
            task: action.payload.task,
            complete: false,
          },
        ];
      } else {
        return [
          ...state,
          {
            subject: action.payload.subject,
            task: action.payload.task,
            complete: false,
          },
        ];
      }
    },
    removeTask(state, action) {
      state.splice(action.payload, 1);

      return state;
    },

    completeTask(state, action) {
      const index = action.payload;
      const data = state[index];

      data.complete = !data.complete;

      return state;
    },
  },
});

export const { addTask, removeTask, completeTask } = slice.actions;

export default slice.reducer;
