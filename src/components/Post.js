import React from "react";
import { editPost, newPost, deletePost } from "../actions/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Post = props => {
  //  const post = props.posts[props.currentPost.id];
  if (props.post)
    return (
      <div className="post">
        <h2>{props.post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: props.post.text }} />
        <button onClick={() => props.editPost()}>Edit Post</button>
        <button onClick={() => props.newPost()}>New Post</button>
        <button onClick={() => props.deletePost(props.post.id)}>
          Delete Post
        </button>
      </div>
    );
  else
    return (
      <div className="post">
        <h2>
          {" "}
          There are no post in your blog yet. Would you like to create one?
        </h2>
        <button onClick={() => props.newPost()}>New Post</button>
      </div>
    );
};
Post.propTypes = {
  editPost: PropTypes.func.isRequired,
  newPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string
  })
};
function mapStateToProps(state) {
  return {
    posts: state.posts,
    currentPost: state.currentPost
  };
}
function mapDispatchToProps(dispatch) {
  return {
    editPost: newPost => dispatch(editPost()),
    newPost: () => dispatch(newPost()),
    deletePost: id => dispatch(deletePost(id))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
