import React from 'react';
import { connect } from 'react-redux';

export const Notify = React.createClass({

  displayName: 'Notify',

  propTypes: {
    message: React.PropTypes.string
  },

  render() {
    
    let notifyClass = 'notify';
    if (this.props.message) notifyClass += ' notify--active';
    if (this.props.status) notifyClass += ' notify--' + this.props.status;

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