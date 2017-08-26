'use strict';

function fn(a, b) {
  if (typeof(a) === 'number' && typeof(b) === 'number') {
    return [null, a + b];
  } else {
    return [new Error('a and b should be numbers')];
  }
}

console.log(fn(2, 3));
console.log(fn(7, 'A'));
