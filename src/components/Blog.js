import React, { Component } from 'react';
import List from './List';
import PostContainer from './PostContainer';
import {NEW, EDIT, EXISTING} from './constants/PostState';

class Blog extends Component{
    constructor(props){
        super(props);

        this.state = 
        {
             posts : [{id:0, title: 'Dogs post', text:'Dogs are awesome'},
                      {id:1, title: 'Cats post', text:'Cats are nice'},
                    ],
            currentPost: 0,
            postState: EXISTING,
        }

        
    }
    selectPost = (id) => {
        this.setState({
            currentPost: id,
            postState: EXISTING,
        });        
    }
    createNewPost = () =>{
        console.log('create new post');
        this.setState( {postState:NEW});
    }
    editPost = () =>{
        console.log('create new post');
        this.setState( {postState:EDIT});
    }
    render(){
        return(
            <div>
               <PostContainer {...this.state} onEditPost = {this.editPost}/>
                
                <List 
                    posts={this.state.posts} 
                    currentPost={this.state.currentPost}
                    OnClick={this.selectPost} 
                    onNewPost = {this.createNewPost}
                />
                
            </div>
            
        );
    }
}
export default Blog;