'use strict';

process.on('uncaughtException', (err) => {
  console.log('on uncaughtException: ' + err.message);
  process.exit(1);
});

const sum = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  throw new Error('a and b should be numbers');
};

{
  const x = 2;
  const y = 3;
  const total = sum(x, y);
  console.log({ x, y, total });
}

{
  const z = 7;
  const c = 'A';
  const res = sum(z, c);
  console.log({ z, c, res });
}
