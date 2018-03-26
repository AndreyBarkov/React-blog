import React from 'react';
import Post from './Post';
import NewPost from './NewPost';
import {NEW, EDIT, EXISTING} from './constants/PostState';

const PostContainer = (props) => {
    switch(props.postState){
        case NEW:
            return <NewPost />;
        case EXISTING:
            return <Post post={props.posts[props.currentPost]} onEditPost={props.onEditPost} />
        case EDIT:
            return <NewPost post={props.posts[props.currentPost]} />;
        default:
            return <Post post={props.posts[props.currentPost]} onEditPost={props.onEditPost} />
    }

}
export default PostContainer;