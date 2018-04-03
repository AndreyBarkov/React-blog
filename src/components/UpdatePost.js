import React from "react";
import { connect } from "react-redux";
import {updatePost } from "../actions/actions";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'


const UpdatePost = withRouter((props) => {
  let title = props.post.title;
  let text = props.post.text;
  const updatePost = () => {
    props.updatePost({
      id: props.post.id,
      title: title.value,
      text: text.value,
      datePosted: props.post.datePosted
    }); 
   props.history.push('/');
  };
  return (
    <div className="post">
      <form id="updatePost" onSubmit={updatePost}>
        <input
          className="input-title"
          type="text"
          placeholder="Title1"
          required
          defaultValue={props.post.title}
          ref={input => {
            title = input;
          }}
        />
        <br />
        <div className="input-text">
          <textarea
            rows="20"
            cols="85"
            required
            placeholder="Post..."
            defaultValue={props.post.text}
            ref={input => {
              text = input;
            }}
          />
        </div>
        <br />
        <div className="post-bottom">
          <input className="button submit" type="submit" value="SAVE" />
        </div>
      </form>
    </div>
  );
});
UpdatePost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};
function mapDispatchToProps(dispatch) {
  return {
    updatePost: post => dispatch(updatePost(post))
  };
}

export default connect(null, mapDispatchToProps)(UpdatePost);
