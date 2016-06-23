import ReactDOM from 'react-dom';
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import warriorsReducer  from './reducers/warriors.js';
import { Provider } from 'react-redux';

import Header from './components/header/header.jsx';
import WarriorsList from './components/warriorsList/warriorsList.jsx';
import Leaderboard from './components/leaderboard/leaderboard.jsx';
import Matchup from './components/matchup/matchup.jsx';

const loggerMiddleware = createLogger();
const store = createStore(
	warriorsReducer,
	applyMiddleware(
    	thunkMiddleware,
    	loggerMiddleware
  	)
);

// ================================================================
// initial socket connection, does this belong here?
import io from 'socket.io-client';
const socket = io.connect('/');
import { receiveWarriors, chooseOponents } from './actions/index.js';

socket.on('allWarriorsData', (warriors) => {
	store.dispatch(receiveWarriors(warriors));
	store.dispatch(chooseOponents());
});
// ================================================================

let Content = React.createClass({

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