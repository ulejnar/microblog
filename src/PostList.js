import React from 'react';
import Post from './Post';
import { useSelector } from 'react-redux';

function PostList() {
  const posts = useSelector((store) => store);

  const postArr = [];
  for (let id in posts) {
    const { title, description } = posts[id];
    postArr.push(
      <Post key={id} id={id} title={title} description={description} />
    );
  }

  return <div>{postArr}</div>;
}

export default PostList;
