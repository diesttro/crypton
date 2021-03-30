import http, { toJson } from '..';
import { GET_COINS } from './endpoints/assets';
import { asyncpipe, path, throwException } from '../../utils';
import { mapCoins } from '../../utils/coins';

const coinsProcess = asyncpipe(toJson, path(['data']), mapCoins);
const coinErrorProcess = asyncpipe(
  toJson,
  path(['status', 'error_message']),
  throwException(Error)
);

const getCoins = () =>
  http.get(GET_COINS).then(coinsProcess).catch(coinErrorProcess);

export { getCoins };
