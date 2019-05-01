import React, { Component } from 'react';
import { connect } from 'react-redux';
import createParcelAction from '../../../actions/createParcelAction';

export class CreateComponent extends Component {
	state = {
		product: '',
		weight: '',
		pickup: '',
		destination: '',
		description: ''
	};

	productHandler = event => {
		this.setState({ product: event.target.value });
	};

	weightHandler = event => {
		this.setState({ weight: event.target.value });
	};

	pickupHandler = event => {
		this.setState({ pickup: event.target.value });
	};

	destinationHandler = event => {
		this.setState({ destination: event.target.value });
	};

	descriptionHandler = event => {
		this.setState({ description: event.target.value });
	};

	createparcelHandler = () => {
		const { createParcelAction } = this.props;
		createParcelAction({
			product: this.state.product,
			weight: this.state.weight,
			pickup: this.state.pickup,
			destination: this.state.destination,
			description: this.state.description
		});
	};

	render() {
		return (
			<div className="services" style={{ marginBottom: '30px' }}>
				<div className="order-form">
					{this.props.parcel.error && <p id="login-error">{this.props.parcel.errorMessage}</p>}
					{this.props.parcel.success && <p id="login-success">You have successfully made an order.</p>}
					<div className="form-left">
						<div className="text">
							<label>Product Name</label>
							<input
								type="text"
								id="parcel-product"
								onChange={this.productHandler}
								placeholder="enter product name"
							/>
						</div>
						<div className="text">
							<label>Product Weight</label>
							<input
								type="number"
								id="parcel-weight"
								onChange={this.weightHandler}
								placeholder="enter product weight"
							/>
						</div>
						<div className="text">
							<label>Pickup Area</label>
							<input
								type="text"
								id="parcel-pickup"
								onChange={this.pickupHandler}
								placeholder="enter product your pickup"
							/>
						</div>
						<div className="text">
							<label>Product Destination</label>
							<input
								type="text"
								id="parcel-destination"
								onChange={this.destinationHandler}
								placeholder="enter product destination"
							/>
						</div>
					</div>
					<div className="form-right">
						<div className="text">
							<label>Product Description</label>
							<textarea
								id="parcel-description"
								onChange={this.descriptionHandler}
								placeholder="enter product description"
							/>
						</div>
						<div className="text">
							<button className="success" id="success" onClick={this.createparcelHandler}>
								Place Order
							</button>
							<button className="danger">Cancel</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		parcel: state.parcelReducer
	};
};

export default connect(mapStateToProps, { createParcelAction })(CreateComponent);
