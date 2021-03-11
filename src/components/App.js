import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Title from './Title';
import Spinner from './Icons/Spinner';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { getCoinList } from '../services/api/coins';

const AppContext = createContext();

const App = () => {
  const [coinList, setCoinList] = useState();

  useEffect(() => {
    getCoinList().then(setCoinList).catch(console.error);
  }, []);

  return (
    <AppContext.Provider value={coinList}>
      {/* HashRouter it's not used to prevent direct access to profile */}
      <BrowserRouter>
        <div className="container max-w-3xl mx-auto p-2">
          <div className="py-4">
            <Title>Crypton</Title>
          </div>
          {coinList ? (
            <Switch>
              <Route path="/profile/:slug">
                <Profile />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          ) : (
            <div className="flex justify-center py-4">
              <Spinner className="w-6 h-6 text-white" />
            </div>
          )}
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
export { AppContext };
