import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoaderComponent from '../../loaderComponent';
import icon from '../../../assets/img/icon.png';
import signupAction from '../../../actions/signupAction';
export class SignupComponent extends Component {
	state = {
		username: '',
		firstname: '',
		lastname: '',
		email: '',
		contact: '',
		password: '',
		loginHidden: false
	};

	usernameHandler = event => {
		this.setState({
			username: event.target.value
		});
	};

	firstnameHandler = event => {
		this.setState({
			firstname: event.target.value
		});
	};

	lastnameHandler = event => {
		this.setState({
			lastname: event.target.value
		});
	};

	emailHandler = event => {
		this.setState({
			email: event.target.value
		});
	};

	contactHandler = event => {
		this.setState({
			contact: event.target.value
		});
	};

	passwordHandler = event => {
		this.setState({
			password: event.target.value
		});
	};

	signupHandler = () => {
		const { signupAction } = this.props;
		this.props.signup.loading = true;
		signupAction({
			username: this.state.username,
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			email: this.state.email,
			contact: this.state.contact,
			password: this.state.password
		});
	};

	render() {
		return (
			<div className="login-wrapper" id="signup-wrapper">
				<div className="wrap">
					<p>
						<img src={icon} alt="" />
					</p>
					<div className="form">
						{this.props.signup.errorSignup && (
							<p id="sign-error">
								<strong>Error!</strong>&nbsp; {this.props.signup.errorSignupMessage}
							</p>
						)}
						{this.props.signup.success && (
							<p id="sign-success">
								<strong>Info!</strong>&nbsp; {this.props.signup.successMessage}
							</p>
						)}
						<div className="text">
							<label>Username</label>
							<input
								type="text"
								id="sign-username"
								onChange={this.usernameHandler}
								placeholder="enter username"
							/>
						</div>
						<div className="text">
							<label>Firstname</label>
							<input
								type="text"
								id="sign-firstname"
								onChange={this.firstnameHandler}
								placeholder="enter firstname"
							/>
						</div>
						<div className="text">
							<label>Lastname</label>
							<input
								type="text"
								id="sign-lastname"
								onChange={this.lastnameHandler}
								placeholder="enter lastname"
							/>
						</div>
						<div className="text">
							<label>Email</label>
							<input
								type="email"
								id="sign-email"
								onChange={this.emailHandler}
								placeholder="enter email"
							/>
						</div>
						<div className="text">
							<label>contact</label>
							<input
								type="text"
								id="sign-contact"
								onChange={this.contactHandler}
								placeholder="enter contact"
							/>
						</div>
						<div className="text">
							<label>Password</label>
							<input
								type="password"
								id="sign-password"
								onChange={this.passwordHandler}
								placeholder="enter password"
							/>
						</div>
						<div className="text">
							<button className="success" id="success" onClick={this.signupHandler}>
								Signup
							</button>
							<button className="danger" onClick={this.props.closeHandler}>
								Close
							</button>
						</div>
					</div>
				</div>
				{this.props.signup.loading && <LoaderComponent />}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		signup: state.authReducer
	};
};

export default connect(mapStateToProps, { signupAction })(SignupComponent);
