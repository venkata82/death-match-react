import React from 'react'
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme());

const expect = chai.expect;

import { Notify } from './notify.jsx';

describe('The Notify component', () => {

	it('should not be active when there is no notification', () => {
		const notify = mount(<Notify message="foo bar baz" />);
		expect(notify).to.have.className('notify--active');
	});

	it('should be active when a notification exists', () => {
		const notify = mount(<Notify message="" />);
		expect(notify).not.to.have.className('notify--active');
	});

	it('should contain the message', () => {
		const notify = mount(<Notify message="foo bar baz" />);
		expect(notify).to.have.text('foo bar baz');
	});

	it('should include a class when status exists', () => {
		const notify = mount(<Notify status="fooey" />);
		expect(notify).to.have.className('notify--fooey');
	});

});