
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

