const curry = (fn, ...args) =>
  fn.length <= args.length
    ? fn(...args)
    : (...nextArgs) => curry(fn, ...args, ...nextArgs);

const asyncpipe = (...fns) => (value) =>
  fns.reduce((result, fn) => result.then(fn), Promise.resolve(value));

const extractPath = curry((path, value) =>
  path.reduce((result, key) => result?.[key], value)
);

const debounce = (fn, time) => {
  let timeout;

  return (...args) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => fn(...args), time);
  };
};

const not = (value) => !value;

export { curry, asyncpipe, extractPath, debounce, not };
