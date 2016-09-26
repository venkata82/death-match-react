import { expect } from 'chai';
import reducer from './notifications.js';
import { NOTIFY, NOTIFY_CLEAR } from 'actions';

describe('the notify reducer', () => {

	it('should handle NOTIFY', () => {

		let previousState = [
			{ id: 1, message: 'foo', theme: 'bar' },
			{ id: 2, message: 'baz', theme: 'bash' }
		];

		let expectedState = [
			{ id: 1, message: 'foo', theme: 'bar' },
			{ id: 2, message: 'baz', theme: 'bash' },
			{ id: 3, message: 'bah', theme: 'blah', autoDismissTimeout: 999 }
		];

		let mockAction = { type: NOTIFY, id: 3, message: 'bah', theme: 'blah', autoDismissTimeout: 999 };

		var newState = reducer(previousState, mockAction);
		expect(newState).to.eql(expectedState);		
	});

	it('should handle NOTIFY_CLEAR', () => {

		let previousState = [
			{ id: 1, message: 'foo', theme: 'bar' },
			{ id: 2, message: 'baz', theme: 'bash' },
			{ id: 3, message: 'bah', theme: 'blah' }
		];

		let expectedState = [
			{ id: 1, message: 'foo', theme: 'bar' },
			{ id: 3, message: 'bah', theme: 'blah' }
		];

		let mockAction = { type: NOTIFY_CLEAR, id: 2 };

		var newState = reducer(previousState, mockAction);
		expect(newState).to.eql(expectedState);		
	});

});
