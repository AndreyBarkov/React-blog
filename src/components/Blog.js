import React, { Component } from 'react';
import List from './List';
import PostContainer from './PostContainer';
import * as actionTypes from '../actions/actionTypes';
import * as postActions from '../actions/actions';
import {dispatch, connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { selectPost } from '../actions/actions';
console.log(postActions);

class Blog extends Component{
    constructor(props){
        super(props);
       
    }
    selectPost = (id) => {
         this.props.postActions.selectPost(id);

    }
    createNewPost = () =>{
        this.props.postActions.newPost();
    }
    editPost = () =>{
        this.props.postActions.editPost();
    }
    render(){
        return(
            <div>
               <PostContainer {...this.props} onEditPost = {this.editPost}/>
                
                <List 
                    posts={this.props.posts} 
                    currentPost={this.props.currentPost}
                    OnClick = {this.selectPost}
                    onNewPost = {this.createNewPost}
                />
                
            </div>
            
        );
    }
}
function mapStateToProps(state){
    return {
        posts: state.posts,
        currentPost: state.currentPost,
        postState: state.postState
    }
}
function mapDispatchToProps(dispatch){
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Blog);