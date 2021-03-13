import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../components/App';
import Search from '../components/Search';
import DataTable from '../components/DataTable';
import { extractPath, debounce, toggleOrder, sortBy } from '../utils';
import { filterCoins } from '../utils/coins';
import coinColumns from '../columns/coins';

const Home = () => {
  const coins = useContext(AppContext);
  const [rows, setRows] = useState(coins);
  const [search, setSearch] = useState('');
  const orderRef = useRef({});

  useEffect(() => {
    orderRef.current.value = null;

    if (search) setRows(filterCoins(search, coins));
    else if (coins) setRows(coins);
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
