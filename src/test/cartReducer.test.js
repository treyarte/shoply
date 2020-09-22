import cartReducer from '../reducers/cartReducer';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes';

const cartItem = {
  id: '47314fa1-ae56-4eae-80be-af6691145951',
  name: 'tv',
  price: 219.99,
  description:
    "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
  image_url:
    'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue',
};

const startingState = {
  cart: {
    items: [{ ...cartItem, quantity: 1 }],
    total_amount: 219.99,
    num_items: 1,
  },
};

describe('Cart reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual({
      cart: { items: [], total_amount: 0, num_items: 0 },
    });
  });

  it('should return the state with a new item added to item', () => {
    expect(
      cartReducer(undefined, {
        type: ADD_TO_CART,
        product: cartItem,
      })
    ).toEqual({
      cart: {
        items: [{ ...cartItem, quantity: 1 }],
        total_amount: 219.99,
        num_items: 1,
      },
    });
  });

  it('should return the state with a item removed', () => {
    expect(
      cartReducer(startingState, {
        type: REMOVE_FROM_CART,
        product: cartItem,
      })
    ).toEqual({
      cart: {
        items: [],
        total_amount: 0,
        num_items: 0,
      },
    });
  });
});
