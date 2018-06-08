'use strict';

const sum = async (a, b) => {
  if (typeof(a) === 'number' && typeof(b) === 'number') {
    return a + b;
  } else {
    return Promise.reject(new Error('a and b should be numbers'));
  }
};

(async () => {

  try {
    console.log(await sum(2, 3));
  } catch (e) {
    console.log(e.message);
  }

  try {
    console.log(await sum(7, 'A'));
  } catch (e) {
    console.log(e.message);
  }

})();
