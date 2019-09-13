import { createStore } from 'redux';
import RootReducer from './RootReducer';

export default createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());