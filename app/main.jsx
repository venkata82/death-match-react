// import "babel-polyfill";

import ReactDOM from 'react-dom'
import React from 'react'
import Header from './components/header/header.jsx'
import WarriorsList from './components/warriorsList/warriorsList.jsx'
import Leaderboard from './components/leaderboard/leaderboard.jsx'
// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
// import { createStore, applyMiddleware } from 'redux'
// import reducer  from 'reducers/index.js'
// import { fetchRounds } from 'actions/roundActions.js'
// import { fetchPlayers } from 'actions/playerActions.js'
// import PostRoundContainer from 'routes/postRoundContainer.jsx!'
// import './index.scss!'

// const loggerMiddleware = createLogger()
// const store = createStore(
// 	reducer,
// 	applyMiddleware(
//     	thunkMiddleware,
//     	loggerMiddleware
//   	)
// )

// store.dispatch(fetchRounds());
// store.dispatch(fetchPlayers());

let Content = React.createClass({
  render: function() {
    return (
		<div>
			<Header />
			<aside className="sidebar">
				<WarriorsList />
				<Leaderboard />
			</aside>
			<div className="main">

			</div>
		</div>
    );
  }
});

ReactDOM.render(
  <Content />,
  document.getElementById('app')
);