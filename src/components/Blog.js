import React, { Component } from "react";
import List from "./List";
import PostContainer from "./PostContainer";
import * as postActions from "../actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "../assets/logo-og.png";

class Blog extends Component {
   selectPost = id => {
    this.props.postActions.selectPost(id);
  };
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
          <img alt="logo" src={logo} />
          <div
            className="button create-post"
            onClick={() => this.props.postActions.newPost()}
          >
            CREATE POST
          </div>
        </div>

        <PostContainer {...this.props} onEditPost={this.editPost} />

        <List
          posts={this.props.posts}
          OnClick={this.selectPost}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
    postState: state.postState,
    numberOfPosts: state.numberOfPosts,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
