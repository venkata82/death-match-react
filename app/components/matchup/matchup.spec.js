import React from 'react'
import { mount, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

const expect = chai.expect;

import { Matchup } from './matchup.jsx';

describe('the Matchup component', () => {
	const mockOpponent1 = { id: 1234, image: 'foo' };
	const mockOpponent2 = { id: 1235, image: 'bar' };

	it('should not render anything at all with only the opponent1 prop', () => {
		const matchup = mount(<Matchup opponent1={mockOpponent1} opponent2={null} />);
		expect(matchup).to.be.empty;
	});

	it('should not render anything at all with only the opponent2 prop', () => {
		const mockOpponent = { baz: 'bash' };
		const matchup = mount(<Matchup opponent1={null} opponent2={mockOpponent2} />);
		expect(matchup).to.be.empty;
	});

	it('should not render anything at all with no opponent props', () => {
		const matchup = mount(<Matchup opponent1={null} opponent2={null} />);
		expect(matchup).to.be.empty;
	});

	describe('with opponent1 and opponent2 props', () => {
		
		it('should render the Matchup! title', () => {
			const title = mount(<Matchup opponent1={mockOpponent1} opponent2={mockOpponent2} />).find('div h2');
			expect(title).to.have.length(1);	
			expect(title).to.have.text('Matchup!');
		});

		it('should render the Who wins?? title', () => {
			const title = mount(<Matchup opponent1={mockOpponent1} opponent2={mockOpponent2} />).find('h3').at(0);
			expect(title).to.have.length(1);	
			expect(title).to.have.text('Who wins??');
		});

		it('should render the opponent1 WarriorDetail component', () => {
			const opponent1 = mount(<Matchup opponent1={mockOpponent1} opponent2={mockOpponent2} />).find('WarriorDetail').at(0);
			expect(opponent1.props().warrior).to.equal(mockOpponent1);
		});

		it('should render the vs title', () => {
			const title = mount(<Matchup opponent1={mockOpponent1} opponent2={mockOpponent2} />).find('h3').at(1);
			expect(title).to.have.length(1);	
			expect(title).to.have.text('vs');
		});

		it('should render the opponent2 WarriorDetail component', () => {
			const opponent1 = mount(<Matchup opponent1={mockOpponent1} opponent2={mockOpponent2} />).find('WarriorDetail').at(1);
			expect(opponent1.props().warrior).to.equal(mockOpponent2);
		});

		it('should event the selection when opponent1 is clicked', () => {
			const mockSocket = {
				emit: sinon.spy()
			}
			const mockChooseOpponents = sinon.spy();
			const opponent1Wrapper = mount(<Matchup opponent1={mockOpponent1} opponent2={mockOpponent2} socket={mockSocket} chooseOpponents={mockChooseOpponents} />).find('span').at(0);
			opponent1Wrapper.simulate('click');
			expect(mockSocket.emit.calledWith('warriorSelection', mockOpponent1.id)).to.be.true;
		});
		
		it('should choose new opponents when opponent1 is clicked', () => {
			const mockSocket = {
				emit: sinon.spy()
			}
			const mockChooseOpponents = sinon.spy();
			const opponent1Wrapper = mount(<Matchup opponent1={mockOpponent1} opponent2={mockOpponent2} socket={mockSocket} chooseOpponents={mockChooseOpponents} />).find('span').at(0);
			opponent1Wrapper.simulate('click');
			expect(mockChooseOpponents.called).to.be.true;
		});

		it('should event the selection when opponent2 is clicked', () => {
			const mockSocket = {
				emit: sinon.spy()
			}
			const mockChooseOpponents = sinon.spy();
			const opponent2Wrapper = mount(<Matchup opponent1={mockOpponent1} opponent2={mockOpponent2} socket={mockSocket} chooseOpponents={mockChooseOpponents} />).find('span').at(1);
			opponent2Wrapper.simulate('click');
			expect(mockSocket.emit.calledWith('warriorSelection', mockOpponent2.id)).to.be.true;
		});
		
		it('should choose new opponents when opponent2 is clicked', () => {
			const mockSocket = {
				emit: sinon.spy()
			}
			const mockChooseOpponents = sinon.spy();
			const opponent2Wrapper = mount(<Matchup opponent1={mockOpponent1} opponent2={mockOpponent2} socket={mockSocket} chooseOpponents={mockChooseOpponents} />).find('span').at(1);
			opponent2Wrapper.simulate('click');
			expect(mockChooseOpponents.called).to.be.true;
		});

	});


});