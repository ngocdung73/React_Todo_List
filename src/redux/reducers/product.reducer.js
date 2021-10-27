import { createReducer } from "@reduxjs/toolkit";
import { PRODUCT_ACTION, USER_ACTION } from "../constants";
import { PRODUCT_LIST } from "../../api/product";

const initialState = {
  productList: PRODUCT_LIST,
  productDetail: {},
};

const productReducer = createReducer(initialState, {
  [PRODUCT_ACTION.GET_PRODUCT_LIST]: (state, action) => {
    return {
      ...state,
      productList: [...action.payload],
    };
  },
  [PRODUCT_ACTION.CREATE_PRODUCT]: (state, action) => {
    return {
      ...state,
      productList: [action.payload, ...state.productList],
    };
  },
  [PRODUCT_ACTION.UPDATE_PRODUCT]: (state, action) => {
    const { id } = action.payload
    const newProductList = [...state.productList];
    const productIndex = newProductList.findIndex(
      (item) => item.id === id
    );
    newProductList.splice(productIndex, 1, action.payload)
    return {
      ...state,
      productList: newProductList,
    };
  },
  [PRODUCT_ACTION.DELETE_PRODUCT]: (state, action) => {
    const { id } = action.payload
    // const newProductList = [...state.productList];
    // const productIndex = newProductList.findIndex(
    //   (item) => item.id === id
    // );
    // newProductList.splice(productIndex, 1)
    const newProductList = state.productList.filter((item) => item.id !== id)
    return {
      ...state,
      productList: newProductList,
    };
  },
  [USER_ACTION.LOGOUT]: (state, action) => {
    return {
      ...state,
      productList: [],
    };
  },
});

export default productReducer;
