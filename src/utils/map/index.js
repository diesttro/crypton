import { extractPath } from '../';

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

  return {
    name,
    slug,
    symbol,
    details,
    tagline,
    price: price?.toFixed(2),
    change24h: change24h?.toFixed(2),
  };
};

const mapCoins = (coins) => coins?.map(formatCoin);

export { mapCoins };
