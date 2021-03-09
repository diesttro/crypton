import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../components/App';
import Title from '../components/Title';
import Search from '../components/Search';
import DataTable from '../components/DataTable';
import { CoinImage, CoinName, CoinPrice, CoinChange } from '../components/Coin';
import { extractPath, debounce } from '../utils';
import { filterCoinSearch } from '../utils/filter';

const columns = [
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
    render: ({ price }) => <CoinPrice price={price} />,
  },
  {
    field: '24hchange',
    text: '24h Change',
    render: ({ change24h }) => <CoinChange change={change24h} />,
  },
];

const Home = () => {
  const { coins } = useContext(AppContext);
  const [search, setSearch] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (coins) setRows(coins);
  }, [coins]);

  useEffect(() => {
    if (search) setRows(filterCoinSearch(search, coins));
    else if (coins) setRows(coins);
  }, [search]);

  const handleSearchChange = debounce(
    (event) => setSearch(extractPath(['target', 'value'], event)),
    500
  );
  console.log(coins, rows);
  return (
    <div className="container max-w-3xl mx-auto p-2">
      <div className="py-4">
        <Title>Crypton</Title>
      </div>
      <div className="py-6 w-full sm:w-4/6 mx-auto">
        <Search
          placeholder="Look for a cryptocurrency"
          onChange={handleSearchChange}
        />
      </div>
      <div className="whitespace-no-wrap overflow-x-auto py-6">
        <DataTable rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default Home;
