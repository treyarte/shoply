import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import './Catalog.css';

import ProductCard from './ProductCard';

const Catalog = ({ handleAddCart, handleRemoveCart }) => {
  const { products } = useSelector((state) => state.products, shallowEqual);

  return (
    <>
      <div className='catalog'>
        <header>
          <h2>Product Catalog</h2>
        </header>
        <section className='product-list row'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleRemoveCart={handleRemoveCart}
              handleAddCart={handleAddCart}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Catalog;
