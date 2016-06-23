import React from 'react';
import classNames from 'classnames';

export default React.createClass({

  displayName: 'Warrior',

  propTypes: {
  	image: React.PropTypes.string.isRequired,
  	size: React.PropTypes.string
  },

  render() {

	let imageClasses = classNames('warrior', { ['warrior--' + this.props.size]: this.props.size });

    return (
    	<img className={imageClasses} src={this.props.image} />
    );
  }
  
});
