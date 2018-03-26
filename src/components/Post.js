import React from 'react';


const Post = (props) => {
    if(props.post)
    return(
        <div className="post">
            <h1>{props.post.title}</h1>
            <p>{props.post.text}</p>
            <button onClick={() => props.onEditPost()}>Edit Post</button>
        </div>
        
    );
    else
    return (<div></div>);
}
export default Post;