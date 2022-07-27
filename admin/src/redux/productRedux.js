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
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1 // 1 means 1 item delete
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
