import React from "react";
import { connect } from "react-redux";
import { addPost, updatePost } from "../actions/actions";
import PropTypes from "prop-types";

const NewPost = props => {
  if (props.post === undefined) {
    const addNewPost = () => {
      let newPost = { title: this.title.value, text: this.text.value };
      props.addPost(newPost);
    };
    return (
      <div className="post">
        <input
          className="input-title"
          type="text"
          placeholder="Title"
          ref={input => {
            this.title = input;
          }}
        />
        <br />
        <textarea 
            rows="20" 
            cols="20"
            className="input-text"
            placeholder="Post..."
            ref={input => {
              this.text = input;}}
         />
        <br/>
        <button onClick={() => addNewPost()}>Save</button>
      </div>
    );
  } else {
    const updatePost = () => {
      let updPost = {
        id: props.post.id,
        title: this.title.value,
        text: this.text.value
      };
      props.updatePost(updPost);
    };
    return (
      <div className="post">
        <input
          className="input-title"
          type="text"
          placeholder="Title1"
          defaultValue={props.post.title}
          ref={input => {
            this.title = input;
          }}
        />
        <br/>
        <div className="input-text">
        <textarea
          rows="20" 
          cols="85"
          placeholder="Post..."
          defaultValue={props.post.text}
          ref={input => {
            this.text = input;
          }}
        />
        </div>
        <br/>
        <button onClick={() => updatePost()}>Save</button>
      </div>
    );
  }
};
NewPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string
  })
};
function mapDispatchToProps(dispatch) {
  return {
    addPost: newPost => dispatch(addPost(newPost)),
    updatePost: post => dispatch(updatePost(post))
  };
}

export default connect(null, mapDispatchToProps)(NewPost);
