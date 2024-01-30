import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "home",
};

export const activeSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
    changeActive: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeActive } = activeSlice.actions;

export default activeSlice.reducer;
