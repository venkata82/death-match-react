import { expect } from 'chai';
import chuckAlwaysWins from '../rules.js';

describe('the Rules module', () => {

	const chuck = { id: 1 };
	const opponent = { id: 2 };
	const otherOpponent = { id: 3 };	

	it('should make Chuck the winner if he is opponent 1', () => {
		const winner = chuckAlwaysWins(chuck, opponent);
		expect(winner).to.eql(chuck);
	});

	it('should make Chuck the winner if he is opponent 2', () => {
		const winner = chuckAlwaysWins(opponent, chuck);
		expect(winner).to.eql(chuck);
	});

	it('should make the selected opponent the winner if Chuck is not in the matchup', () => {
		const selectedOpponent = otherOpponent;
		const winner = chuckAlwaysWins(opponent, otherOpponent, selectedOpponent);
		expect(winner).to.eql(selectedOpponent);
	});

});