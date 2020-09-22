import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { add_to_cart, remove_from_cart } from './actions';
import Cart from './Cart';
import Catalog from './Catalog';
import Product from './Product';

const Routes = () => {
  const dispatch = useDispatch();

  const handleAddCart = (product) => {
    dispatch(add_to_cart(product));
  };

  const handleRemoveCart = (product) => {
    dispatch(remove_from_cart(product));
  };
  return (
    <Switch>
      <Route exact path='/'>
        <Catalog
          handleAddCart={handleAddCart}
          handleRemoveCart={handleRemoveCart}
        />
      </Route>
      <Route exact path='/products/:id'>
        <Product
          cantFind='/'
          handleRemoveCart={handleRemoveCart}
          handleAddCart={handleAddCart}
        />
      </Route>
      <Route exact path='/cart'>
        <Cart
          handleRemoveCart={handleRemoveCart}
          handleAddCart={handleAddCart}
        />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
};

export default Routes;
