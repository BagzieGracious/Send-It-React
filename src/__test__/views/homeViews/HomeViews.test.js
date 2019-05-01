import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import HomeViews from '../../../views/homeViews';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const history = createBrowserHistory();
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

describe('Test HomeViews component', () => {
	const props = {
		history: history
	};
	it('test if it renders without crashing', () => {
		const wrapper = mount(
			<Provider store={store}>
				<Router history={history}>
					<HomeViews {...props} />
				</Router>
			</Provider>
		);

		wrapper
			.find('HomeViews')
			.find('#display-login')
			.first()
			.simulate('click');
	});
});
