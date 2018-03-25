import React from 'react';


const Post = (props) => {
    return(
        <div className="post">
            <h1>{props.post.title}</h1>
            <p>{props.post.text}</p>
        </div>
        
    );
}
export default Post;