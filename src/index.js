'use strict';

module.exports = async function foo () {
  return await bar(true);
};

function bar (isFoo) {
  return new Promise((resolve, reject) => {
    if (isFoo) {
      return setImmediate(() => resolve('foobar'));
    }
  });
}
