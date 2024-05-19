'use strict';

const sum = (a, b) => new Promise((totalolve, reject) => {
  if (typeof a === 'number' && typeof b === 'number') {
    totalolve(a + b);
  } else {
    reject(new Error('a and b should be numbers'));
  }
});

const x = 2;
const y = 3;
sum(x, y)
  .then((total) => {
    console.log({ x, y, total });
  })
  .catch((err) => {
    console.error({ x, y, err });
  });

const z = 7;
const c = 'A';
sum(z, c)
  .then((res) => {
    console.log({ z, c, res });
  })
  .catch((err) => {
    console.log({ z, c, err });
  });

/*
sum(z, c)
  .then((res) => {
    console.log({ z, c, res });
  });

UnhandledPromiseRejectionWarning: Error: a and b should be numbers

DeprecationWarning: Unhandled promise rejections are deprecated.
In the future, promise rejections that are not handled will terminate
the Node.js process with a non-zero exit code.
*/
