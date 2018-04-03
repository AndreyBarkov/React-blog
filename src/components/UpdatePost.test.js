import React from "react";
import UpdatePost from "./UpdatePost";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import renderer from "react-test-renderer";

const mockPost = {
  id: 0,
  title: "Test title",
  text: "Test text",
  datePosted: "March 30th 18:30"
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
        <UpdatePost store={store} post={mockPost} />
      </Router>
    );
  });
  it("it renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <UpdatePost store={store} post={mockPost} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render without throwing an error", () => {
    expect(
      enzyme
        .mount(
          <Router>
            <UpdatePost store={store} post={mockPost} />
          </Router>
        )
        .find("form")
    ).toHaveLength(1);
  });
  it("should render correct props values", () => {
    expect(
      enzyme
        .mount(
          <Router>
            <UpdatePost store={store} post={mockPost} />
          </Router>
        )
        .find(".input-title")
        .instance().value
    ).toEqual("Test title");
    expect(
      enzyme
        .mount(
          <Router>
            <UpdatePost store={store} post={mockPost} />
          </Router>
        )
        .find("textarea")
        .instance().value
    ).toEqual("Test text");
  });
  it("should render dispatch UPDATE_POST action with proper values", () => {
    wrapper.find(".input-title").instance().value = "Updated Test title";
    wrapper.find("textarea").instance().value = "Updated Test text";
    wrapper.find("#updatePost").simulate("submit", { preventDefault() {} });
    expect(store.getActions()).toEqual([
      {
        type: "UPDATE_POST",
        post: {
          id: mockPost.id,
          title: "Updated Test title",
          text: "Updated Test text",
          datePosted: mockPost.datePosted
        }
      }
    ]);
  });
});
