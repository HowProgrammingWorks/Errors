'use strict';

const sum = (a, b, callback) => {
  if (typeof a === 'number' && typeof b === 'number') {
    callback(null, a + b);
  } else {
    callback(new Error('a and b should be numbers'));
  }
};

sum(2, 3, (err, result) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(result);
});

sum(7, 'A', (err, result) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(result);
});
