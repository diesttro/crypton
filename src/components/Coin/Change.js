import React from 'react';
import classNames from 'classnames';
import { not } from '../../utils';

const hasChange = (value) =>
  not(value === undefined) && not(Number(value) === 0);

const Change = ({ className, change }) => {
  const fixedChange = change?.toFixed(2);

  return (
    <span
      className={classNames(
        className,
        not(hasChange(fixedChange))
          ? 'inherit'
          : change > 0
          ? 'text-green-500'
          : 'text-red-500'
      )}
    >
      {hasChange(fixedChange) ? `${fixedChange}%` : '-'}
    </span>
  );
};

export default Change;
