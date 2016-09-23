import { expect } from 'chai';

import * as actions from 'actions';

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
            type: actions.CHOOSE_OPPONENTS
        };
        expect(actions.chooseOpponents()).eql(expectedAction);
    });

    it('should create an action to add a notification', () => {
        actions.setNotificationId(3);
        const mockContent = "foo bar baz";
        const mockTheme = "bash";
        const expectedAction = {
            type: actions.NOTIFY,
            id: 4,
            message: mockContent,
            theme: mockTheme
        };
        expect(actions.notify(mockContent, mockTheme)).eql(expectedAction);
    });

    it('should increment the notification id', () => {
        actions.setNotificationId(12);
        const mockContent = "foo bar baz";
        const mockTheme = "bash";
        expect(actions.notify(mockContent, mockTheme).id).eql(13);
        expect(actions.notify(mockContent, mockTheme).id).eql(14);
        expect(actions.notify(mockContent, mockTheme).id).eql(15);
        expect(actions.notify(mockContent, mockTheme).id).eql(16);
    });


    it('should create an action to clear a notification', () => {
        const expectedAction = {
            type: actions.NOTIFY_CLEAR,
            id: 33
        };
        expect(actions.notifyClear(33)).eql(expectedAction);
    });

});