import { configureStore } from "@reduxjs/toolkit";
import moduleReducer from "./slices/moduleSlice";
import networkReducer from "./slices/networkSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { module: moduleReducer, network: networkReducer },
  });
};
