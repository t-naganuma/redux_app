import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./PostsSlice";

export const AddPost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const dispatch = useAppDispatch();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);

  const onClickSubmitPost = () => {
    if(title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      )
    } else {
      alert("title, contentは必須です。")
    }
    setTitle("");
    setContent("");
  }

  return (
    <section>
      <h2>Add New Post</h2>
      <form>
        <label htmlFor="postTitle">PostTitle:</label>
        <input type="text" id="postTitle" name="postTitle" value={title} onChange={onChangeTitle} />
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" value={content} onChange={onChangeContent}></textarea>
        <button type="button" onClick={onClickSubmitPost}>submit</button>
      </form>
    </section>
  )
}
