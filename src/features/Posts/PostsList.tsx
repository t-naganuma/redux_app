import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { PostsAuthor } from "./PostsAuthor";
import { fetchPosts, postsSelector } from "./PostsSlice";

export const PostsList: React.FC = () => {
  const posts = useSelector(postsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])

  const renderedPosts = posts.map((post: any) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {/* <PostsAuthor userId={post.userId} /> */}
    </article>
  ))

  return (
    <section className="posts_list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
