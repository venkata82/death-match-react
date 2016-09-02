import { expect } from 'chai';

import * as actions from './index.js';

describe('the actions index.js', () => {

    it('should create an action to receive incoming warriors', () => {
        const warriors = [1, 2, 3, 4];
        const expectedAction = {
            type: actions.RECEIVE_WARRIORS,
            warriors
        };
        expect(actions.receiveWarriors(warriors)).eql(expectedAction);
    });

    it('should create an action to choose opponents', () => {
        const expectedAction = {
            type: actions.CHOOSE_OPONENTS
        };
        expect(actions.chooseOpponents()).eql(expectedAction);
    });

    it('should create an action to populate a notification', () => {
        const mockContent = "foo bar baz";
        const expectedAction = {
            type: actions.NOTIFY,
            content: mockContent
        };
        expect(actions.notify(mockContent)).eql(expectedAction);
    });

    it('should create an action to clear a notification', () => {
        const mockContent = "";
        const expectedAction = {
            type: actions.NOTIFY_CLEAR
        };
        expect(actions.notifyClear(mockContent)).eql(expectedAction);
    });

});