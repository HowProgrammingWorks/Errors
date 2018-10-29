'use strict';

const sum = async (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error('a and b should be numbers');
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
  } catch (err) {
    console.log(err.message);
  }

/*
  console.log(await sum(7, 'A'));

UnhandledPromiseRejectionWarning: Error: a and b should be numbers

DeprecationWarning: Unhandled promise rejections are deprecated.
In the future, promise rejections that are not handled will terminate
the Node.js process with a non-zero exit code.
*/

})();
