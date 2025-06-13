let promise1 = fetch('https://randombig.cat/roar.json');
promise1.then(function (response) {
    return response.json();
}).then(function (commits) {
    alert(commits[0].author.login)
}).catch(function (error) {
    console.log("Some Error in fetching response", error);
});