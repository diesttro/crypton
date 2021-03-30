import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Title from './Title';
import { Spinner } from './Icons';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import ErrorMessage from './ErrorMessage';
import { getCoins } from '../services/api/coins';

const AppContext = createContext();

const App = () => {
  const [coinData, setCoinData] = useState({ isLoading: true });

  useEffect(() => {
    getCoins()
      .then((coins) => {
        setCoinData({ coins, isLoading: false });
      })
      .catch((error) => {
        console.error(error.message);
        setCoinData({ isLoading: false });
      });
  }, []);

  return (
    <div className="container max-w-3xl mx-auto p-2">
      <div className="py-4">
        <Title>Crypton</Title>
      </div>
      {coinData.isLoading ? (
        <div className="flex justify-center py-4">
          <Spinner className="w-6 h-6 text-white" />
        </div>
      ) : (
        <AppContext.Provider value={coinData.coins}>
          {/* HashRouter it's not used to prevent direct access to profile */}
          <BrowserRouter>
            <Switch>
              <Route path="/profile/:slug">
                <Profile />
              </Route>
              <Route path="/">
                {coinData.coins ? (
                  <Home />
                ) : (
                  <ErrorMessage className="text-center py-2">
                    Oops! something went wrong
                  </ErrorMessage>
                )}
              </Route>
            </Switch>
          </BrowserRouter>
        </AppContext.Provider>
      )}
    </div>
  );
};

export default App;
export { AppContext };
