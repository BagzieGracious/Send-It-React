/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import bannerImage from '../../assets/img/pacel-baner.png';
import icon from '../../assets/img/icon.png';
import signupAction from '../../actions/signupAction';
import loginAction from '../../actions/loginAction';
import LoaderComponent from '../../components/loaderComponent';

export class LoginView extends Component {
	state = {
		signupusername: '',
		signupfirstname: '',
		signuplastname: '',
		signupemail: '',
		signupcontact: '',
		signuppassword: '',
		signupstatus: false,
		signuperror: false,
		signupsuccess: false,
		signupmessage: '',
		loginusername: '',
		loginpassword: '',
		loginerror: false,
		loginstatus: false,
		loginmessage: '',
		login: {},
		loading: false
	};

	loginHandler = event => {
		if (this.state.loginusername !== '' && this.state.loginpassword !== '') {
			this.setState({ [event.target.name]: event.target.value, loginstatus: false });
		} else {
			this.setState({ [event.target.name]: event.target.value, loginstatus: true });
		}
	};

	userdetailsHandler = event => {
		if (
			this.state.signupusername !== '' &&
			this.state.signupfirstname !== '' &&
			this.state.signuplastname !== '' &&
			this.state.signupemail &&
			this.state.signuppassword &&
			this.state.signupcontact
		) {
			this.setState({ [event.target.name]: event.target.value, signupstatus: false });
		} else {
			this.setState({ [event.target.name]: event.target.value, signupstatus: true });
		}
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.success) {
			this.setState({
				loading: false,
				signupsuccess: true,
				signuperror: false,
				signupmessage: nextProps.auth.successMessage
			});
		}
		if (nextProps.auth.errorSignup) {
			this.setState({
				loading: false,
				signupsuccess: false,
				signuperror: true,
				signupmessage: nextProps.auth.errorSignupMessage
			});
		}

		if (nextProps.auth.errorLogin) {
			this.setState({
				loading: false,
				loginerror: true,
				loginmessage: nextProps.auth.errorLoginMessage
			});
		}

		if (nextProps.auth.loginsuccess) {
			this.setState({ loading: false });
			this.props.history.push('/home');
		}
		setTimeout(() => {
			this.setState({ signuperror: false, signupsuccess: false, loginerror: false });
		}, 6000);
	}

	signupHandler = () => {
		const { signupAction } = this.props;
		this.setState({ loading: true });
		signupAction({
			username: this.state.signupusername,
			firstname: this.state.signupfirstname,
			lastname: this.state.signuplastname,
			email: this.state.signupemail,
			contact: this.state.signupcontact,
			password: this.state.signuppassword
		});
	};

	loginUserHandler = () => {
		const { loginAction } = this.props;
		this.setState({ loading: true });
		loginAction({ username: this.state.loginusername, password: this.state.loginpassword });
	};

	render() {
		return (
			<React.Fragment>
				<img src={bannerImage} className="landing-img" alt="" />
				<header>
					<img src={icon} className="icon" alt="" />
				</header>

				<div className="stats">
					<div className="left-login-form">
						<h3>Sign up</h3>
						{this.state.signuperror && (
							<p id="sign-error">
								<strong>Error!</strong>&nbsp; {this.state.signupmessage}
							</p>
						)}

						{this.state.signupsuccess && <p id="login-success">&nbsp; {this.state.signupmessage}</p>}
						<div className="text">
							<label>Username</label>
							<input
								type="text"
								id="sign-username"
								name="signupusername"
								onChange={this.userdetailsHandler}
								placeholder="enter username"
							/>
						</div>
						<div className="text">
							<label>Firstname</label>
							<input
								type="text"
								id="sign-firstname"
								name="signupfirstname"
								onChange={this.userdetailsHandler}
								placeholder="enter firstname"
							/>
						</div>
						<div className="text">
							<label>Lastname</label>
							<input
								type="text"
								id="sign-lastname"
								name="signuplastname"
								onChange={this.userdetailsHandler}
								placeholder="enter lastname"
							/>
						</div>
						<div className="text">
							<label>Email</label>
							<input
								type="email"
								name="signupemail"
								id="sign-email"
								onChange={this.userdetailsHandler}
								placeholder="enter email"
							/>
						</div>
						<div className="text">
							<label>contact</label>
							<input
								type="text"
								id="sign-contact"
								name="signupcontact"
								onChange={this.userdetailsHandler}
								placeholder="enter contact"
							/>
						</div>
						<div className="text">
							<label>Password</label>
							<input
								type="password"
								id="sign-password"
								name="signuppassword"
								onChange={this.userdetailsHandler}
								placeholder="enter password"
							/>
						</div>
						<div className="text">
							<button
								className="success"
								disabled={this.state.signupstatus}
								id="success"
								onClick={this.signupHandler}
							>
								Signup
							</button>
						</div>
					</div>

					<div className="text-or">OR</div>

					<div className="right-login-form">
						<h3>Login</h3>
						{this.state.loginerror && (
							<p id="sign-error">
								<strong>Error!</strong>&nbsp; {this.state.loginmessage}
							</p>
						)}
						<div className="text">
							<label>Username</label>
							<input
								type="text"
								id="login-username"
								name="loginusername"
								onChange={this.loginHandler}
								placeholder="enter username"
							/>
						</div>
						<div className="text">
							<label>Password</label>
							<input
								type="password"
								id="login-password"
								name="loginpassword"
								onChange={this.loginHandler}
								placeholder="enter password"
							/>
						</div>
						<div className="text">
							<input type="checkbox" defaultChecked />
							<span>Remember Me</span>
						</div>
						<div className="text">
							<button
								className="success"
								disabled={this.state.loginstatus}
								id="success"
								onClick={this.loginUserHandler}
							>
								Login
							</button>
						</div>
					</div>
				</div>
				{this.state.loading && <LoaderComponent />}
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.authReducer
	};
};

export default connect(
	mapStateToProps,
	{ signupAction, loginAction }
)(LoginView);
