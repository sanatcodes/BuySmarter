import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  email: null,
  role: null, // Investor or Wholesaler
  isLoggedIn: false,
  isGoogleSignIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isLoggedIn = true;
      state.isGoogleSignIn = action.payload.isGoogleSignIn;
    },
    logOut(state) {
      state.id = null;
      state.name = null;
      state.email = null;
      state.role = null;
      state.isLoggedIn = false;
      state.isGoogleSignIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
