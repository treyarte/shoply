import { products } from '../data.json';
import {} from '../actionTypes';

const INITIAL_STATE = {
  products: [...Object.values(products)].map((product, i) => ({
    id: Object.keys(products)[i],
    ...product,
  })),
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
