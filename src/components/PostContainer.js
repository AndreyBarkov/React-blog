import React from 'react';
import Post from './Post';
import Feed from './Feed';
import NewPost from './NewPost';
import UpdatePost from './UpdatePost';
import { NEW_POST, EDIT_POST, EXISTING_POST } from '../actions/actionTypes';

const PostContainer = props => {
  switch (props.postState) {
    case NEW_POST:
      return <NewPost />;
    case EXISTING_POST:
      return (
          <Feed posts={props.posts} />
      );
    case EDIT_POST:
      return (
        <UpdatePost
          post={props.posts.find(item => item.id === props.currentPost)}
        />
      );
    default:
      return (
        <Post
          post={props.posts.find(item => item.id === props.currentPost)}
          onEditPost={props.onEditPost}
        />
      );
  }
};
export default PostContainer;

