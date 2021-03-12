import React from 'react';

const Image = ({ id, alt, className }) => (
  <img
    className={className}
    alt={alt}
    src={`https://messari.io/asset-images/${id}/32.png?v=2`}
  />
);

export default Image;
