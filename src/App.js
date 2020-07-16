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

  const addNewPost = (newPost) => {
    setPosts((currData) => [...currData, newPost]);
  };

  const editPost = (postToUpdate) => {
    setPosts(
      posts.map((post) => (post.id === postToUpdate.id ? postToUpdate : post))
    );
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const addComment = (commentObj, postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          post.comments = [...post.comments, commentObj];
        }
        return post;
      })
    );
  };

  const deleteComment = (commentId, postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const indexToDelete = post.comments.findIndex(
            (comment) => comment.id === commentId
          );
          // const commentsCopy = [...post.comments];
          // Not sure about this
          post.comments.splice(indexToDelete, 1);
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
