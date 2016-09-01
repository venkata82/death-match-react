import { expect } from 'chai';
import warriorsReducer, { __RewireAPI__ as WarriorsReducerAPI } from './warriors.js';
import { RECEIVE_WARRIORS, CHOOSE_OPONENTS } from '../actions/index.js';

describe('the warriors reducer', () => {

	it('should return the current state by default', () => {
		let previousState = { warriors: [1,2,3,4] };
		let mockState = { warriors: [5,6,7,8] };
		let mockAction = { type: null, warriors: mockState.warriors };

		var newState = warriorsReducer(previousState, mockAction);
		expect(newState).to.eql(previousState);
	});

	it('should handle RECEIVE_WARRIORS', () => {
		let previousState = { warriors: [1,2,3,4] };
		let mockState = { warriors: [5,6,7,8] };
		let mockAction = { type: RECEIVE_WARRIORS, warriors: mockState.warriors };

		var newState = warriorsReducer(previousState, mockAction);
		expect(newState).to.eql(mockState);
	});

	it('should choose 2 unique opponents when handling CHOOSE_OPONENTS', () => {

		WarriorsReducerAPI.__Rewire__('getRandomWarriors', function(warriors){
			return [ warriors[0], warriors[1] ];
		});

		let mockWarrior1 = { id: 1 };
		let mockWarrior2 = { id: 2 };

		let previousState = { warriors: [mockWarrior1, mockWarrior2], opponent1: null, opponent2: null };
		let mockAction = { type: CHOOSE_OPONENTS };

		var newState = warriorsReducer(previousState, mockAction);

		expect(newState.opponent1).to.equal(mockWarrior1);
		expect(newState.opponent2).to.equal(mockWarrior2);

		WarriorsReducerAPI.__ResetDependency__('getRandomWarriors');

	});

});
