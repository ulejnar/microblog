import React, { useState } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import PostForm from './PostForm';
import CommentList from './CommentList';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from './actions';

function PostDetails() {
  const [editMode, setEditMode] = useState(false);

  const { postId } = useParams();
  const history = useHistory();

  const posts = useSelector((store) => store);
  const dispatch = useDispatch();

  // protect /999 if 999 doesn't exact
  if (!(postId in posts)) {
    return <Redirect to='/' />;
  }

  const handleRemove = () => {
    dispatch(deletePost(postId));
    history.push('/');
  };

  const postObj = { [postId]: posts[postId] };

  const { title, description, body, comments } =
    postObj && Object.values(postObj)[0];

  return (
    <div>
      <h3> {title}</h3>
      <button onClick={() => setEditMode(true)}>Edit</button>
      <button onClick={handleRemove}>Remove</button>
      <p> {description}</p>
      <p>{body}</p>
      {editMode && <PostForm postObj={postObj} />}
      <CommentList comments={comments} postId={postId} />
    </div>
  );
}

export default PostDetails;
