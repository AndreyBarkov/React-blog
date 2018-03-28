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
    return (
      <div className="post">
        <h2 className="post-title">{props.post.title}</h2>
        <div
          className="post-text"
          dangerouslySetInnerHTML={{ __html: props.post.text }}
        />
        <div className="post-bottom">
        <div  className="date-posted">Posted on: {props.post.datePosted}</div>
        <div disabled={props.post.id !== -1} className="button edit-post" onClick={() => props.editPost()}>
          EDIT
        </div>
        <div
          disabled={props.post.id !== -1}
          className="button delete-post"
          onClick={() => deletePostWithConfirmation(props.post.id)}
        >
          DELETE
        </div>
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
    text: PropTypes.string,
  })
};
Post.defaultProps = {
  post:{
    id:-1,
    title:'Ooops!!!',
    text:'There are no post in your blog yet. Would you like to create one?',
    datePosted:'Today'
  }
}
function mapDispatchToProps(dispatch) {
  return {
    editPost: newPost => dispatch(editPost()),
    newPost: () => dispatch(newPost()),
    deletePost: id => dispatch(deletePost(id))
  };
}
export default connect(null, mapDispatchToProps)(Post);

