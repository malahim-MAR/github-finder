import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  GithubUser: "",
};

const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    UserValue: (state, action) => {
      state.GithubUser = action.payload;
    },
  },
});

export const { UserValue } = usernameSlice.actions;

export default usernameSlice.reducer;
