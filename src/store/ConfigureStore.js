import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todo from "./reducers/Todo.reducer";
import popUp from "./reducers/PopUp.reducer";
import confirmDelete from "./reducers/ConfirmDelete.reducer";

const reducer = combineReducers({
  todo,
  popUp,
  confirmDelete,
});

const store = configureStore({ reducer });

export default store;
