import { configureStore } from "@reduxjs/toolkit";
import wholesalerReducer from "../features/wholesaler/wholesaleSlice";

export const store = configureStore({
  reducer: {
    wholesaler: wholesalerReducer,
    // Add other reducers here
  },
});
