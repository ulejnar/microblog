import * as t from './actionTypes';

const INITIAL_STATE = {
  '1': {
    title: 'Post 1',
    description: 'Description for Post 1',
    body: 'This is body 1',
    comments: { '1': 'Nice blog!', '2': 'I like your thinking.' },
  },
  '2': {
    title: 'Post 2',
    description: 'Description for Post 2',
    body: 'This is body 2',
    comments: { '3': 'Have a nice day!' },
  },
};

const rootReducer = (state = INITIAL_STATE, action) => {
  let copiedState, copiedPostValue, copiedComments, postId;
  switch (action.type) {
    case t.ADD_NEW_POST:
      return { ...state, ...action.payload };

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
