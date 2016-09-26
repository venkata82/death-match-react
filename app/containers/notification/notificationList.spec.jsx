import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

const expect = chai.expect;

import { NotificationList, __RewireAPI__ as NotificationListAPI } from 'notificationList';

describe('The Notification List component', () => {

	describe('with mocked notificationWrapper', () => {

		beforeEach( () => {
			// mock the Notification component
			NotificationListAPI.__Rewire__('Notification', React.createClass({
			  displayName: 'MockNotification',
			  render() {
			  	return <div className="mock-notification" onClick={this.props.onAfterClick} />;
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

	});

	describe('integration with notificationWrapper', () => {
		
		it('should include the props that notificationWrapper needs', () => {
			const mockNotifyClear = sinon.spy();
			const mockId = 3;
			const mockMessage = 'foo';
			const mockTheme = 'bar';
			const mockAutoDismissTimeout = 999;
			const notifications = [
				{ id: mockId, message: mockMessage, theme: mockTheme, autoDismissTimeout: mockAutoDismissTimeout }
			];
			const notification = mount(<NotificationList notifications={notifications} notifyClear={mockNotifyClear} />).childAt(0);
			expect(notification.prop('onAfterClick')).to.be.a('function'); // because the function is bound, we can't easily check for equality
			expect(notification.prop('message')).to.eql(mockMessage);
			expect(notification.prop('theme')).to.eql(mockTheme);
			expect(notification.prop('autoDismissTimeout')).to.eql(mockAutoDismissTimeout);
		});

	});

});