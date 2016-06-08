import React from 'react';

export default React.createClass({
  render: function() {
    return (
        <section className="leaderboard">
            <h3 className="title title--medium sidebar__title">Leaderboard</h3>
            <table className="table leaderboard__table">
                <thead className="table__thead">
                    <tr className="table__row">
                        <th className="table__cell">Warrior</th>
                        <th className="table__cell text-right">Ranking</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table__row">
                        <td className="table__cell">name</td>
                        <td className="table__cell text-right">wins</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
  }
});
