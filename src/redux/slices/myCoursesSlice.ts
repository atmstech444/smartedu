import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { I_MyCourse } from "@/api/GET_MyCourses";

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
      return {
        ...state,
        courses: action.payload,
      };
    },
  },
});

export const { setMyCourses } = myCoursesSlice.actions;

export default myCoursesSlice.reducer;
