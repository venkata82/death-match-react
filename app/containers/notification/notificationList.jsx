import React from 'react';
import { connect } from 'react-redux';
import Notification from 'notification';
import { notifyClear } from 'actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const animationTime = 300;

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
      <ReactCSSTransitionGroup className="notification-list" transitionName="notification-list__item-" transitionEnterTimeout={animationTime} transitionLeaveTimeout={animationTime}>
          {this.getNotificationListItems()}
      </ReactCSSTransitionGroup>
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