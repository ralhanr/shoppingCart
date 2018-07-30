import React from 'react';
import {Row, Col} from 'react-bootstrap';

const subTotal = ({price}) => {
	return(
			<Row className='show-grid'>
			<Col md={6}>Subtotal</Col>
			<Col md={6}> {`$${price}`} </Col>
			</Row>
			)
}

export default subTotal;