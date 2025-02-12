import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  sum: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log("State är: ", state);
      console.log("Action är: ", action);

      state.products.push(action.payload);
    },
    removeFromCart(state, action) {
      // Lägg till funktionalitet för att ta bort en produkt ur varukorgen
    },
    increaseQuantity(state, action) {
      // Bonus: Lägg till funktionalitet för att öka kvantiteten på en produkt
    },
    decreaseQuantity(state, action) {
      // Bonus: Lägg till funktionalitet för att minska kvantiteten på en produkt
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
