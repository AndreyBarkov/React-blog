import React from 'react';
import PropTypes from 'prop-types';
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
List.propTypes = {
    currentPost:PropTypes.number.isRequired,
    OnClick:PropTypes.func.isRequired,
    posts:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        title:PropTypes.string,
        text:PropTypes.string,
    })).isRequired,
}

export default List;