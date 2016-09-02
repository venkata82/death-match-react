import React from 'react';
import { connect } from 'react-redux';

export const Notify = React.createClass({

  displayName: 'Notify',

  propTypes: {
    message: React.PropTypes.string
  },

  render() {
    let notifyClass = (this.props.message) ? 'notify--active' : null;
    return (
      <div className={notifyClass}>{this.props.message}</div>
    );
  }
  
});

const mapStateToProps = (store) => {
  return { message: store.notify };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    notifyClear: () => {
      dispatch(notifyClear())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notify);