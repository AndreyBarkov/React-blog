import React from "react";
import PropTypes from "prop-types";

const List = props => {
  let list;
  if (props.posts.length < 1) {
    console.log("no posts");
    list = <li>There are no posts yet</li>;
  } else {
    list = props.posts.map((post) => (
      <a href={'#'+post.id}><li
        key={post.id}
        onClick={() => props.OnClick(post.id)}
      >
        {post.title}
      </li></a>
    ));
  }
  return (
    <div className="post-list">
      All Posts
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
