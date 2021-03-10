import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCoins } from '../services/api/coins';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const AppContext = createContext();

const App = () => {
  const [coinList, setCoinList] = useState();

  useEffect(() => {
    getCoins().then(setCoinList).catch(console.error);
  }, []);

  return (
    <AppContext.Provider value={coinList}>
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
