import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import coursesSlice from "./slices/coursesSlice";
import myCoursesSlice from "./slices/myCoursesSlice";
import progressSlice from "./slices/progressSlice";
import lectureDetail from "./slices/lectureDetail";

const store = configureStore({
  reducer: {
    user: userSlice,
    courses: coursesSlice,
    myCourses: myCoursesSlice,
    progress: progressSlice,
    lecture: lectureDetail,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
