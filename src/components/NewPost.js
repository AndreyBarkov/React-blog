import React from 'react';
import {connect} from 'react-redux';
import {addPost, updatePost} from '../actions/actions';

const NewPost = (props) => {
    if(props.post === undefined){
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
        const updatePost = () =>{
            let updPost = {id: props.post.id, title:this.title.value, text:this.text.value}
            props.updatePost(updPost);
        }
        return(
            <div className="post">
                <input type="text" placeholder="Title1" defaultValue={props.post.title} ref={input=>{this.title = input}}  />
                <input type="text" placeholder="Post..." defaultValue={props.post.text} ref={input=>{this.text = input}}/>
                <button onClick={ () => updatePost()}>Save</button>
            </div>
            
        );
    }
}
function mapDispatchToProps(dispatch){
    return{
        addPost: newPost => dispatch(addPost(newPost)),
        updatePost: post => dispatch(updatePost(post))
    }
}

export default connect(null,mapDispatchToProps)(NewPost);