import React from 'react';
import Warrior from '../warrior/warrior.jsx';

export default React.createClass({

  displayName: 'WarriorList',

  propTypes: {},

  render() {
    return (
		<section className="warriors">
		    <h3 className="title title--medium sidebar__title">Warriors</h3>
		    <ul className="warriors__list clearfix">
		        <li className="warriors__list-item">
		        	<Warrior />
		        </li>
		    </ul>
		</section>
    );
  }
});
