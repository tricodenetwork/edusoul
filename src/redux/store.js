import { configureStore } from "@reduxjs/toolkit";
import moduleReducer from "./slices/moduleSlice";
import networkReducer from "./slices/networkSlice";
import userReducer from "./slices/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      module: moduleReducer,
      network: networkReducer,
      user: userReducer,
    },
  });
};
