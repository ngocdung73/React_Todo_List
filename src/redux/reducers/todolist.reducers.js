import { createReducer } from "@reduxjs/toolkit";
import { TODO_LIST_ACTIONS } from "../constants";
import {TODO_LIST} from "../../api/todos";

const initialState = {
  tasksList: TODO_LIST,
};
const todoListReducer = createReducer(initialState, {
  [TODO_LIST_ACTIONS.TODO_ADD]: (state, action) => {
    return {
      ...state,
      tasksList: [...state.tasksList, action.payload],
    };
  },

  [TODO_LIST_ACTIONS.TODO_DELETE]: (state, action) => {
    const {id} = action.payload
    const newTasksList = [...state.tasksList]
    newTasksList.splice(id, 1)
    return {
      ...state,
      tasksList: newTasksList,
    };
  },

  [TODO_LIST_ACTIONS.TODO_EDIT]: (state, action) => {
    const {id} = action.payload
    const newTasksList = [...state.tasksList]
    newTasksList.splice(id, 1, action.payload)
    return {
      ...state,
      tasksList: newTasksList,
    };
  },
});
export default todoListReducer;
