import React from 'react'
import { mount, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

const expect = chai.expect;

import { Matchup } from './matchup.jsx';

describe('the Matchup component', () => {
	const mockOponent1 = { id: 1234, image: 'foo' };
	const mockOponent2 = { id: 1235, image: 'bar' };

	it('should not render anything at all with only the oponent1 prop', () => {
		const matchup = mount(<Matchup oponent1={mockOponent1} oponent2={null} />);
		expect(matchup).to.be.empty;
	});

	it('should not render anything at all with only the oponent2 prop', () => {
		const mockOponent = { baz: 'bash' };
		const matchup = mount(<Matchup oponent1={null} oponent2={mockOponent2} />);
		expect(matchup).to.be.empty;
	});

	it('should not render anything at all with no oponent props', () => {
		const matchup = mount(<Matchup oponent1={null} oponent2={null} />);
		expect(matchup).to.be.empty;
	});

	describe('with oponent1 and oponent2 props', () => {
		
		it('should render the Matchup! title', () => {
			const title = mount(<Matchup oponent1={mockOponent1} oponent2={mockOponent2} />).find('div h2');
			expect(title).to.have.length(1);	
			expect(title).to.have.text('Matchup!');
		});

		it('should render the Who wins?? title', () => {
			const title = mount(<Matchup oponent1={mockOponent1} oponent2={mockOponent2} />).find('h3').at(0);
			expect(title).to.have.length(1);	
			expect(title).to.have.text('Who wins??');
		});

		it('should render the oponent1 WarriorDetail component', () => {
			const oponent1 = mount(<Matchup oponent1={mockOponent1} oponent2={mockOponent2} />).find('WarriorDetail').at(0);
			expect(oponent1.props().warrior).to.equal(mockOponent1);
		});

		it('should render the vs title', () => {
			const title = mount(<Matchup oponent1={mockOponent1} oponent2={mockOponent2} />).find('h3').at(1);
			expect(title).to.have.length(1);	
			expect(title).to.have.text('vs');
		});

		it('should render the oponent2 WarriorDetail component', () => {
			const oponent1 = mount(<Matchup oponent1={mockOponent1} oponent2={mockOponent2} />).find('WarriorDetail').at(1);
			expect(oponent1.props().warrior).to.equal(mockOponent2);
		});

		it('should event the selection when oponent1 is clicked', () => {
			const mockSocket = {
				emit: sinon.spy()
			}
			const mockChooseOponents = sinon.spy();
			const oponent1Wrapper = mount(<Matchup oponent1={mockOponent1} oponent2={mockOponent2} socket={mockSocket} chooseOponents={mockChooseOponents} />).find('span').at(0);
			oponent1Wrapper.simulate('click');
			expect(mockSocket.emit.calledWith('warriorSelection', mockOponent1.id)).to.be.true;
		});
		
		it('should choose new oponents when oponent1 is clicked', () => {
			const mockSocket = {
				emit: sinon.spy()
			}
			const mockChooseOponents = sinon.spy();
			const oponent1Wrapper = mount(<Matchup oponent1={mockOponent1} oponent2={mockOponent2} socket={mockSocket} chooseOponents={mockChooseOponents} />).find('span').at(0);
			oponent1Wrapper.simulate('click');
			expect(mockChooseOponents.called).to.be.true;
		});

		it('should event the selection when oponent2 is clicked', () => {
			const mockSocket = {
				emit: sinon.spy()
			}
			const mockChooseOponents = sinon.spy();
			const oponent2Wrapper = mount(<Matchup oponent1={mockOponent1} oponent2={mockOponent2} socket={mockSocket} chooseOponents={mockChooseOponents} />).find('span').at(1);
			oponent2Wrapper.simulate('click');
			expect(mockSocket.emit.calledWith('warriorSelection', mockOponent2.id)).to.be.true;
		});
		
		it('should choose new oponents when oponent2 is clicked', () => {
			const mockSocket = {
				emit: sinon.spy()
			}
			const mockChooseOponents = sinon.spy();
			const oponent2Wrapper = mount(<Matchup oponent1={mockOponent1} oponent2={mockOponent2} socket={mockSocket} chooseOponents={mockChooseOponents} />).find('span').at(1);
			oponent2Wrapper.simulate('click');
			expect(mockChooseOponents.called).to.be.true;
		});

	});


});