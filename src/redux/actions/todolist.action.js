import {createAction} from '@reduxjs/toolkit'
import { TODO_LIST_ACTIONS } from "../constants";

export const addTodoAction = createAction(TODO_LIST_ACTIONS.TODO_ADD)
export const deleteTodoAction = createAction(TODO_LIST_ACTIONS.TODO_DELETE)
export const editTodoAction = createAction(TODO_LIST_ACTIONS.TODO_EDIT)