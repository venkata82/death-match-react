import React from 'react';
import Warrior from '../warrior/warrior.jsx';

export default React.createClass({

  displayName: 'WarriorDetail',

  propTypes: {},

  render() {
    return (
		<figure className="warrior-detail main__warrior-detail">
		    <Warrior />
		    <figcaption className="warrior-detail__caption">
		        <div className="warrior-detail__name">name</div>
		        <div className="warrior-detail__wins">wins</div>
		    </figcaption>
		</figure>
    );
  }
});

