import React from 'react';

const ArrowUp = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="192"
    height="192"
    viewBox="0 0 256 256"
    className={className}
  >
    <rect width="256" height="256" fill="none" stroke="none"></rect>
    <line
      x1="128"
      y1="216"
      x2="128"
      y2="40"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></line>
    <polyline
      points="56 112 128 40 200 112"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></polyline>
  </svg>
);

export default ArrowUp;
