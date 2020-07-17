import * as t from './actionTypes';

const INITIAL_STATE = {
  posts: [],
  postDetail: {},
};

const rootReducer = (state = INITIAL_STATE, action) => {
  let copiedState, copiedPostValue, copiedComments, postId;
  switch (action.type) {
    case t.GET_POSTS:
      return { ...state, posts: action.posts };
    case t.GET_POST_DETAIL:
      return { ...state, postDetail: action.postDetail };
    case t.ADD_NEW_POST:
      return { ...state, ...action.postData };

    case t.EDIT_POST:
      return { ...state, ...action.payload };

    case t.DELETE_POST:
      copiedState = { ...state };
      delete copiedState[action.payload];
      return copiedState;

    case t.ADD_COMMENT:
      copiedState = { ...state };
      postId = action.payload.postId;
      copiedPostValue = { ...copiedState[postId] };
      copiedComments = { ...copiedPostValue.comments };
      copiedPostValue.comments = {
        ...copiedComments,
        ...action.payload.comment,
      };
      return { ...state, [action.payload.postId]: copiedPostValue };

    case t.DELETE_COMMENT:
      copiedState = { ...state };
      postId = action.payload.postId;
      copiedPostValue = { ...copiedState[postId] };
      copiedComments = { ...copiedPostValue.comments };
      delete copiedComments[action.payload.commentId];
      copiedPostValue.comments = copiedComments;
      return { ...state, [postId]: copiedPostValue };

    default:
      return state;
  }
};
export default rootReducer;
