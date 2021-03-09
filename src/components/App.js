import React, { useEffect, useState } from 'react';
import { getCoins } from '../services/coins';
import Title from './Title';
import Search from './Search';
import DataTable from './DataTable';
import { CoinImage, CoinName, CoinPrice, CoinChange } from './Coin';

const columns = [
  {
    field: 'name',
    text: 'Name',
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
    render: ({ price }) => <CoinPrice price={price} />,
  },
  {
    field: 'change24h',
    text: '24h Change',
    render: ({ change24h }) => <CoinChange change={change24h} />,
  },
];

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoins().then(setCoins).catch(console.error);
  }, []);

  console.log(coins);
  return (
    <div className="container max-w-3xl mx-auto p-2">
      <div className="py-4">
        <Title>Crypton</Title>
      </div>
      <div className="py-6 w-full sm:w-4/6 mx-auto">
        <Search placeholder="Look for a cryptocurrency" />
      </div>
      <div className="whitespace-no-wrap overflow-x-auto py-6">
        <DataTable rows={coins} columns={columns} />
      </div>
    </div>
  );
};

export default App;
