import { createSlice, createSelector } from "@reduxjs/toolkit";

type UsersSlice = {
  id: string;
  name: string;
}

const initialState: UsersSlice[] = [
  {id: "1", name: "Paul"},
  {id: "2", name: "John"}
]

export const usersSelector = createSelector(
  [state => state.users],
  users => users
)

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
})

export default usersSlice.reducer
