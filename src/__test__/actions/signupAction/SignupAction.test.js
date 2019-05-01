import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import signupAction from '../../../actions/signupAction';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('SignupAction test', () => {
	it('test if signup successfully', () => {
		fetchMock.postOnce(`https://bagzie-send-it-final.herokuapp.com/api/v2/auth/signup`, {
			body: {
				username: 'bagzie',
				firstname: 'bagenda',
				lastname: 'deogracious',
				email: 'bagendadeogracious@gmail.com',
				contact: '0700558588',
				password: 'testing123'
			},
			headers: {
				'content-type': 'application/json'
			}
		});

		const store = mockStore();
		return store.dispatch(
			signupAction({
				username: 'bagzie',
				firstname: 'bagenda',
				lastname: 'deogracious',
				email: 'bagendadeogracious@gmail.com',
				contact: '0700558588',
				password: 'testing123'
			})
		);
	});
});
