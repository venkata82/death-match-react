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

    it('should create an action to choose oponents', () => {
        const expectedAction = {
            type: actions.CHOOSE_OPONENTS
        };
        expect(actions.chooseOponents()).eql(expectedAction);
    });

});