import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Promise
// pending
// fulfilled
// rejected

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch("https://dummyjson.com/products?delay=2000");
  const data = await response.json();

  return data;
});

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;

      state.products = action.payload.products;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
