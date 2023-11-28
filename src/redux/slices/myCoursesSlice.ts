import { I_Course } from "@/api/GET_Courses";
import { I_MyCourse } from "@/api/GET_MyCourses";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyCoursesState {
  courses: I_MyCourse[];
}

const initialState: MyCoursesState = {
  courses: [],
};

const myCoursesSlice = createSlice({
  name: "myCourses",
  initialState,
  reducers: {
    setMyCourses(state, action: PayloadAction<I_MyCourse[]>) {
      console.log(action.payload);
      state.courses = action.payload;
    },
  },
});

export const { setMyCourses } = myCoursesSlice.actions;

export default myCoursesSlice.reducer;
