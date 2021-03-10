import http, { toJson } from '..';
import { GET_COINS } from './endpoints';
import { asyncpipe, extractPath } from '../../utils';
import { mapCoins } from '../../utils/map';

const processCoins = asyncpipe(toJson, extractPath(['data']), mapCoins);

const getCoins = () => http.get(GET_COINS).then(processCoins);

export { getCoins };
