'use strict';

process.on('uncaughtException', err => {
  console.log('on uncaughtException: ' + err.message);
});

const sum = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error('a and b should be numbers');
  }
};

console.log(sum(2, 3));
console.log(sum(7, 'A'));
