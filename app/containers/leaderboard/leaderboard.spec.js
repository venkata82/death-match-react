import React from 'react'
import { mount, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

const expect = chai.expect;

import { Leaderboard } from 'leaderboard';

describe('the Leaderboard component', () => {

	const mockWarriors = [	
		{ id: 1, name: 'A', wins: 4 },
		{ id: 2, name: 'B', wins: 5 },
		{ id: 3, name: 'C', wins: 2 },
		{ id: 4, name: 'D', wins: 3 },
		{ id: 5, name: 'E', wins: 1 }
	];

	it('should render a table row for each warrior', () => {
		const rows = mount(<Leaderboard warriors={mockWarriors} />).find('tbody').find('tr');
		expect(rows).to.have.length(5);
	});

	it('should order the leaderboard descending by wins', () => {
		const rows = mount(<Leaderboard warriors={mockWarriors} />).find('tbody').find('tr');
		
		const row1 = rows.at(0).find('td').at(0);
		expect(row1).to.have.text('B');

		const row2 = rows.at(1).find('td').at(0);
		expect(row2).to.have.text('A');

		const row3 = rows.at(2).find('td').at(0);
		expect(row3).to.have.text('D');

		const row4 = rows.at(3).find('td').at(0);
		expect(row4).to.have.text('C');

		const row5 = rows.at(4).find('td').at(0);
		expect(row5).to.have.text('E');
	});

});