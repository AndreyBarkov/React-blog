import React from 'react';
import {editPost, newPost, deletePost} from '../actions/actions';
import {connect} from 'react-redux';

const Post = (props) => {
  //  const post = props.posts[props.currentPost.id];
    if(props.post)
    return(
        <div className="post">
            <h1>{props.post.title}</h1>
            <p>{props.post.text}</p>
            <button onClick={() => props.editPost()}>Edit Post</button>
            <button onClick={() => props.newPost()}>New Post</button>
            <button onClick={() => props.deletePost(props.post.id)}>Delete Post</button>
        </div>
        
    );
    else
    return (<div></div>);
}
function mapStateToProps(state){
    return {
        posts: state.posts,
        currentPost: state.currentPost,
    }
}
function mapDispatchToProps(dispatch){
    return{
        editPost: newPost => dispatch(editPost()),
        newPost: ()=> dispatch(newPost()),
        deletePost: (id) => dispatch(deletePost(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);