import authReducer from '../../../reducers/authReducers';

const initialState = {
	errorLoginMessage: '',
	errorLogin: false,
	errorSignupMessage: '',
	errorSignup: false,
	successMessage: '',
	success: false,
	loading: false
};

describe('test authReducer', () => {
	it('test login success', () => {
		expect(
			authReducer(initialState, {
				type: 'LOGIN_SUCCESS',
				payload: { username: 'bagzie', token: 'bagendasdssdfdfdsfs', usertype: 'user' }
			})
		).toEqual({
			errorLogin: false,
			errorLoginMessage: '',
			errorSignup: false,
			errorSignupMessage: '',
			loading: false,
			success: false,
			successMessage: '',
			userdata: { token: 'bagendasdssdfdfdsfs', username: 'bagzie', usertype: 'user' }
		});
	});

	it('test login failure', () => {
		expect(authReducer(initialState, { type: 'LOGIN_FAILURE', payload: 'password is missing' })).toEqual({
			errorLogin: true,
			errorLoginMessage: 'password is missing',
			errorSignup: false,
			errorSignupMessage: '',
			loading: false,
			success: false,
			successMessage: ''
		});
	});

	it('test signup success', () => {
		expect(
			authReducer(initialState, {
				type: 'SIGNUP_SUCCESS',
				payload: {
					username: 'bagzie',
					firstname: 'bagenda',
					lastname: 'deogracious',
					email: 'bagendadeogracious@gmail.com',
					contact: '0700558588',
					password: 'testing123'
				}
			})
		).toEqual({
			errorLogin: false,
			errorLoginMessage: '',
			errorSignup: false,
			errorSignupMessage: '',
			loading: false,
			success: true,
			successMessage: undefined,
			userdata: {
				contact: '0700558588',
				email: 'bagendadeogracious@gmail.com',
				firstname: 'bagenda',
				lastname: 'deogracious',
				password: 'testing123',
				username: 'bagzie'
			}
		});
	});

	it('test if signup failed', () => {
		expect(
			authReducer(initialState, {
				type: 'SIGNUP_FAILURE',
				payload: { errorSignupMessage: 'username is missing' }
			})
		).toEqual({
			errorLogin: false,
			errorLoginMessage: '',
			errorSignup: true,
			errorSignupMessage: {
				errorSignupMessage: 'username is missing'
			},
			loading: false,
			success: false,
			successMessage: ''
		});
	});
});
