import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },

  reducers: {
    // GET ALL PRODUCTS
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },

    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // DELETE PRODUCT

    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },

    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getProductStart, getProductSuccess, getProductFailure } =
  productSlice.actions;
export default productSlice.reducer;
