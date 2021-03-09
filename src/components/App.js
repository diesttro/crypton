import React, { createContext, useEffect, useState } from 'react';
import { getCoins } from '../services/coins';
import Home from '../pages/Home';

const AppContext = createContext();

const App = () => {
  const [coins, setCoins] = useState();

  useEffect(() => {
    getCoins().then(setCoins).catch(console.error);
  }, []);

  return (
    <AppContext.Provider value={{ coins }}>
      <Home />
    </AppContext.Provider>
  );
};

export default App;
export { AppContext };
