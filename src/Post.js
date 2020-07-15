import React from 'react';
import { Link } from 'react-router-dom';

function Post({ id, title, description }) {
  return (
    <div>
      <h3>
        <Link to={`/${id}`}>{title}</Link>
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default Post;
