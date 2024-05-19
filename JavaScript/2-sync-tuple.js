'use strict';

const sum = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return [null, a + b];
  }
  return [new Error('a and b should be numbers')];
};

{
  const x = 2;
  const y = 3;
  const [err, total] = sum(x, y);
  if (err) console.error({ x, y, err, total });
  else console.log({ x, y, err, total });
}

{
  const z = 7;
  const c = 'A';
  const [err, res = NaN] = sum(z, c);
  if (err) console.error({ z, c, err, res });
  else console.log({ z, c, err, res });
}
