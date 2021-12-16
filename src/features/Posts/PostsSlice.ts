import { createAsyncThunk, createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
type PostsSlice = {
  id: string;
  title: string;
  content: string;
  userId: string;
}

const initialState: PostsSlice[] = []

export const fetchPosts = createAsyncThunk<PostsSlice>(
  "posts/fetchPosts",
  async (): Promise<PostsSlice> => {
    const res = await axios.get("http://localhost:8888/posts");
    return await res.data;
  }
);

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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return state = state.concat(action.payload)
    })
  }
});

export const { postAdded } = postSlice.actions;
export default postSlice.reducer
