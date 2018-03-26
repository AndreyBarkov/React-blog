import React from 'react';


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
export default List;