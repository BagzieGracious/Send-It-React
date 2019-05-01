import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateComponent from '../../components/parcelComponents/createComponent';
import OrdersComponent from '../../components/parcelComponents/ordersComponent';
import icon from '../../assets/img/icon.png';
import banner2 from '../../assets/img/banner-up.png';

export default class HomeViews extends Component {
	logoutHandler = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('usertype');
		this.props.history.push('/');
	};

	render() {
		if (!localStorage.getItem('token')) {
			this.props.history.push('/');
		}

		let pageView;
		if (this.props.history.location.pathname === '/home') {
			pageView = <CreateComponent />;
		} else {
			pageView = <OrdersComponent />;
		}

		return (
			<React.Fragment>
				<header id="inside-header">
					<img src={icon} className="icon" alt="" />
					<ul>
						<li>
							<Link to="/home">order</Link>
						</li>
						<li>
							<Link to="/orders">list</Link>
						</li>
						<li>
							<Link to="#" id="display-login" onClick={this.logoutHandler}>
								Logout
							</Link>
						</li>
					</ul>
				</header>

				<div className="banner-up inside">
					<img src={banner2} alt="" />
				</div>

				<div className="breadcrumb">
					<h3>Make Order</h3>
					<ul>
						<li>Home</li>
						<li>/</li>
						<li>Order</li>
					</ul>
				</div>
				{pageView}
			</React.Fragment>
		);
	}
}
