import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  value: {
    token: string;
  } | null;
}

const initialState: UserState = {
  value: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState["value"]>) => {
      state.value = action.payload;
    },
    removeUser: (state) => {
      state.value = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
