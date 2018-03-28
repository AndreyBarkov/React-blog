import { createStore, applyMiddleware, compose } from "redux";
import postReducer from "../reducers/postReducer";
import { EXISTING_POST } from "../actions/actionTypes";

export default function configureStore() {
  let date = new Date();
  date = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', date:'numeric', month:'short', year:'numeric', hour12: true });
  const initialState = {
    posts: [
      {
        id: 0,
        title: "Welcome to your Blog",
        text: "This is a React-powered blog <br/> <img src='https://image.slidesharecdn.com/presentation-150508185029-lva1-app6891/95/reactjs-beyond-the-browser-50-638.jpg?cb=1431111589'/>",
        datePosted: date
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
