'use strict';

const sum = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  throw new Error('a and b should be numbers');
};

const x = 2;
const y = 3;
try {
  const total = sum(x, y);
  console.log({ x, y, total });
} catch (err) {
  console.error({ x, y, err });
}

const z = 7;
const c = 'A';
try {
  const res = sum(z, c);
  console.log({ z, c, res });
} catch (err) {
  console.error({ z, c, err });
}
