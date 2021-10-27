import { configureStore } from '@reduxjs/toolkit'
import {
  commonReducer,
  productReducer,
  userReducer,
  todoListReducer,
} from './redux/reducers'

export const store = configureStore({
  reducer: {
    commonReducer,
    productReducer,
    userReducer,
    todoListReducer,
  },
})
