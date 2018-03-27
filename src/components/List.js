import React from "react";
import PropTypes from "prop-types";

const List = props => {
  let list;
  if (props.posts.length < 1) {
    console.log("no posts");
    list = <li>There are no posts yet</li>;
  } else {
    list = props.posts.map((post, index) => (
      <li
        key={post.id}
        className={post.id === props.currentPost ? "selected" : ""}
        onClick={() => props.OnClick(post.id)}
      >
        {post.title}
      </li>
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
  currentPost: PropTypes.number.isRequired,
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
