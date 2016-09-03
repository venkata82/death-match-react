import React from 'react';
import { connect } from 'react-redux';
import { orderBy } from 'lodash';

export const Leaderboard = React.createClass({

  displayName: 'Leaderboard',

  propTypes: {
    warriors: React.PropTypes.array.isRequired
  },

  getLeaderboardRows() {
      let items = [];

      let sortedWarriors = orderBy(this.props.warriors, (w) => w.wins).reverse();

      sortedWarriors.forEach(function(warrior, index){
        items.push(
            <tr className="table__row" key={index}>
                <td className="table__cell">{warrior.name}</td>
                <td className="table__cell text-right">{warrior.wins}</td>
            </tr>
        )
      });
      return items;
  },

  render() {
    return (
        <section className="leaderboard">
            <h3 className="title title--medium sidebar__title">Leaderboard</h3>
            <table className="table leaderboard__table">
                <thead className="table__thead">
                    <tr className="table__row">
                        <th className="table__cell">Warrior</th>
                        <th className="table__cell text-right">Wins</th>
                    </tr>
                </thead>
                <tbody>
                    { this.getLeaderboardRows() }
                </tbody>
            </table>
        </section>
    );
  }

});

const mapStateToProps = (store) => {
  return { warriors: store.warriors.allWarriors };
}

export default connect(mapStateToProps)(Leaderboard);