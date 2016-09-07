import React from 'react';
import { connect } from 'react-redux';
import Notification from 'notification';
import { notifyClear } from 'actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
        )
      });
      return items;
  },

  render() {
    return (
      <ReactCSSTransitionGroup className="notification-list" transitionName="notification-list__item-" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {this.getNotificationListItems()}
      </ReactCSSTransitionGroup>
    );
  }
  
});

const mapStateToProps = (store) => {
  return { 
    notifications: store.notifications
  };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    notifyClear: (id) => {
      dispatch(notifyClear(id))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);