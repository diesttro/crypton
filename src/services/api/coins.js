import http, { toJson } from '..';
import { GET_COINS } from './endpoints/assets';
import { asyncpipe, extractPath, throwException } from '../../utils';
import { mapCoins } from '../../utils/coins';

const successfulCoinsResponse = asyncpipe(
  toJson,
  extractPath(['data']),
  mapCoins
);
const unsuccessfulCoinsResponse = asyncpipe(
  toJson,
  extractPath(['status', 'error_message']),
  throwException(Error)
);

const getCoins = () =>
  http
    .get(GET_COINS)
    .then(successfulCoinsResponse)
    .catch(unsuccessfulCoinsResponse);

export { getCoins };
