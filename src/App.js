import React, {useState}from 'react';
import './App.css';
import Routes  from './Routes';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const INITIAL_STATE = [
    { title: 'Post 1', description: 'Description for Post 1', body:'This is body 1', id: "1" },
    { title: 'Post 2', description: 'Description for Post 2',description: 'Description for Post 2', body:'This is body 2', id: "2" }];
    const [posts, setPosts] = useState(INITIAL_STATE);

    const addNewPost = newPost => { 
      setPosts(currData => [...currData, newPost]);
    }

    const editPost = post => {
      console.log("post from App", post.body);
      console.log("posts from the App", posts)
      const editedPostIdx = posts.findIndex(p => p.id===post.id);
      // setPosts([...posts, {...posts[editedPostIdx], title: post.title, description: post.description, body: post.body}])
      setPosts(posts.filter(p => p.id!==post.id))
      setPosts([...posts, post]);
      console.log("posts from the App 2", posts)

    }

    const deletePost = id => { 
      setPosts(posts.filter(post=> post.id!==id))
    }
    console.log("posts.....", posts)
  return (
    <BrowserRouter>
      <Navigation />
      <Routes posts = {posts} addNewPost={addNewPost} deletePost ={deletePost} editPost={editPost}/>
    </BrowserRouter>
  );
}

export default App;
