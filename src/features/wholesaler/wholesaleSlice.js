import { createSlice } from "@reduxjs/toolkit";

const wholesalerSlice = createSlice({
  name: "wholesaler",
  initialState: {
    wholesalerStep: 1,
  },
  reducers: {
    setWholesalerStep: (state, action) => {
      state.wholesalerStep = action.payload;
    },
  },
});

export const { setWholesalerStep } = wholesalerSlice.actions;

export default wholesalerSlice.reducer;
