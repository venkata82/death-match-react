import React from 'react'

import Header from 'header';
import WarriorsList from 'warriorsList';
import Leaderboard from 'leaderboard';
import Matchup from 'matchup';
import NotificationList from 'notificationList';

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

