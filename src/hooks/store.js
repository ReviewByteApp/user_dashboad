import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice";
import activeSlice from "./feature/activeSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    active: activeSlice
  },
});
