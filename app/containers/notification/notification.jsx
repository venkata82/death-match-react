import React from 'react';
import { connect } from 'react-redux';

import 'dmc/css/components/notification.min.css';

export default React.createClass({

  displayName: 'Notification',

  propTypes: {
    message: React.PropTypes.string,
    style: React.PropTypes.string,
    handleClick: React.PropTypes.func.isRequired
  },

  render() {
    
    let notifyClass = 'notification-list__item';
    if (this.props.style) notifyClass += ' notification-list__item--' + this.props.style;

    return (
      <div className={notifyClass} onClick={this.props.handleClick}>{this.props.message}</div>
    );

  }
  
});