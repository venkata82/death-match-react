import { expect } from 'chai';
import reducer from './notify.js';
import { NOTIFY, NOTIFY_CLEAR } from '../actions/index.js';

describe('the notify reducer', () => {

	it('should handle NOTIFY', () => {
		let mockMessage = 'foo bar baz';
		let mockStatus = 'bash';
		let previousState = { message: '', status: '' };
		let expectedState = { message: mockMessage, status: mockStatus };
		let mockAction = { type: NOTIFY, message: mockMessage, status: mockStatus };

		var newState = reducer(previousState, mockAction);
		expect(newState).to.eql(expectedState);		
	});

	it('should handle NOTIFY_CLEAR', () => {
		let mockMessage = 'foo bar baz';
		let mockStatus = 'bash';
		let previousState = { message: mockMessage, status: mockStatus };
		let expectedState = { message: '', status: '' };
		let mockAction = { type: NOTIFY_CLEAR };

		var newState = reducer(previousState, mockAction);
		expect(newState).to.eql(expectedState);		
	});

});
