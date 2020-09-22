import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { add_to_cart, remove_from_cart } from './actions';
import CustomButton from './CustomButton';
import './ProductCard.css';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  Button,
  CardTitle,
} from 'reactstrap';

const ProductCard = ({ product, handleAddCart, handleRemoveCart }) => {
  const { id, name, image_url, price } = product;

  return (
    <div className='col-md-2 product-card'>
      <Card>
        <CardBody>
          <Link to={`/products/${id}`}>
            <CardTitle>
              <h4>{name}</h4>
            </CardTitle>
          </Link>

          <div>
            <CardText>Price: ${price}</CardText>
          </div>
          <CustomButton
            onClickAction={() =>
              handleAddCart({
                ...product,
              })
            }
            color='primary'
            btnName='🛒 Add'
          />

          <CustomButton
            onClickAction={() => handleRemoveCart({ ...product })}
            color='danger'
            btnName='Remove 🛒'
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
