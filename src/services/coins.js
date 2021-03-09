import http, { toJson } from './';
import { GET_COINS } from './endpoints';
import { asyncpipe, extractPath } from '../utils';
import { mapCoins } from '../utils/map';

const coinsProcessor = asyncpipe(toJson, extractPath(['data']), mapCoins);

const getCoins = () => http.get(GET_COINS, coinsProcessor);

export { getCoins };
