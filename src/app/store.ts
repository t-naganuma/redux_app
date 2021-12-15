import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/Posts/PostsSlice";
import usersReducer from "../features/Users/UsersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
