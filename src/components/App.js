import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCoinList } from '../services/api/coins';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const AppContext = createContext();

const App = () => {
  const [coinList, setCoinList] = useState();

  useEffect(() => {
    getCoinList().then(setCoinList).catch(console.error);
  }, []);

  console.log(coinList?.map((coin) => coin.change24h));

  return (
    <AppContext.Provider value={coinList}>
      {/* HashRouter it's not used to prevent direct access to profile */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile/:slug">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
export { AppContext };
