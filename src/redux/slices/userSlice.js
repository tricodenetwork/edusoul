import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const mySlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { setUserEmail } = mySlice.actions;

// Export the reducer
export default mySlice.reducer;
