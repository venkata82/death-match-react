import React from 'react';
import { connect } from 'react-redux';

import 'dmc/css/components/notification.min.css';
import Notification from 'dmc/js/components/notification.js';

export default React.createClass({

  displayName: 'NotificationWrapper',

  propTypes: {
    message: React.PropTypes.string.isRequired,
    theme: React.PropTypes.string,
    onAfterClick: React.PropTypes.func.isRequired,
    autoDismissTimeout: React.PropTypes.number
  },

  componentDidMount() {
    this.myNotification = new Notification(this.refs.notification, {
      onAfterClick: this.props.onAfterClick,
      autoDismissTimeout: this.props.autoDismissTimeout,
      theme: this.props.theme
    });
  },

  render() {
    return (
      <div ref="notification" className="notification-list__item">{this.props.message}</div>
    );

  }
  
});