import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { createBrowserHistory } from 'history';
import loginAction from '../../../actions/loginAction';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const history = createBrowserHistory();

describe('LoginAction test', () => {
	it('test if login successfully', () => {
		fetchMock.postOnce(`https://bagzie-send-it-final.herokuapp.com/api/v2/auth/login`, {
			body: {
				username: 'bagenda',
				password: 'testing123'
			},
			headers: {
				'content-type': 'application/json'
			}
		});

		const store = mockStore();
		return store.dispatch(loginAction({ username: 'bagenda', password: 'testing123', history: history }));
	});
});
