import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import OrdersComponent from '../../../../components/parcelComponents/ordersComponent';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('OrdersComponent test', () => {
	it('Test if user can get parcel successfully', () => {
		let state = {
			parcelReducer: {
				errorMessage: '',
				error: false,
				successMessage: '',
				success: false,
				parcels: {
					data: [
						{
							description: 'this is a phone',
							destination: 'kireka',
							pickup: 'namanve',
							order_date: 'Mon, 10 Dec 2018 11:52:21 GMT',
							order_id: 1,
							product: 'iphone',
							weight: '3.0'
						}
					],
					status: 'success'
				}
			}
		};
		const store = mockStore(() => state);
		const props = {
			getParcelsAction: jest.fn()
		};
		const wrapper = mount(
			<Provider store={store}>
				<OrdersComponent {...props} />
			</Provider>
		);
		wrapper.find('OrdersComponent');
	});

	it("Test if user can't get parcel", () => {
		let state = {
			parcelReducer: {
				errorMessage: '',
				error: false,
				successMessage: '',
				success: false,
				parcels: {
					data: [],
					status: 'failure'
				}
			}
		};
		const store = mockStore(() => state);
		const props = {
			getParcelsAction: jest.fn()
		};
		const wrapper = mount(
			<Provider store={store}>
				<OrdersComponent {...props} />
			</Provider>
		);
		wrapper.find('OrdersComponent');
	});
});
