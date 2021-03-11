import React from 'react';

const ArrowDown = ({ className }) => (
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
      y1="40"
      x2="128"
      y2="216"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></line>
    <polyline
      points="56 144 128 216 200 144"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></polyline>
  </svg>
);

export default ArrowDown;
