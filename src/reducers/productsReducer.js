import { products } from '../data.json';
import {} from '../actionTypes';

const INITIAL_STATE = {
  ...products,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
