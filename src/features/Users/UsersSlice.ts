import { createSlice, createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";

type UsersSlice = {
  id: string;
  name: string;
}

const initialState: UsersSlice[] = [
  {id: "1", name: "Paul"},
  {id: "2", name: "John"}
]

const stateUsers = (state: RootState) => {
  return state.users;
}

export const usersSelector = createSelector(
  stateUsers,
  (user) => user
)

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
})

export default usersSlice.reducer
