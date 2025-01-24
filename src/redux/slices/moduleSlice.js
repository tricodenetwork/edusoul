import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  module: "",
  course: {},
  lesson: {},
};

const mySlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    setActiveCourse(state, action) {
      state.course = action.payload;
    },
    setActiveLesson(state, action) {
      state.lesson = action.payload;
    },
    setActiveModule(state, action) {
      state.module = action.payload;
    },
  },
});

export const { setActiveModule, setActiveCourse, setActiveLesson } =
  mySlice.actions;

// Export the reducer
export default mySlice.reducer;
