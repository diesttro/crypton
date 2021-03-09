import React from 'react';

const Image = ({ symbol, className }) => (
  <img
    className={className}
    src={`https://static.coincap.io/assets/icons/${symbol}@2x.png`}
    alt={symbol}
  />
);

export default Image;
