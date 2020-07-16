import React from 'react';
import CommentForm from './CommentForm';
import { v4 as uuidv4 } from 'uuid';

function CommentList({ comments, addComment, postId, deleteComment }) {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <button onClick={() => deleteComment(comment.id, postId)}>X</button>
          <span>{comment.contents}</span>
        </div>
      ))}
      <CommentForm addComment={addComment} postId={postId} />
    </div>
  );
}

export default CommentList;
