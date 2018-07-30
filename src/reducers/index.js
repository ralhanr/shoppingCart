import { combineReducers } from 'redux';
import promoCodesReducer from './promoCodesReducer';

export default combineReducers({
	promoCode: promoCodesReducer
})