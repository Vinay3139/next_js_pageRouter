import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userData/userData";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
