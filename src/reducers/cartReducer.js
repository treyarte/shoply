import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes';

const INITIAL_STATE = {
  cart: { items: [], total_amount: 0, num_items: 0 },
};

const rootReducer = (state = INITIAL_STATE, action) => {
  const { product } = action;
  const { cart } = state;
  const cartItemIdx = cart.items.findIndex(
    (cartItem) => cartItem.id === product.id
  );

  switch (action.type) {
    case ADD_TO_CART:
      cart.total_amount += product.price;
      cart.num_items++;
      if (cartItemIdx !== -1) {
        const cartItem = cart.items[cartItemIdx];
        return {
          cart: {
            ...cart,
            items: [
              ...cart.items.slice(0, cartItemIdx),
              { ...cartItem, quantity: cartItem.quantity + 1 || 1 },
              ...cart.items.slice(cartItemIdx + 1),
            ],
          },
        };
      } else {
        return {
          cart: {
            ...cart,
            items: [...cart.items, { ...product, quantity: 1 }],
          },
        };
      }

    case REMOVE_FROM_CART:
      const cartItem = cart.items[cartItemIdx];
      if (!cartItem) return state;

      cart.total_amount -= cartItem.price;
      cart.num_items--;
      if (cartItem && cartItem.quantity > 1) {
        return {
          cart: {
            ...cart,
            items: [
              ...cart.items.slice(0, cartItemIdx),
              { ...cartItem, quantity: cartItem.quantity - 1 },
              ...cart.items.slice(cartItemIdx + 1),
            ],
          },
        };
      }
      return {
        cart: {
          ...state.cart,
          items: state.cart.items.filter(
            (cartItem) => cartItem.id !== product.id
          ),
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
