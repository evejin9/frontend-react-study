import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  seletedProduct: null,
};

// 상품 정보를 담을 slice를 만듦
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.productList = action.payload;
    },
    getSelectedProducts: (state, action) => {
      state.seletedProduct = action.payload;
    },
  }
});

export const { getAllProducts, getSelectedProducts } = productSlice.actions;

export const selectProductList = (state) => state.product.productList;
export const selectSelectedProduct = (state) => state.product.seletedProduct;

export default productSlice.reducer;