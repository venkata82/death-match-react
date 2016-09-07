import { expect } from 'chai';
import reducer, { __RewireAPI__ as WarriorsReducerAPI } from './warriors.js';
import { RECEIVE_WARRIORS, CHOOSE_OPPONENTS } from '../actions/index.js';

describe('the warriors reducer', () => {

	it('should return the current state by default', () => {
		let previousState = { allWarriors: [1,2,3,4] };
		let mockState = { allWarriors: [5,6,7,8] };
		let mockAction = { type: null, warriors: mockState.allWarriors };

		var newState = reducer(previousState, mockAction);
		expect(newState).to.eql(previousState);
	});

	it('should handle RECEIVE_WARRIORS', () => {
		let previousState = { allWarriors: [1,2,3,4] };
		let expectedState = { allWarriors: [5,6,7,8] };
		let mockAction = { type: RECEIVE_WARRIORS, warriors: expectedState.allWarriors };

		var newState = reducer(previousState, mockAction);
		expect(newState).to.eql(expectedState);
	});

	it('should choose 2 unique opponents when handling CHOOSE_OPPONENTS', () => {

		WarriorsReducerAPI.__Rewire__('getRandomWarriors', function(warriors){
			return [ warriors[0], warriors[1] ];
		});

		let mockWarrior1 = { id: 1 };
		let mockWarrior2 = { id: 2 };

		let previousState = { allWarriors: [mockWarrior1, mockWarrior2], opponent1: null, opponent2: null };
		let mockAction = { type: CHOOSE_OPPONENTS };

		var newState = reducer(previousState, mockAction);

		expect(newState.opponent1).to.equal(mockWarrior1);
		expect(newState.opponent2).to.equal(mockWarrior2);

		WarriorsReducerAPI.__ResetDependency__('getRandomWarriors');

	});

});
