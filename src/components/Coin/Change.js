import React from 'react';
import { roundNumber } from '../../utils';

const Change = ({ className, change }) => (
  <span className={className}>{roundNumber(change)}%</span>
);

export default Change;
