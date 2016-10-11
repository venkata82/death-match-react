import React from 'react';
import { connect } from 'react-redux';
import WarriorDetail from 'warriorDetail';
import { chooseOpponents, notify, notifyClear } from 'actions';
import chuckAlwaysWins from './rules.js';

import './matchup.scss';

export const Matchup = React.createClass({

  displayName: 'Matchup',

  propTypes: {
    opponent1: React.PropTypes.object,
    opponent2: React.PropTypes.object,
    socket: React.PropTypes.object,
    chooseOpponents: React.PropTypes.func,
    notify: React.PropTypes.func,
    notifyClear: React.PropTypes.func
  },

  render() {
    let matchup = (this.props.opponent1 && this.props.opponent2) ?
      <div className="matchup">
        <h2 className="title title--large title--yellow matchup__title matchup__title--first">Matchup!</h2>
        <h3 className="title title--medium title--yellow matchup__title">Who wins??</h3>
        <WarriorDetail warriorDetailCssClass="matchup__warrior-detail" warrior={ this.props.opponent1 } onClickHandler={this.eventSelection.bind(this, this.props.opponent1)} />
        <h3 className="title title--large title--yellow title--italic matchup__title matchup__title--third">vs</h3>
        <WarriorDetail warriorDetailCssClass="matchup__warrior-detail" warrior={ this.props.opponent2 } onClickHandler={this.eventSelection.bind(this, this.props.opponent2)} />
      </div> : null;
    
    return matchup; 

  },

  eventSelection(selectedWarrior) {
    const winner = chuckAlwaysWins(this.props.opponent1, this.props.opponent2, selectedWarrior);
    this.props.socket.emit('warriorSelection', winner.id);
    this.props.chooseOpponents();
  } 
  
});

/* istanbul ignore next */
const mapStateToProps = (store) => {
  return { 
    opponent1: store.warriors.opponent1,
    opponent2: store.warriors.opponent2
  };
};

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => {
  return { 
    chooseOpponents: () => {
      dispatch(chooseOpponents());
    },
    notify: (message, theme, autoDismissTimeout) => {
      dispatch(notify(message, theme, autoDismissTimeout));
    },
    notifyClear: (id) => {
      dispatch(notifyClear(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Matchup);