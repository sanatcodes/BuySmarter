import { configureStore } from "@reduxjs/toolkit";
import wholesalerReducer from "../features/wholesaler/wholesaleSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    wholesaler: wholesalerReducer,
    user: userReducer, 
  },
});
