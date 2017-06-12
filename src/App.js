import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import OrderListContainer from './containers/OrderListContainer';
import logo from './logo.svg';
import './App.css';

const store = configureStore();   // no preloadedState

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <OrderListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
