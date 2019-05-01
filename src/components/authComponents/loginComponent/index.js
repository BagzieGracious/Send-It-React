import React, { Component } from 'react';
import { connect } from 'react-redux';
import icon from '../../../assets/img/icon.png';
import LoaderComponent from '../../loaderComponent';
import loginAction from '../../../actions/loginAction';

export class LoginComponet extends Component {
	state = {
		username: '',
		password: '',
		loading: false
	};

	usernameHandler = event => {
		this.setState({
			username: event.target.value
		});
	};

	passwordHandler = event => {
		this.setState({
			password: event.target.value
		});
	};

	loginUserHandler = () => {
		const { loginAction } = this.props;
		this.props.login.loading = true;
		loginAction({ username: this.state.username, password: this.state.password, history: this.props.history });
	};

	render() {
		return (
			<div className="login-wrapper" id="login-wrapper">
				<div className="wrap">
					<p>
						<img src={icon} alt="" />
					</p>
					<div className="form">
						{this.props.login.errorLogin && (
							<p id="login-error">
								<strong>Error!</strong>&nbsp; {this.props.login.errorLoginMessage}
							</p>
						)}
						<div className="text">
							<label>Username</label>
							<input
								type="text"
								id="login-username"
								name="username"
								onChange={this.usernameHandler}
								placeholder="enter username"
							/>
						</div>
						<div className="text">
							<label>Password</label>
							<input
								type="password"
								id="login-password"
								name="password"
								onChange={this.passwordHandler}
								placeholder="enter password"
							/>
						</div>
						<div className="text">
							<input type="checkbox" defaultChecked />
							<span>Remember Me</span>
						</div>
						<div className="text">
							<button className="success" id="success" onClick={this.loginUserHandler}>
								Login
							</button>
							<button className="danger" onClick={this.props.closeHandler}>
								Close
							</button>
						</div>
					</div>
				</div>
				{this.props.login.loading && <LoaderComponent />}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		login: state.authReducer
	};
};

export default connect(mapStateToProps, { loginAction })(LoginComponet);
