import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';

export default (props) => {
	const store = createStore(rootReducer);
	return (
		<Provider store={store} >
			{props.children}
		</Provider>
		);
};