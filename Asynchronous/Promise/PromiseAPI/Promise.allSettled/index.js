/**
 * promise.allSettled(arrOfPromise)
 * Takes an array of promises.
 * Waits for all promises to settle (resolve or reject).
 * Always resolves with an array of objects showing 
 * each promise's status (fulfilled or rejected) and value/reason.
*/

let promise1 = new Promise((resolve)=>{
    setTimeout(() => { resolve("Promise 1 resolved")}, 1000);
})

let promise2 = new Promise((_, reject)=>{
    setTimeout(() => { reject("Promise 2 rejected")}, 2000);
})

let promise3 = new Promise((resolve)=>{
    setTimeout(() => { resolve("Promise 3 resolved")}, 3000);
})

let arrOfPromise = [promise1, promise2, promise3];

let promise = Promise.allSettled(arrOfPromise);

promise
    .then((res) => res.forEach(data => console.log(data)))
    .catch((err) => console.log(err.message))