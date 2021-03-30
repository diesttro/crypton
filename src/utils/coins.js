import { path, stripTags } from '../utils';

const formatCoin = (coin) => {
  const id = path(['id'], coin);
  const name = path(['name'], coin);
  const slug = path(['slug'], coin);
  const symbol = path(['symbol'], coin);
  const profile = path(['profile', 'general', 'overview'], coin);
  const details = path(['project_details'], profile);
  const tagline = path(['tagline'], profile);
  const metrics = path(['metrics', 'market_data'], coin);
  const price = path(['price_usd'], metrics);
  const change24h = path(['percent_change_usd_last_24_hours'], metrics);
  const change1h = path(['percent_change_usd_last_1_hour'], metrics);

  return {
    id,
    name,
    slug,
    symbol,
    details: stripTags(details),
    tagline,
    price,
    change24h,
    change1h,
  };
};

const mapCoins = (coins) => coins?.map(formatCoin);

const findCoin = (slug, coins) => coins.find((coin) => slug === coin.slug);

const filterCoins = (search, coins) =>
  coins.filter((coin) => new RegExp(search, 'gi').test(coin.name));

export { mapCoins, findCoin, filterCoins };
