import React from 'react';
import { mount, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

const expect = chai.expect;

import { WarriorsList } from '../warriorsList';

describe('the WarriorsList component', () => {

	const mockWarriors = [
		{ id: 1, image: 'foo.png' },
		{ id: 2, image: 'foo.png' },
		{ id: 3, image: 'foo.png' },
		{ id: 4, image: 'foo.png' }
	];

	it('should render the Warriors title element', () => {
		const title = mount(<WarriorsList warriors={mockWarriors} />).find('h3');
		expect(title).to.have.text('Warriors');		
	});

	it('should render an element for each warrior', () => {
		const warriors = mount(<WarriorsList warriors={mockWarriors} />).find('li');
		expect(warriors).to.have.length(4);		
	});

});