const createParcelAction = parceldata => dispatch =>
	fetch('https://bagzie-send-it-final.herokuapp.com/api/v2/parcels', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			token: localStorage.getItem('token')
		},
		body: JSON.stringify({
			product: parceldata.product,
			pickup: parceldata.pickup,
			destination: parceldata.destination,
			description: parceldata.description,
			weight: parseInt(parceldata.weight)
		})
	})
		.then(res => res.json())
		.then(data => {
			if (data['status'] === 'failure') {
				dispatch({
					type: 'CREATE_PARCELS_FAILURE',
					payload: data.error.message
				});
			} else {
				dispatch({
					type: 'CREATE_PARCELS',
					payload: data.data
				});
			}
		});

export default createParcelAction;
