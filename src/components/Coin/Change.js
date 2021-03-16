import React from 'react';
import classNames from 'classnames';

const Change = ({ className, change }) => {
  const fixedChange = change.toFixed(2);

  return (
    <span
      className={classNames(
        className,
        Number(fixedChange) === 0 && 'inherit',
        change > 0 && 'text-green-500',
        change < 0 && 'text-red-500'
      )}
    >
      {Number(fixedChange) === 0 ? '0.00' : fixedChange}%
    </span>
  );
};

export default Change;
