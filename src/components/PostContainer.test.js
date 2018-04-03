import React from "react";
import PostContainer from "./PostContainer";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Feed from './Feed';

enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
let store, wrapper;

beforeEach(() => {
  store = mockStore({
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
  });

  wrapper = enzyme.mount(
    <Provider store={store}>
    <Router initialEntry = {["/new"]}>
      <PostContainer />
      </Router>
    </Provider>
  );
});

describe("PostContainer component", () => {
  it("should render without throwing an error", () => {
    expect(wrapper.find("#postContainer")).toHaveLength(1);
  });
  it("should display correct component based on route", () => {
   /* const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap);
      expect(pathMap['/']).toBe(() => <Feed posts={props.posts} />);*/
     expect(wrapper.find("#feed")).toHaveLength(1);
  });
});
