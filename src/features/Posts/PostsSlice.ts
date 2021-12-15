import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type PostsSlice = {
  id: string;
  title: string;
  content: string;
  userId: string;
}

const initialState: PostsSlice[] = [
  { id: "1", title: "title1", content: "test", userId: "1" },
  { id: "2", title: "title2", content: "testtest", userId: "2" }
]

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<PostsSlice>) => {
        state.push(action.payload);
      },
      prepare: (title: string, content: string, userId: string) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          }
        }
      }
    }
  }
});

export const { postAdded } = postSlice.actions;
export default postSlice.reducer
