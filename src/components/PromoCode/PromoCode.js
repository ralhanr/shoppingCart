import React, {Component} from 'react';

import { Button, Collapse, Well, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import {connect} from 'react-redux';
import {handleChange} from '../../actions/promoCodesActions';

class PromoCode extends Component {


	state = {
		open: false,
	}

		handleChange = event => {
		this.props.handleChange(event);
	}

	render () {
		
		return(
			<div>
			<Button className='promocode' bsStyle='link' 
			onClick={()=> this.setState({open: !this.state.open})} >
			{this.state.open === false ? 'Apply Promocode ' : 'Hide Details '}
			{this.state.open === false ? '+' : '-' }
			</Button>
			<Collapse in={this.state.open}>
			<div>
			<Well>
			<Row className='show-grid'>
			<Col md={12}>
			<Form>
			<FormGroup controlId ='formInlineName'>
			<ControlLabel>Promo Code:</ControlLabel>
			<FormControl 
				type='text'
				placeholder='Enter your Promo Code here'
				value={this.props.promoCode}
				onChange={this.handleChange} 
			/>
			</FormGroup>
			<Button
				block bsStyle='success'
				className='btn-round'
				disabled={this.props.isDisabled}
				onClick={this.props.applyDiscount}
			> 
			Apply Promo Code </Button> 
			</Form>
			</Col>
			</Row>
			</Well>
			</div>
			</Collapse>
			</div>
			)
	}

}

const mapStateToProps = (state) => ({
		promoCode: state.promoCode.value
	})

export default connect(mapStateToProps, {handleChange})(PromoCode);