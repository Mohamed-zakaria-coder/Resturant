import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: { cart_items: cartReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
