import React from 'react';
import { CoinImage, CoinName, CoinPrice, CoinChange } from '../components/Coin';

const coinColumns = [
  {
    field: 'name',
    text: 'Name',
    sortable: true,
    render: ({ name, symbol }) => (
      <div className="flex items-center">
        <CoinImage symbol={symbol.toLowerCase()} className="w-8 h-8" />
        <CoinName className="ml-2">{name}</CoinName>
      </div>
    ),
  },
  {
    field: 'price',
    text: 'Price',
    sortable: true,
    className: 'text-right',
    render: ({ price }) => <CoinPrice price={price} />,
  },
  {
    field: 'change24h',
    text: '24h Change',
    sortable: true,
    className: 'text-right',
    render: ({ change24h }) => <CoinChange change={change24h} />,
  },
];

export default coinColumns;
