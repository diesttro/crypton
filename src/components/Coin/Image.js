import React, { useRef } from 'react';

const DEFAULT_IMAGE = 'https://dummyimage.com/100/d6d6d6&text=+';

const Image = ({ id, alt, className }) => {
  const imageRef = useRef(null);

  const handleImageError = () => {
    if (imageRef) imageRef.current.src = DEFAULT_IMAGE;
  };

  return (
    <img
      ref={imageRef}
      className={className}
      alt={alt}
      src={`https://messari.io/asset-images/${id}/32.png?v=2`}
      onError={handleImageError}
    />
  );
};

export default Image;
