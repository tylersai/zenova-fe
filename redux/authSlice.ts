import { Profile } from "@/types/user";
import { createSelector, createSlice } from "@reduxjs/toolkit";

export type AuthState = {
  user: Profile | null;
  accessToken: string | undefined;
};

const initialState: AuthState = {
  user: null,
  accessToken: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const isLoggedInSelector = createSelector([(state) => state.auth], (auth) => {
  return auth.user ? true : false;
});

export const { setUserProfile, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
