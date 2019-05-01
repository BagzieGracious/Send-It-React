const signupAction = userdata => dispatch =>
	fetch('https://bagzie-send-it-final.herokuapp.com/api/v2/auth/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({
			username: userdata.username,
			firstname: userdata.firstname,
			lastname: userdata.lastname,
			email: userdata.email,
			contact: userdata.contact,
			password: userdata.password
		})
	})
		.then(res => res.json())
		.then(data => {
			if (data['status'] === 'failure') {
				dispatch({ type: 'SIGNUP_FAILURE', payload: data.error.message });
			} else {
				dispatch({ type: 'SIGNUP_SUCCESS', payload: data });
			}
		});

export default signupAction;
