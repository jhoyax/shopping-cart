import { FETCH_PRODUCTS } from './ActionTypes';

const initialState = {
	lists: [],
	perPage: 12,
	currentPage: 1,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_PRODUCTS: {
			return {
				...state,
				lists: action.payload
			};
		}
		 default: 
		 	return state;
	}
}