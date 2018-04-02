import React from "react";
import NewPost from "./NewPost";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router, Route } from "react-router-dom";

enzyme.configure({ adapter: new Adapter() });

const initialState = { post: [] };
const mockStore = configureStore();
let store, wrapper;

beforeEach(() => {
  store = mockStore({});

  wrapper = enzyme.mount(
    <Router>
      <NewPost store={store} />
    </Router>
  );
});

describe("NewPost component", () => {
  it("should render without throwing an error", () => {
    expect(wrapper.find("#newPost")).toHaveLength(1);
  });
  it("should dispatch addPost action with correct payload", () => {
    wrapper.find(".input-title").instance().value = "Test title";
    wrapper.find("textarea").instance().value = "Test text";
    wrapper.find("#newPost").simulate("submit", { preventDefault() {} });
    expect(store.getActions()).toEqual([
      {
        type: "ADD_POST",
        post: { title: "Test title", text: "Test text" }
      }
    ]);
  });
});
