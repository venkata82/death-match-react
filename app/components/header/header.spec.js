import React from 'react'
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from 'header';

describe('Header component', () => {

	it('should render a single .header element', () => {
		const header = shallow(<Header />);
		expect(header.find('.header').length).to.eq(1);
	});

	it('should render a single .header__title element', () => {
		const header = shallow(<Header />);
		expect(header.find('.header__title').length).to.eq(1);
	});

	it('should render a single .header__logo element', () => {
		const header = shallow(<Header />);
		expect(header.find('.header__logo').length).to.eq(1);
	});

});
