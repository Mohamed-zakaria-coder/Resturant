import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart_items",
  initialState,
  reducers: {
    getItems: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getItems } = cartSlice.actions;

export default cartSlice.reducer;
