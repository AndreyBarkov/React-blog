import React, { Component } from 'react';
import Post from './Post'; 
import List from './List';

class Blog extends Component{
    constructor(props){
        super(props);

        this.state = 
        {
             posts : [{id:0, title: 'Dogs post', text:'Dogs are awesome'},
                      {id:1, title: 'Cats post', text:'Cats are nice'},
                    ],
            currentPost: 0,
        }

        
    }
    selectPost = (id) => {
        this.setState({currentPost: id});        
    }
    render(){
        return(
            <div>
                <Post post={this.state.posts[this.state.currentPost]} />
                <List 
                    posts={this.state.posts} 
                    currentPost={this.state.currentPost}
                    OnClick={this.selectPost} 
                />
            </div>
            
        );
    }
}
export default Blog;