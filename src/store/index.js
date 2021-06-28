import { createStore, combineReducers } from 'redux';

import categoriesReducer from './categories.js';
import productsReducer from './products.js';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

const store = () => {
  return createStore(reducers);
}

export default store;