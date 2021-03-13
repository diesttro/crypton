import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Title from './Title';
import { Spinner } from './Icons';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { getCoinList } from '../services/api/coins';

const AppContext = createContext();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coinList, setCoinList] = useState();

  useEffect(() => {
    getCoinList()
      .then((coins) => {
        setCoinList(coins);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container max-w-3xl mx-auto p-2">
      <div className="py-4">
        <Title>Crypton</Title>
      </div>
      {isLoading ? (
        <div className="flex justify-center py-4">
          <Spinner className="w-6 h-6 text-white" />
        </div>
      ) : (
        <AppContext.Provider value={coinList}>
          {/* HashRouter it's not used to prevent direct access to profile */}
          <BrowserRouter>
            <Switch>
              <Route path="/profile/:slug">
                <Profile />
              </Route>
              <Route path="/">
                {coinList ? (
                  <Home />
                ) : (
                  <h2 className="text-center py-2">
                    Oops! something went wrong
                  </h2>
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
