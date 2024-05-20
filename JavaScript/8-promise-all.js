'use strict';

const sum = async (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  throw new Error('a and b should be numbers');
};

(async () => {

  const data = [
    [2, 3],
    [7, 'A'],
  ];

  const [total, result] = await Promise.all(
    data.map((args) =>
      sum(...args).catch((err) => {
        console.error(err);
      })
    )
  );
  console.log({ total, result });

})();
