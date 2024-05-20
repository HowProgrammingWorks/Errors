'use strict';

const sum = async (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  throw new Error('a and b should be numbers');
};

(async () => {

  const x = 2;
  const y = 3;
  const total = await sum(x, y).catch((err) => {
    console.error({ x, y, err });
    return NaN;
  });
  console.log({ x, y, total });

  const z = 7;
  const c = 'A';
  const res = await sum(z, c).catch((err) => {
    console.error({ z, c, err });
    return NaN;
  });
  console.log({ z, c, res });

})();
