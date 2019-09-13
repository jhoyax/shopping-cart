import { ADD_ITEM } from './ActionTypes';

let nextItemId = 0;

export const addCartItem = item => ({ 
	type: ADD_ITEM, 
	payload: {
		id: ++nextItemId,
		item
	} 
});