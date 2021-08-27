'use strict';

const sum = (a, b) => new Promise((resolve, reject) => {
  if (typeof a === 'number' && typeof b === 'number') {
    resolve(a + b);
  } else {
    reject(new Error('a and b should be numbers'));
  }
});

sum(2, 3)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });

sum(7, 'A')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });

/*
sum(7, 'A')
  .then(data => {
    console.log(data);
  });

UnhandledPromiseRejectionWarning: Error: a and b should be numbers

DeprecationWarning: Unhandled promise rejections are deprecated.
In the future, promise rejections that are not handled will terminate
the Node.js process with a non-zero exit code.
*/
