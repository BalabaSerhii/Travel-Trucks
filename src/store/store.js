import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice/campersSlice";

const store = configureStore({
  reducer: {
    campars: campersReducer,
  },
});

export default store;
