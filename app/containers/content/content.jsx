import React from 'react'

import Header from '../../components/header/header.jsx';
import WarriorsList from '../../components/warriorsList/warriorsList.jsx';
import Leaderboard from '../../components/leaderboard/leaderboard.jsx';
import Matchup from '../../components/matchup/matchup.jsx';
import NotificationList from '../../components/notification/notificationList.jsx';

export default React.createClass({

  displayName: 'Content',

  propTypes: {
      socket: React.PropTypes.object.isRequired
  },

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
				<Matchup socket={this.props.socket}/>
			</div>
		</div>
    );
  }

});

