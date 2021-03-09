const curry = (fn, ...args) =>
  fn.length <= args.length
    ? fn(...args)
    : (...nextArgs) => curry(fn, ...args, ...nextArgs);

const asyncpipe = (...fns) => (value) =>
  fns.reduce((result, fn) => result.then(fn), Promise.resolve(value));

const extractPath = curry((path, value) =>
  path.reduce((result, key) => result?.[key], value)
);

const round = (number, decimals = 2) =>
  Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);

const not = (value) => !value;

export { curry, asyncpipe, extractPath, round, not };
