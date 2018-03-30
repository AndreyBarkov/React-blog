import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const List = props => {
  let list;
  if (props.posts.length < 1) {
    console.log("no posts");
    list = <li>There are no posts yet</li>;
  } else {
    list = props.posts.map((post) => (
      <li key={post.id}>
     <a onClick={ () =>window.location.href = window.location.origin + `/post/${post.id}`}>
      {post.title}
      </a>

      </li>
    ));
  }
  return (
    <div className="post-list">
     <a href="/"> All Posts </a>
      <ul>{list}</ul>
    </div>
  );
};
List.propTypes = {
 
  OnClick: PropTypes.func,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default List;
