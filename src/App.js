import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import {connect} from 'react-redux';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstTotal from './components/EstTotal/EstTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode';
import {handleChange} from './actions/promoCodesActions';
import './App.css';

class App extends Component {

	state = {
			total: 50,
			pickupSavings: -4.00,
			taxes: 0,
			estimatedTotal: 0,
			promoButton: false
	}

	applyDiscountHandler = () => {
		if(this.props.promoCode === 'PROMO25') {
			
			this.setState({estimatedTotal: this.state.estimatedTotal * 0.75},
			function () {
				this.setState({promoButton: true})
			}
			)
		}
		if(this.props.promoCode === 'DISCOUNT') {
			
			this.setState({estimatedTotal: this.state.estimatedTotal * 0.9},
			function () {
				this.setState({promoButton: true})
			}
			)
		}
	}

	componentDidMount = () => {
		this.setState(
			{
				taxes: 
				(this.state.total + this.state.pickupSavings) * 0.0875
			},
			function() {
			this.setState({
				estimatedTotal: 
				this.state.total + this.state.taxes + this.state.pickupSavings
			});
			}
			);
	}

  render() {
    return (
    	<div className='container'>
    	<Grid className = 'amount'>
    	<Subtotal price={this.state.total.toFixed(2)} />
    	<PickupSavings price={this.state.pickupSavings} />
    	<TaxesFees taxes={this.state.taxes.toFixed(2)} />
    	<hr />
    	<EstTotal price={this.state.estimatedTotal.toFixed(2)} />
    	<ItemDetails 
    		total={this.state.total.toFixed(2)}
    		price={this.state.estimatedTotal.toFixed(2)} 
    		promoCode={this.props.promoCode}
    		/>
    	<hr />
    	<PromoCode 
    	isDisabled={this.state.promoButton} 
    	applyDiscount={()=> this.applyDiscountHandler()}
    	/>
    	</Grid>
    	</div>
    );
  }
}

const mapStateToProps = (state) => ({
	promoCode: state.promoCode.value
})

export default connect(mapStateToProps, {handleChange})(App);
