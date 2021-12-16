import React from "react";
import { useAppSelector } from "../../app/hooks";
import { PostsAuthor } from "./PostsAuthor";

export const PostsList: React.FC = () => {
  const posts = useAppSelector(state => state.posts);

  const renderedPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <PostsAuthor userId={post.userId} />
    </article>
  ))

  return (
    <section>
      <h1>Posts</h1>
      {renderedPosts}
    </section>
  )
}