import { expect } from 'chai';
import chuckAlwaysWins from '../rules.js';

describe('the Rule modules', () => {
	
	const chuck = { id: 1 };
	const opponent = { id: 2 };
	const otherOpponent = { id: 3 };

	it('should choose Chuck as the winner when he is opponent1', () => {
		const winner = chuckAlwaysWins(chuck, opponent);
		expect(winner).to.eql(chuck);
	});
	
	it('should choose Chuck as the winner when he is opponent2', () => {
		const winner = chuckAlwaysWins(opponent, chuck);
		expect(winner).to.eql(chuck);
	});

	it('should choose the selected opponent if Chuck is not in the match', () => {
		const selectedOpponent = otherOpponent;
		const winner = chuckAlwaysWins(opponent, otherOpponent, selectedOpponent);
		expect(winner).to.eql(otherOpponent);
	});

});