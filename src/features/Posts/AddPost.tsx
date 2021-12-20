import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./PostsSlice";
import { usersSelector } from "../Users/UsersSlice";

export const AddPost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const dispatch = useDispatch();
  const users = useSelector(usersSelector);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
  const onChangeUserId = (e: React.ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value);

  const onClickSubmitPost = () => {
    if(title && content && userId) {
      dispatch(
        postAdded(title, content, userId)
      )
    } else {
      alert("title, contentは必須です。")
    }
    setTitle("");
    setContent("");
  }

  const canSave = title && content && userId;

  const usersOptions = users.map((user: any) => {
    return (
      <option value={user.id} key={user.id}>{user.name}</option>
    )
  });

  return (
    <section className="form_wrap">
      <h2>Add New Post</h2>
      <form>
        <label htmlFor="postTitle">PostTitle:</label>
        <input type="text" id="postTitle" name="postTitle" value={title} onChange={onChangeTitle} />
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" value={content} onChange={onChangeContent}></textarea>
        <label htmlFor="userId">author:</label>
        <select name="userId" id="userId" onChange={onChangeUserId}>
          <option value="" />
          {usersOptions}
        </select>
        <button type="button" onClick={onClickSubmitPost} disabled={!canSave}>submit</button>
      </form>
    </section>
  )
}
