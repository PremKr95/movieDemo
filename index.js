/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Navigation from './src/navigation/Navigation';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './src/redux/reducer/reducer';
import thunk from 'redux-thunk';

let store = createStore(Reducer, applyMiddleware(thunk));

export class AppRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => AppRoot);