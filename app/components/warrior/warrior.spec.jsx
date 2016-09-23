import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { IMAGE_PATH } from 'constants/appConstants';

chai.use(chaiEnzyme());

const expect = chai.expect;

import Warrior from 'warrior';

describe('The Warrior component', () => {

	it('should render a single .warrior element', () => {
		const warrior = mount(<Warrior image="foo.png" />);
		expect(warrior.find('.warrior')).to.have.length(1);
	});

	it('should set the src attribute to the image prop value', () => {
		const warrior = mount(<Warrior image="foo.png" />);
		expect(warrior).to.have.attr('src', IMAGE_PATH + 'foo.png');
	});

	describe('with a size prop provided', () => {

		it('should add a size class if the prop is provided', () => {
			const warrior = mount(<Warrior image="foo.png" size="bar" />);
			expect(warrior).to.have.className('warrior');
			expect(warrior).to.have.className('warrior--bar');
		});

	});

});