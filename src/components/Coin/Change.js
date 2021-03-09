import React from 'react';
import classNames from 'classnames';
import { round } from '../../utils';

const Change = ({ className, change }) => (
  <span
    className={classNames(
      className,
      change > 0 ? 'text-green-600' : 'text-red-600'
    )}
  >
    {round(change)}%
  </span>
);

export default Change;
