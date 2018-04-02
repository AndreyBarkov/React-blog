import * as types from "./actionTypes";


export function addPost(post) {
  return {
    type: types.ADD_POST,
    post
  };
}
export function deletePost(id) {
  return {
    type: types.DELETE_POST,
    id
  };
}
export function updatePost(post) {
  return {
    type: types.UPDATE_POST,
    post
  };
}

