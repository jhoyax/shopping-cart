import { ADD_ITEM } from './ActionTypes';

const initialState = {
	total: 0,
	items: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_ITEM: {
			const { id, item } = action.payload
			return {
				...state,
				total: state.total + item.quantity,
				items: {
					...state.items,
					[id]: {
						item
					}
				}
			};
		}
		 default: 
		 	return state;
	}
}