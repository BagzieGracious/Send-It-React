const getParcelsAction = () => dispatch =>
	fetch('https://bagzie-send-it-final.herokuapp.com/api/v2/parcels', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			token: localStorage.getItem('token')
		}
	})
		.then(res => res.json())
		.then(data => {
			dispatch({
				type: 'GET_ALL_PARCELS',
				payload: data
			});
		});

export default getParcelsAction;
