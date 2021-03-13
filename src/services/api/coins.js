import http, { toJson } from '..';
import { GET_COINS } from './endpoints/assets';
import { asyncpipe, extractPath } from '../../utils';
import { mapCoins } from '../../utils/coins';

const coinSuccessProcess = asyncpipe(toJson, extractPath(['data']), mapCoins);
const coinErrorProcess = asyncpipe(
  toJson,
  extractPath(['status', 'error_message']),
  (message) => {
    throw new Error(message);
  }
);

const getCoinList = () =>
  http.get(GET_COINS).then(coinSuccessProcess).catch(coinErrorProcess);

export { getCoinList };
