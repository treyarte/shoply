import { add_to_cart, remove_from_cart } from '../actions';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes';

describe('cart actions', () => {
  it('should create an action to add an item to the cart', () => {
    const product = { id: '12tt', name: 'tv', price: 123 };
    const expectedAction = {
      type: ADD_TO_CART,
      product: product,
    };

    expect(add_to_cart(product)).toEqual(expectedAction);
  });

  it('should create an action to remove an item from the cart', () => {
    const product = { id: 'ee112', name: 'phone', price: 800 };
    const expectedAction = {
      type: REMOVE_FROM_CART,
      product: product,
    };

    expect(remove_from_cart(product)).toEqual(expectedAction);
  });
});
