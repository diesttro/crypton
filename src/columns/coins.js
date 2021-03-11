import React from 'react';
import { Link } from 'react-router-dom';
import { CoinImage, CoinName, CoinPrice, CoinChange } from '../components/Coin';

const coinColumns = [
  {
    field: 'name',
    text: 'Name',
    sortable: true,
    render: ({ name, slug, symbol }) => (
      <div className="flex items-center">
        <CoinImage symbol={symbol.toLowerCase()} className="w-8 h-8" />
        <Link to={`/profile/${slug}`}>
          <CoinName className="ml-2">{name}</CoinName>
        </Link>
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
    text: '24h %',
    sortable: true,
    className: 'text-right',
    render: ({ change24h }) => <CoinChange change={change24h} />,
  },
];

export default coinColumns;
