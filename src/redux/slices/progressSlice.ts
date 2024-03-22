import { Progress_Info } from "@/api/GET_Progress";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProgressState {
  progressInfo: Progress_Info;
}

const initialState: ProgressState = {
  progressInfo: {
    total_watched_time: 0,
    active_courses_count: 0,
    completed_courses_count: 0,
  },
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    updateProgressInfo: (state, action: PayloadAction<Progress_Info>) => {
      state.progressInfo = action.payload;
    },
  },
});

export const { updateProgressInfo } = progressSlice.actions;
export default progressSlice.reducer;
