import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router';
import CustomButton from './CustomButton';
import './Product.css';

const Product = ({ cantFind, handleRemoveCart, handleAddCart }) => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products, shallowEqual);
  let productItem = products.find((p) => p.id === id);
  if (!productItem) return <Redirect to={cantFind} />;

  return (
    <div className='product '>
      <div className='product-header'>
        <header>
          <h2>{productItem.name}</h2>
        </header>
        <img
          src={productItem.image_url}
          alt={`${productItem.name}`}
          className='product-image'
        />
      </div>
      <div className='product-info'>
        <p>Price: {productItem.price}</p>
        <p>Description: {productItem.description}</p>
      </div>
      <div className='product-btns'>
        <CustomButton
          onClickAction={() =>
            handleAddCart({
              ...productItem,
            })
          }
          color='primary'
          btnName='🛒 Add'
        />

        <CustomButton
          onClickAction={() => handleRemoveCart({ ...productItem })}
          color='danger'
          btnName='Remove 🛒'
        />
      </div>
    </div>
  );
};

export default Product;
