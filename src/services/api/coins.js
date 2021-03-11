import http, { toJson } from '..';
import { GET_COINS } from './endpoints/assets';
import { asyncpipe, extractPath } from '../../utils';
import { mapCoins } from '../../utils/coins';

const processCoins = asyncpipe(toJson, extractPath(['data']), mapCoins);

const getCoinList = () => http.get(GET_COINS).then(processCoins);

export { getCoinList };
