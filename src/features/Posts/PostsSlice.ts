import { createSlice } from "@reduxjs/toolkit";

type PostsSlice = {
  id: number;
  title: string;
  content: string;
}

const initialState: PostsSlice[] = [
  { id: 1, title: "title1", content: "test" },
  { id: 2, title: "title2", content: "testtest" }
]

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }
  }
});

export const { postAdded } = postSlice.actions;
export default postSlice.reducer
