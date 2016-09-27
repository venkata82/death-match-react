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
          <Notification key={notification.id} onAfterClick={this.props.notifyClear.bind(null, notification.id)} message={notification.message} theme={notification.theme} autoDismissTimeout={notification.autoDismissTimeout} />
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

/* istanbul ignore next */
const mapStateToProps = (store) => {
  return { 
    notifications: store.notifications
  };
};

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => {
  return { 
    notifyClear: (id) => {
      dispatch(notifyClear(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);