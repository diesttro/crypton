const findCoin = (slug, coins) => coins.find((coin) => slug === coin.slug);

const filterCoinSearch = (search, coins) =>
  coins.filter((coin) => new RegExp(search, 'i').test(coin.name));

export { findCoin, filterCoinSearch };
