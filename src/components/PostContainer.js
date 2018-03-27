import React from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import { NEW_POST, EDIT_POST, EXISTING_POST } from "../actions/actionTypes";

const PostContainer = props => {
  switch (props.postState) {
    case NEW_POST:
      return <NewPost />;
    case EXISTING_POST:
      return (
        <Post
          post={props.posts.find(item => item.id === props.currentPost)}
          onEditPost={props.onEditPost}
        />
      );
    case EDIT_POST:
      return (
        <NewPost
          post={props.posts.find(item => item.id === props.currentPost)}
          test={"test"}
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
