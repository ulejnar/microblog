import React from 'react';
import CommentForm from './CommentForm';
import { deleteComment } from './actions';
import { useDispatch } from 'react-redux';

function CommentList({ comments, postId }) {
  const commentArr = [];
  const dispatch = useDispatch();

  // code review question: Why is it OK to mix JSX outside
  // of return?
  for (let id in comments) {
    commentArr.push(
      <div key={id}>
        {/* <button onClick={}>X</button> */}
        <button onClick={() => dispatch(deleteComment(id, postId))}>X</button>
        <span>{comments[id]}</span>
      </div>
    );
  }

  // console.log('Rendering CommentList....');
  return (
    <div>
      {commentArr}
      <CommentForm postId={postId} />
    </div>
  );
}

export default CommentList;
