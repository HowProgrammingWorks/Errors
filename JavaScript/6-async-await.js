'use strict';

const sum = async (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  throw new Error('a and b should be numbers');
};

(async () => {

  const x = 2;
  const y = 3;
  try {
    const total = await sum(x, y);
    console.log({ x, y, total });
  } catch (err) {
    console.error({ x, y, err });
  }

  const z = 7;
  const c = 'A';
  try {
    const res = await sum(z, c);
    console.log({ z, c, res });
  } catch (err) {
    console.error({ z, c, err });
  }

  /*
  const res = await sum(z, c);
  console.log({ z, c, res });

  UnhandledPromiseRejectionWarning: Error: a and b should be numbers

  DeprecationWarning: Unhandled promise rejections are deprecated.
  In the future, promise rejections that are not handled will terminate
  the Node.js process with a non-zero exit code.
  */

})();
