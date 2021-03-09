import React from 'react';
import { round } from '../../utils';

const Price = ({ className, price }) => (
  <span className={className}>${round(price)}</span>
);

export default Price;
