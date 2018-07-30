import React, {Component} from 'react';
import {Button, Collapse, Well, Media, Row, Col} from 'react-bootstrap';


export default class ItemDetails extends Component {

	
	state = {
		open: false
	}



	render() {
		
		if(this.props.promoCode === 'DISCOUNT') {
			var myClass = 'savings';
		}
		else {
			var myClass = 'total';
		}
		return (

			<div>
			<Button className='button-style' 
			bsStyle='link' onClick = {() => this.setState({open: !this.state.open})} > 
			{this.state.open === false ? 'Item Details ' : 'Hide Details ' }
			{this.state.open === false ? '+' : '-' }
			</Button>
			<Collapse in={this.state.open}>
			<div>
			<Well>
			<Media>
			<Media.Left>
			<img width={100} height={100} alt='thumbnail' src='https://images-na.ssl-images-amazon.com/images/I/712mEFqmY%2BL._UX342_.jpg' />
			</Media.Left>
			<Media.Body>
			<p>Light Blue Dress, Sizes Small, Medium and Large available</p>
			<Row className ='show-grid'>
			<Col md={6}>
			<b> {`$${this.props.price}`} </b>
			<hr />
			<b className={myClass}> {`$${this.props.total}`} </b>
			</Col>
			<Col md={6}> Quantity = 1 </Col>
			</Row>
			</Media.Body>
			</Media>
			</Well>
			</div>
			</Collapse>
			</div>
			)
	}
}