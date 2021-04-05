import React, { useEffect, useRef, useState } from 'react';
import Search from '../components/Search';
import DataTable from '../components/DataTable';
import { path, debounce, toggleOrder, sortBy } from '../utils';
import { filterCoins } from '../utils/coins';
import coinColumns from '../components/Columns/coins';

const Home = ({ coins }) => {
  const [rows, setRows] = useState(coins);
  const [search, setSearch] = useState('');
  const orderRef = useRef({});

  useEffect(() => {
    orderRef.current.value = null;

    if (search) setRows(filterCoins(search, coins));
    else if (coins) setRows(coins);
  }, [search]);

  const handleSearchChange = debounce(
    (event) => setSearch(path(['target', 'value'], event)),
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
    <>
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
    </>
  );
};

export default Home;
