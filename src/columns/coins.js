import React from 'react';
import { Link } from 'react-router-dom';
import {
  CoinImage,
  CoinName,
  CoinSymbol,
  CoinPrice,
  CoinChange,
} from '../components/Coin';

const coinColumns = [
  {
    field: 'name',
    text: 'Name',
    sortable: true,
    render: ({ id, name, slug, symbol }) => (
      <div className="flex items-center">
        <CoinImage id={id} alt={slug} className="w-8 h-8 rounded-full" />
        <Link to={`/profile/${slug}`}>
          <CoinName className="ml-2">{name}</CoinName>
          <CoinSymbol className="ml-2">{symbol}</CoinSymbol>
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
    field: 'change1h',
    text: '1h %',
    sortable: true,
    className: 'text-right',
    render: ({ change1h }) => <CoinChange change={change1h} />,
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
