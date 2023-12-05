import { I_Course } from "@/api/GET_Courses";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CoursesState {
  courses: I_Course[];
}

const initialState: CoursesState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses(state, action: PayloadAction<I_Course[]>) {
      state.courses = action.payload;
    },
  },
});

export const { setCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
