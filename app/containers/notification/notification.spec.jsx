import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

const expect = chai.expect;

import Notification from 'notification';

describe('The Notification component', () => {

	it('should contain the message', () => {
		const mockHandleClick = () => {};
		const notification = mount(<Notification message="foo bar baz" handleClick={mockHandleClick} />).find('.notification-list__item');
		expect(notification).to.have.text('foo bar baz');
	});

});
