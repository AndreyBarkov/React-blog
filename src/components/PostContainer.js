import React from "react";
import Post from "./Post";
import Feed from "./Feed";
import List from "./List";
import NewPost from "./NewPost";
import UpdatePost from "./UpdatePost";
import { NEW_POST, EDIT_POST, EXISTING_POST } from "../actions/actionTypes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

const PostContainer = props => {
//  console.log("props: " + props.match.params.postId);
//{matchProps.match.params.postId}
//{props.posts[0].title}
  return (
    <Router>
    <div>
    <Route exact path="/" component={() => <Feed posts={props.posts} />} />
      <Route 
        match
        path={`/edit/:postId`}
        render={(matchProps) => ( <UpdatePost post={props.posts.find(item => item.id === +matchProps.match.params.postId)} /> )}
      />
      <Route 
        match
        path={`/new`}
        render={(matchProps) => ( <NewPost /> )}
      />
       <Route 
        match
        path={`/post/:postId`}
        render={(matchProps) => ( <Post post={props.posts.find(item => item.id === +matchProps.match.params.postId)} /> )}
      />
         <List posts={props.posts} OnClick={this.selectPost} />
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

/*switch (props.postState) {
  case NEW_POST:
    return <NewPost />;
  case EXISTING_POST:
    return (
        <Feed posts={props.posts} />
    );
  case EDIT_POST:
    return (
      <UpdatePost
        post={props.posts.find(item => item.id === props.currentPost)}
      />
    );
  default:
    return (
      <Post
        post={props.posts.find(item => item.id === props.currentPost)}
        onEditPost={props.onEditPost}
      />
    );
}*/
