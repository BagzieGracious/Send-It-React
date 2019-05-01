import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import LoginView from '../../../views/loginViews';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const history = createBrowserHistory();
let state = {
	authReducer: {
		errorLogin: false
	}
};

const store = mockStore(() => state);

describe('Test LoginView component', () => {
	const props = {
		history: history
	};

	it('test if it renders login modal', () => {
		const wrapper = mount(
			<Provider store={store}>
				<Router history={history}>
					<LoginView {...props} />
				</Router>
			</Provider>
		);

		wrapper
			.find('LoginView')
			.instance()
			.loginHandler();
	});

	it('test if it renders signup modal', () => {
		const wrapper = mount(
			<Provider store={store}>
				<Router history={history}>
					<LoginView {...props} />
				</Router>
			</Provider>
		);

		wrapper
			.find('LoginView')
			.instance()
			.signupHandler();
	});

	it('test if it closes any modal', () => {
		const wrapper = mount(
			<Provider store={store}>
				<Router history={history}>
					<LoginView {...props} />
				</Router>
			</Provider>
		);

		wrapper
			.find('LoginView')
			.instance()
			.closeHandler();
	});
});
