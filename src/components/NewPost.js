import React from 'react';


const NewPost = ({post }) => {
    if(post == null){
        return(
            <div className="post">
                <input type="text" placeholder="Title"  />
                <input type="text" placeholder="Post..."/>
            </div>
            
        );
    }
    else{
        return(
            <div className="post">
                <input type="text" placeholder="Title" value={post.title}  />
                <input type="text" placeholder="Post..." value={post.text}/>
            </div>
            
        );
    }
}
export default NewPost;