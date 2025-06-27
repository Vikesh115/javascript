/**
 * promise.race(arrOfPromise)
 * Takes an array of promises.
 * Settles (resolves/rejects) as soon as the first 
 * promise settles (whichever finishes first, success or failure).
*/

const fast = new Promise((res) => setTimeout(res, 100, "Fast"));
const slow = new Promise((res) => setTimeout(res, 500, "Slow"));
const error = new Promise((_, rej) => setTimeout(rej, 200, "Error!"));

Promise.race([fast, slow])
  .then((result) => console.log(result)); // "Fast" (resolves first)

Promise.race([slow, error])
  .then((result) => console.log(result))  // Doesn't run
  .catch((err) => console.error(err));    // "Error!" (rejects first) 
