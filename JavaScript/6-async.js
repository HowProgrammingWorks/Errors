'use strict';

const sum = async (a, b) => {
  if (typeof(a) === 'number' && typeof(b) === 'number') {
    return a + b;
  } else {
    return Promise.reject(new Error('a and b should be numbers'));
  }
};

sum(2, 3)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err.message);
  });

sum(7, 'A')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err.message);
  });
