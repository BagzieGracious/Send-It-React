const loginAction = userdata => dispatch =>
	fetch('https://bagzie-send-it-final.herokuapp.com/api/v2/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({
			username: userdata.username,
			password: userdata.password
		})
	})
		.then(res => res.json())
		.then(data => {
			if (data['status'] === 'failure') {
				dispatch({ type: 'LOGIN_FAILURE', payload: data.error.message });
			} else {
				localStorage.setItem('usertype', data['usertype']);
				localStorage.setItem('token', data['token']);
				dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			}
		});

export default loginAction;
