/**
 * Promise API - promise.all(arrOfPromise)
 * Takes an array of promises.
 * Resolves when all promises resolve (returns an array of results in order).
 * Rejects immediately if any promise rejects (with the first rejection error).
*/

const p1 = Promise.resolve("Success 1");
const p2 = Promise.resolve("Success 2");
const p3 = Promise.reject("Error!");

Promise.all([p1, p2])
  .then((results) => console.log(results)) // ["Success 1", "Success 2"]
  .catch((err) => console.error(err));     // Doesn't run

Promise.all([p1, p2, p3])
  .then((results) => console.log(results)) // Doesn't run
  .catch((err) => console.error(err));     // "Error!" (rejects immediately)