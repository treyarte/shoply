import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

const CartIcon = () => {
  const { cart } = useSelector((state) => state.cart, shallowEqual);

  return (
    <>
      <Link to='/cart'>
        <span>
          (${cart.total_amount.toFixed(2)}) {cart.num_items} 🛒
        </span>
      </Link>
    </>
  );
};
export default CartIcon;
