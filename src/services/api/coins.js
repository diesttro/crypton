import http, { toJson } from '..';
import { COIN_LIST } from './endpoints/assets';
import { asyncpipe, path, throwException } from '../../utils';
import { mapCoins } from '../../utils/coins';

const coinsProcess = asyncpipe(toJson, path(['data']), mapCoins);
const coinErrorProcess = asyncpipe(
  toJson,
  path(['status', 'error_message']),
  throwException(Error)
);

const getCoins = () =>
  http.get(COIN_LIST).then(coinsProcess).catch(coinErrorProcess);

export { getCoins };
