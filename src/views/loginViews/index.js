/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import ServicesComponent from '../../components/authComponents/servicesComponent';
import StatsComponent from '../../components/authComponents/statsComponent';
import LoginComponent from '../../components/authComponents/loginComponent';
import SignupComponent from '../../components/authComponents/signupComponent';
import AboutComponent from '../../components/authComponents/aboutComponent';
import bannerImage from '../../assets/img/pacel-baner.png';
import icon from '../../assets/img/icon.png';
import banner2 from '../../assets/img/banner-up.png';
import LoaderComponent from '../../components/loaderComponent';

export default class LoginView extends Component {
	state = {
		loginHidden: false,
		signupHidden: false,
		loading: false
	};

	loginHandler = () => {
		this.setState({ loginHidden: true });
	};

	signupHandler = () => {
		this.setState({ signupHidden: true });
	};

	closeHandler = () => {
		this.setState({ loginHidden: false, signupHidden: false });
	};

	render() {
		return (
			<React.Fragment>
				<img src={bannerImage} className="landing-img" alt="" />
				<header>
					<img src={icon} className="icon" alt="" />
					<ul>
						<li>
							<a href="#" onClick={this.loginHandler}>
								signin
							</a>
						</li>
						<li>
							<a href="#" onClick={this.signupHandler}>
								signup
							</a>
						</li>
					</ul>
				</header>

				<StatsComponent />
				<AboutComponent />

				<div className="banner-up">
					<img src={banner2} alt="" />
				</div>

				<ServicesComponent />
				{this.state.loginHidden && (
					<LoginComponent closeHandler={this.closeHandler} history={this.props.history} />
				)}
				{this.state.signupHidden && <SignupComponent closeHandler={this.closeHandler} />}

				{this.state.loading && <LoaderComponent />}

				<footer>
					<p>&copy; copy rights reserved</p>
				</footer>
			</React.Fragment>
		);
	}
}
