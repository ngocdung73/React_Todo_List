import { createReducer } from "@reduxjs/toolkit";
import { TODO_LIST_ACTIONS } from "../constants";

const initialState = {
  tasksList: [],
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
    const indexToDo = newTasksList.findIndex(item => item.id === id)
    newTasksList.splice(indexToDo, 1)
    return {
      ...state,
      tasksList: newTasksList,
    };
  },

  [TODO_LIST_ACTIONS.TODO_EDIT]: (state, action) => {
    const {id} = action.payload
    const newTasksList = [...state.tasksList]
    const indexToDo = state.tasksList.findIndex(item => item.id === id)
    newTasksList.splice(indexToDo, 1, action.payload)
    return {
      ...state,
      tasksList: newTasksList,
    };
  },
});
export default todoListReducer;
