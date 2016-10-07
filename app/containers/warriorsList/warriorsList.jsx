import React from 'react';
import { connect } from 'react-redux';
import Warrior from 'warrior';
import { IMAGE_PATH } from 'constants/appConstants';

import 'dmc/css/components/warriorsList.min.css';

export const WarriorsList = React.createClass({

  displayName: 'WarriorList',

  propTypes: {
  	warriors: React.PropTypes.array.isRequired
  },

  getWarriorsListItems() {
  	  let items = [];
  	  this.props.warriors.forEach((warrior, index) => {
    		items.push(
    		  <li className="warriors__list-item" key={index}>
          	<Warrior image={warrior.image} size="small" />
          </li>
  		  );
  	  });
  	  return items;
  },

  render() {

    return (
  		<section className="warriors sidebar__section">
  		    <h3 className="title title--medium">Warriors</h3>
  		    <ul className="warriors__list clearfix">
  		        {this.getWarriorsListItems()}
  		    </ul>
  		</section>
    );
  }
  
});

/* istanbul ignore next */
const mapStateToProps = (store) => {
  return { warriors: store.warriors.allWarriors };
};

export default connect(mapStateToProps)(WarriorsList);