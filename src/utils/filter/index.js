const filterCoinSearch = (search, coins) =>
  coins.filter((coin) => new RegExp(search, 'i').test(coin.name));

export { filterCoinSearch };
