import React from 'react';
import ArrowUp from './ArrowUp';
import ArrowDown from './ArrowDown';

// IE 11 don't support css transform property
const OrderArrow = ({ order, className }) =>
  order === 'asc' ? (
    <ArrowUp className={className} />
  ) : (
    <ArrowDown className={className} />
  );

export default OrderArrow;
