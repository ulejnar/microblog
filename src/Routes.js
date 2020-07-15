import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PostList from './PostList';
import PostForm from './PostForm';
import PostDetails from './PostDetails';

function Routes({posts, addNewPost, deletePost, editPost}) {
  return (
    <Switch>
      <Route exact path='/'>
        <PostList posts={posts}/>
      </Route>
      <Route exact path='/new'>
        <PostForm posts={posts} addNewPost={addNewPost} />
      </Route>
      <Route exact path='/:postId'>
        <PostDetails posts={posts} deletePost={deletePost} editPost={editPost}/>
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

export default Routes;
