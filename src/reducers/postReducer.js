import {
  NEW_POST,
  EXISTING_POST,
  EDIT_POST,
  SELECT_POST,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST
} from "../actions/actionTypes";
import UpdatePost from "../components/UpdatePost";

function postReducer(state = {}, action) {
  switch (action.type) {
    case NEW_POST:
      return Object.assign({}, state, {
        postState: NEW_POST
      });
    case EDIT_POST:
      return Object.assign({}, state, {
        postState: EDIT_POST,
        currentPost:action.id
      });
    case EXISTING_POST:
      return Object.assign({}, state, {
        postState: EXISTING_POST
      });
    case SELECT_POST:
      return Object.assign({}, state, {
        currentPost: action.id,
        postState: EXISTING_POST
      });
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
  post.datePosted = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', date:'numeric', month:'short', year:'numeric', hour12: true });
  updatedPosts.unshift(post);
  return Object.assign({}, state, {
    posts: updatedPosts,
    postState: EXISTING_POST,
    numberOfPosts:state.numberOfPosts+1,
  });
}

function updatePost(state, action) {
  let updatedPosts = state.posts;
  let postIndex = updatedPosts.findIndex(item => item.id === action.post.id);
  updatedPosts.splice(postIndex, 1, action.post);
  return Object.assign({}, state, {
    posts: updatedPosts,
    postState: EXISTING_POST
  });
}
function deletePost(state, action) {

  let updatedPosts = state.posts;

  let postToDelete = updatedPosts.findIndex(post => post.id === action.id);

  updatedPosts.splice(postToDelete, 1);
  console.log("DELETED");
  console.log(updatedPosts);
  return {...state, posts:updatedPosts, numberOfPosts:state.numberOfPosts-1}

}
export default postReducer;
