import {
    NEW_POST,
    EXISTING_POST,
    EDIT_POST,
    SELECT_POST,
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
} from "../actions/actionTypes";

function postReducer(state = {}, action) {
    switch (action.type) {
        case NEW_POST:
            return Object.assign({}, state, {
                postState: NEW_POST
            })
        case EDIT_POST:
            return Object.assign({}, state, {
                postState: EDIT_POST
            })
        case EXISTING_POST:
            return Object.assign({}, state, {
                postState: EXISTING_POST
            })
        case SELECT_POST:
            return Object.assign({}, state, {
                currentPost: action.id,
                postState: EXISTING_POST
            })
        case ADD_POST:
            return addNewPost(state, action)
        case UPDATE_POST:
            return updatePost(state, action);
        case DELETE_POST:
            return deletePost(state, action)
        default:
            return state
    }
}

function addNewPost(state, {post}) {
    let updatedPosts = state.posts;
    post.id = state.posts.length;
    updatedPosts.push(post);
    return Object.assign({}, state, {
        posts: updatedPosts,
        currentPost: post.id,
        postState: EXISTING_POST
    })
}

function updatePost(state, action) {
    let updatedPosts = state.posts;
  //  updatedPosts[action.post.id] = action.post;
    let postIndex = updatedPosts.findIndex(item => item.id === action.post.id);
    console.log(postIndex);
    updatedPosts.splice(postIndex, 1, action.post);
    return Object.assign({}, state, {
        posts: updatedPosts,
        postState: EXISTING_POST
    });
}
function deletePost(state,action){
    //TODO: Add check if no posts left

    let updatedPosts = state.posts;

    let postToDelete = updatedPosts.findIndex(post => post.id === action.id);

    updatedPosts.splice(postToDelete,1);

    console.log(postToDelete);
    console.log(updatedPosts);

    return Object.assign({}, state, {
        posts: updatedPosts,
        currentPost:updatedPosts[0].id,
        postState: EXISTING_POST,
        
    });
}
export default postReducer;