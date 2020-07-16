import React, { useState } from 'react';
import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const INITIAL_STATE = [
    {
      title: 'Post 1',
      description: 'Description for Post 1',
      body: 'This is body 1',
      id: '1',
      comments: [
        { contents: 'Nice blog!', id: 1 },
        { contents: 'I like your thinking.', id: 2 },
      ],
    },
    {
      title: 'Post 2',
      description: 'Description for Post 2',
      body: 'This is body 2',
      id: '2',
      comments: [{ contents: 'Have a nice day!', id: 3 }],
    },
  ];
  const [posts, setPosts] = useState(INITIAL_STATE);

  /* 
  Rules for not mutating old state:
  1. If the new state depends on the old state, use an arrow function in setState
  2. let postCopy = { ...post }; // right for make a copy of obj
     let commentsCopy = [...comments]; // right
     let postCopy =post;  // wrong
     let commentsCopy = comments; // wrong
  3. Make a copy of object and array before mutating
  */

  const addNewPost = (newPost) => {
    setPosts((currData) => [...currData, newPost]);
  };

  const editPost = (postToUpdate) => {
    setPosts((currData) =>
      currData.map((post) =>
        post.id === postToUpdate.id ? postToUpdate : post
      )
    );
  };

  const deletePost = (id) => {
    setPosts((currData) => currData.filter((post) => post.id !== id));
  };

  const addComment = (commentObj, postId) => {
    setPosts((currData) =>
      currData.map((post) => {
        // important: do not mutate the post object
        if (post.id === postId) {
          let postCopy = { ...post };
          postCopy.comments = [...post.comments, commentObj];
          return postCopy;
        }
        return post;
      })
    );
  };

  const deleteComment = (commentId, postId) => {
    setPosts((currData) =>
      currData.map((post) => {
        // make a copy of the post & comment
        // splice comment copy
        if (post.id === postId) {
          const postCopy = { ...post };
          const commentsCopy = [...post.comments];

          const indexToDelete = commentsCopy.findIndex(
            (comment) => comment.id === commentId
          );
          // const commentsCopy = [...post.comments];
          // Not sure about this
          // this is not good
          // postCopy.comments.splice(indexToDelete, 1);
          commentsCopy.splice(indexToDelete, 1);
          postCopy.comments = commentsCopy;
          return postCopy;
        }
        return post;
      })
    );
  };

  console.log('State posts......', posts);
  return (
    <BrowserRouter>
      <Navigation />
      <Routes
        posts={posts}
        addNewPost={addNewPost}
        deletePost={deletePost}
        editPost={editPost}
        addComment={addComment}
        deleteComment={deleteComment}
      />
    </BrowserRouter>
  );
}

export default App;
