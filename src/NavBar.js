import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import CartIcon from './CartIcon';
const Navbar = () => {
  return (
    <div>
      <nav className='product-nav'>
        <NavLink exact to='/'>
          <h4>Shoply</h4>
        </NavLink>
        <div className='cart-nav'>
          <CartIcon />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
