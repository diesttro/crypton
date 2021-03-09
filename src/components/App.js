import React from 'react';
import Title from './Title';
import Search from './Search';
import DataTable from './DataTable';
import { CoinImage, CoinName, CoinPrice, CoinChange } from './Coin';

const data = [
  {
    name: 'Bitcoin',
    symbol: 'btc',
    price: 50772.02,
    change24h: 0.69,
  },
  {
    name: 'Ethereum',
    symbol: 'eth',
    price: 1735.13,
    change24h: 4.77,
  },
  {
    name: 'Cardano',
    symbol: 'ada',
    price: 1.11,
    change24h: -0.69,
  },
];

const columns = [
  {
    field: 'name',
    text: 'Name',
    render: ({ name, symbol }) => (
      <div className="flex items-center">
        <CoinImage symbol={symbol} className="w-8 h-8" />
        <CoinName className="ml-2">{name}</CoinName>
      </div>
    ),
  },
  {
    field: 'price',
    text: 'Price',
    render: ({ price }) => <CoinPrice price={price} />,
  },
  {
    field: 'change24h',
    text: '24h Change',
    render: ({ change24h }) => <CoinChange change={change24h} />,
  },
];

const App = () => (
  <div className="container max-w-3xl mx-auto p-2">
    <div className="py-4">
      <Title>Crypton</Title>
    </div>
    <div className="py-6 w-full sm:w-4/6 mx-auto">
      <Search placeholder="Look for a cryptocurrency" />
    </div>
    <div className="whitespace-no-wrap overflow-x-auto py-6">
      <DataTable rows={data} columns={columns} />
    </div>
  </div>
);

export default App;
