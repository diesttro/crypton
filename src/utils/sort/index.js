const sortBy = (prop, value, direction = 'asc') => {
  const order = direction === 'desc' ? -1 : 1;
  const sorted = [].slice.call(value).sort((a, b) => {
    if (a[prop] < b[prop]) return -1 * order;
    else if (a[prop] > b[prop]) return 1 * order;
    else return 0;
  });

  return sorted;
};

const toggleOrder = (order = 'asc') => (order === 'desc' ? 'asc' : 'desc');

export default sortBy;
export { toggleOrder };
