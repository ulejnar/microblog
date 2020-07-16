import React from 'react';
import CommentForm from './CommentForm';

function CommentList({ comments, addComment, postId, deleteComment }) {
  return (
    <div>
      {comments.map(({ id, contents }) => (
        <div key={id}>
          <button onClick={() => deleteComment(id, postId)}>X</button>
          <span>{contents}</span>
        </div>
      ))}
      <CommentForm addComment={addComment} postId={postId} />
    </div>
  );
}

export default CommentList;
