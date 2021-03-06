import axios from 'axios';
import * as t from './actionTypes';
import { ADD_COMMENT } from '../../src/actionTypes';

const API_URL = 'http://localhost:5000';

export function getPostsFromAPI() {
  return async function thunk(dispatch) {
    try {
      let res = await axios.get(`${API_URL}/api/posts`);
      dispatch(getPosts(res.data));
    } catch (err) {
      console.log(err);
    }
  };
}

export function getPostFromAPIById(id) {
  return async function thunk(dispatch) {
    try {
      let res = await axios.get(`${API_URL}/api/posts/${id}`);
      console.log('res...', res);
      dispatch(getPostDetail(res.data));
    } catch (err) {
      console.log(err);
    }
  };
}

// newPost => {title, desc, body}

export function addNewPostAPI(post) {
  return async function thunk(dispatch) {
    try {
      let res = await axios.post(`${API_URL}/api/posts/`, post);
      dispatch(addNewPost(res.data));
    } catch (err) {}
  };
}

export function removePostAPI(id) {
  return async function thunk(dispatch) {
    try {
      await axios.delete(`${API_URL}/api/posts/${id}`);
      dispatch(deletePost());
      let res = await axios.get(`${API_URL}/api/posts`);
      dispatch(getPosts(res.data));
    } catch (err) {}
  }
}

export function addCommentAPI(id, comment) {
  return async function thunk(dispatch) {
    try {
      let res = await axios.post(`${API_URL}/api/posts/${id}/comments`, {comment});
      dispatch(addComment(res.data));
    } catch (err) {}
  }
}

function getPosts(posts) {
  return {
    type: t.GET_POSTS,
    posts,
  };
}

function getPostDetail(postDetail) {
  return {
    type: t.GET_POST_DETAIL,
    postDetail,
  };
}

// newPost => {title, desc, body}
function addNewPost(postData) {
  return {
    type: t.ADD_NEW_POST,
    postData,
  };
}

function deletePost() {
  return{
    type: t.DELETE_POST,
  }
}

function addComment() {
  return{
    type: ADD_COMMENT,
    comment
  }
}
