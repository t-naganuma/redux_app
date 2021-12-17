import React from "react";
import { useSelector } from "react-redux";
import { usersSelector } from "../Users/UsersSlice";

type Props = {
  userId: string;
}

export const PostsAuthor: React.FC<Props> = ({ userId }) => {
  const users = useSelector(usersSelector);
  const author = users.find((user: any) => user.id === userId);
  // const author = useAppSelector(state => state.users.find(user => user.id === userId));

  return (
    <span>by {author ? author.name : "Unknown author"}</span>
  )
}
