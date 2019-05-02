import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import CreateComponent from '../../../../components/parcelComponents/createComponent';

const middleware = [thunk];
const mockStore = configureStore(middleware);

let state = {
	parcelReducer: {
		errorMessage: '',
		error: false,
		successMessage: '',
		success: false
	}
};

const store = mockStore(() => state);

describe('CreateComponent test', () => {
	const wrapper = mount(
		<Provider store={store}>
			<CreateComponent />
		</Provider>
	);

	it('Test if user can create parcel successfully', () => {
		wrapper
			.find('CreateComponent')
			.find('#success')
			.simulate('click');
	});

	it('Test if producthandler works', () => {
		const event = {
			target: {
				value: 'iphone'
			}
		};
		wrapper
			.find('CreateComponent')
			.find('#parcel-product')
			.simulate('change', event);
	});
});
