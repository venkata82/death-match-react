import React from 'react'
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

const expect = chai.expect;

import { NotificationList, __RewireAPI__ as NotificationListAPI } from './notificationList.jsx';

describe('The Notification List component', () => {

	beforeEach( () => {
		// mock the Notification component
		NotificationListAPI.__Rewire__('Notification', React.createClass({
		  displayName: 'MockNotification',
		  render() {
		  	return <div className="mock-notification" onClick={this.props.handleClick} />;
		  }
		}));
	});

	afterEach( () => {
		// release the rewired mock
		NotificationListAPI.__ResetDependency__('Notification');
	});

	it('should not render notifications if none exist', () => {
		const mockNotifyClear = () => {};
		const notifications = [];
		const notificationList = mount(<NotificationList notifications={notifications} notifyClear={mockNotifyClear} />).find('.mock-notification');
		expect(notificationList).to.have.length(0);		
	});

	it('should render notifications when they exist', () => {
		const mockNotifyClear = () => {};
		const notifications = [
			{ id: 3, message: 'foo', theme: 'go' },
			{ id: 4, message: 'bar', theme: 'do' },
			{ id: 5, message: 'baz', theme: 'to' }
		];
		const notificationList = mount(<NotificationList notifications={notifications} notifyClear={mockNotifyClear} />).find('.mock-notification');
		expect(notificationList).to.have.length(3);
	});

	it('should integrate with the notification click', () => {
		const mockNotifyClear = sinon.spy();
		const notifications = [
			{ id: 3, message: 'foo', theme: 'go' },
			{ id: 4, message: 'bar', theme: 'do' },
			{ id: 5, message: 'baz', theme: 'to' }
		];
		const notification = mount(<NotificationList notifications={notifications} notifyClear={mockNotifyClear} />).find('.mock-notification').at(1);
		notification.simulate('click');
		expect(mockNotifyClear.calledWith(4)).to.equal(true);
	});

});