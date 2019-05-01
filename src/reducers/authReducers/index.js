const initialState = {
	errorLoginMessage: '',
	errorLogin: false,
	errorSignupMessage: '',
	errorSignup: false,
	successMessage: '',
	success: false,
	loading: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return {
				...state,
				userdata: action.payload
			};

		case 'LOGIN_FAILURE':
			return {
				...state,
				errorLoginMessage: action.payload,
				errorLogin: true,
				loading: false
			};

		case 'SIGNUP_SUCCESS':
			return {
				...state,
				userdata: action.payload,
				successMessage: action.payload.message,
				errorLogin: false,
				errorSignup: false,
				success: true,
				loading: false
			};

		case 'SIGNUP_FAILURE':
			return {
				...state,
				errorSignupMessage: action.payload,
				errorSignup: true,
				loading: false
			};

		default:
			return state;
	}
};

export default authReducer;
