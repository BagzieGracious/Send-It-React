import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import SignupComponent from '../../../../components/authComponents/signupComponent';

const middleware = [thunk];
const mockStore = configureStore(middleware);

let state = {
	authReducer: {
		errorSignup: false
	}
};

const store = mockStore(() => state);

describe('Signup component tests', () => {
	const props = {
		closeHandler: jest.fn()
	};

	const wrapper = mount(
		<Provider store={store}>
			<SignupComponent {...props} />
		</Provider>
	);

	it('tests if signup is successful', () => {
		wrapper
			.find('SignupComponent')
			.find('#success')
			.simulate('click');
	});

	it('test if usernamehandler works', () => {
		const event = {
			target: {
				value: 'bagzie'
			}
		};
		wrapper
			.find('SignupComponent')
			.find('#sign-username')
			.simulate('change', event);
	});

	it('test if firstnamehandler works', () => {
		const event = {
			target: {
				value: 'bagenda'
			}
		};
		wrapper
			.find('SignupComponent')
			.find('#sign-firstname')
			.simulate('change', event);
	});

	it('test if lastnamehandler works', () => {
		const event = {
			target: {
				value: 'deogracious'
			}
		};
		wrapper
			.find('SignupComponent')
			.find('#sign-lastname')
			.simulate('change', event);
	});

	it('test if emailhandler works', () => {
		const event = {
			target: {
				value: 'bagendadeogracious@gmail.com'
			}
		};
		wrapper
			.find('SignupComponent')
			.find('#sign-email')
			.simulate('change', event);
	});

	it('test if contacthandler works', () => {
		const event = {
			target: {
				value: '0700558588'
			}
		};
		wrapper
			.find('SignupComponent')
			.find('#sign-contact')
			.simulate('change', event);
	});

	it('test if passwordhandler works', () => {
		const event = {
			target: {
				value: 'testing123'
			}
		};
		wrapper
			.find('SignupComponent')
			.find('#sign-password')
			.simulate('change', event);
	});
});
