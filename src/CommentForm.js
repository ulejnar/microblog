import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addComment } from './actions';
import { useDispatch } from 'react-redux';

function CommentForm({ postId }) {
  const INITIAL_STATE = '';
  const [formData, setFormData] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();
    const commentId = uuidv4();
    dispatch(addComment({ [commentId]: formData }, postId));
    setFormData(INITIAL_STATE);
  }

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData}
        placeholder='New Comment'
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default CommentForm;
