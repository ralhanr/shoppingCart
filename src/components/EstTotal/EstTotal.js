import React from 'react';
import {Row, Col} from 'react-bootstrap';


const EstTotal = ( { price }) => {
	return (
	<div>
	<Row>
			<Col md={6}><h3>Estimated Total</h3></Col>
			<Col md={6}><h3> {`$${price}`}  </h3></Col>
	</Row>
	</div>
	)
}

export default EstTotal;