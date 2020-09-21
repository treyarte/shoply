import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const CartIcon = () => {
  const { cart } = useSelector((state) => state.cart, shallowEqual);
  console.log(cart);
  return (
    <>
      <span>
        (${cart.total_amount.toFixed(2)}) {cart.num_items}
      </span>
    </>
  );
};
export default CartIcon;
