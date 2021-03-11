import React from 'react';
import classNames from 'classnames';

const Symbol = ({ className, children }) => (
  <span className={classNames('text-gray-600', className)}>{children}</span>
);

export default Symbol;
