function outer(wrapper) {
    console.log("Outer function is called");
    wrapper();
}
function callback() {
    console.log("function b is called");
}
outer(callback);

console.log("hello");
setTimeout(function callback() {
    console.log("Delayed by 4 seconds ");

}, 4000)

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log(response.json()))
    .catch(error => console.error(error));