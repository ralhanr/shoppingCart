import {PROMO_CODE} from './types';

export const handleChange = (event) => {
	return {
		type: PROMO_CODE,
		payload: event.target.value
	}
}
