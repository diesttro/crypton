import { extractPath, stripTags } from '../utils';

const formatCoin = (coin) => {
  const name = extractPath(['name'], coin);
  const slug = extractPath(['slug'], coin);
  const symbol = extractPath(['symbol'], coin);
  const profile = extractPath(['profile', 'general', 'overview'], coin);
  const details = extractPath(['project_details'], profile);
  const tagline = extractPath(['tagline'], profile);
  const metrics = extractPath(['metrics', 'market_data'], coin);
  const price = extractPath(['price_usd'], metrics);
  const change24h = extractPath(['percent_change_usd_last_24_hours'], metrics);
  const change1h = extractPath(['percent_change_usd_last_1_hour'], metrics);

  return {
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
