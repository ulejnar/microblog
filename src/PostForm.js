import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewPost, editPost } from './actions';

function PostForm({ postObj }) {
  const postId = postObj && Object.keys(postObj)[0];

  const post = postObj && Object.values(postObj)[0];

  let title = postObj ? post.title : '';
  let description = postObj ? post.description : '';
  let body = postObj ? post.body : '';
  let comments = postObj ? post.comments : {};

  const INITIAL_STATE = {
    title,
    description,
    body,
    comments,
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const id = uuidv4();

    post
      ? dispatch(editPost({ [postId]: {...formData} }))
      : dispatch(addNewPost({ [id]: {...formData} }));
    history.push('/');
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((currData) => ({ ...currData, [name]: value }));
  };

  return (
    <form className='PostForm' onSubmit={handleSubmit}>
      <h2>{post ? ' Edit Post' : 'New Post'} </h2>
      <label htmlFor='title'> Title </label>
      <input
        name='title'
        value={formData.title}
        id='title'
        placeholder={post && post.title}
        onChange={handleChange}
      />
      <label htmlFor='description'> Description </label>
      <input
        name='description'
        value={formData.description}
        id='description'
        placeholder={post && post.description}
        onChange={handleChange}
      />
      <label htmlFor='body'> Body </label>
      <input
        name='body'
        value={formData.body}
        id='body'
        placeholder={post && post.body}
        onChange={handleChange}
      />
      <button type='submit'>Save</button>
      <button onClick={() => history.push('/')}>Cancel</button>
    </form>
  );
}

export default PostForm;
