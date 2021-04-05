import fetch from 'unfetch';
import { not } from '../utils';

const toJson = (response) => response.json();

const get = (url) =>
  fetch(url).then((response) => {
    if (not(response.ok)) Promise.reject(response);

    return response;
  });

const http = { get };

export default http;
export { toJson };
