// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  age: string | null;
  gender: string | null;
  phone_number: string | null;
  city: string | null;
  education: string | null;
  faculty: string | null;
  employment_status: string | null;
  employment_industry: string | null;
  employment_position: string | null;
  email_verified_at: string;
  is_admin: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  token: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
