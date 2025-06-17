/**
 * promise.any(arrOfPromise)
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

let promise = Promise.any(arrOfPromise);

promise
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message))