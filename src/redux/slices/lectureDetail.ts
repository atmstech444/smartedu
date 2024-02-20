import { I_Course } from "@/api/GET_Courses";
import { LectureTypes } from "@/app/(root)/watch/[id]/course/Lecture";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LectureState {
  lecture: LectureTypes;
}

const initialState: LectureState = {
  lecture: { course_id: 0, id: 0, lecture_name: "", lecture_content: "", quizzes: [], readings: [], videos: [] },
};

const lectureDetail = createSlice({
  name: "lecture",
  initialState,
  reducers: {
    setLecture(state, action: PayloadAction<LectureTypes>) {
      state.lecture = action.payload;
    },
  },
});

export const { setLecture } = lectureDetail.actions;

export default lectureDetail.reducer;
