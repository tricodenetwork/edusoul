import { configureStore } from "@reduxjs/toolkit";
import moduleReducer from "./slices/moduleSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { module: moduleReducer },
  });
};
