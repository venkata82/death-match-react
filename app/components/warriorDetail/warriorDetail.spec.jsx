import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';	

chai.use(chaiEnzyme());

const expect = chai.expect;

import WarriorDetail from 'warriorDetail';

describe('the WarriorDetail component', () => {

	describe('without a warrior prop', () => {
		
		it('should not render anything', () => {
			const warriorDetail = mount(<WarriorDetail />);
			expect(warriorDetail).to.be.empty;
		});

	});

	describe('with a warrior prop', () => {

		const mockWarrior = {
			image: 'foo.png',
			name: 'My Warrior Name',
			wins: 99
		};

		it('should contain a Warrior component with size prop "large"', () => {
			const warrior = mount(<WarriorDetail warrior={mockWarrior} />).find('Warrior');
			expect(warrior.props().size).to.eq('large');
		});

		it('should render a single .warrior-detail element', () => {
			const warriorDetail = mount(<WarriorDetail warrior={mockWarrior} />).find('.warrior-detail');
			expect(warriorDetail).to.have.length(1);
		});

		it('should render a single .warrior-detail__caption element', () => {
			const warriorDetail = mount(<WarriorDetail warrior={mockWarrior} />).find('.warrior-detail__caption');
			expect(warriorDetail.length).to.eq(1);
		});

		it('should render a single .warrior-detail__name element', () => {
			const name = mount(<WarriorDetail warrior={mockWarrior} />).find('.warrior-detail__name');
			expect(name).to.have.length(1);
			expect(name).to.have.text(mockWarrior.name);
		});

		it('should render a single .warrior-detail__wins element', () => {
			const wins = mount(<WarriorDetail warrior={mockWarrior} />).find('.warrior-detail__wins');
			expect(wins).to.have.length(1);
			expect(wins).to.have.text(mockWarrior.wins);
		});

	});

});