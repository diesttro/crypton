import React from 'react';
import { roundNumber } from '../../utils';

const Price = ({ className, price }) => (
  <span className={className}>${roundNumber(price)}</span>
);

export default Price;
