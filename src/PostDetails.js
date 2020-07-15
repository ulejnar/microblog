import React, {useState} from 'react';
import { useParams, useHistory} from "react-router-dom";
import PostForm from "./PostForm";

function PostDetails({posts, deletePost, editPost}) {

  const [editMode, setEditMode] = useState(false)

  const { postId } = useParams();
  const post = posts.find(p => p.id === postId);
  const history = useHistory();
  
  const handleRemove= () => {
    deletePost(post.id);
    history.push('/');
  }
    

  return (
  <div>
    <h3> {post.title}</h3>
    <button onClick ={() => setEditMode(true)}>Edit</button>
    <button onClick = {handleRemove}>Remove</button>
    <p> {post.description}</p>
    <p>{post.body}</p>
    {editMode ? <PostForm post={post} editPost={editPost}/> : null}
  </div>);
}

export default PostDetails;
