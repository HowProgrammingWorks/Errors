'use strict';

const sum = (a, b, callback) => {
  if (typeof a === 'number' && typeof b === 'number') {
    callback(null, a + b);
  } else {
    callback(new Error('a and b should be numbers'));
  }
};

const x = 2;
const y = 3;
sum(x, y, (err, total) => {
  if (err) {
    console.error({ x, y, err });
    return;
  }
  console.log({ x, y, total });
});

const z = 7;
const c = 'A';
sum(z, c, (err, res) => {
  if (err) {
    console.error({ z, c, err });
    return;
  }
  console.log({ z, c, res });
});
