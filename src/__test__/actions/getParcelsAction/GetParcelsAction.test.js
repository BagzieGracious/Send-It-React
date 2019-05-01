import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import getParcelsAction from '../../../actions/getParcelsAction';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('getParcelsAction test', () => {
	it('test if get parcels successfully', () => {
		fetchMock.getOnce(`https://bagzie-send-it-final.herokuapp.com/api/v2/parcels`, {
			body: {},
			headers: {
				'content-type': 'application/json'
			}
		});

		const store = mockStore();
		return store.dispatch(getParcelsAction());
	});
});
