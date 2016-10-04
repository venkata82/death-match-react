import { expect } from 'chai';
import reducer, { __RewireAPI__ as WarriorsReducerAPI } from '../warriors.js';
import { RECEIVE_WARRIORS, CHOOSE_OPPONENTS } from 'actions';

describe('the warriors reducer', () => {

	it('should return the current state by default', () => {
		const previousState = { allWarriors: [1,2,3,4] };
		const mockState = { allWarriors: [5,6,7,8] };
		const mockAction = { type: null, warriors: mockState.allWarriors };

		const newState = reducer(previousState, mockAction);
		expect(newState).to.eql(previousState);
	});

	it('should handle RECEIVE_WARRIORS', () => {
		const previousState = { allWarriors: [1,2,3,4] };
		const expectedState = { allWarriors: [5,6,7,8] };
		const mockAction = { type: RECEIVE_WARRIORS, warriors: expectedState.allWarriors };

		const newState = reducer(previousState, mockAction);
		expect(newState).to.eql(expectedState);
	});

	it('should choose 2 unique opponents when handling CHOOSE_OPPONENTS', () => {

		WarriorsReducerAPI.__Rewire__('getRandomWarriors', function(warriors){
			return [ warriors[0], warriors[1] ];
		});

		const mockWarrior1 = { id: 1 };
		const mockWarrior2 = { id: 2 };

		const previousState = { allWarriors: [mockWarrior1, mockWarrior2], opponent1: null, opponent2: null };
		const mockAction = { type: CHOOSE_OPPONENTS };

		const newState = reducer(previousState, mockAction);

		expect(newState.opponent1).to.equal(mockWarrior1);
		expect(newState.opponent2).to.equal(mockWarrior2);

		WarriorsReducerAPI.__ResetDependency__('getRandomWarriors');

	});

});
