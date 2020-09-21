import React from 'react';
import './ProductCard.css';
import { Card, CardBody, CardImg, CardText, Button } from 'reactstrap';

const ProductCard = ({ product, handleAddCart, handleRemoveCart }) => {
  const { id, name, image_url, price } = product;
  return (
    <div className='col-md-3 product-card'>
      <Card>
        <CardBody>
          <CardText>{name}</CardText>
          <CardImg src={image_url} width='100%' />
          <CardText>Price: ${price}</CardText>
          <Button
            onClick={() =>
              handleAddCart({
                ...product,
              })
            }
            color='primary'
          >
            Add
          </Button>
          <Button
            color='danger'
            onClick={() => handleRemoveCart({ ...product })}
          >
            Remove
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
