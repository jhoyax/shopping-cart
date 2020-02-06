import axios from 'axios';

import {FETCH_PRODUCT_CATEGORIES,
    PRODUCT_CATEGORIES_API
} from './ActionTypes';

const fetchProductCategories = (callback) => dispatch => {
    return axios
        .get(PRODUCT_CATEGORIES_API + '?with=childrenProductCategories')
        .then(response => {
            if (!!callback) {
                callback();
            }

            return dispatch({
                type: FETCH_PRODUCT_CATEGORIES,
                payload: response
            });
        })
        .catch(error => {
            throw(error);
        });
}

export {
    fetchProductCategories
}