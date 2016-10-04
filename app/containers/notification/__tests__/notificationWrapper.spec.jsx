import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

const expect = chai.expect;

import NotificationWrapper from '../notificationWrapper';

describe('The NotificationWrapper component', () => {

	it('should contain the message', () => {
		const mockHandleClick = () => {};
		const notification = mount(<NotificationWrapper message="foo bar baz" onAfterClick={mockHandleClick} />).find('.notification-list__item');
		expect(notification).to.have.text('foo bar baz');
	});

	it('should instantiate the Notification class with options from props', () => {

		let mockNotification = sinon.spy();

		// rewire the Notification class so we can use a spy to make sure it was called with the correct
		// params provided in the props
		NotificationWrapper.__Rewire__('Notification', mockNotification);

		const onAfterClick = () => {};
		const theme = 'foo';
		const autoDismissTimeout = 999;
		const notification = mount(<NotificationWrapper message="bar" theme={theme} autoDismissTimeout={autoDismissTimeout} onAfterClick={onAfterClick} />).find('.notification-list__item').get(0);

		expect(mockNotification.calledWith(notification, {
			onAfterClick,
			theme,
			autoDismissTimeout
		})).to.eql(true);

		// release the rewired mock
		NotificationWrapper.__ResetDependency__('Notification');

	});

});
