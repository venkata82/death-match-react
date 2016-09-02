import React from 'react';
import classNames from 'classnames';
import { IMAGE_PATH } from '../../constants/appConstants';

export default React.createClass({

  displayName: 'Warrior',

  propTypes: {
  	image: React.PropTypes.string.isRequired,
  	size: React.PropTypes.string
  },

  render() {

	  let imageClasses = classNames('warrior', { ['warrior--' + this.props.size]: this.props.size });

    return (
    	<img className={imageClasses} src={IMAGE_PATH + this.props.image} />
    );
  }
  
});
