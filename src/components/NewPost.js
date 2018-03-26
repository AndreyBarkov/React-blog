import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/2.7/node_modules/redux';
import {addPost, editPost} from '../actions/actions';

const NewPost = (props,{post}) => {
    if(post == null){
     
        const addNewPost = () => {
            let newPost = {title:this.title.value, text:this.text.value}
            props.addPost(newPost);
        }
        
        return(
            <div className="post">
                <input type="text" placeholder="Title" ref={input=>{this.title = input}}  />
                <input type="text" placeholder="Post..." ref={input=>{this.text = input}} />
                <button onClick={ () => addNewPost()}>Save</button>
            </div>
            
        );
    }
    else{
        return(
            <div className="post">
                <input type="text" placeholder="Title" value={post.title}  />
                <input type="text" placeholder="Post..." value={post.text}/>
                <button>Save</button>
            </div>
            
        );
    }
}
function mapDispatchToProps(dispatch){
    return{
        addPost: newPost => dispatch(addPost(newPost)),
    }
}

export default connect(null,mapDispatchToProps)(NewPost);