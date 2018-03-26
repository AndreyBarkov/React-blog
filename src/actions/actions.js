import * as types from './actionTypes';

export function newPost() {
    return {
        type: types.NEW_POST,
    }
}
export function editPost() {
    return {
        type: types.EDIT_POST,
    }
}
export function existingPost() {
    return {
        type: types.EXISTING_POST,
    }
}
export function addPost(post) {
    return {
        type: types.ADD_POST,
        post,
    }
}
export function removePost(id) {
    return {
        type: types.REMOVE_POST,
        id,
    }
}
export function updatePost(post) {
    return {
        type: types.UPDATE_POST,
        post,
    }
}
export function selectPost(id) {
    return {
        type: types.SELECT_POST,
        id,
    }
}