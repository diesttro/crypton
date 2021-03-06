import React from 'react';
import { useParams } from 'react-router-dom';
import {
  CoinImage,
  CoinName,
  CoinSymbol,
  CoinPrice,
  CoinChange,
} from '../components/Coin';
import { findCoin } from '../utils/coins';

const Profile = ({ coins }) => {
  const { slug } = useParams();
  const coin = findCoin(slug, coins);

  return (
    <>
      <div className="flex flex-wrap justify-between py-2">
        <div className="flex flex-col w-full sm:w-2/3 py-2">
          <div className="flex items-center py-3">
            <CoinImage
              id={coin.id}
              alt={coin.slug}
              className="w-8 h-8 rounded-full"
            />
            <CoinName className="font-bold text-lg ml-2">{coin.name}</CoinName>
            <CoinSymbol className="ml-2">{coin.symbol}</CoinSymbol>
          </div>
          <span>{coin.tagline}</span>
        </div>
        <div className="flex flex-1 sm:justify-end items-center py-2">
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
    </>
  );
};

export default Profile;
