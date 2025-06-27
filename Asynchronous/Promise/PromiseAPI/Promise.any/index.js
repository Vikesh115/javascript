/**
 * promise.any(arrOfPromise)
 * Takes an array of promises.
 * Resolves as soon as the first promise resolves (ignores rejections).
 * Rejects only if all promises reject (with an AggregateError).
*/

const p1 = Promise.reject("Error 1");
const p2 = new Promise((res) => setTimeout(res, 100, "Success"));
const p3 = Promise.reject("Error 2");

Promise.any([p1, p2, p3])
  .then((result) => console.log(result)) // "Success" (first resolved)
  .catch((err) => console.error(err));   // Doesn't run

Promise.any([p1, p3])
  .then((result) => console.log(result)) // Doesn't run
  .catch((err) => console.error(err));   // AggregateError: All promises were rejected