import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PostList from './PostList';
import PostForm from './PostForm';
import PostDetails from './PostDetails';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <PostList />
      </Route>
      <Route exact path='/new'>
        <PostForm />
      </Route>
      <Route exact path='/:postId'>
        <PostDetails />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

export default Routes;
