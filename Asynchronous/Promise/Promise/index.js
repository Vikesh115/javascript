/**
 * Promise()
 * A Promise is an object representing the eventual completion (or failure) 
 * of an asynchronous operation and its resulting value. 
 * It allows you to handle asynchronous operations more elegantly than callbacks, 
 * avoiding "callback hell."

 * Key States of a Promise
 * A Promise can be in one of three states:
 * pending – Initial state (neither fulfilled nor rejected).
 * fulfilled – The operation completed successfully.
 * rejected – The operation failed.

 */


const URL = "https://jsonplaceholder.typicode.com/users";

let promise1 = fetch(URL);

promise1
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(function (data) {
        console.log({ data });
    })
    .catch(function () {
        console.log("Some Error in fetching response")
    });

