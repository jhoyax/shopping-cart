import { FETCH_PRODUCTS, FETCH_PRODUCT_DETAILS } from './ActionTypes';

const initialState = {
	lists: [],
	perPage: 12,

	details: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return {
				...state,
				lists: action.payload
			};
		case FETCH_PRODUCT_DETAILS:
			return {
				details: action.payload
			};
		 default: 
		 	return state;
	}
}