import React from 'react';
import CommentForm from './CommentForm';
import { deleteComment } from './actions';
import { useDispatch } from 'react-redux';

function CommentList({ comments, postId }) {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          {/* <button onClick={}>X</button> */}
          <button>X</button>
          <span>{comment.text}</span>
        </div>
      ))}
      <CommentForm postId={postId} />
    </div>
  );
}

export default CommentList;
