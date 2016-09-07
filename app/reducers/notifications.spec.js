import { expect } from 'chai';
import reducer from './notifications.js';
import { NOTIFY, NOTIFY_CLEAR } from '../actions/index.js';

describe('the notify reducer', () => {

	it('should handle NOTIFY', () => {

		let previousState = [
			{ id: 1, message: 'foo', style: 'bar' },
			{ id: 2, message: 'baz', style: 'bash' }
		];

		let expectedState = [
			{ id: 1, message: 'foo', style: 'bar' },
			{ id: 2, message: 'baz', style: 'bash' },
			{ id: 3, message: 'bah', style: 'blah' }
		];

		let mockAction = { type: NOTIFY, id: 3, message: 'bah', style: 'blah' };

		var newState = reducer(previousState, mockAction);
		expect(newState).to.eql(expectedState);		
	});

	it('should handle NOTIFY_CLEAR', () => {

		let previousState = [
			{ id: 1, message: 'foo', style: 'bar' },
			{ id: 2, message: 'baz', style: 'bash' },
			{ id: 3, message: 'bah', style: 'blah' }
		];

		let expectedState = [
			{ id: 1, message: 'foo', style: 'bar' },
			{ id: 3, message: 'bah', style: 'blah' }
		];

		let mockAction = { type: NOTIFY_CLEAR, id: 2 };

		var newState = reducer(previousState, mockAction);
		expect(newState).to.eql(expectedState);		
	});

});
