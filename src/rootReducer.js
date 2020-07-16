import * as t from './actionTypes';

const INITIAL_STATE = {
  '1': {
    title: 'Post 1',
    description: 'Description for Post 1',
    body: 'This is body 1',
    comments: { '1': 'Nice blog!', '2': 'I like your thinking.' }
  },
  '2': {
    title: 'Post 2',
    description: 'Description for Post 2',
    body: 'This is body 2',
    comments: { '3': 'Have a nice day!' }
  }
}

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.ADD_NEW_POST:
      return { ...state, ...action.payload}
    
    case t.EDIT_POST: 
      const key = Object.keys(updatedPost)[0];
      const value = Object.values(updatedPost)[0];
      return { ...state, [key]: value }

    case t.DELETE_POST:
      const copiedState = {...state};
      delete copiedState[action.payload];
      return copiedState;

    case t.ADD_COMMENT:
      const copiedState = {...state};
      const copiedPost = {...copiedState[action.payload.postId]}
      const copiedComments = {...copiedPost.comments}
      copiedPost.comments = {...copiedComments, ...action.payload.comment};
      return {...state, ...copiedPost}

    case t.DELETE_COMMENT:
      const copiedState = {...state};
      const copiedPost = {...copiedState[action.payload.postId]}
      const copiedComments = {...copiedPost.comments}
      delete copiedComments[action.payload.commentId];
      copiedPost.comments = copiedComments;
      return{...state, ...copiedPost }

      default:
        return state;
  }
}
export default rootReducer;