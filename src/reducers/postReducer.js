import { ADD_POST, UPDATE_POST, DELETE_POST } from "../actions/actionTypes";

let date = new Date();
date = date.toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "short",
  year: "numeric",
  hour12: true
});
export const initialState = {
  posts: [
    {
      id: 0,
      title: "Welcome to your Blog",
      text:
        "This is a React-powered blog <br/> <img src='https://image.slidesharecdn.com/presentation-150508185029-lva1-app6891/95/reactjs-beyond-the-browser-50-638.jpg?cb=1431111589'/>",
      datePosted: date
    }
  ],
  numberOfPosts: 1
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return addNewPost(state, action);
    case UPDATE_POST:
      return updatePost(state, action);
    case DELETE_POST:
      return deletePost(state, action);
    default:
      return state;
  }
}

function addNewPost(state, { post }) {
  let updatedPosts = state.posts;
  post.id = updatedPosts.length > 0 ? updatedPosts[0].id + 1 : 0;
  post.datePosted = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour12: true
  });
  updatedPosts.unshift(post);
  return Object.assign({}, state, {
    posts: updatedPosts,
    numberOfPosts: state.numberOfPosts + 1
  });
}

function updatePost(state, action) {
  let updatedPosts = state.posts;
  let postIndex = updatedPosts.findIndex(item => item.id === action.post.id);
  updatedPosts.splice(postIndex, 1, action.post);
  return Object.assign({}, state, {
    posts: updatedPosts
  });
}
function deletePost(state, action) {
  let updatedPosts = state.posts;

  let postToDelete = updatedPosts.findIndex(post => post.id === action.id);

  updatedPosts.splice(postToDelete, 1);
  console.log("DELETED");
  console.log(updatedPosts);
  return {
    ...state,
    posts: updatedPosts,
    numberOfPosts: state.numberOfPosts - 1
  };
}
export default postReducer;
