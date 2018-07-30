import React, {Component} from 'react';
import { Row, Col, Tooltip, OverlayTrigger} from 'react-bootstrap';


export default class PickupSavings extends Component {
	render() {
		const tip = (
			<Tooltip id='tooltip'>
		<p> Picking up your order in the store, helps cut costs and we pass the savings to you.</p>
		</Tooltip>
			)
		
		return (
			<Row className = 'show-grid'>
			<Col md={6}>
				<OverlayTrigger placement='bottom' overlay={tip}>
				<div style={{textDecoration: 'underline'}}>Pickup Savings</div>
				</OverlayTrigger>
			</Col>
			<Col md={6} style={{color: 'red'}}>{`$${this.props.price}`} </Col>
			</Row>

			)
	}
}


