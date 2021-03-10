import React from 'react';
import classNames from 'classnames';

const Change = ({ className, change }) => (
  <span
    className={classNames(
      className,
      change > 0 ? 'text-green-500' : 'text-red-500'
    )}
  >
    {change}%
  </span>
);

export default Change;
