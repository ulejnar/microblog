import { ADD_NEW_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";

export function addNewPost(newPost) {
  return {
    type: ADD_NEW_POST,
    payload: newPost
  }
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    payload: post
  }
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: postId
  }
}

export function addComment(comment, postId){
  return {
    type: ADD_COMMENT,
    payload: {comment, postId}
  }
}

export function deleteComment(commentId, postId){
  return {
    type: DELETE_COMMENT,
    payload: {commentId, postId}
  }
}



