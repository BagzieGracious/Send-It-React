import React, { Component } from 'react';
import { connect } from 'react-redux';
import createParcelAction from '../../../actions/createParcelAction';
import LoaderComponent from '../../../components/loaderComponent';

export class CreateComponent extends Component {
	state = {
		product: '',
		weight: '',
		pickup: '',
		destination: '',
		description: '',
		loading: false,
		buttonstatus: false,
		error: false,
		errormessage: '',
		success: false,
		successmessage: ''
	};

	parcelHandler = event => {
		if (
			this.state.product !== '' &&
			this.state.weight !== '' &&
			this.state.pickup !== '' &&
			this.state.destination !== '' &&
			this.state.description !== ''
		) {
			this.setState({ [event.target.name]: event.target.value, buttonstatus: false });
		} else {
			this.setState({ [event.target.name]: event.target.value, buttonstatus: true });
		}
	};

	createparcelHandler = () => {
		const { createParcelAction } = this.props;
		this.setState({ loading: true });
		createParcelAction({
			product: this.state.product,
			weight: this.state.weight,
			pickup: this.state.pickup,
			destination: this.state.destination,
			description: this.state.description
		});
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.parcel.error) {
			this.setState({ loading: false, error: true, errormessage: nextProps.parcel.errorMessage, success: false });
		}
		if (nextProps.parcel.success) {
			this.setState({
				loading: false,
				error: false,
				successmessage: nextProps.parcel.successMessage,
				success: true
			});
		}
		setTimeout(() => {
			this.setState({ error: false, success: false });
		}, 6000);
	}

	render() {
		return (
			<div className="services" style={{ marginBottom: '30px' }}>
				<div className="order-form">
					{this.state.error && <p id="login-error">{this.state.errormessage}</p>}
					{this.state.success && <p id="login-success">You have created an order successfully.</p>}
					<div className="form-left">
						<div className="text">
							<label>Product Name</label>
							<input
								type="text"
								name="product"
								onChange={this.parcelHandler}
								placeholder="enter product name"
								id="parcel-product"
							/>
						</div>
						<div className="text">
							<label>Product Weight</label>
							<input
								type="number"
								name="weight"
								onChange={this.parcelHandler}
								placeholder="enter product weight"
							/>
						</div>
						<div className="text">
							<label>Pickup Area</label>
							<input
								type="text"
								name="pickup"
								onChange={this.parcelHandler}
								placeholder="enter product your pickup"
							/>
						</div>
						<div className="text">
							<label>Product Destination</label>
							<input
								type="text"
								name="destination"
								onChange={this.parcelHandler}
								placeholder="enter product destination"
							/>
						</div>
					</div>
					<div className="form-right">
						<div className="text">
							<label>Product Description</label>
							<textarea
								name="description"
								onChange={this.parcelHandler}
								placeholder="enter product description"
							/>
						</div>
						<div className="text">
							<button
								className="success"
								disabled={this.state.buttonstatus}
								id="success"
								onClick={this.createparcelHandler}
							>
								Place Order
							</button>
						</div>
					</div>
				</div>
				{this.state.loading && <LoaderComponent />}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		parcel: state.parcelReducer
	};
};

export default connect(
	mapStateToProps,
	{ createParcelAction }
)(CreateComponent);
