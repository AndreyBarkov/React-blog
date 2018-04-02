import React from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/actions";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const NewPost = withRouter(props => {
  let title = "";
  let text = "";
  const addNewPost = e => {
    let newPost = { title: title.value, text: text.value };
    props.addPost(newPost);
    props.history.push("/");
  };
  return (
    <div className="post">
      <form id="newPost" onSubmit={addNewPost}>
        <input
          className="input-title"
          type="text"
          required
          placeholder="Title"
          defaultValue=""
          ref={input => {
            title = input;
          }}
        />
        <br />
        <div className="input-text">
          <textarea
            required
            rows="20"
            cols="80"
            placeholder="Post..."
            defaultValue=""
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
NewPost.propTypes = {
  addPost: PropTypes.func
};
function mapDispatchToProps(dispatch) {
  return {
    addPost: newPost => dispatch(addPost(newPost))
  };
}

export default connect(null, mapDispatchToProps)(NewPost);
