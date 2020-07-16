import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function CommentForm({ addComment, postId }) {
  const INITIAL_STATE = { contents: '', id: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);

  function handleSubmit(evt) {
    evt.preventDefault();
    addComment({ ...formData, id: uuidv4() }, postId);
    setFormData(INITIAL_STATE);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='contents'
        value={formData.contents}
        placeholder='New Comment'
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default CommentForm;
