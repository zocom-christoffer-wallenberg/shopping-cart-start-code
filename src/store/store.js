import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartSlice";
import productReducer from "../reducers/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
