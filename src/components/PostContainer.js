import React from "react";
import Post from "./Post";
import Feed from "./Feed";
import List from "./List";
import NewPost from "./NewPost";
import UpdatePost from "./UpdatePost";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

const PostContainer = props => {
  return (
    <Router>
      <div id="postContainer">
      <div className="button create-post">
            <Link to="/new">CREATE POST</Link>
          </div>
        <Route exact path="/" component={() => <Feed posts={props.posts} />} />
        <Route
          match
          path={`/edit/:postId`}
          component={matchProps => (
            <UpdatePost
              post={props.posts.find(
                item => item.id === +matchProps.match.params.postId
              )}
            />
          )}
        />
        <Route match path={`/new`} component={matchProps => <NewPost />} />
        <Route
          match
          path={`/post/:postId`}
          component={matchProps => (
            <Post
              post={props.posts.find(
                item => item.id === +matchProps.match.params.postId
              )}
            />
          )}
        />
        <List posts={props.posts}  />
      </div>
    </Router>
  );
};
function mapStateToProps(state) {
  return {
    posts: state.posts,
    postState: state.postState,
    numberOfPosts: state.numberOfPosts
  };
}
export default connect(mapStateToProps, null)(PostContainer);
