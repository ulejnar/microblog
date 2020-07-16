import React, { useState } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import PostForm from './PostForm';
import CommentList from './CommentList';

function PostDetails({
  posts,
  deletePost,
  editPost,
  addComment,
  deleteComment,
}) {
  const [editMode, setEditMode] = useState(false);

  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);

  const history = useHistory();

  // protect
  if (!post) {
    return <Redirect to='/' />;
  }
  const handleRemove = () => {
    deletePost(post.id);
    history.push('/');
  };

  console.log('RENDERING PostDetails.....');
  const { title, description, body, comments } = post;
  return (
    <div>
      <h3> {title}</h3>
      <button onClick={() => setEditMode(true)}>Edit</button>
      <button onClick={handleRemove}>Remove</button>
      <p> {description}</p>
      <p>{body}</p>
      {editMode && <PostForm post={post} editPost={editPost} />}
      <CommentList
        comments={comments}
        addComment={addComment}
        deleteComment={deleteComment}
        postId={postId}
      />
    </div>
  );
}

export default PostDetails;
