import React from 'react';
import {connect} from 'react-redux';

const List = (props) => {
     
    const list =  props.posts.map((post, index) => 
                                (<li 
                                    key={post.id}
                                    className = {post.id=== props.currentPost ? "selected" : ""}
                                    onClick = { () => props.OnClick(post.id)} 
                                > {post.title} </li>));
    return(
        <div className="post-list">All Posts
            <ul>
               {list}
            </ul>

        </div>
    );
}

export default List;