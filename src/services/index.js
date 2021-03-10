import fetch from 'unfetch';
import { not } from '../utils';

const toJson = (response) => response.json();

const get = (url) =>
  new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      if (not(response.ok)) reject(new Error(response.statusText));

      resolve(response);
    });
  });

const http = { get };

export default http;
export { toJson };
