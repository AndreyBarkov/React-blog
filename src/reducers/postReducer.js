import { NEW_POST, EXISTING_POST, EDIT_POST, SELECT_POST } from "../actions/actionTypes";

function postReducer (state={},action){
    switch(action.type){
        case NEW_POST:
            return Object.assign({},state,{postState:NEW_POST})
        case EDIT_POST:
            return Object.assign({},state,{postState:EDIT_POST})
        case EXISTING_POST:
            return Object.assign({},state,{postState: EXISTING_POST})
        case SELECT_POST:
            return Object.assign({},state,{currentPost:action.id, postState:EXISTING_POST})
        default:
            return state
    }
}
export default postReducer;