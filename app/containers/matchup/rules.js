const chucksId = 1;

const chuckAlwaysWins = (opponent1, opponent2, selectedOpponent) => {

	if (opponent1.id === chucksId) return opponent1;
	if (opponent2.id === chucksId) return opponent2;

	return selectedOpponent;

};

export default chuckAlwaysWins;