import { FETCH_PRODUCT_CATEGORIES } from './ActionTypes';

const initialState = {
	lists: [],
	perPage: 15,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_PRODUCT_CATEGORIES: {
			return {
				...state,
				lists: action.payload
			};
		}
		 default: 
		 	return state;
	}
}