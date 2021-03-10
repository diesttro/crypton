import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../components/App';
import Title from '../components/Title';
import Search from '../components/Search';
import DataTable from '../components/DataTable';
import { extractPath, debounce } from '../utils';
import { filterCoinSearch } from '../utils/filter';
import sortBy, { toggleOrder } from '../utils/sort';
import coinColumns from '../columns/coins';

const Home = () => {
  const [search, setSearch] = useState('');
  const [rows, setRows] = useState([]);
  const orderRef = useRef({});
  const coinList = useContext(AppContext);

  useEffect(() => {
    if (coinList) setRows(coinList);
  }, [coinList]);

  useEffect(() => {
    orderRef.current.value = null;

    if (search) setRows(filterCoinSearch(search, coinList));
    else if (coinList) setRows(coinList);
  }, [search]);

  const handleSearchChange = debounce(
    (event) => setSearch(extractPath(['target', 'value'], event)),
    500
  );

  const handleOrderClick = (field) => {
    const { value, direction } = orderRef.current;

    if (field === value) orderRef.current.direction = toggleOrder(direction);
    else orderRef.current.direction = 'asc';

    orderRef.current.value = field;

    setRows(sortBy(field, rows, orderRef.current.direction));
  };

  return (
    <div className="container max-w-3xl mx-auto p-2">
      <div className="py-4">
        <Title>Crypton</Title>
      </div>
      <div className="py-6 w-full sm:w-4/6 mx-auto">
        <Search
          placeholder="Look for a cryptocurrency"
          handleChange={handleSearchChange}
        />
      </div>
      <div className="whitespace-no-wrap overflow-x-auto py-6">
        <DataTable
          rows={rows}
          columns={coinColumns}
          order={orderRef.current}
          handleOrderClick={handleOrderClick}
        />
      </div>
    </div>
  );
};

export default Home;
