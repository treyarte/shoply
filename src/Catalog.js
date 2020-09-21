import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { add_to_cart, remove_from_cart } from './actions';
import ProductCard from './ProductCard';

const Catalog = () => {
  const products = useSelector((state) => state.products, shallowEqual);
  const dispatch = useDispatch();
  const listOfProducts = [...Object.values(products)].map((product, i) => ({
    id: Object.keys(products)[i],
    ...product,
  }));

  const handleAddCart = (product) => {
    dispatch(add_to_cart(product));
  };

  const handleRemoveCart = (product) => {
    dispatch(remove_from_cart(product));
  };

  return (
    <>
      <div className='catalog'>
        <header>
          <h2>Product Catalog</h2>
        </header>
        <section className='product-list row'>
          {listOfProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddCart={handleAddCart}
              handleRemoveCart={handleRemoveCart}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Catalog;
