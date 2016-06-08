import React from 'react';
import WarriorDetail from '../warriorDetail/warriorDetail.jsx';

export default React.createClass({

  displayName: 'Matchup',

  propTypes: {},

  render() {
    return (
    	<div>
			<h2 className="title title--large title--yellow main__title--first">Matchup!</h2>
			<h3 className="title title--medium title--yellow">Who wins??</h3>
			<WarriorDetail />
			<h3 className="title title--large title--yellow title--italic main__title--third">vs</h3>
			<WarriorDetail />
    	</div>
    );
  }
});
