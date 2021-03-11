import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../components/App';
import Title from '../components/Title';
import { CoinImage, CoinName, CoinPrice, CoinChange } from '../components/Coin';
import { findCoin } from '../utils/filter';

const Profile = () => {
  const { slug } = useParams();
  const coinList = useContext(AppContext);
  const coin = findCoin(slug, coinList);

  return (
    <div className="container max-w-3xl mx-auto p-2">
      <div className="py-4">
        <Title>Crypton</Title>
      </div>
      <div className="flex flex-wrap justify-between py-6">
        <div className="flex items-center py-3">
          <CoinImage symbol={coin.symbol.toLowerCase()} className="w-10 h-10" />
          <CoinName className="font-bold text-xl ml-2">{coin.name}</CoinName>
        </div>
        <div className="flex items-center py-3">
          <div className="flex flex-col text-right pr-2">
            <span className="font-bold">Price</span>
            <CoinPrice price={coin.price} />
          </div>
          <div className="flex flex-col text-right px-2">
            <span className="font-bold">1h %</span>
            <CoinChange change={coin.change1h} />
          </div>
          <div className="flex flex-col text-right pl-2">
            <span className="font-bold">24h %</span>
            <CoinChange change={coin.change24h} />
          </div>
        </div>
      </div>
      <div className="py-3">
        <h3>Details</h3>
        <p>{coin.details}</p>
      </div>
    </div>
  );
};

export default Profile;
