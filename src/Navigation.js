import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <h1>Microblog</h1>
      <h3>Get in the Rithm of blogging!</h3>

      <NavLink exact to='/'>
        Blog
      </NavLink>

      <span>
        <NavLink exact to='/new'>
          Add a new post
        </NavLink>
      </span>
    </nav>
  );
}

export default Navigation;
