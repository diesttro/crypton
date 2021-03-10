const ASSETS_PATH = 'https://data.messari.io/api/v2/assets';
const FIELDS_PARAM =
  'id,slug,name,symbol,metrics/market_data,profile/general/overview';
const LIMIT_PARAM = '15';

const GET_COINS = `${ASSETS_PATH}?fields=${FIELDS_PARAM}&limit=${LIMIT_PARAM}`;

export { GET_COINS };
