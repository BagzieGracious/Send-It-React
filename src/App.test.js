import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import App from './App';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const history = createBrowserHistory();
let state = {
	authReducer: {
		errorLogin: false
	}
};

const store = mockStore(() => state);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
