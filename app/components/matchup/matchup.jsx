import React from 'react';
import { connect } from 'react-redux';
import WarriorDetail from '../warriorDetail/warriorDetail.jsx';
import { chooseOponents } from '../../actions/index.js';

export const Matchup = React.createClass({

  displayName: 'Matchup',

  propTypes: {
    oponent1: React.PropTypes.object,
    oponent2: React.PropTypes.object,
    socket: React.PropTypes.object
  },

  render() {
    let matchup = (this.props.oponent1 && this.props.oponent2) ?
      <div>
        <h2 className="title title--large title--yellow main__title--first">Matchup!</h2>
        <h3 className="title title--medium title--yellow">Who wins??</h3>
        <span onClick={this.eventSelection.bind(this, this.props.oponent1)}>
          <WarriorDetail warrior={ this.props.oponent1 } />
        </span>
        <h3 className="title title--large title--yellow title--italic main__title--third">vs</h3>
        <span onClick={this.eventSelection.bind(this, this.props.oponent2)}>
          <WarriorDetail warrior={ this.props.oponent2 } onClick={this.eventSelection} />
        </span>
      </div> : null;
    
    return matchup; 

  },

  eventSelection(selectedWarrior) {
    this.props.socket.emit('warriorSelection', { id: selectedWarrior.id });
    this.props.chooseOponents();
  } 
  
});

const mapStateToProps = (store) => {
  return { 
    oponent1: store.oponent1,
    oponent2: store.oponent2
  };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    chooseOponents: () => {
      dispatch(chooseOponents())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Matchup);