import React from 'react';

const Price = ({ className, price }) => (
  <span className={className}>${price.toFixed(2)}</span>
);

export default Price;
