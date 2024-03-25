import { LectureTypes } from "@/app/(root)/watch/[id]/course/Lecture";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LectureState {
  lecture: LectureTypes;
}

const initialState: LectureState = {
  lecture: { course_id: 0, id: 0, lecture_name: "", lecture_content: { description: "" }, quizzes: [], readings: [], videos: [], mideterm_quiz_check_answers: [], mideterm_quiz_answer_percents: [] },
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
