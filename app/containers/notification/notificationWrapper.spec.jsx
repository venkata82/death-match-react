import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

const expect = chai.expect;

import NotificationWrapper from 'notificationWrapper';

describe('The NotificationWrapper component', () => {

	it('should contain the message', () => {
		const mockHandleClick = () => {};
		const notification = mount(<NotificationWrapper message="foo bar baz" handleClick={mockHandleClick} />).find('.notification-list__item');
		expect(notification).to.have.text('foo bar baz');
	});

});
