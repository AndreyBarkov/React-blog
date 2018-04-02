import React from "react";
import Post from "./Post";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router, Route } from "react-router-dom";

const mockPost = {
  id: 0,
  title: "Welcome to your Blog",
  text: "This is a React-powered blog"
};

enzyme.configure({ adapter: new Adapter() });

describe("Post component", () => {
  const initialState = { post: [] };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore({});

    wrapper = enzyme.mount(
      <Router>
        <Post store={store} post={mockPost} />
      </Router>
    );
  });

  it("should render without throwing an error when no posts", () => {
    let emptyStore = mockStore({});
    expect(
      enzyme
        .mount(
          <Router>
            <Post store={emptyStore} />
          </Router>
        )
        .find(".post")
    ).toHaveLength(1);
  });
    it('should render post data', () => {
        expect(wrapper.find('.post-title').text()).toEqual(mockPost.title)
        expect(wrapper.find('.post-text').text()).toEqual(mockPost.text)   
    });
    it('should dispatch delete action on DELETE button click', () => {
        wrapper.find('.delete-post').simulate('click');
        expect(store.getActions()).toEqual( [ { type: 'DELETE_POST', id: 0 } ]);
    });
});

//https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md
// https://blog.theodo.fr/2017/04/enzyme-fast-and-simple-react-testing/
