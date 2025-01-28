import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  courses: [],
  course: {},
  items: [],
  loading: false,
  error: null,
};

export const fetchCourses = createAsyncThunk("api/courses", async (id) => {
  console.log("id", id);
  const res = await axios.get(`/api/courses`);
  const course = res.data.find((item) => item.id == id);
  const items = course?.modules?.map((module) => module.id);
  return { courses: res.data, course: course, items: items };
});

const networkSlice = createSlice({
  name: "network",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload.courses;
        state.course = action.payload.course;
        state.items = action.payload.items;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch courses";
      })
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default networkSlice.reducer;
