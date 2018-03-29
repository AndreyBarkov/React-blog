import React from "react";
import { connect } from "react-redux";
import { addPost} from "../actions/actions";
import PropTypes from "prop-types";

const NewPost = props => {
     const addNewPost = (e) => {
      let newPost = { title: this.title.value, text: this.text.value };
      props.addPost(newPost);
    };
    return (
      <div className="post">
        <form id="newPost" onSubmit={addNewPost}>
          <input
            className="input-title"
            type="text"
            required
            placeholder="Title"
            ref={input => {
              this.title = input;
            }}
          />
          <br />
          <div className="input-text">
            <textarea
              required
              rows="20"
              cols="80"
              placeholder="Post..."
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
  };
}

export default connect(null, mapDispatchToProps)(NewPost);
