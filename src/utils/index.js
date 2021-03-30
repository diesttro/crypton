const not = (value) => !value;

const curry = (fn, ...args) =>
  fn.length <= args.length
    ? fn(...args)
    : (...nextArgs) => curry(fn, ...args, ...nextArgs);

const asyncpipe = (...fns) => (value) =>
  fns.reduce((result, fn) => result.then(fn), Promise.resolve(value));

const path = curry((path, value) =>
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

const sortBy = curry((prop, list, order = 'asc') => {
  const direction = order === 'desc' ? -1 : 1;
  const sortedList = [].slice.call(list).sort((a, b) => {
    if (a[prop] < b[prop]) return -1 * direction;
    else if (a[prop] > b[prop]) return 1 * direction;
    else return 0;
  });

  return sortedList;
});

const throwException = curry((Type, message) => {
  throw new Type(message);
});

export {
  not,
  curry,
  asyncpipe,
  path,
  toggleOrder,
  stripTags,
  debounce,
  sortBy,
  throwException,
};
