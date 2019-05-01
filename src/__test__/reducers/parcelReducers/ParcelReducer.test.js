import parcelReducer from '../../../reducers/parcelReducers';

const initialState = {
	parcels: {
		data: []
	},
	errorMessage: '',
	error: false,
	successMessage: '',
	success: false
};

describe('test parcel reducer', () => {
	it('test if user gets all parcels', () => {
		expect(parcelReducer(initialState, { type: 'GET_ALL_PARCELS', payload: { data: [{}] } })).toEqual({
			error: false,
			errorMessage: '',
			parcels: {
				data: [{}]
			},
			success: false,
			successMessage: ''
		});
	});

	it('test if user can create parcel', () => {
		expect(parcelReducer(initialState, { type: 'CREATE_PARCELS', payload: {} })).toEqual({
			error: false,
			errorMessage: '',
			parcels: { data: [] },
			success: true,
			successMessage: {}
		});
	});

	it('test if create parcel fails', () => {
		expect(
			parcelReducer(initialState, { type: 'CREATE_PARCELS_FAILURE', payload: 'weight should be an integer' })
		).toEqual({
			error: true,
			errorMessage: 'weight should be an integer',
			parcels: { data: [] },
			success: false,
			successMessage: ''
		});
	});
});
