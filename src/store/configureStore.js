import { createStore, applyMiddleware, compose } from "redux";
import postReducer from "../reducers/postReducer";
import { EXISTING_POST } from "../actions/actionTypes";

export default function configureStore() {
  const initialState = {
    posts: [
      {
        id: 0,
        title: "Welcome to your Blog",
        text: "This is a React-powered blog"
      }
    ],
    currentPost: 0,
    postState: EXISTING_POST
  };

  return createStore(
    postReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
