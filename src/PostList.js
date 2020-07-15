import React, { useState } from 'react';
import Post from './Post';

function PostList() {
  const INITIAL_STATE = [
    { title: 'Post 1', description: 'Description for Post 1', id: 1 },
    { title: 'Post 2', description: 'Description for Post 2', id: 2 },
  ];
  const [posts, setPosts] = useState(INITIAL_STATE);
  return (
    <div>
      {posts.map((post) => (
        <Post
          title={post.title}
          description={post.description}
          id={post.id}
          key={post.id}
        />
      ))}
    </div>
  );
}

export default PostList;
