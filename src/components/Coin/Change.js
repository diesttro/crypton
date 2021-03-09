import React from 'react';
import { round } from '../../utils';

const Change = ({ className, change }) => (
  <span className={className}>{round(change)}%</span>
);

export default Change;
