import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoginView from './views/loginViews';
import HomeView from './views/homeViews';
import './assets/css/main.css';

function App() {
	const history = createBrowserHistory();

	return (
		<Router history={history}>
			<Route path="/" exact component={LoginView} />
			<Route path="/home" component={HomeView} />
			<Route path="/orders" component={HomeView} />
		</Router>
	);
}

export default App;
