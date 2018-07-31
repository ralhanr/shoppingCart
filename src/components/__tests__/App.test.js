import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from '../../App';
import Root from '../../Root';
import PromoCode from '../PromoCode/PromoCode';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<Root>
  		<App />
  	</Root>
  	, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays Promo code component', () => {
const wrapped = mount (
<Root>
	<App />
</Root>
);
expect (wrapped.find(PromoCode).length).toEqual(1);
});
