import React from "react";
import { deletePost } from "../actions/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const Post =(props, {match}) => {
  const deletePostWithConfirmation = id => {
    if (window.confirm("Are you sure to delete this post?")) {
      props.deletePost(id);
    } else {
      return;
    }
  };
    return (
      <div id={props.post.id} className="post">
        <h2 className="post-title">{props.post.title}</h2>
        <div
          className="post-text"
          dangerouslySetInnerHTML={{ __html: props.post.text }}
        />
        <div className="post-bottom">
        <div  className="date-posted">Posted on: {props.post.datePosted}</div>
        <Link className="button edit-post" to = {`/edit/${props.post.id}`}>
          EDIT
        </Link>
         <div
          
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
    deletePost: id => dispatch(deletePost(id))
  };
}
export default connect(null, mapDispatchToProps)(Post);

