const myPromise = new Promise((resolve, reject) => {
    const success = true; // Change to false to see rejection

    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed");
    }
});

myPromise
    .then(result => console.log(result)) // "Operation succeeded!"
    .catch(error => console.error(error)); // Runs if rejected