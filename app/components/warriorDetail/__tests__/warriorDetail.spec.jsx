import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

const expect = chai.expect;

import WarriorDetail from '../warriorDetail';

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

		it('should call the onClickHandler when clicked', () => {
			const mockHandler = sinon.spy();
			const warriorDetail = mount(<WarriorDetail warrior={mockWarrior} onClickHandler={mockHandler} />);
			warriorDetail.simulate('click');
			expect(mockHandler.callCount).to.eql(1);
		});

		it('should add an addition css class if provided', () => {
			const warriorDetail = mount(<WarriorDetail warrior={mockWarrior} warriorDetailCssClass="foo" />);
			expect(warriorDetail).to.have.className("foo");
		});

	});

});