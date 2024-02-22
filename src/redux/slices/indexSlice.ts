import { Progress_Info } from "@/api/GET_Progress";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IndexState {
  index: number;
}

const initialState: IndexState = {
  index: 0,
};

const indexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    updateIndexInfo: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
  },
});

export const { updateIndexInfo } = indexSlice.actions;
export default indexSlice.reducer;
