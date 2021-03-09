import fetch from 'unfetch';
import { not } from '../utils';

const toJson = (response) => response.json();

const get = (url, processors) =>
  new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      if (not(response.ok)) reject(response.statusText);

      resolve(processors ? processors(response) : response);
    });
  });

const http = { get };

export default http;
export { toJson };
