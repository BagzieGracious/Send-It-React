import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import LoginComponet from '../../../../components/authComponents/loginComponent';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const history = createBrowserHistory();

let state = {
	authReducer: {
		errorLogin: false
	}
};

const store = mockStore(() => state);

describe('LoginComponent test', () => {
	const props = {
		history: history,
		closeHandler: jest.fn()
	};

	it('Test if it can click login button', () => {
		const wrapper = mount(
			<Provider store={store}>
				<LoginComponet {...props} />
			</Provider>
		);
		wrapper
			.find('LoginComponet')
			.find('#success')
			.simulate('click');
	});

	it('test if it onchange username input field', () => {
		const wrapper = mount(
			<Provider store={store}>
				<LoginComponet {...props} />
			</Provider>
		);

		const event = {
			target: {
				value: 'bagenda'
			}
		};

		wrapper
			.find('LoginComponet')
			.find('#login-username')
			.simulate('change', event);
	});

	it('test if it onchange password input field', () => {
		const wrapper = mount(
			<Provider store={store}>
				<LoginComponet {...props} />
			</Provider>
		);

		const event = {
			target: {
				value: 'testing123'
			}
		};

		wrapper
			.find('LoginComponet')
			.find('#login-password')
			.simulate('change', event);
	});
});
