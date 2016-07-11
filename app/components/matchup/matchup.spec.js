import React from 'react'
import { mount, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme());

const expect = chai.expect;

import { Matchup } from './matchup.jsx';

describe('the Matchup component', () => {
	const mockOponent1 = { image: 'bar' };
	const mockOponent2 = { image: 'bar' };

	it('should not render anything at all with only the oponent1 prop', () => {
		const matchup = mount(<Matchup oponent1={mockOponent1} oponent2={null} />);
		expect(matchup).to.be.empty;
	});

	it('should not render anything at all with only the oponent2 prop', () => {
		const mockOponent = { foo: 'bar' };
		const matchup = mount(<Matchup oponent1={null} oponent2={mockOponent2} />);
		expect(matchup).to.be.empty;
	});

	it('should not render anything at all with no oponent props', () => {
		const matchup = mount(<Matchup oponent1={null} oponent2={null} />);
		expect(matchup).to.be.empty;
	});

	describe('with oponent1 and oponent2 props', () => {

		it('should event the selection when oponent1 is clicked');
		
		it('should event the selection when oponent2 is clicked');
		
		it('should render the oponent1 WarriorDetail component');
		
		it('should render the oponent2 WarriorDetail component');

		it('should render the Matchup! title', () => {
			const matchup = mount(<Matchup oponent1={mockOponent1} oponent2={mockOponent2} />);
			// expect(titles).to.have.length(3);	
			// expect(titles.childAt(0)).to.have.text('Matchup!');
		});
	});


});