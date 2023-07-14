import { configureStore, createSlice } from "@reduxjs/toolkit";

// reducer e action
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      const posicao = action.payload;
      state = state.filter((obj, index) => index !== posicao);
    },
  },
});

// configureStore
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default store;
