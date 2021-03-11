const not = (value) => !value;

const curry = (fn, ...args) =>
  fn.length <= args.length
    ? fn(...args)
    : (...nextArgs) => curry(fn, ...args, ...nextArgs);

const asyncpipe = (...fns) => (value) =>
  fns.reduce((result, fn) => result.then(fn), Promise.resolve(value));

const extractPath = curry((path, value) =>
  path.reduce((result, key) => result?.[key], value)
);

const toggleOrder = (order = 'asc') => (order === 'desc' ? 'asc' : 'desc');

const stripTags = (value) =>
  value?.replace(new RegExp('(<([^>]+)>)', 'gi'), '');

const debounce = (fn, time) => {
  let timeout;

  return (...args) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => fn(...args), time);
  };
};

const sortBy = curry((prop, value, direction = 'asc') => {
  const order = direction === 'desc' ? -1 : 1;
  const sorted = [].slice.call(value).sort((a, b) => {
    if (a[prop] < b[prop]) return -1 * order;
    else if (a[prop] > b[prop]) return 1 * order;
    else return 0;
  });

  return sorted;
});

export {
  not,
  curry,
  asyncpipe,
  extractPath,
  toggleOrder,
  stripTags,
  debounce,
  sortBy,
};
