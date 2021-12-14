import React from 'react';
import './App.css';
import { AddPost } from './features/Posts/AddPost';
import { PostsList } from './features/Posts/PostsList';

function App() {
  return (
    <div className="App">
      <AddPost />
      <PostsList />
    </div>
  );
}

export default App;
