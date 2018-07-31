import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Root from '../../Root';
import PromoCode from '../PromoCode/PromoCode';



let wrapped;

beforeEach(() => {
		wrapped = mount(
		<Root>
		<PromoCode />
		</Root>
		);
});


afterEach(() => {
	wrapped.unmount();
});


it('has a text area and a button', () => {

	expect(wrapped.find('Button').length).toEqual(2);
	expect(wrapped.find('FormControl').length).toEqual(1);

});

it('has a promocode area that users can enter a promo code in', () => {
	wrapped.find('FormControl').simulate('change', {
		target: {value: 'DISCOUNT'}
	})
	wrapped.update();
	expect(wrapped.find('FormControl').prop('value')).toEqual('DISCOUNT');

});














