import React from 'react';
import Warrior from '../warrior/warrior.jsx';
import { IMAGE_PATH } from '../../constants/appConstants';

export default React.createClass({

  displayName: 'WarriorDetail',

  propTypes: {
  	warrior: React.PropTypes.object
  },

  render() {

    let warrior = (this.props.warrior) ? 
      <figure className="warrior-detail main__warrior-detail">
          <Warrior image={this.props.warrior.image} size="large" />
          <figcaption className="warrior-detail__caption">
              <div className="warrior-detail__name">{this.props.warrior.name}</div>
              <div className="warrior-detail__wins">{this.props.warrior.wins}</div>
          </figcaption>
      </figure> : null;

    return warrior;

  }
  
});

