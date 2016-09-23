import React from 'react';
import { connect } from 'react-redux';

import 'dmc/css/components/notification.min.css';
import Notification from 'dmc/js/components/notification.js';

export default React.createClass({

  displayName: 'Notification',

  propTypes: {
    message: React.PropTypes.string.isRequired,
    style: React.PropTypes.string,
    handleClick: React.PropTypes.func.isRequired,
    autoDismissTimeout: React.PropTypes.number
  },

  componentDidMount() {
    this.myNotification = new Notification(this.refs.notification, {
      onAfterClick: this.props.handleClick,
      autoDismissTimeout: this.props.autoDismissTimeout,
      theme: this.props.style
    });
  },

  render() {
    return (
      // TODO: should applying the notification-list__item class belong to the high level component
      <div ref="notification" className="notification-list__item">{this.props.message}</div>
    );

  }
  
});