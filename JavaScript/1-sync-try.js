'use strict';

const sum = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error('a and b should be numbers');
  }
};

try {
  console.log(sum(2, 3));
} catch (err) {
  console.log(err.message);
}

try {
  console.log(sum(7, 'A'));
} catch (err) {
  console.log(err.message);
}
