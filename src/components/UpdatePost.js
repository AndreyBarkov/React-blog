import React from "react";
import { connect } from "react-redux";
import { addPost, updatePost } from "../actions/actions";
import PropTypes from "prop-types";

const UpdatePost = props => {
  const updatePost = () => {
    props.updatePost({
      id: props.post.id,
      title: this.title.value,
      text: this.text.value,
      datePosted: props.post.datePosted
    });
  };
  return (
    <div className="post">
      <form onSubmit={updatePost}>
        <input
          className="input-title"
          type="text"
          placeholder="Title1"
          required
          defaultValue={props.post.title}
          ref={input => {
            this.title = input;
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
              this.text = input;
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
};
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
