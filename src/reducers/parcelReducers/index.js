const initialState = {
	parcels: {
		data: []
	},
	errorMessage: '',
	error: false,
	successMessage: '',
	success: false
};

const parcelReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_PARCELS':
			return {
				...state,
				parcels: action.payload
			};

		case 'CREATE_PARCELS':
			return {
				...state,
				successMessage: action.payload,
				success: true,
				error: false
			};

		case 'CREATE_PARCELS_FAILURE':
			return {
				...state,
				errorMessage: action.payload,
				error: true,
				success: false
			};

		default:
			return state;
	}
};

export default parcelReducer;
