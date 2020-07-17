import React, { useEffect } from 'react';
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsFromAPI } from './actionCreators';

function PostList() {
  const posts = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsFromAPI());
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
}

export default PostList;
