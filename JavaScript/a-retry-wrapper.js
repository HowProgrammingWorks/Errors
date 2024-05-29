'use strict';

const retry = (options = {}) => {
  const {
    task = null,
    recovery = null,
    handleRecovery = false,
    tryCount = 3,
  } = options;

  const errors = [];
  let count = 0;

  return async (...args) => {
    while (count++ < tryCount) {
      try {
        const res = await task(...args);
        return res;
      } catch (err) {
        errors.push(err);
        if (recovery) {
          await recovery(...args).catch((err) => {
            if (!handleRecovery) throw err;
            errors.push(err);
          });
        }
      }
    }
    const finallyError = new Error('To many tries');
    throw new AggregateError([...errors, finallyError]);
  };
};

// Usage
let targetUrl = 'wrong-url';

const sendRequest = () =>
  new Promise((resolve, reject) => {
    fetch(targetUrl).then(
      (res) => {
        console.log('Got response');
        resolve(res);
      },
      (err) => {
        console.error('Got error');
        reject(err);
      },
    );
  });

const updateUrl = (url) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      targetUrl = url;
      // reject(new Error('Can not update url'));
      console.log('Updated url');
      resolve();
    }, 1_000);
  });

const trySendRequest = retry({
  task: sendRequest,
  recovery: updateUrl,
  handleRecovery: true,
  tryCount: 3,
  // tryCount: 1,
});

trySendRequest('https://google.com').then(console.log);