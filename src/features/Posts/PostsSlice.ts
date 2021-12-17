import { createAsyncThunk, createSelector, createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";

type PostsSlice = {
  id: string;
  title: string;
  content: string;
  userId: string;
}

const initialState: PostsSlice[] = []

export const fetchPosts = createAsyncThunk<PostsSlice>(
  // type(第1引数)
  "posts/fetchPosts",
  // payloadCreator(第２引数)
  async (): Promise<PostsSlice> => {
    const res = await axios.get("http://localhost:8888/posts");
    return await res.data;
  }
);
export const selectPosts = (state: RootState) => {
  return state.posts;
}

export const postsSelector = createSelector(
  selectPosts,
  (post) => post
)

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
      return state.concat(action.payload)
    })
  }
});

export const { postAdded } = postSlice.actions;
export default postSlice.reducer
