import React from 'react';
import { Button } from 'reactstrap';
import './CustomButton.css';

const CustomButton = ({ color, onClickAction, btnName }) => {
  return (
    <Button
      className={`${btnName} custom-btn`}
      onClick={onClickAction}
      color={color}
    >
      {btnName}
    </Button>
  );
};

export default CustomButton;
