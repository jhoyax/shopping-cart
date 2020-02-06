import { combineReducers } from 'redux';
import cart from './modules/cart';
import products from './modules/products';
import productCategories from './modules/product-categories';

export default combineReducers({ cart, products,productCategories });