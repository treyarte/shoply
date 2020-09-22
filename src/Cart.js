import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import CustomButton from './CustomButton';

const Cart = ({ handleAddCart, handleRemoveCart }) => {
  const { cart } = useSelector((state) => state.cart, shallowEqual);
  return (
    <div className='cart'>
      <Table striped>
        <thead>
          <tr>
            <th> Name</th>
            <th> Price</th>
            <th> Quantity</th>
            <th> Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item) => (
            <tr>
              <Link to={`/products/${item.id}`}>
                <th>{item.name}</th>
              </Link>
              <th>{item.price}</th>
              <th>{item.quantity}</th>
              <th>
                <CustomButton
                  onClickAction={() =>
                    handleAddCart({
                      ...item,
                    })
                  }
                  color='primary'
                  btnName='🛒 Add'
                />

                <CustomButton
                  onClickAction={() => handleRemoveCart({ ...item })}
                  color='danger'
                  btnName='Remove 🛒'
                />
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>Cart Total: ${cart.total_amount.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
