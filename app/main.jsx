import ReactDOM from 'react-dom';
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer  from './reducers/index.js';
import { Provider } from 'react-redux';

import Header from './components/header/header.jsx';
import WarriorsList from './components/warriorsList/warriorsList.jsx';
import Leaderboard from './components/leaderboard/leaderboard.jsx';
import Matchup from './components/matchup/matchup.jsx';
import NotificationList from './components/notification/notificationList.jsx';

const loggerMiddleware = createLogger();
const store = createStore(
	reducer,
	applyMiddleware(
    	thunkMiddleware,
    	loggerMiddleware
  	)
);

// ================================================================
// initial socket connection, does this belong here?
import io from 'socket.io-client';
const socket = io.connect('/');
import { receiveWarriors, chooseOpponents, notify } from './actions/index.js';

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


const Content = React.createClass({

  displayName: 'Content',

  render() {
    return ( 
		<div>
			<Header />
			<aside className="sidebar">
				<WarriorsList />
				<Leaderboard />
			</aside>
			<div className="main">
				<NotificationList />
				<Matchup socket={socket}/>
			</div>
		</div>
    );
  }

});

ReactDOM.render(
  <Provider store={store}>
  	<Content />
  </Provider>,
  document.getElementById('app')
);