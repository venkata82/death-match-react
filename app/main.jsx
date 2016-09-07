import ReactDOM from 'react-dom';
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer  from './reducers/index.js';
import io from 'socket.io-client';
import { receiveWarriors, chooseOpponents, notify } from './actions/index.js';
import { Provider } from 'react-redux';
import Content from 'content';

// ================================================================
// use the logger middleware
// ================================================================
const loggerMiddleware = createLogger();
const store = createStore(
	reducer,
	applyMiddleware(
    	loggerMiddleware
  	)
);

// ================================================================
// initial socket connection
// ================================================================
const socket = io.connect('/');

socket.on('connect', () => {
	store.dispatch(notify('Welcome to Deathmatch!', 'success'));
});

let initialDataReceived = false;

socket.on('allWarriorsData', (warriors) => {
	store.dispatch(receiveWarriors(warriors));
	if (!initialDataReceived) {
		store.dispatch(chooseOpponents());
		initialDataReceived = true;
	}
});

// ================================================================
// render
// ================================================================
ReactDOM.render(
  <Provider store={store}>
  	<Content socket={socket} />
  </Provider>,
  document.getElementById('app')
);