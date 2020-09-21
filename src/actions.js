import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const add_to_cart = (product) => ({ type: ADD_TO_CART, product });

const remove_from_cart = (product) => ({ type: REMOVE_FROM_CART, product });

export { add_to_cart, remove_from_cart };
