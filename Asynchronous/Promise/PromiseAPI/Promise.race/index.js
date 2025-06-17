/**
 * promise.race(arrOfPromise)
*/

let promise1 = new Promise((resolve)=>{
    setTimeout(() => { resolve("Promise 1 resolved")}, 2000);
})

let promise2 = new Promise((_, reject)=>{
    setTimeout(() => { reject("Promise 2 rejected")}, 3000);
})

let promise3 = new Promise((resolve)=>{
    setTimeout(() => { resolve("Promise 3 resolved")}, 1000);
})

let arrOfPromise = [promise1, promise2, promise3];

let promise = Promise.race(arrOfPromise);

console.log(promise);

promise
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message))