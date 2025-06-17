/**
 * Promise API - promise.all(arrOfPromise)
 * https://api.github.com/users/vikesh115
*/

// let promise1 = new Promise((resolve)=>{
//     setTimeout(() => { resolve("Promise 1 resolved")}, 1000);
// })

// let promise2 = new Promise((_, reject)=>{
//     setTimeout(() => { reject("Promise 2 rejected")}, 2000);
// })

// let promise3 = new Promise((resolve)=>{
//     setTimeout(() => { resolve("Promise 3 resolved")}, 3000);
// })

// let arrOfPromise = [promise1, promise2, promise3];

// let promise = Promise.all(arrOfPromise);

// promise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err.message))

// let users = ['vikesh115', 'prakashsakari'];

// let arrOfPromise = users.map((user) =>
//     fetch(`https://api.github.com/users/${user}`)
// )

// let promise = Promise.all(arrOfPromise)

// console.log(promise);

// promise
//     .then((res) => res.forEach((data) => console.log(data.url)))
//     .catch(err => console.log(err.message))


let users = ['vikesh115', 'prakashsakari'];

let arrOfPromise = users.map(user => 
    fetch(`https://api.github.com/users/${user}`)
        .then(response => {
            if (!response.ok) throw new Error(`User ${user} not found`);
            return response.json();
        })
);

Promise.all(arrOfPromise)
    .then(usersData => {
        usersData.forEach(user => {
            console.log(user.html_url);
        });
    })
    .catch(err => console.log(err.message));