import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { PostsAuthor } from "./PostsAuthor";
import { fetchPosts } from "./PostsSlice";

export const PostsList: React.FC = () => {
  const posts = useAppSelector(state => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])

  const renderedPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <PostsAuthor userId={post.userId} />
    </article>
  ))

  return (
    <section className="posts_list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
