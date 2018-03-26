import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import postReducer from '../reducers/postReducer';
import {EXISTING_POST} from '../actions/actionTypes';

export default function configureStore() {
  const initialState = {

    posts: [{
        id: 2,
        title: 'Dogs post',
        text: 'Dogs are awesome'
      },
      {
        id: 3,
        title: 'Cats post',
        text: 'Cats are nice'
      },
    ],
    currentPost: 2,
    postState: EXISTING_POST,
  }

  return createStore(
    postReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}