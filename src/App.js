import React, { Component } from 'react';
import './App.css';
import Blog from './components/Blog';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
       <Blog />
       </Provider>
      </div>
    );
  }
}

export default App;
