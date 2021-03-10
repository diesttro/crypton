const filterCoin = (coin, coinList) =>
  coinList.filter((currentCoin) => coin === currentCoin.slug);

const filterCoinSearch = (search, coins) =>
  coins.filter((coin) => new RegExp(search, 'i').test(coin.name));

export { filterCoin, filterCoinSearch };
