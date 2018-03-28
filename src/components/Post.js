import React from "react";
import { editPost, newPost, deletePost } from "../actions/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Post = props => {
  const deletePostWithConfirmation = id => {
    if (window.confirm("Are you sure to delete this post?")) {
      props.deletePost(id);
    } else {
      return;
    }
  };
  if (props.post)
    return (
      <div className="post">
        <h2 className="post-title">{props.post.title}</h2>
        <div
          className="post-text"
          dangerouslySetInnerHTML={{ __html: props.post.text }}
        />
        <div className="post-bottom">
        <div className="date-posted">Posted on: {props.post.datePosted}</div>
        <div className="button edit-post" onClick={() => props.editPost()}>
          EDIT
        </div>
        <div
          className="button delete-post"
          onClick={() => deletePostWithConfirmation(props.post.id)}
        >
          DELETE
        </div>
        </div>
      </div>
    );
  else
    return (
      <div className="post">
        <h2 className="post-title">
          There are no post in your blog yet. Would you like to create one?
        </h2>
        <div className="post-bottom">
          <div className="button" onClick={() => props.newPost()}>CREATE POST</div>
        </div>
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
function mapDispatchToProps(dispatch) {
  return {
    editPost: newPost => dispatch(editPost()),
    newPost: () => dispatch(newPost()),
    deletePost: id => dispatch(deletePost(id))
  };
}
export default connect(null, mapDispatchToProps)(Post);

