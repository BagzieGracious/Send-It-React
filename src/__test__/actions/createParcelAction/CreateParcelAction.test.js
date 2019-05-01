import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import createParcelAction from '../../../actions/createParcelAction';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('createParcelAction test', () => {
	it('test if create parcel successfully', () => {
		fetchMock.postOnce(`https://bagzie-send-it-final.herokuapp.com/api/v2/parcels`, {
			body: {
				product: 'iphone',
				pickup: 'mulago',
				destination: 'kisasi',
				description: 'some good phone',
				weight: 2
			},
			headers: {
				'content-type': 'application/json'
			}
		});

		const store = mockStore();
		return store.dispatch(
			createParcelAction({
				product: 'iphone',
				pickup: 'mulago',
				destination: 'kisasi',
				description: 'some good phone',
				weight: 2
			})
		);
	});
});
