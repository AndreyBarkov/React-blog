import React, { Component } from "react";
import PostContainer from "./PostContainer";
import * as postActions from "../actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "../assets/logo-og.png";

class Blog extends Component {
 
  createNewPost = () => {
    this.props.postActions.newPost();
  };
  editPost = () => {
    this.props.postActions.editPost();
  };
  render() {
    return (
      <div>
        <div className="blog-header">
          <a href="/">
    
            <img alt="logo" src={logo} />
          </a>
          <div className="button create-post">
            <a href="/new">CREATE POST</a>
          </div>
        </div>
        <PostContainer {...this.props} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
    postState: state.postState,
    numberOfPosts: state.numberOfPosts
  };
}
function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
