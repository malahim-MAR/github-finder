// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "../reducer/usernameSlice"; // adjust the path as needed

export const store = configureStore({
  reducer: {
    username: usernameReducer,
  },
});
