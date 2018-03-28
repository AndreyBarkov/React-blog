import React, { Component } from "react";
import "./App.css";
import Blog from "./components/Blog";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import logo from './assets/logo-og.png'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="blog-header">
        <img src={logo}/>
      </div>
        <Provider store={store}>
          <Blog />
        </Provider>
      </div>
    );
  }
}

export default App;
