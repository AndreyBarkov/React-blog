import postReducer from "./postReducer";
import * as types from "../actions/ActionTypes";
import { initialState } from "./postReducer";

describe("post reducer", () => {
  let mockState = {};

  beforeEach(() => {
    mockState = {
      posts: [
        {
          id: 0,
          title: "Welcome to your Blog",
          text:
            "This is a React-powered blog <br/> <img src='https://image.slidesharecdn.com/presentation-150508185029-lva1-app6891/95/reactjs-beyond-the-browser-50-638.jpg?cb=1431111589'/>",
          datePosted: "22-09-1994"
        }
      ],
      numberOfPosts: 1
    };
  });

  it("should return the initial state", () => {
    mockState = Object.assign({}, initialState);
    expect(postReducer(undefined, {})).toEqual(mockState);
  });

  it("should handle ADD_POST", () => {
    expect(
      postReducer(mockState, {
        type: types.ADD_POST,
        post: {
          title: "Test Post",
          text: "This is a test post"
        }
      })
    ).toEqual({
      posts: [
        {
          id: 1,
          title: "Test Post",
          text: "This is a test post",
          datePosted: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            day: "numeric",
            month: "short",
            year: "numeric",
            hour12: true
          })
        },
        {
          id: 0,
          title: "Welcome to your Blog",
          text:
            "This is a React-powered blog <br/> <img src='https://image.slidesharecdn.com/presentation-150508185029-lva1-app6891/95/reactjs-beyond-the-browser-50-638.jpg?cb=1431111589'/>",
          datePosted: "22-09-1994"
        }
      ],
      numberOfPosts: 2
    });
  });

  it("should handle DELETE_POST", () => {
    expect(
      postReducer(mockState, {
        type: types.DELETE_POST,
        id: 0
      })
    ).toEqual({ posts: [], numberOfPosts: 0 });
  });

  it("should handle UPDATE_POST", () => {
    expect(
      postReducer(mockState, {
        type: types.UPDATE_POST,
        post: {
          id: 0,
          title: "Testing Update",
          text:
            "This is a React-powered blog <br/> <img src='https://image.slidesharecdn.com/presentation-150508185029-lva1-app6891/95/reactjs-beyond-the-browser-50-638.jpg?cb=1431111589'/>",
          datePosted: "22-09-1994"
        }
      })
    ).toEqual({
      posts: [
        {
          id: 0,
          title: "Testing Update",
          text:
            "This is a React-powered blog <br/> <img src='https://image.slidesharecdn.com/presentation-150508185029-lva1-app6891/95/reactjs-beyond-the-browser-50-638.jpg?cb=1431111589'/>",
          datePosted: "22-09-1994"
        }
      ],
      numberOfPosts: 1
    });
  });
});
