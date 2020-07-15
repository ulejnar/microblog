import React, { useState } from 'react';
import Post from './Post';

function PostList({posts}) {
 
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
