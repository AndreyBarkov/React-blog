import React from 'react';
import {connect} from 'react-redux';

const List = (props) => {
    const list =  props.posts.map((post) => 
                                (<li 
                                    key={post.id}
                                    className = {post.id === props.currentPost ? "selected" : ""}
                                    onClick = { () => props.OnClick(post.id)} 
                                > {post.title} </li>));
    return(
        <div className="post-list">All Posts
            <ul>
               {list}
            </ul>
        <button onClick={() => props.onNewPost()}>Add New Post</button>
        </div>
    );
}
function mapStateToProps(state){
    return {
        posts: state.posts,
        currentPost: state.currentPost,
    }
}
export default connect(mapStateToProps, null)(List);