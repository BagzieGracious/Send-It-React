import React, { Component } from 'react';
import { connect } from 'react-redux';
import parcel from '../../../assets/img/parcel.png';
import getParcelsAction from '../../../actions/getParcelsAction';

export class OrdersComponent extends Component {
	state = {
		error: false,
		errorMessage: ''
	};

	parcelDelivery = () => {
		const { getParcelsAction } = this.props;
		getParcelsAction();
		if (this.props.parceldata.parcels.status === 'success') {
			return this.props.parceldata.parcels.data.map(data => (
				<tr key={data.order_id}>
					<td>
						<img src={parcel} alt="" />
					</td>
					<td className="ctr">
						<a href="/">{data.product}</a>
					</td>
					<td className="ctr">{data.pickup}</td>
					<td className="ctr">{data.destination}</td>
					<td className="rgt">
						<small>{data.order_date}</small>
					</td>
				</tr>
			));
		} else {
			return (
				<tr>
					<td colSpan={3} style={{ textAlign: 'center' }}>
						You have no orders
					</td>
				</tr>
			);
		}
	};

	render() {
		return (
			<div className="services" style={{ marginBottom: '30px' }}>
				<div className="order-form">
					<table>
						<thead>
							<tr>
								<td style={{ width: '10%' }}>Image</td>
								<td className="ctr">Product</td>
								<td className="ctr">Pick up</td>
								<td className="ctr">Destination</td>
								<td className="rgt">Date Created</td>
							</tr>
						</thead>
						<tbody>{this.parcelDelivery()}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		parceldata: state.parcelReducer
	};
};

export default connect(
	mapStateToProps,
	{ getParcelsAction }
)(OrdersComponent);
