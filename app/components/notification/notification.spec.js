import React from 'react'
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon';

chai.use(chaiEnzyme());

const expect = chai.expect;

import Notification from './notification.jsx';

describe('The Notification component', () => {

	it('should contain the message', () => {
		const mockHandleClick = () => {};
		const notification = mount(<Notification message="foo bar baz" handleClick={mockHandleClick} />).find('.notification-list__item');
		expect(notification).to.have.text('foo bar baz');
	});

	it('should include a class when style exists', () => {
		const mockHandleClick = () => {};
		const notification = mount(<Notification style="fooey" handleClick={mockHandleClick} />).find('.notification-list__item');
		expect(notification).to.have.className('notification-list__item--fooey');
	});

	it('should call the handleClick prop onClick', () => {
		const mockHandleClick = sinon.spy();
		const notification = mount(<Notification style="fooey" handleClick={mockHandleClick} />).find('.notification-list__item');
		notification.simulate('click');
		expect(mockHandleClick.called).to.equal(true);
	});

});
