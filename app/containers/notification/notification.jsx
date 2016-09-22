import React from 'react';
import { connect } from 'react-redux';

import 'dmc/css/components/notification.min.css';
import Notification from 'dmc/js/components/notification.js';

export default React.createClass({

  displayName: 'Notification',

  propTypes: {
    message: React.PropTypes.string,
    style: React.PropTypes.string,
    handleClick: React.PropTypes.func.isRequired
  },

  componentDidMount() {
    this.myNotification = new Notification(this.refs.notification, {
      onClickHandler: this.props.handleClick
    });
  },

  render() {
    
    let notifyClass = 'notification-list__item';
    if (this.props.style) notifyClass += ' notification-list__item--' + this.props.style;

    return (
      <div ref="notification" className={notifyClass}>{this.props.message}</div>
    );

  }
  
});