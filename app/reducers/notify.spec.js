import { expect } from 'chai';
import reducer from './notify.js';
import { NOTIFY, NOTIFY_CLEAR } from '../actions/index.js';

describe('the notify reducer', () => {

	it('should handle NOTIFY', () => {
		let mockMessage = 'foo bar baz';
		let mockStatus = 'bash';
		let previousState = { notification: { message: '', status: '' } };
		let expectedState = { notification: { message: mockMessage, status: mockStatus } };
		let mockAction = { type: NOTIFY, message: mockMessage, status: mockStatus };

		var newState = reducer(previousState, mockAction);
		expect(newState).to.eql(expectedState);		
	});

	it('should handle NOTIFY_CLEAR', () => {
		let mockMessage = 'foo bar baz';
		let mockStatus = 'bash';
		let previousState = { notification: { message: mockMessage, status: mockStatus } };
		let expectedState = { notification: { message: '', status: '' } };
		let mockAction = { type: NOTIFY_CLEAR };

		var newState = reducer(previousState, mockAction);
		expect(newState).to.eql(expectedState);		
	});

});
