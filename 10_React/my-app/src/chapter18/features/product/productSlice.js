import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    pushProductList: (state, action) => {
      state.value.push({
        id: new Date().getTime(),
        productName: action.payload,
      });
    },
  },
});

export const { pushProductList } = productSlice.actions;

export const selectProductList = (state) => state.product.value;

export default productSlice.reducer;