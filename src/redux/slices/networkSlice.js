import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  courses: [],
  course: {},
  items: [],
  users: [],
  assignments: [],
  loading: false,
  error: null,
};

export const fetchCourses = createAsyncThunk("api/courses", async (id) => {
  // console.log("id", id);
  const res = await axios.get(`/api/courses`);
  const course = res.data.find((item) => item.id == id);
  const items = course?.modules?.map((module) => module.id);
  return {
    courses: res.data.sort((a, b) => a.id - b.id),
    course: course,
    items: items,
  };
});

export const fetchUsers = createAsyncThunk("api/users", async () => {
  const res = await axios.get(`/api/users`);

  return res.data;
});

export const fetchAssignments = createAsyncThunk(
  "api/assignments",
  async () => {
    const res = await axios.get(`/api/assignments`);
    return res.data;
  }
);

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
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAssignments.fulfilled, (state, action) => {
        state.loading = false;
        state.assignments = action.payload;
      })
      .addCase(fetchAssignments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch assignments";
      })
      .addCase(fetchAssignments.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default networkSlice.reducer;
