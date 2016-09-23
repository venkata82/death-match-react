import React from 'react';
import { connect } from 'react-redux';
import Notification from 'notificationWrapper';
import { notifyClear } from 'actions';

export const NotificationList = React.createClass({

  displayName: 'NotificationList',

  propTypes: {
    notifications: React.PropTypes.array.isRequired,
    notifyClear: React.PropTypes.func.isRequired
  },

  getNotificationListItems() {
      let items = [];
      this.props.notifications.forEach((notification) => {
        items.push(
          <Notification key={notification.id} handleClick={this.props.notifyClear.bind(null, notification.id)} message={notification.message} style={notification.style} />
        );
      });
      return items;
  },

  render() {
    return (
      <div className="notification-list">
          {this.getNotificationListItems()}
      </div>
    );
  }
  
});

const mapStateToProps = (store) => {
  return { 
    notifications: store.notifications
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    notifyClear: (id) => {
      dispatch(notifyClear(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);