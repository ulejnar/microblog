import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import PostForm from './PostForm';
import CommentList from './CommentList';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from './actions';
import { getPostFromAPIById, removePostAPI } from './actionCreators';

function PostDetails() {
  const [editMode, setEditMode] = useState(false);
  const { postId } = useParams();
  const history = useHistory();

  const postDetail = useSelector((store) => store.postDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostFromAPIById(postId));
  }, [dispatch]);


  
    


  // protect /999 if 999 doesn't exact
  // to do
  // Without this no error - WHY?
  if (!postDetail) {
    return <Redirect to='/' />;
  }

  const handleRemove = () => {
    dispatch(removePostAPI(postId))
    history.push("/");
  };

  const { title, description, body, comments } = postDetail;
  console.log('postDetail...', postDetail);
  console.log('comments...', comments);
  return (
    <div>
      <h3> {title}</h3>
      <button onClick={() => setEditMode(true)}>Edit</button>
      <button onClick={handleRemove}>Remove</button>
      <p> {description}</p>
      <p>{body}</p>
      {/* {editMode && <PostForm postObj={postObj} />} */}
      {/* CODE REVIEW QUESTION */}
      {postDetail.id && <CommentList comments={comments} postId={postId} />}
    </div>
  );
}

export default PostDetails;
